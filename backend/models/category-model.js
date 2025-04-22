import mongoose from "mongoose";
const categorySchema=mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
});
const categoryModel=mongoose.model("Category",categorySchema);  

export default categoryModel;  // Export the model to use it in other files