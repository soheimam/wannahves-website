<template>
  <section class="container__content tablet:flex tablet:justify-between tablet:items-center" :style="`background-color: ${slice.primary.backgroundColor}`">
    <div class="tablet:w-1/2">
      <prismic-rich-text class="pb-8 quote quote--small" :field="slice.primary.title" :style="`color: ${slice.primary.textColor}`" />
      <prismic-rich-text class="pb-12 paragraph" :field="slice.primary.description" :style="`color: ${slice.primary.textColor}`" />
    </div>
    <div class="tablet:w-2/5 desktop:w-1/5">
      <prismic-link class="flex p-4	justify-between items-center link" :field="slice.primary.link" :style="`background-color:${slice.primary.buttonColor}; color: ${slice.primary.linkColor}`">
        <span>{{ slice.primary.linkLabel }}</span>
        <span :class="setArrowColor ? 'arrow arrow__right' : 'arrow arrow__right filter__pink'" />
      </prismic-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data () {
    return {
      setArrowColor: this.slice.primary.setArrowColor
    }
  }
}
</script>

<style scoped>
  .arrow {
    display: inline-block;
    height: 15px;
    width: 30px;
  }
  .filter__pink {
    filter: invert(45%) sepia(77%) saturate(6899%) hue-rotate(319deg) brightness(103%) contrast(101%);
  }
  .arrow__right {
    background: url("~/assets/images/arrow_right.svg") 100%;
  }
</style>
