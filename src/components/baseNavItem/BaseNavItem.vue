<script setup lang="ts">
interface Props {
  text: string;
}

withDefaults(defineProps<Props>(), {
  text: '',
});
</script>

<template>
  <li class="base-nav-item">
    <slot />
    <span>
      {{ text }}
    </span>
  </li>
</template>

<style lang="scss">
.base-nav-item {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 10px;
  border-radius: 10px;
  margin: 0 10px;

  &:hover {
    background-color: rgb(56, 60, 82);
    cursor: pointer;
  }

  > svg {
    font-size: 20px;
    margin-right: 15px;
  }
}
</style>
