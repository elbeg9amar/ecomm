import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'


import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shopData/shopReducer';

const persistConfig = {
    key:'root',
    storage,
    whiteList:['cart'],
};

const rootReducer = combineReducers({
    users: userReducer,
    cart:cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);