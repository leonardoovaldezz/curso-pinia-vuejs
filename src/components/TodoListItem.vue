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
    <div @click="toggleTodo(id)" class="text-black cursor-pointer">
      {{ id }} -- {{ task }} -- {{ completed }} -- {{ date }}
      <button
        @click="deleteTodo(id)"
        class="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  </li>
</template>