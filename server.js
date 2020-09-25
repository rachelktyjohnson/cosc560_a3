require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
app.use(express.json());
app.use(cors());



//////////////////// MONGO-OSE SETUP
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database!'));



//////////////////// SWAGGER SETUP
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Drop Bear Eats API",
            version: "1.0.0",
            description:
                "Drop Bear Eats API for Trimester-long project for UNE COSC560",
            license: {
                name: "MIT",
                url: "https://choosealicense.com/licenses/mit/"
            },
            contact: {
                name: "Rachel Johnson",
                email: "rjohns57@myune.edu.au"
            }
        },
        servers: [
            {
                url: "http://localhost:9000"
            }
        ]
    },
    apis: ['models/*.js']
};
const specs = swaggerJsdoc(options);
app.use("/docs", swaggerUi.serve);
app.get(
    "/docs",
    swaggerUi.setup(specs, {
        explorer: true
    })
);



//ACCESS HEADERS
app.use((req, res, next)=>{
    //add some headers to the response (all responses)
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next();
});


//////////////////// ROUTERS
const restaurantRoutes = require('./routes/restaurants');
const itemRoutes = require('./routes/items');
app.use('/restaurants', restaurantRoutes);
app.use('/items', itemRoutes);

//////////////////// SERVER LISTENER
app.listen(process.env.PORT, () => console.log("Server started! Listening on Port "+process.env.PORT));