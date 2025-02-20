import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../wrapper';
import { OutcomesState } from '@/types/covid-data';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

const Outcomes = () => {
    const outcomes: OutcomesState = useSelector(
        (state: RootState) => state.data.outcomes
    );
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const myChart = echarts.init(chartRef.current);

            const option: EChartsOption = {
                title: {
                    text: 'Daily New COVID-19 Cases',
                    subtext: 'Tracking the number of new infections per day',
                },
                legend: {
                    top: '5%',
                    right: '5%',
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
                dataZoom: [
                    {
                        type: 'inside',
                        start: 0,
                        end: 100,
                    },
                    {
                        start: 0,
                        end: 20,
                    },
                ],
                series: [
                    {
                        name: 'Infected',
                        type: 'line',
                        // areaStyle: {
                        //     color: '#BBDEFB',
                        // },
                        color: '#1976D2',

                        symbol: 'none',
                        data: outcomes.currentlyInfectedPatients,
                    },
                    {
                        name: 'Critical',
                        type: 'line',
                        // areaStyle: {
                        //     color: '#C8E6C9',
                        // },
                        color: '#F57C00',
                        symbol: 'none',
                        data: outcomes.currentlySeriousOrCritical,
                    },
                    {
                        name: 'Deaths',
                        type: 'line',

                        // areaStyle: {
                        //     color: '#FFCDD2',
                        // },
                        color: '#D32F2F',
                        symbol: 'none',
                        data: outcomes.totalDeaths,
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
    }, [outcomes]);
    return (
        <div className='row-span-4 md:row-span-2 xl:row-span-6 col-span-1 md:col-span-2 bg-white shadow-md rounded-2xl p-4 flex flex-col items-center justify-center min-h-[250px] md:min-h-0'>
            <div ref={chartRef} className='w-full flex-1'></div>
        </div>
    );
};

export default Outcomes;
