import {
    sortOutcomes,
    sortHospital,
    sortTrends,
    sortScreening,
    sortInfection,
    sortOverview,
} from './helper';
import { DATA_FETCH_FAILED, DATA_FETCH_REQUESTED } from '@/state/action';
import { CovidData } from '@/types/covid-data';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
    setHospital,
    setInfection,
    setOutcomes,
    setOverview,
    setScreening,
    setTrends,
} from './dataSlice';

function dataFetch(): Promise<CovidData[]> {
    return fetch('/api/state-covid19')
        .then((response) => response.json())
        .then((data) => data.results);
}

function* fetchData() {
    try {
        const data: CovidData[] = yield call(dataFetch);
        yield put(setOutcomes(sortOutcomes(data)));
        yield put(setTrends(sortTrends(data)));
        yield put(setScreening(sortScreening(data)));
        yield put(setInfection(sortInfection(data)));
        yield put(setOverview(sortOverview(data)));
        yield put(setHospital(sortHospital(data)));
    } catch (error: unknown) {
        let errorMessage = 'An unknown error occurred';

        if (error instanceof Error) {
            errorMessage = error.message;
        }

        yield put({ type: DATA_FETCH_FAILED, payload: errorMessage });
    }
}

function* mySaga() {
    yield takeEvery(DATA_FETCH_REQUESTED, fetchData);
}

export default mySaga;
