<script setup lang="ts">
import { numToPx } from '@/common/utils';
import { computed } from 'vue';

interface Props {
  navPadding: number;
}

const props = withDefaults(defineProps<Props>(), {
  navPadding: 260,
});

const navPaddingPx = computed(() => numToPx(props.navPadding));
</script>

<template>
  <aside>
    <aside class="base-nav--vertical">
      <div class="nav-header">
        NAV HEADER
      </div>
      <ul class="nav-items">
        <li class="nav-link">
          Dashboard
        </li>
        <li class="nav-link">
          eCommerce
        </li>
        <li class="nav-link">
          CRM
        </li>
      </ul>
    </aside>
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
}
.nav-link {
  height: 44px;
}
</style>
