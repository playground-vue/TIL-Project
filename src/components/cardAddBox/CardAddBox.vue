<script setup lang="ts">
import { ref } from 'vue';
import BaseCard from '@/components/baseCard/BaseCard.vue';
import IconPlus from '@/assets/icon-plus.svg';
import AddNotePopup from '@/components/AddNotePopup.vue';
import type { Props as CardNoteProps } from '@/components/cardNote/uses';

const emit = defineEmits<{(e: 'add-note', value: CardNoteProps): void }>();

const isShow = ref(false);
const openPopup = () => {
  isShow.value = true;
};
const closePopup = () => {
  isShow.value = false;
};

const addNote = (newNote: CardNoteProps) => {
  emit('add-note', newNote);
  closePopup();
};
</script>

<template>
  <base-card class="add-box" @click="openPopup">
    <div class="icon">
      <icon-plus class="icon-plus" />
    </div>
    <p class="title">
      노트를 추가하세요!
    </p>
  </base-card>
  <add-note-popup v-if="isShow" :is-show="isShow" @add-note="addNote" @click-close="closePopup" />
</template>

<style lang="scss" scoped>
.add-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 250px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  .icon {
    width: 30%;
    height: 30%;
    font-size: 40px;
    border-radius: 50%;
    border: 2px dashed #8985e0;

    &-plus {
      width: 100%;
      height: 100%;
      color: #8985e0;
    }
  }

  .title {
    color: #8985e0;
    font-weight: 500;
    margin-top: 20px;
  }
}
</style>
