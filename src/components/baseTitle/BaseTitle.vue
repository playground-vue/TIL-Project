<template>
  <div class="base-title">
    <div class="base-title__title">
      <slot />
    </div>
    <span class="base-title__sub">
      <slot name="subTitle" />
    </span>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.base-title {
  display: block;

  &__title {
    font-size: 20px;
    line-height: 24px;
    color: rgba(228, 230, 244, 0.87);
  }
  &__sub {
    font-size: 14px;
    line-height: 20px;
    color: rgba(228, 230, 244, 0.38);
  }
}
</style>
