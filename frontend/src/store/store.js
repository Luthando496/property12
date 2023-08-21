import {createSlice,configureStore} from '@reduxjs/toolkit'


const house = createSlice({
    name:'house',
    initialState:{houses:null,isLoading:false,error:null,home:null},
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
        }
    }
})


export const {allRequest,getHouses,errorRequest} = house.actions;

const store = configureStore({reducer:{
    house:house.reducer
}});

export default store;