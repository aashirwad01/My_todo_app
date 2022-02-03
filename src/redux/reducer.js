import { ADD_TODO } from "./actions";
import initialState from "./initial-state";
import shortid from "shortid";

function reducer(state = initialState,action){
    switch (action.type) {
        case ADD_TODO:
            const {title} = action.payload;

            const newState = {
                ...state,
                todos: [...state.todos,
                {
                    id: shortid(),
                    title,
                    completed: false,
                    important: false,
                }
            ]
            }
            
            return newState;
    
        default:
            return state;
    }
}

export default reducer;