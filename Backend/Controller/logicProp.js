
import '../Model/connect.js';

import Proper from '../Model/Propvalid.js'

import url from 'url';

import path from 'path';

import rs from 'randomstring'

export var save = async (req,res)=>{
 try {
     var image = req.files.File1

     var imgname=rs.generate()+"-"+Date.now()+"-"+image.name;
    
      let data =  await Proper.find();
      let l;
      if (data.length==0) {
        l=1;
      } else {
        l =  data.length+1;
      }
      let detail = {...req.body , pic: imgname ,Prop_id:l , date:Date() };
       await  Proper.create(detail); 

       var __dirname  =  url.fileURLToPath(new URL('.', import.meta.url));

      

       var uploadpath = path.join(__dirname,"../../frontend/public/assets/Upload",imgname);
       //uploadpath  = C:\Users\HP\Desktop\Project6-7\Backend\Controller\../../frontend/public/assets/Upload
       image.mv(uploadpath)

        res.status(200).json({"status":true});
    
  } catch (error) {
      res.status(500).json({"status":false});
  }
      
      
       


}
export var fetch = async (req,res)=>{ 
      var obj =  await Proper.find();
      if(obj.length!=0){
        
        res.status(200).send(obj);
      }else{
        res.status(500).json({"status":false});
      }   
}
export var fetch1 = async (req,res)=>{ 
      var obj =  await Proper.find(req.query);
      if(obj.length!=0){
        
        res.status(200).send(obj);
      }else{
        res.status(500).json({"status":false});
      }   
}
/*
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

*/