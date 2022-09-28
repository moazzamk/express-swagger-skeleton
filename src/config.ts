
// Config for the API

export const config = {
    nodeEnv : 'dev',
    port: process.env.PORT || 3000,
    jwt: {
       secret: process.env.JWT_SECRET || 'someSecret'
    }
};