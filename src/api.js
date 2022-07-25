const express = require('express');
const router = require('./routers/index');
const errorHandler = require('./middlewares/errorHandler');

// ...

const app = express();

app.use(express.json());

app.use('/login', router.loginRouter);
app.use('/user', router.userRouter);
app.use('/categories', router.categoryRouter);
app.use(errorHandler);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
