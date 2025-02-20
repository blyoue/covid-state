import {
    CovidData,
    HospitalState,
    InfectionState,
    OutcomesState,
    OverviewState,
    ScreeningState,
    TrendsState,
} from '@/types/covid-data';

export const sortOutcomes = (data: CovidData[]): OutcomesState => {
    const outcomes: OutcomesState = {
        dates: [],
        totalDeaths: [],
        currentlyInfectedPatients: [],
        currentlySeriousOrCritical: [],
    };

    data.forEach((item) => {
        // publishdate is a string in the format of 'DD-MM-YYYY'
        // We need to convert it to 'YY-MM-DD' for it to be recognized as a date
        const formattedDate = new Date(
            item.publishdate.split('-').reverse().join('-')
        );

        outcomes.dates.push(formattedDate);
        outcomes.totalDeaths.push([formattedDate, item.totalDeaths || 0]);
        outcomes.currentlyInfectedPatients.push([
            formattedDate,
            item.currentlyInfectedPatients || 0,
        ]);
        outcomes.currentlySeriousOrCritical.push([
            formattedDate,
            item.currentlySeriousOrCritical || 0,
        ]);
    });
    return outcomes;
};

export const sortHospital = (data: CovidData[]): HospitalState => {
    const latestData = data[0];
    const hospital: HospitalState = {
        totalHospitalPUI: latestData.totalHospitalPUI,
        totalPrivateHospital: latestData.totalPrivateHospital || null,
        totalPublicHospital: latestData.totalPublicHospital || null,
    };
    return hospital;
};

export const sortTrends = (data: CovidData[]): TrendsState => {
    const trends: TrendsState = {
        dates: [],
        totalCases: [],
        totalRecovered: [],
    };

    data.forEach((item) => {
        // publishdate is a string in the format of 'DD-MM-YYYY'
        // We need to convert it to 'YY-MM-DD' for it to be recognized as a date
        const formattedDate = new Date(
            item.publishdate.split('-').reverse().join('-')
        );

        trends.dates.push(formattedDate);
        trends.totalCases.push([formattedDate, item.totalCases || 0]);
        trends.totalRecovered.push([formattedDate, item.totalRecovered || 0]);
    });
    return trends;
};

export const sortScreening = (data: CovidData[]): ScreeningState => {
    const latestData = data[0];
    const screening: ScreeningState = {
        airline: latestData.totalScreeningAirlinePassengers,
        ship: latestData.totalScreeningShipPassengers || 0,
        border: latestData.totalScreeningBorder || 0,
        immigration: latestData.totalScreeningImmigration || 0,
    };
    return screening;
};

export const sortInfection = (data: CovidData[]): InfectionState => {
    const infection: InfectionState = {
        infectionPercentage: [],
    };

    data.forEach((item) => {
        // publishdate is a string in the format of 'DD-MM-YYYY'
        // We need to convert it to 'YY-MM-DD' for it to be recognized as a date
        const formattedDate = new Date(
            item.publishdate.split('-').reverse().join('-')
        );
        infection.infectionPercentage.push([
            formattedDate,
            item.currentlyInfectedPatientsPercent || 0,
        ]);
    });
    return infection;
};

export const sortOverview = (data: CovidData[]): OverviewState => {
    const latestData = data[0];
    const overview: OverviewState = {
        totalCases: latestData.totalCases || 0,
        totalRecovered: latestData.totalRecovered || 0,
        totalDeaths: latestData.totalDeaths || 0,
        totalTests: latestData.totalTests || 0,
    };
    return overview;
};
