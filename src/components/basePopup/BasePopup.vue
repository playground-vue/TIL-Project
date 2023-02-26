<script setup lang="ts">
import IconClose from '@/assets/icon-close.svg';

const props = defineProps<{
  isShow: boolean;
  title: string;
  buttonName: string;
}>();
const emit = defineEmits<{(e: 'click-close'): void; (e: 'click-button'): void; }>();

</script>

<template>
  <div class="popup-box">
    <div class="popup">
      <header class="popup__header">
        {{ title }}
        <icon-close class="icon-close" @click="emit('click-close')" />
      </header>
      <slot />
      <footer class="popup__footer">
        <button type="button" @click="emit('click-button')">
          {{ buttonName }}
        </button>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  color: #8985e0;
  z-index: 10;

  .popup {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 400px;
    transform: translate(-30%, -50%);
    border-radius: 5px;
    background-color: rgb(47, 51, 73);

    &__header {
      display: flex;
      justify-content: space-between;
      margin: 0 5px;
      padding: 25px 15px;
      border-bottom: 1px solid #8985e0;
      font-size: 20px;
      font-weight: 500;

      .icon-close{
          cursor: pointer;
          border-radius: 50%;
          transition: background-color 0.3s ease-out;

          &:hover {
            background-color: rgba(#8985e0, 0.3);
          }
      }
    }

    &__form {
      margin: 15px 25px;

      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }

      label {
        width: 25px;
      }

      :where(input, textarea) {
        width: calc(100% - 80px);
        outline: none;
        border-radius: 4px;
        border: 1px solid #999999;
      }

      input {
        height: 30px;
      }

      textarea {
        height: 50px;
      }
    }

    &__footer {
      display: flex;
      justify-content: right;
      margin: 0 25px 10px;

      button {
        cursor: pointer;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        background-color: #8985e0;
        color: rgb(47, 51, 73);
        opacity: 0.8;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
