<template>
  <button
    :type="props.nativeType"
    :class="['base-button', buttonTypeClass]"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useButton } from './uses';
import type { Props, Emit } from './uses';

const props = withDefaults(defineProps<Props>(), {
  nativeType: 'button',
  type: 'primary',
});
const emit = defineEmits<Emit>();

const {
  buttonTypeClass,
  onClick,
} = useButton(props, emit);
</script>

<style lang="scss">
.base-button {
  height: 38px;
  padding: 0 20px;
  border: 0;
  border-radius: 8px;
  font-size: 14px;
  color: rgb(255, 255, 255);
  box-shadow:
    0 3px 5px 2px rgba(12, 16, 27, 0.15),
    0 5px 3px rgba(12, 16, 27, 0.01),
    0 1px 4px 2px rgba(12, 16, 27, 0.08);
  align-items: center;
  user-select: none;
  cursor: pointer;

  &--primary {
    background-color: rgb(115, 103, 240);
  }
  &--secondary {
    background-color: rgb(168, 170, 174);
  }
  &--success {
    background-color: rgb(40, 199, 111);
  }
  &--info {
    background-color: rgb(0, 207, 232);
  }
  &--warning {
    background-color: rgb(255, 159, 67);
  }
  &--error {
    background-color: rgb(234, 84, 85);
  }
}
</style>
