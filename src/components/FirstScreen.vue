<template>
  <div class="FirstScreen">
    <img id="stars" class="stars" src="../assets/img/stars.png" alt="">
    
    <div class="FirstScreen_wrapper">
      <div class="FirstScreen_header">
        <h1>Main Site Title</h1>
        <h3>Lorem ipsum descripsum</h3>
        <button>Call to action</button>
      </div>
    </div>
    <div class="ded_wrapper">
      <!-- <img id="cloud" class="cloud" src="../assets/img/Cloud.png" alt=""> -->
      <div id="cloud" class="cloud">
        <p>How how how !!! <br> Like it? <br> Scroll down for more !</p>
      </div>
      <img id="dedcoca" class="dedcoca" src="../assets/img/dedcoca.png" alt="">
    </div>
    <div class="snowflake_wrapper">
      <img class="snowflake" src="../assets/img/snowflake.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.FirstScreen {
  background-color: #141429;
  height: 100vh;
  width: 100%;
  display: flex;
  &_wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 0;
  }
  &_header {
    margin-left: 148px;
    font-family: risque;
    & button {
      background-color: transparent;
      border: 2px solid #FFFFFF;
      border-radius: 20px 20px 20px 0px;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      color: #FFFFFF;
      padding: 0.3em 3em;
      transition: 300ms;
      margin: 0.3em 0;
      &:hover {
        cursor: pointer;
        transition: 300ms;
        background-color: #fff;
        color: #141429;
      }
    }
  }
  .dedcoca {
    position: absolute;
    width: 50em;
    height: 30em;
    right: 0px;
    bottom: 0px;
    z-index: 1;
  }

  .cloud {
    width: 20em;
    height: 14em;
    position: absolute;
    bottom: 10em;
    margin-left: -20px;
    background-image: url(@/assets/img/Cloud.png);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-delay: 3000ms;
    animation: cloud-fadein 6s alternate;
    & p {
      margin-left: -1em;
      margin-top: -0.1em;

      font-family: 'Risque';
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #000000;
    }
  }

  @keyframes cloud-fadein {
    0%{ opacity: 0; }
    50%{ opacity: 0 }
    100%{ opacity: 1; }
  }

  & .stars {
      position: absolute;
      pointer-events: none;
      animation: shining 2s infinite alternate;
      width: 100%;
      height: 100%;
  }

  @keyframes shining {
    0%{ opacity: 1; }
    100%{ opacity: 0; }
  }

  & .snowflake{
    pointer-events: none;
    position: absolute;
    left: -1060px;
    bottom: -30px;
    animation: snowflake 45s linear infinite;
  }

  @keyframes snowflake {
      0% {transform: rotate(0deg);}
      100%{transform: rotate(360deg);}
  }
}
</style>
