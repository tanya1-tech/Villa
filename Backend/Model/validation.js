import mongoose from 'mongoose';
import uv from 'mongoose-unique-validator';
const UserSchema = mongoose.Schema({
   user_id:{
    type:Number
  },
  Name: {
    type: String,
    required:[true,"Name is required"]
  
  },
  email: {
    type: String,
     required: [true,"Email is required"],
     unique: true,
  },
  password: {
    type: String,
   required: [true,"Password is required"],
 
  },
  age: {
    type: Number,
  },
     info:{
      type:String
    }

});
     UserSchema.plugin(uv);

const UserSchemaModel = mongoose.model('mycollection',UserSchema);

export default UserSchemaModel;


