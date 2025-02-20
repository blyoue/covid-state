'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../state/dataSlice';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../state/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        data: dataReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={
                'flex items-center bg-gray-50 text-gray-900 w-full min-h-screen'
            }
        >
            <main
                className={
                    'flex flex-col justify-center w-full min-h-screen py-7 px-9 bg-gray-50'
                }
            >
                {children}
            </main>
        </div>
    );
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <DashboardLayout>{children}</DashboardLayout>
        </Provider>
    );
};

export type RootState = ReturnType<typeof store.getState>;
export default Wrapper;
