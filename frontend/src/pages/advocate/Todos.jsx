import { useEffect, useState } from "react";
import api from "../../services/api";

function Todos() {

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [loading, setLoading] =
        useState(false);

    let advocate = {};

    try {

        const storedAdvocate =
            localStorage.getItem("advocate");

        if (
            storedAdvocate &&
            storedAdvocate !== "undefined"
        ) {

            advocate =
                JSON.parse(storedAdvocate);

        }

    } catch (error) {

        console.log(error);

    }

    const fetchTodos = async () => {

        try {

            if (!advocate.id) return;

            const response =
                await api.get(
                    `/todos/${advocate.id}`
                );

            setTodos(
                response.data
            );

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchTodos();

    }, []);

    const addTask = async () => {

        if (!task.trim()) {

            alert(
                "Please enter a task."
            );

            return;

        }

        try {

            setLoading(true);

            await api.post(
                "/todos",
                {
                    advocateId:
                        advocate.id,
                    task
                }
            );

            setTask("");

            fetchTodos();

        } catch (error) {

            console.log(error);

            alert(
                "Failed to add task"
            );

        } finally {

            setLoading(false);

        }

    };

    const completeTask = async (id) => {

        try {

            await api.put(
                `/todos/${id}`
            );

            fetchTodos();

        } catch (error) {

            console.log(error);

        }

    };

    const deleteTask = async (id) => {

        const confirmDelete =
            window.confirm(
                "Delete this task?"
            );

        if (!confirmDelete) {

            return;

        }

        try {

            await api.delete(
                `/todos/${id}`
            );

            fetchTodos();

        } catch (error) {

            console.log(error);

        }

    };

    const completedTasks =
        todos.filter(
            (todo) => todo.completed
        ).length;

    const pendingTasks =
        todos.length - completedTasks;

    const completionPercentage =
        todos.length === 0
            ? 0
            : Math.round(
                  (
                      completedTasks /
                      todos.length
                  ) * 100
              );

    return (

        <div className="min-h-screen bg-gray-100 p-6">

            {/* Header */}

            <div className="mb-8">

                <h1 className="text-4xl font-bold">

                    ✅ To-Do Manager

                </h1>

                <p className="text-gray-500 mt-2">

                    Stay productive and organized.

                </p>

            </div>

            {/* Stats */}

            <div className="grid md:grid-cols-3 gap-6 mb-8">

                <div className="bg-blue-600 text-white rounded-2xl p-6 shadow">

                    <p>Total Tasks</p>

                    <h2 className="text-4xl font-bold mt-2">

                        {todos.length}

                    </h2>

                </div>

                <div className="bg-yellow-500 text-white rounded-2xl p-6 shadow">

                    <p>Pending</p>

                    <h2 className="text-4xl font-bold mt-2">

                        {pendingTasks}

                    </h2>

                </div>

                <div className="bg-green-600 text-white rounded-2xl p-6 shadow">

                    <p>Completed</p>

                    <h2 className="text-4xl font-bold mt-2">

                        {completedTasks}

                    </h2>

                </div>

            </div>

            {/* Progress */}

            <div className="bg-white rounded-2xl shadow p-6 mb-8">

                <div className="flex justify-between mb-3">

                    <span className="font-semibold">

                        Productivity Score

                    </span>

                    <span>

                        {completionPercentage}%

                    </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-4">

                    <div
                        className="bg-green-600 h-4 rounded-full transition-all"
                        style={{
                            width:
                                `${completionPercentage}%`
                        }}
                    />

                </div>

            </div>

            {/* Add Task */}

            <div className="bg-white rounded-2xl shadow p-6 mb-8">

                <h2 className="text-2xl font-bold mb-4">

                    ➕ Add New Task

                </h2>

                <div className="flex flex-col md:flex-row gap-4">

                    <input
                        value={task}
                        onChange={(e) =>
                            setTask(
                                e.target.value
                            )
                        }
                        placeholder="Enter task..."
                        className="border p-4 rounded-xl flex-1"
                    />

                    <button
                        onClick={addTask}
                        disabled={loading}
                        className={`px-8 rounded-xl text-white font-semibold ${
                            loading
                                ? "bg-gray-400"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >

                        {loading
                            ? "Adding..."
                            : "Add"}

                    </button>

                </div>

            </div>

            {/* Tasks */}

            {todos.length === 0 ? (

                <div className="bg-white rounded-2xl shadow p-12 text-center">

                    <div className="text-6xl mb-4">

                        🎯

                    </div>

                    <h2 className="text-2xl font-bold">

                        No Tasks Yet

                    </h2>

                    <p className="text-gray-500 mt-2">

                        Add your first task to stay organized.

                    </p>

                </div>

            ) : (

                <div className="space-y-4">

                    {todos.map((todo) => (

                        <div
                            key={todo.id}
                            className="bg-white rounded-2xl shadow p-5 flex flex-col md:flex-row justify-between items-center"
                        >

                            <div className="flex items-center gap-4">

                                <div className="text-2xl">

                                    {todo.completed
                                        ? "✅"
                                        : "📝"}

                                </div>

                                <p
                                    className={`text-lg ${
                                        todo.completed
                                            ? "line-through text-gray-400"
                                            : "font-medium"
                                    }`}
                                >

                                    {todo.task}

                                </p>

                            </div>

                            <div className="flex gap-3 mt-4 md:mt-0">

                                {!todo.completed && (

                                    <button
                                        onClick={() =>
                                            completeTask(
                                                todo.id
                                            )
                                        }
                                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl"
                                    >

                                        Complete

                                    </button>

                                )}

                                <button
                                    onClick={() =>
                                        deleteTask(
                                            todo.id
                                        )
                                    }
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl"
                                >

                                    Delete

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}

export default Todos;