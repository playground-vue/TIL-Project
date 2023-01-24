<script setup lang="ts">
import BaseCard from '@/components/baseCard/BaseCard.vue';
import ButtonIcon from '@/components/buttonIcon/ButtonIcon.vue';
</script>

<template>
  <header class="layout-navbar">
    <BaseCard>
      <div class="layout-navbar__list">
        <ButtonIcon>
          =
        </ButtonIcon>
        <ButtonIcon>
          Q
        </ButtonIcon>
        <div class="flex-grow">
          Search
        </div>
        <ButtonIcon>
          영/한
        </ButtonIcon>
        <ButtonIcon>
          해
        </ButtonIcon>
        <ButtonIcon>
          네모
        </ButtonIcon>
        <ButtonIcon>
          알람
        </ButtonIcon>
        <ButtonIcon>
          INFO
        </ButtonIcon>
      </div>
    </BaseCard>
  </header>
</template>

<style lang="scss">
.layout-navbar {
  position: sticky;
  color: rgba(228, 230, 244, 0.87);
  padding: 15px 20px;
  top: 0;
  opacity: 0.7;
  backdrop-filter: blur(30px);

  &__list {
    display: flex;
    height: 64px;
    padding: 0 10px;
    align-items: center;
  }
  .flex-grow {
    flex-grow: 1;
  }
}
</style>
