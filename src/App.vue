<template>
  <div id="main">
    <Navigation></Navigation>
    <router-view/>
    <Footer></Footer>
  </div>
  
</template>
<script>
// @ is an alias to /src

import Footer from './layouts/Footer.vue'
import Navigation from './layouts/Navigation.vue'
// import Navigation from './layuts.Navigation.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    Navigation,
  }
}
</script>

<style>

</style>


