<!-- TodoListItem.vue -->
<script setup>
import { toRefs } from "vue";
import { useTodo } from "../stores/todo";

const { toggleTodo, deleteTodo } = useTodo();
const props = defineProps({
  id: Number,
  task: String,
  completed: Boolean,
  date: String,
});

const { id, task, completed, date } = toRefs(props);
</script>
  
<template>
  <li>
    <div @click="toggleTodo(id)">
      {{ id }} -- {{ task }} -- {{ completed }} -- {{ date }}
      <button @click="deleteTodo(id)">Delete</button>
    </div>
  </li>
</template>