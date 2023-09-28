<script setup>
import { useTodo } from "../stores/todo";
const store = useTodo();
</script>

<template>
  <ul>
    <li v-for="todo in store.todoList" :key="`todo-item${todo.id}`">
      {{ todo.task }}
    </li>
  </ul>
</template>