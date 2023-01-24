<script setup lang="ts">
</script>

<template>
  <footer class="layout-footer">
    <section class="layout-footer-info">
      <dl>
        <dt class="sr-only">
          Project
        </dt>
        <dd>Dashboard Project</dd>
        <dt>Team</dt>
        <dd>김도은 & 김병완</dd>
        <dt>Github</dt>
        <dd><a href="https://github.com/playground-vue/TIL-Project">TIL-Project</a></dd>
        <dt>License</dt>
        <dd>MIT</dd>
      </dl>
    </section>
  </footer>
</template>

<style lang="scss">
.layout-footer {
  height: 56px;
  line-height: 56px;
  padding: 0 20px;
  color: rgba(228, 230, 244, 0.68);

  .sr-only {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
  }
  dl {
    display: flex;
  }
  dt {
    font-weight: 700;
    margin-right: 5px;
  }
  dd {
    font-weight: 400;
    &::after {
      display: inline-block;
      content: '';
      width: 1px;
      height: 12px;
      margin: 0 7px;
      background: #000;
    }
    &:last-child::after {
      display: none;
    }
  }
}
</style>
