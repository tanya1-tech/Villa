
import express from 'express';
import Router from './Router/route.js';
import Prop from './Router/Prop.js'
import bp from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

var app = express();

app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

app.use(fileUpload());

app.use(cors());

  
   app.use("/cat",Prop);
  app.use("/user",Router);

   app.listen(8086);

