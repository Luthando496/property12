import {getHouses,allRequest,errorRequest} from '../store'
import axios from 'axios'



export const fetchAllHouses = () => async dispatch => {
    try {
        const {data} = await axios.get('/api/property21/houses')
        console.log(data)
        dispatch(getHouses(data))
    } catch (error) {
        console.log(error)
        dispatch(errorRequest(error))
    }
}