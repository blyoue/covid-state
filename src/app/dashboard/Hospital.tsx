import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../wrapper';
import { HospitalState } from '@/types/covid-data';
import * as echarts from 'echarts';

const Hospital = () => {
    const hospital: HospitalState = useSelector(
        (state: RootState) => state.data.hospital
    );
    console.log(hospital);
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const myChart = echarts.init(chartRef.current);

            const option = {
                title: [
                    {
                        text: 'Hospital Distribution',
                        subtext:
                            'Comparison of public and private hospital facilities',
                    },
                    {
                        text: `Total Cases: ${hospital.totalHospitalPUI.toLocaleString()}`,
                        right: 0,
                        bottom: 0,
                        textStyle: {
                            fontSize: 14,
                        },
                    },
                ],
                tooltip: {
                    trigger: 'item',
                },
                legend:
                    window.innerWidth >= 640
                        ? { bottom: 0, left: 0 }
                        : undefined,
                color: ['#1976D2', '#BBDEFB'],

                series: [
                    {
                        name: 'Hospital',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '70%'],
                        startAngle: 180,
                        endAngle: 360,
                        label: {
                            formatter: '{b}: {c}',
                        },

                        data: [
                            {
                                value: hospital.totalPublicHospital,
                                name: 'Public Hospital',
                            },
                            {
                                value: hospital.totalPrivateHospital,
                                name: 'Private Hospital',
                            },
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
    }, [hospital]);
    return (
        <div
            ref={chartRef}
            className='row-span-2 col-span-1 bg-white shadow-md rounded-2xl p-4 min-h-[250px] md:min-h-0'
        ></div>
    );
};

export default Hospital;
