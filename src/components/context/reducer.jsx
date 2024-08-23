import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./action.types";

const Reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case REMOVE_TODO:
            return state.filter((todo) => todo != action.payload);
        case UPDATE_TODO:
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, content: action.payload.content } : todo
            );
        default:
            return state;
    }
}

export default Reducer;