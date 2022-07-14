<script setup lang="ts">
import { onMounted } from 'vue'
import useCount from '../composables/useCount';

defineProps<{ msg: string }>()

const count = useCount();

onMounted(() => {
  let currentCount = count.state.value;
  currentCount += 1;
  count.set(currentCount);
});

</script>

<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <h2>Reload count: {{ count.state.value }}</h2>
    <button type="button" @click="count.set(0)">Reset count</button>
  </div>
</template>

<style scoped>
.card {
  color: #888;
}
</style>
