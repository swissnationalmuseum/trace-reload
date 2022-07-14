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
  <h1>{{ msg }}</h1>
  <h2>Persistent count: {{ count.state.value }}</h2>

  <div class="card">
    <button type="button" @click="count.set(0)">Reset count</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
