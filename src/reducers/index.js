import { bindActionCreators } from 'redux';
import {ADD_MOVIES} from '../actions'

const initialMoviesState  = {
    list: [],
    favourites: []
}

export default function movie (state = initialMoviesState, action) {
    
    if(action.type === ADD_MOVIES){
        return {
            ...state,
            list: bindActionCreators.movies
        }
    }
    return state;
}

