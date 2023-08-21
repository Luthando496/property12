import {createSlice,configureStore} from '@reduxjs/toolkit'


const house = createSlice({
    name:'house',
    initialState:{houses:null,isLoading:false,error:null,home:null,query:''},
    reducers:{
        allRequest: (state,action)=>{
            state.isLoading = true;
        },
        getHouses: (state,action)=>{
            state.houses = action.payload.houses;
            state.isLoading = false;
        },
        errorRequest: (state,action)=>{
            state.error = action.payload.error;
            state.isLoading = false;
        },
        fetchDetails: (state,action)=>{
            state.home = action.payload;
            state.isLoading = false;
        },
        setQuery:(state,action)=>{
            state.query = action.payload
        }
    }
})


export const {allRequest,getHouses,errorRequest,fetchDetails,setQuery} = house.actions;

const store = configureStore({reducer:{
    house:house.reducer
}});

export default store;