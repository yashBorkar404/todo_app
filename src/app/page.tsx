"use client";

import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { Todo } from "../types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load todos from localStorage on initial render
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        // Parse the stored JSON and convert string dates back to Date objects
        const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
        setTodos(parsedTodos);
      } catch (error) {
        console.error("Failed to parse todos from localStorage", error);
      }
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date()
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completion status
  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-2xl px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">Todo App</h1>
        
        <div className="p-6 bg-white rounded-lg shadow-md">
          <TodoForm onAdd={handleAddTodo} />
          <TodoList 
            todos={todos} 
            onToggle={handleToggleTodo} 
            onDelete={handleDeleteTodo} 
          />
          
          <div className="mt-6 text-sm text-gray-500">
            <p>{todos.length} {todos.length === 1 ? 'task' : 'tasks'} | {todos.filter(t => t.completed).length} completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
