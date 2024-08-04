/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.js$': 'babel-jest', // Transform JS files with Babel
    },
};

module.exports = config;