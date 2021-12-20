import { Router } from "express";
import userControllers from "./controllers/userControllers";

const routes = Router();

// routes.get('/',(req,res)=>{
//     return res.send('Hello World 2');
// });
routes.get('/users', userControllers.index);

export default routes;