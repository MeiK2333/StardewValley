<script setup lang="ts">
import { useSavesStore } from "@/stores/saves";
const store = useSavesStore();
</script>

<template>
  <div>{{ store.name }}</div>
</template>
