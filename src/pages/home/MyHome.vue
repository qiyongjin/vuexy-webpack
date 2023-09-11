<script lang="ts" setup>
import {ref} from 'vue'
import {VAlert} from 'vuetify/components/VAlert'

const alertShadow = ref(5)
</script>
<template>
  <div class="home">
    <h1>欢迎使用vuexy 代码搬运工</h1>
  <VAlert
    color="primary"
    :elevation="alertShadow"
  >
    I'm an alert with box shadow.
  </VAlert>
  </div>
</template>

<style lang="scss">
.home {
  color: #333;
  margin-block: auto;
  margin-inline: auto;
}
</style>
