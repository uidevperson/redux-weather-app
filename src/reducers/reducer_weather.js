// state arguement is not application state
import { FETCH_WEATHER } from '../actions/index';
// only the state this reducer is responsile for
export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
			return [action.payload.data, ...state]; //[city, city, city]
	}
	return state;
}