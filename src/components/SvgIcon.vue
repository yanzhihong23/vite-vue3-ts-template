<template>
  <svg :width="size ?? 24" :height="size ?? 24">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  size?: number
  color?: string
  name: string
}>()

const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style scoped></style>
