<script setup lang="ts">
import { reactive } from 'vue';
import BaseInput from '@/components/baseInput/BaseInput.vue';
import BaseButton from '@/components/baseButton/BaseButton.vue';
import router from '@/router';

const loginFormInfo = reactive({
  id: '',
  pw: '',
});
const submitLogin = () => {
  router.push('/analyticsView');
};
</script>

<template>
  <div class="login-view">
    <div class="login-form-wrapper">
      <form @submit.prevent="submitLogin">
        <fieldset>
          <legend>
            Login ID & PW
          </legend>

          <BaseInput
            v-model="loginFormInfo.id"
            class="login-form__input"
            label="ID"
          />
          <BaseInput
            v-model="loginFormInfo.pw"
            class="login-form__input"
            label="PW"
          />
        </fieldset>

        <BaseButton
          native-type="submit"
        >
          Login
        </BaseButton>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.login-view {
  background-color: rgb(47, 51, 73);
  min-block-size: 936px;

  .login-form-wrapper {
    display: flex;
  }
  .login-form__input {
    width: 300px;

    .base-input__label {
      width: 30px;
    }
  }
}
</style>
