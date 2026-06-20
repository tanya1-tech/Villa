



import '../Model/connect.js';

import valid from '../Model/validation.js'

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
         res.send("<h1>Data added successfully in DB</h1>")
    

}

export var fetch = async (req,res)=>{
    
      var obj =  await valid.find(req.query);// req.params= {"name":sahil} find({"name":"sahil"})
    
      if(obj.length!=0){

        res.send(obj);

      }else{
        res.send("<h1> Data not found Register not ");
      }
      
}


export var upgrade=  async(req,res)=>{

      
      let cc = req.body.condition
       let obj = req.body.obj;
      // console.log("Before data convert")
       //console.log(cc);
       //console.log(obj);
        //console.log("After data convert")
        cc =  JSON.parse(cc);
        obj =  JSON.parse(obj);
        // console.log(cc);
      // console.log(obj);


      let data =  await valid.updateOne(cc,{$set:obj})
       console.log(data);

    res.send("<h1>This is the update function hello n </h1>")
}

export var remove= async(req,res)=>{

     await valid.deleteOne(req.body);
    
    res.send("<h1> Your data has been deleted or delete api called </h1>")
}

