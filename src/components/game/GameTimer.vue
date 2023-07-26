<script setup lang="ts">
interface Props {
  time: number
}

const props = defineProps<Props>()
</script>

<template>
  <div className="timer">
    {{ props.time.toFixed(2) }}
  </div>
</template>

<style scoped>
.timer {
  position: relative;
  width: 100%;
  padding: 10px;
  font-size: 50px;
  text-align: center;
}
</style>