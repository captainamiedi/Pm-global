import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './route/index';


dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router
app.use('/', router);


app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
});
  
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
});
  
const port = process.env.PORT || 3000;
  
if (!module.parent) {
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
}
  
export default app;