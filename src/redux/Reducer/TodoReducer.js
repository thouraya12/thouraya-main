import {
  ADD_TODO,
  CHECKED_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "../Constants/Action-types";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  todos: [],
};
function todosReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { id: uuidv4(), isDone: false, description: payload.description },
        ],
      };
    case CHECKED_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, description: payload.description }
            : todo
        ),
      };

    default:
      return state;
  }
}
export default todosReducer;
