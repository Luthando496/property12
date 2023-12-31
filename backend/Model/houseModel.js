import mongoose from 'mongoose';

const houseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Type Your House Here To'],
    },
    price:{
        type:Number,
        required:true
    },
    bedrooms:{
        type:Number
    },
    bathrooms:Number,
    noOfCars:Number,
    description:{
        type:String,
        required:[true,'The Description Is Required Here']
    },
    size:Number,
    garden:Boolean,
    pool:Boolean,
    petFriendly:Boolean,
    images:{
        type:Array,
        required:true
    },
    propertyType:{
        type:String,
        required:[true,'Provide Proporty If Apartment Or House'],
        enum:{
            values:['House','Apartment','Duplex','Town House','Land','Farm']}

    },
    streetAddress:String,
    listingDate:{
        type:Date,
        default:Date.now()
    },
    coverImage:
    {
        type:String,
        required:true
    },
    
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})



const houseModel = mongoose.model('house',houseSchema)

export default houseModel;