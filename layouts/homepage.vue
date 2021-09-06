<template>
  <div class='bg-black'>
    <HeaderNav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'
export default {
  // Called before rendering the layout (even for error page)
  async middleware ({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic)
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Multi Page Website'
    }
  },
  components:{
    HeaderNav,
    Footer
  }
}
</script>

<style scoped>
</style>
