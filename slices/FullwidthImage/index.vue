<template>
  <section class="w-full bg-center bg-cover bg-no-repeat h-152" :style="{ backgroundImage: 'url(' + slice.primary.background.url + ')' }" />
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>

<script>
export default {
  name: "FullwidthImage",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>
