<script setup lang="ts">
import BaseCard from '@/components/baseCard/BaseCard.vue';
import IconPlus from '@/assets/icon-plus.svg';

const emit = defineEmits<{(e: 'click'): void }>();
</script>

<template>
  <base-card class="add-box" @click="emit('click')">
    <div class="icon">
      <icon-plus class="icon-plus" />
    </div>
    <p class="title">
      노트를 추가하세요!
    </p>
  </base-card>
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
