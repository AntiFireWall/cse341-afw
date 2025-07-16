const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: 'User API',
        description: 'User API'
    },
    host: 'cse341-afw-api.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFile, doc);