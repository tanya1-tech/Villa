

import express from 'express';

var Router =  express.Router();

import * as Controller from '../Controller/logic.js'; 

   Router.post("/register",Controller.save);
   Router.post("/login",Controller.login);

   Router.get("/fetch",Controller.fetch);
    Router.get("/find",Controller.find1);
   Router.patch("/update",Controller.upgrade);
  Router.delete("/remove",Controller.remove);




export default Router;