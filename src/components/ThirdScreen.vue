<template>
  <div class="ThirdScreen">
    <div class="ThirdScreen_wrapper">
      <h2>Write us <br> for real presents</h2>
      <div class="ThirdScreen_form">
        <div class="ThirdScreen_form-grid">
          <input class="input" type="text" placeholder="Name">
          <input class="input" type="tel" placeholder="Phone">

          <input class="input" type="text" placeholder="Gender">

          <input class="input" type="email" placeholder="Email">
          <textarea class="textarea" name="" id="" cols="30" rows="10" placeholder="Your wish"></textarea>
        </div>
        <div class="ThirdScreen_form-checkbox">
          <input type="checkbox" class="checkbox"
            style="align-self:center; margin: 1em; --size: 20px; --radius: 3px; border:2px solid #D02B2B; --bg: #fff; --color: #D02B2B; --time: 0.4s;">
          <p>Want Coca-cola with present ?</p>
        </div>

        

      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.ThirdScreen {
  height: 100vh;
  width: 100%;
  background-image: url(../assets/img/screen3back.png);
  background-size: cover;
  display: flex;
  align-items: center;
  &_wrapper {
    margin-left: 80px;
  }
  &_form {
    &-checkbox {
      display: flex;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #D02B2B;
    }
  }
  &_form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 2fr;
    grid
    & input {
      height: 48px;
    }
  }
  & textarea {
    height: 76px;
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>
