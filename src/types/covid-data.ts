export interface CovidData {
    totalScreeningAirlines: number | null;
    totalScreeningAirlinePassengers: number | null;
    totalScreeningShips: number | null;
    totalScreeningShipPassengers: number | null;
    totalScreeningBorder: number | null;
    totalScreeningImmigration: number | null;
    totalAirlinesAndShipsPUI: number | null;
    totalPUI: number;
    totalAirlinePUI: number;
    totalBKKAirportPUI: number | null;
    totalDMKAirportPUI: number | null;
    totalHKTAirportPUI: number | null;
    totalCNXAirportPUI: number | null;
    totalURTAirportPUI: number | null;
    totalUBPAirportPUI: number | null;
    totalUTPAirportPUI: number | null;
    totalUTHAirportPUI: number | null;
    totalShipPUI: number | null;
    totalHospitalPUI: number;
    totalPrivateHospital: number | null;
    totalPublicHospital: number | null;
    totalOtherPUI: number | null;
    totalCases: number | null;
    totalRecovered: number | null;
    currentlyInfectedPatients: number | null;
    totalDeaths: number | null;
    currentlySeriousOrCritical: number | null;
    totalTests: number | null;
    newCases: number | null;
    newDeaths: number | null;
    newPUI: number | null;
    totalPUIPercent: number | null;
    newCasesPercent: number | null;
    totalCasesPercent: number | null;
    totalRecoveredPercent: number | null;
    totalDeathsPercent: number | null;
    totalScreening: number | null;
    newRecovered: number | null;
    newSeriousOrCritical: number | null;
    currentlySeriousOrCrititalPercent: number | null;
    currentlyInfectedPatientsPercent: number | null;
    newInfectedPatients: number | null;
    newTests: number | null;
    totalTestsPercent: number | null;
    currentlyInfectedPatientsCapacityPercent: number | null;
    publishdate: string;
}

type TotalDeaths = [Date, number | null];
type CurrentlyInfectedPatients = [Date, number | null];
type CurrentlySeriousOrCritical = [Date, number | null];
type TotalRecovered = [Date, number | null];
type InfectionPercentage = [Date, number | null];
export interface OutcomesState {
    dates: Date[];
    totalDeaths: TotalDeaths[];
    currentlyInfectedPatients: CurrentlyInfectedPatients[];
    currentlySeriousOrCritical: CurrentlySeriousOrCritical[];
}

export interface HospitalState {
    totalHospitalPUI: number;
    totalPrivateHospital: number | null;
    totalPublicHospital: number | null;
}

export interface TrendsState {
    dates: Date[];
    totalCases: TotalDeaths[];
    totalRecovered: TotalRecovered[];
}

export interface ScreeningState {
    airline: number | null;
    ship: number | null;
    border: number | null;
    immigration: number | null;
}

export interface InfectionState {
    infectionPercentage: InfectionPercentage[];
}

export interface OverviewState {
    totalCases: number;
    totalRecovered: number;
    totalDeaths: number;
    totalTests: number;
}
