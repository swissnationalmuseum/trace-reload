import { useStorage } from '@vueuse/core';
import { computed } from 'vue';

// keep the state outside the function to share it across every component using the composable
const state = useStorage<number[]>('timestamps', [], localStorage);

export default function useTimestamps() {
  function set(value: number[]) {
    state.value = value;
  }
  return {
    state: computed(() => state.value),
    set,
  };
}
