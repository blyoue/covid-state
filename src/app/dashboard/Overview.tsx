import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../wrapper';
import { OverviewState } from '@/types/covid-data';
const Overview = () => {
    const overview: OverviewState = useSelector(
        (state: RootState) => state.data.overview
    );
    return (
        <div className='row-span-2 col-span-1 bg-white shadow-md rounded-2xl p-5 xl:grid grid-cols-2 grid-rows-2 hidden'>
            <div className='flex justify-center items-center'>
                <p className='font-sans font-bold text-[20px] text-[#333]'>
                    Total Cases: {overview.totalCases.toLocaleString()}
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <p className='font-sans font-bold text-[20px] text-[#333]'>
                    Total Recovered: {overview.totalRecovered.toLocaleString()}
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <p className='font-sans font-bold text-[20px] text-[#333]'>
                    Total Deaths: {overview.totalDeaths.toLocaleString()}
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <p className='font-sans font-bold text-[20px] text-[#333]'>
                    Total Tests: {overview.totalTests.toLocaleString()}
                </p>
            </div>
        </div>
    );
};

export default Overview;
