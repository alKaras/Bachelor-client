import { configureStore } from '@reduxjs/toolkit';
import { unitsReducer } from './slices/unitSlice';
import { loginReducer } from './slices/loginSlice';
import { ServiceReducer } from './slices/serviceSlice';
import { PriceReducer } from './slices/priceSlice';

export const store = configureStore({
    reducer: {
        units: unitsReducer,
        logreg: loginReducer,
        services: ServiceReducer,
        prices: PriceReducer,
    }
})