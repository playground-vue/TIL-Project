<script setup lang="ts">
import BaseCard from '@/components/baseCard/BaseCard.vue';
import ButtonIcon from '@/components/buttonIcon/ButtonIcon.vue';
import IconSearch from '@/assets/icon-search.svg';
import IconLanguage from '@/assets/icon-language.svg';
import IconTheme from '@/assets/icon-theme.svg';
import IconFrame from '@/assets/icon-frame.svg';
import IconAlarm from '@/assets/icon-alarm.svg';
</script>

<template>
  <header class="layout-navbar">
    <base-card>
      <div class="layout-navbar__list">
        <button-icon>
          <icon-search />
        </button-icon>
        <div class="flex-grow">
          Search
        </div>
        <button-icon>
          <icon-language />
        </button-icon>
        <button-icon>
          <icon-theme />
        </button-icon>
        <button-icon>
          <icon-frame />
        </button-icon>
        <button-icon>
          <icon-alarm />
        </button-icon>
        <button-icon>
          INFO
        </button-icon>
      </div>
    </base-card>
  </header>
</template>

<style lang="scss">
.layout-navbar {
  position: sticky;
  color: rgba(228, 230, 244, 0.87);
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
