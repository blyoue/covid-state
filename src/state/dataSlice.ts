import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    HospitalState,
    OutcomesState,
    InfectionState,
    ScreeningState,
    TrendsState,
    OverviewState,
} from '@/types/covid-data';

interface DataState {
    outcomes: OutcomesState;
    trends: TrendsState;
    hospital: HospitalState;
    screening: ScreeningState;
    infection: InfectionState;
    overview: OverviewState;
}

const initialState: DataState = {
    outcomes: {
        dates: [],
        totalDeaths: [],
        currentlyInfectedPatients: [],
        currentlySeriousOrCritical: [],
    },
    trends: {
        dates: [],
        totalCases: [],
        totalRecovered: [],
    },
    screening: {
        airline: 0,
        ship: 0,
        border: 0,
        immigration: 0,
    },
    hospital: {
        totalHospitalPUI: 0,
        totalPrivateHospital: null,
        totalPublicHospital: null,
    },
    infection: {
        infectionPercentage: [],
    },
    overview: {
        totalCases: 0,
        totalRecovered: 0,
        totalDeaths: 0,
        totalTests: 0,
    },
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setOutcomes: (state, action: PayloadAction<OutcomesState>) => {
            state.outcomes = action.payload;
        },
        setTrends: (state, action: PayloadAction<TrendsState>) => {
            state.trends = action.payload;
        },
        setInfection: (state, action: PayloadAction<InfectionState>) => {
            state.infection = action.payload;
        },
        setOverview: (state, action: PayloadAction<OverviewState>) => {
            state.overview = action.payload;
        },
        setScreening: (state, action: PayloadAction<ScreeningState>) => {
            state.screening = action.payload;
        },
        setHospital: (state, action: PayloadAction<HospitalState>) => {
            state.hospital = action.payload;
        },
    },
});

export const {
    setOutcomes,
    setTrends,
    setInfection,
    setOverview,
    setScreening,
    setHospital,
} = dataSlice.actions;
export default dataSlice.reducer;
