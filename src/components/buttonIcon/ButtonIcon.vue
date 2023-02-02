<template>
  <base-button
    class="button-icon"
    v-bind="props"
    @click="onClick"
  >
    <div class="button-icon__overlay" />
    <slot />
  </base-button>
</template>

<script setup lang="ts">
import BaseButton from '@/components/baseButton/BaseButton.vue';
import { useButtonIcon } from './uses';
import type { Props, Emit } from './uses';

const props = withDefaults(defineProps<Props>(), {
  nativeType: 'button',
  type: 'primary',
});
const emit = defineEmits<Emit>();

const {
  onClick,
} = useButtonIcon(props, emit);
</script>

<style lang="scss">
.button-icon {
  display: flex;
  position: relative;
  width: 38px;
  padding: 0;
  line-height: 38px;
  box-shadow: none;
  background-color: transparent;

  .button-icon__overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    &:hover {
      background-color: rgb(52, 56, 78);
      opacity: 0.3;
    }
  }
}
</style>
