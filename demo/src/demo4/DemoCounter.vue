<template>
  <div class="counter">
    <counter-button :disabled="counterStore.isDecrementDisabled" @action="counterStore.decrement">-</counter-button>

    <counter-value :value="counterStore.value" />

    <counter-button @action="counterStore.increment">+</counter-button>
  </div>
</template>

<script setup>
import CounterValue from "./CounterValue.vue";
import CounterButton from "./CounterButton.vue";
import { useCounterStore } from "../store";

const counterStore = useCounterStore()

</script>

<style scoped lang="scss">
.counter {
  display: flex;
  align-items: center;
}
</style>
