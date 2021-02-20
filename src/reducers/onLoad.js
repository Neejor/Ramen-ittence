const onLoad = (state = {dish: []},action) => {
    switch(action.type) {
        case "onLoad":
            return {
                dish: action.dishes
            }

        default:
            return state;
        }
};

export default onLoad;