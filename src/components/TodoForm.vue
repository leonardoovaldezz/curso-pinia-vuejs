<script setup>
import { ref } from "vue";
import { useTodo } from "../stores/todo";

const store = useTodo();
const task = ref("");

function addNewTask() {
  if (task.value.trim().length === 0) {
    return;
  }
  store.addTodo(task.value.trim());
  task.value = "";
}
</script>

<template>
  <form action="" @submit.prevent="addNewTask()" class="mb-4">
    <input
      type="text"
      v-model="task"
      class="border p-2 w-full rounded text-green-500"
      placeholder="Add a new task..."
    />
    <br><br>
    <button type="submit" class="bg-primary text-white py-2 px-4 rounded">
      Add
    </button>
  </form>
</template>

