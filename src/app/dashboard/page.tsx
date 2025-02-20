'use client';

import { useEffect } from 'react';
import Hospital from './Hospital';
import Outcomes from './Outcomes';
import Tests from './Overview';
import Trends from './Trends';
import { useDispatch } from 'react-redux';
import { fetchDataRequested } from '@/state/action';
import Screening from './Screening';
import Infection from './Infection';

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataRequested());
    }, [dispatch]);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows grid-rows-auto'>
            <Outcomes />
            <Infection />
            <Trends />
            <Screening />
            <Hospital />
            <Tests />
        </div>
    );
};

export default Dashboard;
