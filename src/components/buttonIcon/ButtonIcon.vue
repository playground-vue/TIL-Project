<template>
  <BaseButton
    class="button-icon"
    v-bind="props"
    @click="onClick"
  >
    <div class="button-icon__overlay">
      <slot />
    </div>
  </BaseButton>
</template>

<script setup lang="ts">
import type { ButtonNativeType, ButtonType } from '@/components/baseButton/uses';
import BaseButton from '@/components/baseButton/BaseButton.vue';
import { useButtonIcon } from './uses';

interface Props {
  nativeType?: ButtonNativeType;
  type?: ButtonType;
}
interface Emit {
  (e: 'click'): void;
}

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
  width: 38px;
  padding: 0;
  line-height: 38px;
  box-shadow: none;
  background-color: transparent;

  .button-icon__overlay {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    &:hover {
      background-color: rgb(52, 56, 78);
    }
  }
}
</style>
