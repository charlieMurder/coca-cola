<template>
  <div NavbarMain>
    <div class="navbar">
        <img src="../assets/img/coca-cola_logo.png" alt="">
        <div class="navbar_list">
          <div class="navbar_list-wrapper" v-if="!isNavbarMenuOpen">
            <p class="navbar_list-item" v-for="item in items" :key="item">{{ item }}</p>
          </div>
          
          <button @click.prevent="toggleMenu" class="menuButton">
            <img v-if="!isNavbarMenuOpen" src="@/assets/img/menu_open.png" alt="">
            <img class="img_cross" v-else src="@/assets/img/menu_close.png" alt="">
          </button>
          
       </div>
    </div>
    <div :class="isNavbarMenuOpen?'navbar_menu-open':'navbar_menu-closed'" class="navbar_menu-wrapper">
      <div v-if="isNavbarMenuOpen" class="navbar_menu">
        <p v-for="item in items" :key="item">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'Main',
        'About',
        'Products',
        'Contacts',
      ],
      isNavbarMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isNavbarMenuOpen = !this.isNavbarMenuOpen
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  height: 3em;
  display: flex;
  justify-content: space-between;
  font-family: roboto;
  margin: 43px;
  background-color: transparent;
  &_list {
    display: flex;
    align-items: center;
    &-wrapper {
      display: flex;
      margin-right: 7em;
    }
    & p {
      margin: 0 38px;
      color: #fff;
      font-size: 16px;
      transition: 300ms;
      &:hover {
        cursor: pointer;
        transition: 300ms;
        transform: scale(1.1);
      }
    }
  }
  & .menuButton {
    border: none;
    background-color: transparent;
    transition: 300ms;
    &:hover {
      cursor: pointer;
    }
  }
  &_menu {
    font-family: 'Risque';
    font-weight: 400;
    font-size: 2px;
    line-height: 1.6px;
    color: #FFFFFF;
    margin-left: -13em;
    margin-bottom: -15em;
  }
  &_menu-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    position: absolute;
    top: 130px;
    right: 40px;
    transition: 1000ms;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-top: -6em;
  }
  &_menu-open {
    background-color: #D02B2B;
    transform: scale(20);
    transition: 1000ms;
  }
  .img_cross {
    z-index: 999;
  }
}
</style>
