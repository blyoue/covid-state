import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../wrapper';
import { TrendsState } from '@/types/covid-data';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

const Trends = () => {
    const trends: TrendsState = useSelector(
        (state: RootState) => state.data.trends
    );
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const myChart = echarts.init(chartRef.current);

            const option: EChartsOption = {
                title: {
                    text: 'Recovery Trends',
                    subtext: 'Total Cases vs Total Recovered',
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
                        name: 'Total Cases',
                        type: 'line',
                        // areaStyle: {
                        //     color: '#BBDEFB',
                        // },
                        color: '#1976D2',

                        symbol: 'none',
                        data: trends.totalCases,
                    },
                    {
                        name: 'Total Recoverd',
                        type: 'line',
                        // areaStyle: {
                        //     color: '#C8E6C9',
                        // },
                        color: '#388E3C',
                        symbol: 'none',
                        data: trends.totalRecovered,
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
    }, [trends]);
    return (
        <div
            ref={chartRef}
            className='row-span-1 md:row-span-2 xl:row-span-3 col-span-1 bg-white shadow-md rounded-2xl p-4 min-h-[250px] md:min-h-0'
        ></div>
    );
};

export default Trends;
