<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="sv-main">
    <div class="solid-1">
      <div class="solid-2">
        <div class="solid-3">
          <div class="solid-4">
            <div class="solid-5">
              <RouterView />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sv-main {
  height: 600px;
  width: 860px;
  min-width: 860px;
  background: linear-gradient(top, rgb(255, 203, 123), rgb(235, 168, 103));
  background: -webkit-linear-gradient(
    top,
    rgb(255, 203, 123),
    rgb(235, 168, 103)
  );
}
.solid-1 {
  border: 4px solid rgb(91, 43, 42);
  height: 100%;
}
.solid-2 {
  border: 4px solid rgb(177, 78, 5);
  height: calc(100% - 8px);
}
.solid-3 {
  border: 4px solid rgb(220, 123, 5);
  height: calc(100% - 8px);
}
.solid-4 {
  border: 4px solid rgb(133, 54, 5);
  height: calc(100% - 8px);
}
.solid-5 {
  border: 4px solid rgb(214, 143, 84);
  height: calc(100% - 8px);
}
</style>
