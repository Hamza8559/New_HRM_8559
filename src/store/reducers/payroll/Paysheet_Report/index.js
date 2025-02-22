import {
    GET_PAYSHEET_Report_DATA,
    GET_PAYSHEET_Report_START,
    GET_PAYSHEET_Report_PAYROLL,
    GET_PAYSHEET_Report_END,
    GET_PAYSHEET_GetallPayrollCategories_DATA,
    GET_PAYSHEET_Employee_Category_DATA
} from '../../../actions/types.js'


const initState = {
    data: [],
    Payroll: [],
    loading: false,
}

const Red_Paysheet_Report = (state = initState, action) => {
    switch (action.type) {
        case GET_PAYSHEET_Report_START:
            return {
                ...state,
                loading: action.loading,
            };
        case GET_PAYSHEET_Report_DATA:
            return {
                ...state,
                data: action.payload,
                loading: action.loading,
            };
        case GET_PAYSHEET_GetallPayrollCategories_DATA:
            return {
                ...state,
                PayrollCategories: action.payload,
                loading: action.loading,
            };
        case GET_PAYSHEET_Employee_Category_DATA:
            return {
                ...state,
                EmployeeCategory: action.payload,
                loading: action.loading,
            };
        case GET_PAYSHEET_Report_PAYROLL:
            return {
                ...state,
                Payroll: action.payload,
                loading: action.loading,
            };
        case GET_PAYSHEET_Report_END:
            return {
                ...state,
                data: action.payload,
                loading: action.loading,
            };
        default:
            return state;
    }
};

export default Red_Paysheet_Report