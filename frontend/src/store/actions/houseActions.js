import {getHouses,allRequest,errorRequest,fetchDetails} from '../store'
import axios from 'axios'



export const fetchAllHouses = () => async dispatch => {
    try {
        dispatch(allRequest())
        const {data} = await axios.get('/api/property21/houses')
        dispatch(getHouses(data))
    } catch (error) {
        console.log(error)
        dispatch(errorRequest(error))
    }
}


export const SearchHomes = (search) => async dispatch => {
    try {
        dispatch(allRequest())
        const {data} = await axios.get(`/api/property21/houses?keyword=${search}`)
        dispatch(getHouses(data))
    } catch (error) {
        console.log(error)
        dispatch(errorRequest(error))
    }
}


export const getHouseDetails = (id) => async dispatch => {
    try {
        dispatch(allRequest())
        const {data} = await axios.get(`/api/property21/houses/${id}`)
        dispatch((fetchDetails(data)))
    } catch (error) {
        console.log(error)
        dispatch(errorRequest(error))
    }
}