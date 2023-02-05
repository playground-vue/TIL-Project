<script setup lang="ts">
import BaseNavItem from '@/components/baseNavItem/BaseNavItem.vue';
import type { Props } from './uses';
import { useBaseNav } from './uses';

const props = withDefaults(defineProps<Props>(), {
  navPadding: 260,
});

const {
  navList,
  navPaddingPx,
  isSameCurrentRoute,
} = useBaseNav(props);

</script>

<template>
  <aside>
    <nav class="base-nav--vertical">
      <div class="nav-header">
        MENU
      </div>
      <ul class="nav-items">
        <template
          v-for="info in navList"
          :key="info.key"
        >
          <RouterLink :to="info.to">
            <base-nav-item
              :text="info.text"
              :is-selected="isSameCurrentRoute(info.to)"
            >
              <component :is="info.icon" />
            </base-nav-item>
          </RouterLink>
        </template>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss">
.base-nav--vertical {
  position: fixed;
  z-index: 1004;
  display: flex;
  flex-direction: column;
  block-size: 100%;
  inline-size: v-bind('navPaddingPx');
  background-color: rgb(47, 51, 73);
}
.nav-header {
  display: flex;
  overflow: hidden;
  min-block-size: 64px;
  padding: 0 10px;
  margin: 0 10px;
  align-items: center;
  font-size: 22px;
}
.nav-items {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
