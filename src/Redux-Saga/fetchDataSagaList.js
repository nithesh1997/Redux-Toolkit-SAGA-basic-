import { takeEvery, call, put } from '@redux-saga/core/effects'
import { getVaccineList } from '../reducers/vaccineSlice'
import { sagaDataFetchLoad, sagaDataFetchError, sagaDataFetchSuccess } from '../reducers/vaccineSlice'
import axios from 'axios'

export function* fetchDataSagaList() {
    yield takeEvery(getVaccineList, fetchData)
}


function* fetchData() {
    yield put(sagaDataFetchLoad());
    try {
        const url = 'http://localhost:4000/vaccine';
        const response = yield call(axios.get, url)
        yield put(sagaDataFetchSuccess(response.data))
    } catch (err) {
        yield put(sagaDataFetchError(err.message))
    }
}