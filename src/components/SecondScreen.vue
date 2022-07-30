<template>
  <div class="SecondScreen">
    <div class="SecondScreen_wrapper">

      <div class="SecondScreen_menu">
        <h2>At least somewhere you can feel new year atmosphere</h2>
        <h3>Choose your present:</h3>
        <div class="SecondScreen_presents">
          <div 
            v-for="present in presents" 
            :key="present.name" 
            class="SecondScreen_presents-wrapper"
            @click="changePresent(present)"
          >
            <img :src="present.img" alt="" class="SecondScreen_presents-image">
          </div>
        </div>
      </div>

      <div class="SecondScreen_display">
        <div class="SecondScreen_display-wrapper">
          <div class="SecondScreen_display-info">
            <h3>{{ currentPresent.title }}</h3>
            <p>{{ currentPresent.desc }}</p>
          </div>
          <img :src="currentPresent.img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      presents: [
        {name:"sock",img: require("@/assets/img/sock.png"),title:'Best sock ever',desc:'Reuglar sock have no present inside Lorem Ipsum is simply dumm  y text of the printing and types etting industry. Lorem'},
        {name:"hat",img: require("@/assets/img/hat.png"),title:'Christmas hat',desc:'Reuglar hat have no present inside Lorem Ipsuadwawdawdawdm is simply dumm  y text of the printing and types etting industry. Lorem'},
        {name:"bag",img: require("@/assets/img/bag.png"),title:'Red bag',desc:'Reuglar bag have no present inside Lorem text of the printing and types etting industry. Lorem'},
      ],
      currentPresent: null
    }
  },
  methods: {
    changePresent(chosenPresent) {
      this.currentPresent = chosenPresent
    },
  },
  beforeMount() {
    this.currentPresent = this.presents[0]
  },
}
</script>

<style scoped lang="scss">
.SecondScreen {
  height: 100vh;
  width: 100%;
  background-image: url(../assets/img/screen2back.png);
  background-size: cover;
  &_wrapper {
    height: 100%;
    margin: 0 80px;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
  &_menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 75%;
  }
  &_presents {
    display: flex;
    &-wrapper {
      margin-right: 2em;
      padding: 1.3em;
      background-color: #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-content: center;
      transition: 300ms;
      &:hover {
        transition: 300ms;
        transform: scale(1.1);
        cursor: pointer;
      }
      &:enabled {
        transition: 300ms;
        background-color: transparent;
      }
    }
    &-image {
      width: 100px;
      height: 100px;
      align-self: center;
    }
  }
  &_display {
    border: 3px solid #fff;
    border-radius: 20px;
    align-self: center;
    width: 75%;
    height: 50%;
    display: flex;
    align-content: center;
    &-wrapper {
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 3em;
      & img {
        width: 30%;
        height: 60%;
      }
    }
    &-info {
      width: 60%;
      & p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 28px;
        line-height: 33px;
        color: #FFFFFF;
      }
    }
  }
}
</style>
