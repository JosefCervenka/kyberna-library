<template>
  <section class="main">
      <div class="icon">
          <img src="cloud.svg" alt="claod">
      </div>
      <nav class="pc">
        <router-link to="/"><span>Library</span></router-link>
        <router-link to="/adder"><span>Add new link</span></router-link>
      </nav>
      <nav class="mobile">

      </nav>
  </section>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped lang="scss">
.main{
    position: fixed;
    z-index: 1;
    display: flex;
    flex: 1;
    width: 100%;
    height: 60px;
    background-color: #e9671e;;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    .icon{
        width: 50px;
        height: 50px;
    }
    @media only screen and (max-width: 600px)  {
      .pc{
        display: none;
      }
    }
  .pc{
    padding-left: 20px;
      span{
        color: white;
        padding-right: 20px;
    }
  }
}
</style>