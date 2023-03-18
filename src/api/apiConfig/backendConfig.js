const env = process.env;
const dbConfig = {
    backendHost: env.BE_HOST || 'localhost',
    backendPort: env.BE_PORT || '5000',
};

module.exports = dbConfig;