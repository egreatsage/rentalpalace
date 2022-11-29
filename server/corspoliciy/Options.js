import Origin from './Origin.js';

const corsOptions = {
    origin: (origin, callback) => {
        if (Origin.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

export default corsOptions;