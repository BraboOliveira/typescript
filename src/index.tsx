import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

// function getUsername(): string{
//     return 'paulo';
// }
// const username = getUsername();
// app.get('/',(req,res)=>{
//     return res.send('Hello World');
// })

app.listen(3333);

