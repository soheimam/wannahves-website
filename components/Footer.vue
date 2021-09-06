<template>
  <section class="container__content footer w-screen h-96 bg-black overflow-hidden">
    <div class="flex flex-col laptop:flex-row ">
      <div class="flex w-full">
        <ul class="">
          <div class="subtext uppercase pb-8">
            Pages
          </div>
          <li
            v-for="(menuLink, index) in $store.state.menu.menu_links"
            :key="`menuLink-${index}`"
            class="pb-1 laptop:pb-2"
          >
            <prismic-link class="footer--link" :field="menuLink.link">
              {{ $prismic.asText(menuLink.label) }}
            </prismic-link>
          </li>
        </ul>

        <div class="flex flex-col mb-4 pl-10 laptop:pl-20">
          <div class="subtext uppercase pb-8">
            Visit us
          </div>
          <span
            v-for="(locations, index) in $store.state.menu.locations"
            :key="`location-${index}`"
            class="mb-8"
          >
            <prismic-rich-text
              class="paragraph"
              :field="locations.description"
              :style="`color: ${$store.state.menu.fontColor}`"
            />
          </span>
        </div>
      </div>
      <div
        class="flex w-full items-start justify-around laptop:justify-end my-8 laptop:mt-0 bg-black"
      >
        <span
          v-for="(socials, index) in $store.state.menu.socials"
          :key="`socials-${index}`"
          class="social__icons__footer ml-0 laptop:ml-8"
        >
          <prismic-image :field="socials.image" />
          <prismic-link :field="socials.link">{{
            socials.linkLabel
          }}</prismic-link>
        </span>
      </div>
    </div>
    <div class="py-12 laptop:py-20 flex flex-col laptop:flex-row bg-black">
      <div class="w-full flex footer-left">
        <div class="subtext color__gray mr-4">
          Part of
        </div>
        <div class="subtext color__gray mr-4">
          logo 1
        </div>
        <div class="subtext color__gray">
          logo 2
        </div>
      </div>
      <div
        class="w-full flex items-start justify-between laptop:justify-end overflow-hidden"
      >
        <ul class="flex">
          <li
            v-for="(footerLink, index) in $store.state.menu.footerLinks"
            :key="`footer-${index}`"
          >
            <prismic-link
              class="mx-4 subtext color__gray"
              :field="footerLink.link"
            >
            {{ footerLink.label }}
            </prismic-link>
          </li>
        </ul>
      </div>
      <p class="w-2/12  paragraph link--bold text-white">
        EN | NL
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterPrismic'
}
</script>

<style scoped>
a.footer--link {
  font-family: "Poppins", "Arial", sans-serif;
  color: #ffffff;
  font-weight: 700;
  @apply text-base;
}

.social__icons__footer {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ff2685;
  cursor: pointer;
}

.color__gray {
  color: #7d7d7d;
}
</style>
