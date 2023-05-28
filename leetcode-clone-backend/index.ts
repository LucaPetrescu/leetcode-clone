import express, { Request, Response, Express } from 'express';
// import morgan from 'morgan';
import bodyParser from 'body-parser';

const app: Express = express();
const port: Number = 5000;

// app.use(morgan('dev'))
app.use(express.json())

app.post('/api/hello', async(req: Request, res: Response)=>{
    res.send('Hello World');
})

app.listen(port, () => console.log('Server running on port' + port));