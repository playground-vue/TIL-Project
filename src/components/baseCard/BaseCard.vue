<template>
  <section
    class="base-card"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.base-card {
  padding: 0 15px;
  background-color: rgb(47, 51, 73);
  color: rgba(228, 230, 244, 0.68);
  border-radius: 6px;
  font-size: 16px;
  box-shadow:
    0 3px 9px 1px rgba(12, 16, 27, 0.15),
    0 9px 8px rgba(12, 16, 27, 0.01),
    0 1px 6px 4px rgba(12, 16, 27, 0.08);
}
</style>
