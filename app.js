const express = require('express');


const addVehicleData = require('./routes/add-vehicle');
const garage = require('./routes/garage');

const app = express();
const BodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(BodyParser.urlencoded({extended:false}));

app.use(addVehicleData.routes);
app.use(garage);


app.listen(process.env.PORT||3000);
