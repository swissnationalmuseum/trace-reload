<script setup lang="ts">
import { formatISO, getTime } from 'date-fns';
import { computed, onMounted } from 'vue';

import useCount from '../composables/useCount';
import useTimestamps from '../composables/useTimestamps';

defineProps<{ msg: string }>();

const count = useCount();
const timestamps = useTimestamps();

onMounted(() => {
  let currentCount = count.state.value;
  currentCount += 1;
  count.set(currentCount);

  const currentTimestamps = timestamps.state.value;
  currentTimestamps.push(getTime(new Date()));
  timestamps.set(currentTimestamps);
});

const color = computed(() => (count.state.value > 1 ? '#721c24' : '#155724'));

function reset() {
  count.set(1);
  const currentTimestamps = [];
  currentTimestamps.push(getTime(new Date()));
  timestamps.set(currentTimestamps);
}
</script>

<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <p class="count">{{ count.state.value }}</p>
    <button type="button" @click="reset()">Reset Count</button>
    <h2>Load Timestamps</h2>
    <div v-for="(timestamp, index) of timestamps.state.value" :key="index">
      <p>{{ formatISO(timestamp) }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  color: #888;
}
.count {
  font-size: 15rem;
  font-weight: bold;
  color: v-bind(color);
}
</style>
