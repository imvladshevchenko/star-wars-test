<template>
  <div id="app">
    <Preloader/>
    <NavBar/>
    <Cards/>
    <Footer/>
  </div>
</template>

<script>
import Preloader from './components/Preloader.vue'
import NavBar from './components/NavBar.vue'
import Cards from './components/Cards.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
    data() {
    return {
      peopleList: null
    };
  },
  components: {
    Preloader,
    NavBar,
    Cards,
    Footer
  },

}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>