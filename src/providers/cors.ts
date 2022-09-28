import cors from 'cors';

export const corsProvider = () => {
    return cors({
        origin: '*'
    })
};