<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  text: string;
  isSelected?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  isSelected: false,
});
const navItemCls = computed(() => {
  if (!props.isSelected) {
    return '';
  }
  return 'base-nav-item--is-selected';
});
</script>

<template>
  <li
    class="base-nav-item"
    :class="navItemCls"
  >
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

  &--is-selected {
    background-color: rgba(95, 88, 191, 0.8);
    box-shadow:
      0 3px 1px -2px rgba(12, 16, 27, 0.15), rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(12, 16, 27, 0.01), rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(12, 16, 27, 0.01), rgba(0, 0, 0, 0.12);

    &:hover {
      background-color: rgb(95, 88, 191);
      cursor: pointer;
    }
  }

  > svg {
    font-size: 20px;
    margin-right: 15px;
  }
}
</style>
