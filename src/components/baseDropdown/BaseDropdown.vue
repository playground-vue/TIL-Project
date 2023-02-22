<script setup lang="ts">
import type { Props, Emit } from '@/components/baseDropdown/uses';

const props = withDefaults(defineProps<Props>(), {
  selectItems: () => [],
  isShow: false,
});
const emit = defineEmits<Emit>();

const onClick = (selectItem: Props['selectItems'][0]) => {
  emit('click', selectItem);
};

</script>

<template>
  <div class="base-dropdown" :class="isShow && 'base-dropdown--opened'">
    <ul class="base-dropdown__items">
      <li v-for="(selectItem, index) in props.selectItems" :key="index" class="base-dropdown__item" @click="onClick(selectItem)">
        {{ selectItem.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.base-dropdown {
  position: relative;
  width: 176px;
  padding: 8px 0;
  border-radius: 5px;
  background-color: #2F3349;
  box-shadow:
    0 5px 11px 3px rgba(12, 16, 27, 0.15),
    0 11px 8px 1px rgba(12, 16, 27, 0.01),
    0 3px 8px 4px rgba(12, 16, 27, 0.08);
  color: rgb(205,208,222);
  z-index: 1000;

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-1.25em);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &--opened {
    animation-name: fadeInDown;
    animation-duration: 0.5s;
  }

  .base-dropdown__items {
    margin: 4px 8px;
    padding: 4px;
    list-style: none;

  }

  .base-dropdown__item {
    min-height: 28px;
    padding: 4px 8px;
    line-height: 28px;
    font-size: 16px;

    &:hover {
      cursor: pointer;
      border-radius: 5px;
      color: rgb(110,98,227);
      background-color: rgb(62,62,111);
    }
  }
}
</style>
