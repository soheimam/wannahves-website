<template>
  <section class="container__content">
    <div class=" flex justify-between">
      <h3 class="heading__paragraph">
        <prismic-rich-text :field="slice.primary.title" class="title" />
      </h3>

      <prismic-link :field="slice.primary.link" class='flex justify-between items-center'>
        <span class='heading__paragraph capitalize brand-pink' >{{ slice.primary.linkLabel }}</span>
        <span class="ml-5 arrow arrow__right filter__pink self-center" />
      </prismic-link >
    </div>

    <div class="carousel-wrapper py-12">
      <div v-swiper:mySwiper="options">
        <div class="swiper-wrapper">
          <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="img-wrapper swiper-slide">
            <div class="flex flex-col justify-between slide-height bg-center bg-cover bg-no-repeat" :style="{ backgroundImage: 'url(' + item.caseImage.url + ')' }">
              <prismic-rich-text class="pr-1 justify-self-end self-end paragraph--bold whitespace-nowrap text-white" :field="item.caseTitle" />

              <h3 class="justify-self-center self-center heading__title--secondary case-textOutline text-transparent text-center">
                {{ item.caseBrand }}
              </h3>
              <p class="pl-1 self-start paragraph--bold whitespace-nowrap text-white">
                {{ item.caseYear }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import 'swiper/swiper-bundle.css'
export default {
  name: 'CaseSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      options: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 10

          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20

          },
          1024: {

            slidesPerView: 3,
            spaceBetween: 30

          }
        }
      }

    }
  }
}
</script>

<style scoped>
  .brand-pink{
    color: #ff2685;
  }
  .carousel-wrapper{
    height: 100%;
    width: 100%;
  }
  .swiper-slide {

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slide-height{
    height: 31rem;
    width: 20.81rem;
  }
  .case-textOutline{
     -webkit-text-stroke: 1px white;
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
