<template>
  <demo-container>
    <div class="counter">
      <counter-button
        :disabled="counterStore.isDecrementDisabled"
        @action="counterStore.decrement"
        >-</counter-button
      >

      <counter-value :value="counterStore.value" />

      <counter-button @action="counterStore.increment">+</counter-button>
    </div>
  </demo-container>
</template>

<script setup>
import DemoContainer from "../components/DemoContainer.vue";
import CounterValue from "./CounterValue.vue";
import CounterButton from "./CounterButton.vue";
import { useCounterStore } from "../store";

const counterStore = useCounterStore();
</script>

<style scoped lang="scss">
.counter {
  display: flex;
  align-items: center;
}
</style>
