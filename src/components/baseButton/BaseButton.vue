<template>
  <button
    :type="props.nativeType"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useButton } from '@/components/baseButton/uses';

interface Props {
  nativeType: 'button' | 'reset' | 'submit';
}
interface Emit {
  (e: 'click'): void;
}

const props = withDefaults(defineProps<Props>(), {
  nativeType: 'button',
});
const emit = defineEmits<Emit>();

const {
  onClick,
} = useButton(emit);
</script>

<style lang="scss">
.button {

}
</style>
