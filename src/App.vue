<template>
  <TituloComp />
  <router-view />
  <Footercomp />
  
</template>

<script>

  import TituloComp from './components/Titulo.vue'
  // import BlusaView from './views/Blusa.vue'
  import Footercomp from './components/Footer.vue'
  export default {
  
  name: 'App',
    components: {
      TituloComp,
      // BlusaView,
      Footercomp
    }
  }
</script>

<style>
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }
</style>


