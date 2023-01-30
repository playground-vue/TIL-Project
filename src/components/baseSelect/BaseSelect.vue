<script setup lang="ts">
import type { SelectItem } from '@/components/baseDropdown/uses';
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import BaseDropdown from '@/components/baseDropdown/BaseDropdown.vue';
import BaseInput from '@/components/baseInput/BaseInput.vue';

interface Props {
  modelValue: SelectItem;
  items: SelectItem[];
  placeholder: string;
}

interface Emit {
  (e:'update:modelValue', value: SelectItem): void,
  (e:'on-change', value: SelectItem): void,
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({ name: '', value: '' }),
  items: () => [],
  placeholder: 'Select',
});

const emit = defineEmits<Emit>();

const target = ref(null);
const isClick = ref(false);

const toggleClick = (value: Event | boolean) => {
  isClick.value = typeof value === 'boolean' ? value : !isClick.value;
};

const changeItem = (newItem: SelectItem) => {
  emit('update:modelValue', newItem);
  emit('on-change', newItem);
  toggleClick(false);
};

onClickOutside(target, () => toggleClick(false));
</script>

<template>
  <div ref="target" class="base-select-wrapper">
    <div class="base-select" :class="isClick && 'base-select--clicked'" @click="toggleClick">
      <base-input :model-value="props.modelValue.name" :placeholder="props.placeholder" label="" class="base-select__input" />
      <div class="base-select__icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon" :class="isClick && 'icon--clicked'">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
    <base-dropdown
      v-if="isClick"
      :select-items="props.items"
      :is-show="isClick"
      @click="changeItem"
    />
  </div>
</template>

<style lang="scss">
.base-select-wrapper {
  display: inline-block;
}
.base-select {
  box-sizing: border-box;
  width: 176px;
  height: 40px;
  display: inline-flex;
  padding: 5px 12px;
  cursor: pointer;
  border: 1.5px solid rgba(207, 211, 236, 0.12);
  border-radius: 6px;
  background-color: #2F3349;
  color: #E4E6F4AD;

  &:hover {
    transition: border ease-in-out 0.1s;
    border-color: #999CAD;
  }

  &--clicked {
    border: 2px solid #7367F0;

    &:hover {
      border: 2px solid #7367F0;
    }
  }

  &__input {
    width: calc(100% - 28px);
    height: 100%;
    border: none;
    background-color: transparent;
    pointer-events: none;
    letter-spacing: .009375em;
    font-size: 16px;
    color: rgb(205,208,222);

    .base-input__input {
      height: 100%;
      border: none;
    }

    &::placeholder {
      color: #E4E6F4AD;
    }
  }

  &__icon {
    width: 28px;
    text-align: center;
    background-color: transparent;

    .icon {
      width: 24px;
      height: 24px;
      transition: transform ease-in-out 0.3s;

      &--clicked {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
