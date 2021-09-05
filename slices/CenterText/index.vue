<template>
  <section class="flex bg-black flex-col items-start container__content  laptop:items-center">
    <prismic-rich-text class="pt-32 heading__paragraph laptop:pt-44 laptop:text-center big-desktop:w-3/5" :field="slice.primary.paragraph" />
    <prismic-link class="pt-12 link--underline laptop:pt-16" :field="slice.primary.link">
      {{ slice.primary.linkLabel }}
    </prismic-link>
  </section>
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
