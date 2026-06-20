
import jwt from 'jsonwebtoken';
import rs from 'randomstring'
import '../Model/connect.js';

import valid from '../Model/validation.js'

import send from './Mailer.js';

export var login = async (req,res)=>{

    var obj =  await valid.find(req.body);

    if (obj.length==0) {
      res.status(500).json({"Token":"error"});
    } else {
      const payload = {"subject":obj[0].email}
     const key = rs.generate();
     const token = jwt.sign(payload,key);

      res.status(200).json({"Token":token,"details":obj[0]});
    }



 
}

export var save = async (req,res)=>{
    
      let data =  await valid.find();
      let l;
      if (data.length==0) {
        l=1;
      } else {
        l =  data.length+1;
      }
      let detail = {...req.body , user_id:l , info:Date() };
       await  valid.create(detail); 
       send(detail.email,detail.password);
      
         res.send("<h1>Data added successfully in DB</h1>")
}

export var fetch = async (req,res)=>{ 
      var obj =  await valid.find();
      if(obj.length!=0){
        res.send(obj);
      }else{
        res.send("<h1> Data not found Register not ");
      }   
}

export var find1 = async (req,res)=>{ 

     
      try {
         var obj =  await valid.find(req.query);
         res.status(200).send(obj);
      } catch (error) {
          res.status(500).json({"status":false});
      }
      
}


export var upgrade=  async(req,res)=>{

     var obj =  await valid.find(req.body.condition); 

     if (obj.length>0) {
       await valid.updateOne( req.body.condition,{$set:req.body.dtp})
     res.status(200).json({"status":true});

     } else {
         res.status(500).json({"status":false});
     } 

  
}

export var remove= async (req,res)=>{  
     try {
      
      await valid.deleteOne(req.body);
       res.status(200).json({"status":true});
      
     } catch (error) {
        res.status(500).json({"status":false});
     } 
    
}

