<script setup lang="ts">
import CardAddBox from '@/components/cardAddBox/CardAddBox.vue';
</script>
<template>
  <div class="todo-view">
    <card-add-box />
  </div>
</template>

<style scoped>
.todo-view {
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fill, 250px);
  height: calc(100vh - 94px - 30px - 56px);
  overflow-y: auto;
}
</style>
