import { Router } from 'express';
import todoController from '../controllers/todoController';

const router = Router();

// Get all todos (with optional filters)
router.get('/', todoController.getAllTodos);

// Get single todo by ID
router.get('/:id', todoController.getTodoById);

// Create new todo
router.post('/', todoController.createTodo);

// Update todo
router.put('/:id', todoController.updateTodo);

// Toggle todo completion status
router.patch('/:id/toggle', todoController.toggleTodo);

// Delete todo
router.delete('/:id', todoController.deleteTodo);

export default router;
