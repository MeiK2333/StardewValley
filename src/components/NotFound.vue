<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <p>
    页面 {{ route.params.pathMatch[0] }} 不存在，
    <router-link :to="{ name: 'home' }"> 点击回到首页 </router-link>
  </p>
</template>
