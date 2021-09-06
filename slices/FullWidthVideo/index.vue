<template>
  <section class='flex flex-col justify-center items-center'>
    <video-background
    src="/test_video.mp4"
    :sources="[
        {src: '/test_video.mp4', res: 900, autoplay: true},
        {src: '/test_video.mp4', res: 638, autoplay: true}
    ]"

    style="max-height: 400px; height: 80vh;"
    overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
>
    <div class='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
        <h1 class="heading__title--primary">
          {{ $prismic.asText(slice.primary.title) }}
        </h1>
        <prismic-link class="pt-12 link--underline laptop:pt-16" :field="slice.primary.link">
          {{ slice.primary.linkLabel }}
        </prismic-link>
    </div>

  </video-background>
</section>
</template>

<script>
export default {
  name: "FullWidthVideo",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data(){
    return {

    }
  }
}

</script>

<style scoped>
iframe{
  height: 100vh;
  widows: 100vw;
}

</style>
