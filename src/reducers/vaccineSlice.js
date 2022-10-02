import { createAction, createSlice } from "@reduxjs/toolkit";

const vaccineSlice = createSlice({
    name: 'vaccine',
    initialState: {
        registrants: [],
        loading: false,
        error: ''
    },
    reducers: {
        sagaDataFetchLoad(state) {
            state.loading = true
        },
        sagaDataFetchSuccess(state, action) {
            state.loading = false;
            state.registrants = action.payload
        },
        sagaDataFetchError(state, action) {
            state.error = action.payload;
            state.loading = false
        }
    }
})

export const getVaccineList = createAction('getVaccineListAction')

export default vaccineSlice.reducer;

export const { sagaDataFetchLoad, sagaDataFetchSuccess, sagaDataFetchError } = vaccineSlice.actions