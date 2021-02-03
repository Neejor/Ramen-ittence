import onLoad from "./onLoad";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    load: onLoad
});

export default allReducers;