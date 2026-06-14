import { useEffect, useState } from "react";
import api from "../../services/api";
import {
    ArrowLeft,
    Plus,
    Trash2,
    CheckCircle2,
    ListTodo
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Todos() {

    const navigate = useNavigate();

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [loading, setLoading] = useState(false);

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

    } catch {

        advocate = {};

    }

    const fetchTodos = async () => {

        try {

            if (!advocate.id) return;

            const response =
                await api.get(
                    `/todos/${advocate.id}`
                );

            setTodos(response.data);

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

        <div className="min-h-screen bg-[#F3F3F3]">

            {/* Header */}

            <div className="bg-[#F4C430] px-4 md:px-6 py-5 shadow">

                <div className="flex items-center gap-4">

                    <button
                        onClick={() => navigate(-1)}
                        className="
                            w-12 h-12
                            bg-white
                            rounded-2xl
                            shadow-md
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <ArrowLeft size={24} />

                    </button>

                    <h1 className="text-2xl md:text-3xl font-bold">

                        To Do List

                    </h1>

                </div>

            </div>

            <div className="max-w-6xl mx-auto p-4 md:p-6">

                {/* Stats */}

                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-3
                    gap-4
                    mb-6
                ">

                    <div className="
                        bg-white
                        rounded-3xl
                        shadow
                        p-6
                    ">

                        <p className="text-gray-500">

                            Total Tasks

                        </p>

                        <h2 className="
                            text-4xl
                            font-bold
                        ">

                            {todos.length}

                        </h2>

                    </div>

                    <div className="
                        bg-[#F4C430]
                        rounded-3xl
                        shadow
                        p-6
                    ">

                        <p>

                            Pending

                        </p>

                        <h2 className="
                            text-4xl
                            font-bold
                        ">

                            {pendingTasks}

                        </h2>

                    </div>

                    <div className="
                        bg-[#4CAF50]
                        text-white
                        rounded-3xl
                        shadow
                        p-6
                    ">

                        <p>

                            Completed

                        </p>

                        <h2 className="
                            text-4xl
                            font-bold
                        ">

                            {completedTasks}

                        </h2>

                    </div>

                </div>

                {/* Progress */}

                <div className="
                    bg-white
                    rounded-3xl
                    shadow
                    p-6
                    mb-6
                ">

                    <div className="
                        flex
                        justify-between
                        mb-3
                    ">

                        <span className="font-semibold">

                            Productivity Score

                        </span>

                        <span>

                            {completionPercentage}%

                        </span>

                    </div>

                    <div className="
                        w-full
                        bg-gray-200
                        rounded-full
                        h-4
                    ">

                        <div
                            className="
                                bg-[#4CAF50]
                                h-4
                                rounded-full
                                transition-all
                            "
                            style={{
                                width:
                                    `${completionPercentage}%`
                            }}
                        />

                    </div>

                </div>

                {/* Add Task */}

                <div className="
                    bg-white
                    rounded-3xl
                    shadow
                    p-6
                    mb-6
                ">

                    <h2 className="
                        text-2xl
                        font-bold
                        mb-5
                    ">

                        Add New Task

                    </h2>

                    <div className="
                        flex
                        flex-col
                        md:flex-row
                        gap-4
                    ">

                        <input
                            value={task}
                            onChange={(e) =>
                                setTask(
                                    e.target.value
                                )
                            }
                            placeholder="Enter task..."
                            className="
                                flex-1
                                border
                                rounded-2xl
                                p-4
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#F4C430]
                            "
                        />

                        <button
                            onClick={addTask}
                            disabled={loading}
                            className={`
                                px-6 py-4
                                rounded-2xl
                                font-semibold
                                flex
                                items-center
                                justify-center
                                gap-2
                                ${
                                    loading
                                        ? "bg-gray-400"
                                        : "bg-[#F4C430] hover:bg-yellow-400"
                                }
                            `}
                        >

                            <Plus size={20} />

                            {
                                loading
                                    ? "Adding..."
                                    : "Add Task"
                            }

                        </button>

                    </div>

                </div>

                {/* Empty State */}

                {todos.length === 0 ? (

                    <div className="
                        bg-white
                        rounded-3xl
                        shadow
                        p-12
                        text-center
                    ">

                        <ListTodo
                            size={60}
                            className="
                                mx-auto
                                text-gray-400
                                mb-4
                            "
                        />

                        <h2 className="
                            text-2xl
                            font-bold
                        ">

                            No Tasks Yet

                        </h2>

                        <p className="
                            text-gray-500
                            mt-2
                        ">

                            Add your first task to stay productive.

                        </p>

                    </div>

                ) : (

                    <div className="space-y-4">

                        {todos.map((todo) => (

                            <div
                                key={todo.id}
                                className="
                                    bg-white
                                    rounded-3xl
                                    shadow
                                    p-5
                                    flex
                                    flex-col
                                    md:flex-row
                                    justify-between
                                    md:items-center
                                    gap-4
                                "
                            >

                                <div className="
                                    flex
                                    items-center
                                    gap-4
                                ">

                                    {

                                        todo.completed ? (

                                            <CheckCircle2
                                                className="
                                                    text-green-600
                                                "
                                                size={28}
                                            />

                                        ) : (

                                            <ListTodo
                                                className="
                                                    text-[#F4C430]
                                                "
                                                size={28}
                                            />

                                        )

                                    }

                                    <p
                                        className={`
                                            text-lg
                                            ${
                                                todo.completed
                                                    ? "line-through text-gray-400"
                                                    : "font-medium"
                                            }
                                        `}
                                    >

                                        {todo.task}

                                    </p>

                                </div>

                                <div className="
                                    flex
                                    flex-wrap
                                    gap-3
                                ">

                                    {

                                        !todo.completed && (

                                            <button
                                                onClick={() =>
                                                    completeTask(
                                                        todo.id
                                                    )
                                                }
                                                className="
                                                    bg-green-600
                                                    hover:bg-green-700
                                                    text-white
                                                    px-5 py-2
                                                    rounded-xl
                                                    font-medium
                                                "
                                            >

                                                Complete

                                            </button>

                                        )

                                    }

                                    <button
                                        onClick={() =>
                                            deleteTask(
                                                todo.id
                                            )
                                        }
                                        className="
                                            bg-red-600
                                            hover:bg-red-700
                                            text-white
                                            px-5 py-2
                                            rounded-xl
                                            font-medium
                                            flex
                                            items-center
                                            gap-2
                                        "
                                    >

                                        <Trash2 size={18} />

                                        Delete

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

}

export default Todos;