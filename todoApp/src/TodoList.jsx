import React from "react";

function TodoList({ todoItems, dispatch }) {
    return (
        <section className="flex flex-col scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full h-2/3">
            {todoItems.map((todoItem) => (
                <div key={todoItem.id} className="flex mb-2 gap-2">
                    <input
                        type="text"
                        readOnly={!todoItem.isEditable}
                        onChange={() =>
                            dispatch({ type: "updateTodo", data: todoItem.id })
                        }
                        value={todoItem.todo}
                        className={`grow bg-zinc-100 pl-2 ${
                            todoItem.isEditable
                                ? "outline-green-400"
                                : "outline-none hover:cursor-pointer"
                        }`}
                        style={
                            todoItem.isCompleted
                                ? { textDecoration: "line-through" }
                                : null
                        }
                        onClick={() => {
                            dispatch({
                                type: "handleCompleted",
                                data: todoItem.id,
                            });
                        }}
                    />
                    <button
                        onClick={() => {
                            dispatch({
                                type: "handleEditButton",
                                data: todoItem.id,
                            });
                        }}
                        className={`p-2 border-2 text-white ${
                            !todoItem.isEditable
                                ? "bg-blue-600"
                                : "bg-green-600"
                        } w-[67.43px]`}
                    >
                        {!todoItem.isEditable ? "EDIT" : "SAVE"}
                    </button>
                    <button
                        onClick={() =>
                            dispatch({ type: "deleteTodo", data: todoItem.id })
                        }
                        className="p-2 bg-red-600 text-white mr-2"
                    >
                        DELETE
                    </button>
                </div>
            ))}
        </section>
    );
}

export default TodoList;
