

import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import Server from "./classes/server";
import { SERVER_PORT } from "./global/enviroment";
import  router  from "./routes/index.routes";




const server  = new Server();

// bodyParser
server.app.use(bodyParser.urlencoded({extended:true}))
server.app.use(express.json());

// Cors
server.app.use(cors({origin: true, credentials: true}))

// Rutas del Sistema
server.app.use('/', router)

server.start(() => {
    console.log(`Server run on PORT ${SERVER_PORT} `);
});