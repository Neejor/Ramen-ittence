const onLoad = (state = {dish: []},action) => {
    switch(action.type) {
        case "onLoad":
            return {
                data: action.dishes
            }

        default:
            return state;
        }
};

export default onLoad;