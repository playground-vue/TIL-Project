<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import BaseCard from '@/components/baseCard/BaseCard.vue';
import BaseTitle from '@/components/baseTitle/BaseTitle.vue';
import IconActivator from '@/assets/icon-activator.svg';
import BaseDropdown from '@/components/baseDropdown/BaseDropdown.vue';
import type { Props } from '@/components/cardNote/uses';
import { useOption } from '@/components/cardNote/uses';

const props = defineProps<Props>();
const emit = defineEmits<{(e: 'delete-note', value: number): void; }>();
const {
  target, optionItems, isShowOption, setOptionWindow,
} = useOption();

const clickOption = ({ value }: {value: 'delete'}) => {
  switch (value) {
    case 'delete':
      emit('delete-note', props.id);
      break;
    default:
      break;
  }
};

onClickOutside(target, () => setOptionWindow(false));

</script>

<template>
  <base-card class="card-note">
    <base-title v-if="!!props.title">
      <div class="card-note__title">
        <p>{{ props.title }}</p> <icon-activator class="card-note__activator" @click="setOptionWindow(!isShowOption)" />
      </div>
    </base-title>
    <div class="card-note__content">
      {{ props.content }}
    </div>
    <footer class="card-note__footer">
      {{ props.date }}
    </footer>
    <base-dropdown v-if="isShowOption" ref="target" class="card-note__dropdown" :select-items="optionItems" :is-show="isShowOption" @click="clickOption" />
  </base-card>
</template>

<style lang="scss" scoped>
.card-note {
  position: relative;
  width: 250px;
  height: 250px;

  &__title {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 22px;
    font-weight: 500;
  }

  &__activator {
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s ease-out;

    &:hover {
      background-color: #8985e0;
    }
  }

  &__content {
    height: calc(100% - 44px - 40px);
    margin-top: 5px;
    font-size: 16px;
  }

  &__footer {
    float: right;
    margin-top: 5px;
    font-size: 14px;
  }

  &__dropdown {
    position: absolute;
    top: 42px;
    left: calc(100% - 15px - 22px);
  }
}
</style>
