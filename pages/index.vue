<template>
  <section>
    <slice-zone type="page" uid="homepage" />
  </section>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  name: 'Index',
  components: {
    SliceZone,
  },
  layout: 'homepage',
  // Called before rendering the layout (even for error page)
}
</script>
