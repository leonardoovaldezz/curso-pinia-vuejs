<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useTodo } from "../stores/todo";
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";

const store = useTodo();
const { totalTodo, totalCompleted } = storeToRefs(store);
/*
console.log(store.totalTodo);
console.log(totalTodo);
console.log(totalTodo.value);
*/
const hasTodo = computed(() => {
  return store.totalTodo > 0 ? true : false;
});
</script>

<template>
  <p v-if="hasTodo">completed task {{ totalCompleted }} / {{ totalTodo }}</p>
  <TodoForm></TodoForm>
  <TodoList></TodoList>
  <p v-if="!hasTodo">nothing to do ? add a new task!!</p>
</template>