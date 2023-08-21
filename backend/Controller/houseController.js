import House from '../Model/houseModel.js'
import ApiFeatures from '../Utils/ApiFeatures.js'






export const createHouse=async(req,res,next) =>{
    try{

    const house = await House.create({
        name:req.body.name,
        pice:req.body.price,
        bedrooms:req.body.bedrooms,
        bathrooms:req.body.bathrooms,
        noOfCars:req.body.noOfCars,
        description:req.body.description,
        garden:req.body.garden,
        pool:req.body.pool,
        petFriendly:req.body.petFriendly,
        propertyType:req.body.propertyType,
        streetAddress:req.body.streetAddress,
        images:req.body.images,
        images:req.body.images,
        coverImage:req.coverImage
    });
    console.log(house)
    res.status(201).json(house)

}catch(err){
    console.log(err)
    res.status(500).json(err,'hello')
}

next()

}






export const getHouse=async(req,res,next)=>{
        try{
    
            const resPerPage = 15;
    
            
            const apiFeatures = new ApiFeatures(House.find(),req.query).search().filter().pagination(resPerPage).limitFields().sort()
    
            // console.log(await apiFeatures)
            const house = await apiFeatures.query
    
    
            if(!house){
                return res.status(400).json({message: 'Product not found'});
            }
    
    
    
    
            return res.status(200).json({success:true,number:house.length,houses:house})
        }catch(err){
            console.log(err)
            return res.send(err)
    
        }
        next()
    
}



export const exclusive =async(req,res,next)=>{
    try{

        const apiFeatures = new ApiFeatures(House.find(),req.query).pagination(3)


        const house = await apiFeatures.query;

        return res.status(200).json(house)

    }catch(err){
        return res.send(err)
    }
}


export const fetchOne =async(req,res,next)=>{
    try{



        const house = await House.findById(req.params.id);
        if(!house){
            return res.status(400).json({message: 'House not found'});
        }

        return res.status(200).json(house)

    }catch(err){
        return res.send(err)
    }
}