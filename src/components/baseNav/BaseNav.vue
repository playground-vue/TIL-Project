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
    <nav class="base-nav--vertical">
      <div class="nav-header">
        <RouterLink to="/login">
          NAV HEADER
        </RouterLink>
      </div>
      <ul class="nav-items">
        <li
          class="nav-link"
        >
          <RouterLink to="/analyticsView">
            Analytics
          </RouterLink>
        </li>
        <li class="nav-link">
          <RouterLink to="/eCommerceView">
            eCommerce
          </RouterLink>
        </li>
        <li class="nav-link">
          <RouterLink to="/crmView">
            CRM
          </RouterLink>
        </li>
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
}
.nav-link {
  height: 44px;
}
</style>
