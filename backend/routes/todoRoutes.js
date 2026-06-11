const express = require("express");
const router = express.Router();

const {
    addTodo,
    getTodos,
    getPendingTodoCount,
    completeTodo,
    deleteTodo
} = require(
    "../controllers/todoController"
);

router.post("/", addTodo);

router.get(
    "/count/:advocateId",
    getPendingTodoCount
);

router.get(
    "/:advocateId",
    getTodos
);

router.put(
    "/:id",
    completeTodo
);

router.delete(
    "/:id",
    deleteTodo
);

module.exports = router;