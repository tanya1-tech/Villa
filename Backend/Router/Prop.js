

import express from 'express';

var Property =  express.Router();

import * as Prop from '../Controller/logicProp.js'; 

   Property.post("/property",Prop.save);
    Property.get("/find",Prop.fetch);
       Property.get("/fetch",Prop.fetch1);
  




export default Property;