import React, { useState } from "react";

function TodoInput({ dispatch }) {
    const [input, setInput] = useState("");

    return (
        <div className="mb-6">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({ type: "addTodo", data: input });
                    setInput("");
                }}
                className="flex justify-between"
            >
                <input
                    type="text"
                    placeholder="add todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border-2 border-stone-400 grow p-2"
                />
                <button className="p-2 font-semibold bg-violet-600 text-white">
                    ADD TODO
                </button>
            </form>
        </div>
    );
}

export default TodoInput;
