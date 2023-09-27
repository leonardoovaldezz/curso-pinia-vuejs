<script setup>
import { useCounter } from "../stores/counter";
import { storeToRefs } from "pinia";

const store = useCounter();
const { name, count, doubleCount, nameUppercase } = storeToRefs(store);

const { increment, reverseName } = store;
</script>

<template>
  <div>
    <p>Counter: {{ count }}</p>
    <p>DoubleCount: {{ doubleCount }}</p>
    <p>Name: {{ name }}</p>
    <p>Uppercase: {{ nameUppercase }}</p>
    <hr />
    <button @click="increment">Incrementar</button>
    <button @click="reverseName">reverseName</button>
  </div>
</template>
