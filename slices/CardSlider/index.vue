<template>
  <section class="container__content">
    <div class="flex justify-between mb-8">
      <prismic-rich-text class="heading__title--quinary" :field="slice.primary.title" :style="`color: ${slice.primary.textColor}`" />
      <prismic-link class="link" :field="slice.primary.link" :style="`color: ${slice.primary.linkColor}`">
        <span class="hidden tablet:inline-block">{{ slice.primary.linkLabel }}</span>
        <span :class="setArrowColor ? 'ml-5 arrow arrow__right' : 'ml-5 arrow arrow__right filter__pink'" />
      </prismic-link>
    </div>
    <div v-swiper="swiperOption" class="ml-auto relative" :loadtheme="false">
      <div class="swiper-wrapper">
        <div class="swiper-slide container__card" :key="`card-${i}`" v-for="(card, i) in slice.items">
          <prismic-image class="pb-1 max-h-12 mb-6" :field="card.cardImage" />
          <prismic-rich-text class="pb-8 heading__title--secondary" :field="card.cardTitle" :style="`color: ${slice.primary.textColor}`" />
          <prismic-rich-text class="pb-8 paragraph max-w-sm" :field="card.cardDescription" :style="`color: ${slice.primary.textColor}`" />
          <prismic-link class="pb-12 link" :field="card.cardLink" :style="`color: ${slice.primary.linkColor}`">
            <span>{{ card.cardLinkLabel }}</span>
            <span :class="setArrowColor ? 'ml-5 arrow arrow__right' : 'ml-5 arrow arrow__right filter__pink'" />
          </prismic-link>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

  </section>
</template>

<script>
import 'swiper/swiper-bundle.css'

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
      setArrowColor: this.slice.primary.setArrowColor,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 120,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  }
}
</script>

<style scoped>
  .container__card {
    padding: 8rem ;
    border: 1px solid #3E3E3E;
  }
  .swiper-pagination{

    position: relative;
    margin-top: 5rem;
  }
  .swiper-pagination-bullet-active{
    background: #ffffff;
  }

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
