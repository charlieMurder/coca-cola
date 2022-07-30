<template>
  <div class="MainPage">
    <navbar-main class="navbar_main"></navbar-main>
    <first-screen></first-screen>
    <second-screen></second-screen>
    <third-screen></third-screen>
  </div>
</template>

<script>
import NavbarMain from './NavbarMain.vue'
import FirstScreen from './FirstScreen.vue'
import SecondScreen from './SecondScreen.vue'
import ThirdScreen from './ThirdScreen.vue'
export default {
  components: {
     NavbarMain,
     FirstScreen,
     SecondScreen,
     ThirdScreen,
    },
}
</script>

<style scoped lang="scss">
.navbar_main {
  position: fixed;
  width: 100%;
  z-index: 999;
}
</style>
