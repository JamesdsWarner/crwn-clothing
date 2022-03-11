import ShopActionsTypes from "../../pages/shop/shop.types";

const INITIAL_STATE = {
    collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionsTypes.UPDATE_COLLETIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;