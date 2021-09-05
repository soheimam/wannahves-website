<template>
  <header :class="isOpen ? 'wrapper' : 'h-0 w-0'">
    <nav class="flex fixed top-0 left-0 z-40 w-full items-center justify-between px-8 py-10 laptop:px-20">
      <div :class="isOpen ? 'h-0 w-0' : 'flex items-center'">
        <prismic-image class="h-auto w-24" :field="$store.state.menu.logo" />
      </div>
      <button
        v-if="$store.state.menuIsVisible"
        :class="isOpen ? 'mr-2 pointer-events-auto burger-bar open' : 'mr-2 pointer-events-auto burger-bar'"
        aria-label="Open Menu"
        @click="toggleOpen"
      >
        <span :style="`background-color: ${$store.state.menu.fontColor}`" />
        <span :style="`background-color: ${$store.state.menu.fontColor}`" />
      </button>
    </nav>

    <div id="bg-circle" :style="`background-color: ${$store.state.menu.backgroundColor}`" />

    <div :class="isOpen ? 'flex flex-col items-center h-full w-full pt-24 z-20 overflow-y-scroll small-phone:px-4 small-phone:items-baseline laptop:pt-0 laptop:flex-row laptop:justify-evenly' : 'hidden'">
      <div>
        <ul class="quote quote--small">
          <li
            v-for="(menuLink,index) in $store.state.menu.menu_links"
            :key="`main-link-${index}`"
            class="pb-1 laptop:pb-2"
            @click="animateFill"
          >
            <prismic-link
              class="text--outline text-transparent"
              :field="menuLink.link"
              :style="`-webkit-text-stroke: 1px ${$store.state.menu.fontColor}`"
              @mouseover="animateFill"
              @mouseleave="animateUndo"
            >
              {{ $prismic.asText(menuLink.label) }}
            </prismic-link>
          </li>
        </ul>
      </div>

      <div>
        <div class="flex my-8 laptop:mt-0">
          <span v-for="(socials,index) in $store.state.menu.socials" :key="`slice-socials-${index}`" class="social__icons" :style="`border: 1px solid ${$store.state.menu.fontColor}`">
            <prismic-image :field="socials.image" />
            <prismic-link :field="socials.link">{{ socials.linkLabel }}</prismic-link>
          </span>
        </div>
        <div class="flex flex-col mb-4">
          <span v-for="(locations,index) in $store.state.menu.locations" :key="`slice-location-${index}`" class="mb-8">
            <prismic-rich-text class="heading__title--quinary" :field="locations.title" :style="`color: ${$store.state.menu.fontColor}`" />
            <prismic-rich-text class="paragraph" :field="locations.description" :style="`color: ${$store.state.menu.fontColor}`" />
          </span>
        </div>
      </div>
      <div />
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPrismic',
  data () {
    return {
      hover: false,
      isOpen: false,
      circleWidth: 0,
      html: 0,
      vph: 0,
      vpw: 0,
      vpd: 0
    }
  },
  mounted () {
    const c = document.getElementById('bg-circle')
    this.html = document.documentElement
    this.circleWidth = c.clientWidth
  },
  methods: {
    getVpdr () {
      this.vph = Math.pow(this.html.offsetHeight, 2) // Height
      this.vpw = Math.pow(this.html.offsetWidth, 2) // Width
      this.vpd = Math.sqrt(this.vph + this.vpw) // Diagonal
      return (this.vpd * 2) / this.circleWidth // Circle radius
    },
    openNavBar () {
      this.$gsap.to('#bg-circle', { duration: 1, scale: this.getVpdr(), ease: 'Expo.easeInOut' })
    },
    closeNavBar () {
      this.$gsap.to('#bg-circle', { duration: 1, scale: 0, ease: 'Expo.easeInOut', delay: -0.5 })
    },
    toggleOpen () {
      if (this.isOpen) {
        this.closeNavBar()
      } else {
        this.openNavBar()
      }
      this.isOpen = !this.isOpen
    },
    animateFill (e) {
      e.srcElement.classList.add('animate__fill')
      this.$gsap.to('.animate__fill', { duration: 0.1, textFillColor: this.$store.state.menu.fontColor, ease: 'SlowMo(0.8, 1)' })
    },
    animateUndo (e) {
      e.srcElement.classList.remove('animate__fill')
      e.srcElement.classList.add('animate__undo')
      this.$gsap.to('.animate__undo', { duration: 0.1, textFillColor: 'rgb(0, 0, 0, 0)', ease: 'SlowMo(0.8, 1)' })
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
}

#bg-circle {
  transform: scale(0);
  width: 80px;
  height: 80px;
  background: #FF2685;
  position: absolute;
  top: 0.6rem;
  right: 0.4rem;
  border-radius: 50%;
  z-index: 5;
}

.burger-bar {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 15px;
  margin: 3px 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

.burger-bar span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: #FFF;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

.burger-bar span {
  position: relative;
}

.burger-bar.open span {
  position: absolute;
}

.burger-bar.open span:first-child {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.burger-bar.open span:last-child {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.social__icons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  margin-right: 1rem;
  border: 1px solid #FEFEFE;
  cursor: pointer;
}

.social__icons img {
  height: 1rem;
}

@media screen and (max-width: 320px) {
  .social__icons {
    height: 40px;
    width: 40px;
    margin-right: .5rem;
  }
}

@media screen and (min-width: 1024px) {
  #bg-circle {
    right: 3.5rem;
  }

  .social__icons {
    height: 60px;
    width: 60px;
  }

  .social__icons img {
    height: 1.5rem;
  }
}

@media screen and (min-width: 2560px) {
  .social__icons {
    height: 75px;
    width: 75px;
    margin-right: 1.5rem;
  }

  .social__icons img {
    height: 2rem;
  }
}

</style>
