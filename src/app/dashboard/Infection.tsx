import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../wrapper';
import { InfectionState } from '@/types/covid-data';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

const Infection = () => {
    const infection: InfectionState = useSelector(
        (state: RootState) => state.data.infection
    );
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const myChart = echarts.init(chartRef.current);

            const option: EChartsOption = {
                title: {
                    text: 'Infection Trends',
                    subtext: 'Percentage of currently infected patients',
                },
                legend: {
                    top: 0,
                    right: 0,
                },
                xAxis: {
                    type: 'time',
                },
                yAxis: {
                    type: 'value',
                },
                tooltip: {
                    trigger: 'axis',
                },

                series: [
                    {
                        name: 'Infection Percentage',
                        type: 'line',
                        // areaStyle: {
                        //     color: '#BBDEFB',
                        // },
                        color: '#1976D2',

                        symbol: 'none',
                        data: infection.infectionPercentage,
                    },
                ],
            };

            myChart.setOption(option);

            const handleResize = () => {
                myChart.resize();
            };
            window.addEventListener('resize', handleResize);

            return () => {
                myChart.dispose();
            };
        }
    }, [infection]);
    return (
        <div
            ref={chartRef}
            className='row-span-2 xl:row-span-3 col-span-1 bg-white shadow-md rounded-2xl p-4 min-h-[250px] md:min-h-0'
        ></div>
    );
};

export default Infection;
