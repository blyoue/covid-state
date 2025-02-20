import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../wrapper';
import { ScreeningState } from '@/types/covid-data';
import * as echarts from 'echarts';

const Screening = () => {
    const screening: ScreeningState = useSelector(
        (state: RootState) => state.data.screening
    );
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const myChart = echarts.init(chartRef.current);

            const option = {
                title: {
                    text: 'Screening Distribution',
                    subtext: 'Comparison of screening methods',
                },
                color: ['#1976D2'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Airlines', 'Ships', 'Borders', 'Immigrations'],
                        axisTick: {
                            alignWithLabel: false,
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                    },
                ],
                series: [
                    {
                        name: 'Amount',
                        type: 'bar',
                        barWidth: '60%',
                        data: [
                            screening.airline,
                            screening.ship,
                            screening.border,
                            screening.immigration,
                        ],
                    },
                ],
            };

            myChart.setOption(option);

            const handleResize = () => {
                myChart.resize();
            };
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                myChart.dispose();
            };
        }
    }, [screening]);
    return (
        <div
            ref={chartRef}
            className='row-span-2 col-span-1 bg-white shadow-md rounded-2xl p-4 min-h-[250px] md:min-h-0'
        ></div>
    );
};

export default Screening;
