import React, { useReducer } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function reducer(todoItems, action) {
    switch (action.type) {
        case "addTodo":
            {
                if (action.data !== "") {
                    return [
                        ...todoItems,
                        {
                            todo: action.data,
                            id: crypto.randomUUID(),
                            isEditable: false,
                            isCompleted: false,
                        },
                    ];
                }
            }
            break;

        case "deleteTodo": {
            const updatedTodoItems = todoItems.filter((todoItem) => {
                return todoItem.id !== action.data;
            });
            return updatedTodoItems;
        }

        case "handleEditButton": {
            const newInputArray = todoItems.map((todoItem) => {
                if (
                    todoItem.id === action.data &&
                    todoItem.isCompleted === false
                ) {
                    return { ...todoItem, isEditable: !todoItem.isEditable };
                }
                return todoItem;
            });
            return newInputArray;
        }

        case "updateTodo": {
            const newInputArray = todoItems.map((todoItem) => {
                if (todoItem.id === action.data) {
                    return { ...todoItem, todo: event.target.value };
                }
                return todoItem;
            });
            return newInputArray;
        }

        case "handleCompleted": {
            const newInputArray = todoItems.map((todoItem) => {
                if (
                    todoItem.id === action.data &&
                    todoItem.isEditable === false
                ) {
                    return { ...todoItem, isCompleted: !todoItem.isCompleted };
                }
                return todoItem;
            });
            return newInputArray;
        }
        default:
            throw new Error();
    }
}

function TodoWrapper() {
    const [todoItems, dispatch] = useReducer(reducer, []);

    return (
        <div className=" bg-white w-1/2 h-4/5 p-8">
            <h1 className="text-xl font-bold mb-4">TODO APP</h1>
            <TodoInput dispatch={dispatch} />
            <h2 className="text-xl font-semibold mb-4">YOUR TODOS</h2>
            <TodoList todoItems={todoItems} dispatch={dispatch} />
        </div>
    );
}

export default TodoWrapper;
