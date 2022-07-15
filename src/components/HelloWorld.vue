<script setup lang="ts">
import { computed, onMounted } from 'vue'
import useCount from '../composables/useCount';

defineProps<{ msg: string }>()

const count = useCount();

onMounted(() => {
  let currentCount = count.state.value;
  currentCount += 1;
  count.set(currentCount);
});

const color = computed(() => count.state.value > 1 ? '#721c24' : '#155724');
</script>

<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <p class="count" >{{ count.state.value }}</p>
    <button type="button" @click="count.set(1)">Reset count</button>
  </div>
</template>

<style scoped>
.card {
  color: #888;
}
.count {
  font-size: 15rem;
  font-weight: bold;
  color: v-bind(color)
}
</style>
