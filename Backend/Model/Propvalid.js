import mongoose from 'mongoose';
import uv from 'mongoose-unique-validator';
const UserSchema = mongoose.Schema({
   Prop_id:{
    type:Number
  },
  price: {
    type: Number,
    required:[true,"Price is required"]
  
  },
   email: {
    type: String,
  
 
  },
 
  pic: {
    type: String,
   required: [true,"image is require"]
 
  },
     date:{
      type:String
    }

});
     UserSchema.plugin(uv);

const PropSchemaModel = mongoose.model('Propcollection',UserSchema);

export default PropSchemaModel;


