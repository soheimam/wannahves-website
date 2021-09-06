import MyComponent from '../../../../slices/CardSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CardSlider'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_slider","items":[{"cardImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"cardTitle":[{"type":"heading3","text":"Mesh bricks-and-clicks vortals","spans":[]}],"cardDescription":[{"type":"paragraph","text":"Labore aute ut culpa et nulla ex ad ut magna eiusmod id.","spans":[]}],"cardLinkLabel":"synergize mission-critical systems","cardLink":{"link_type":"Web","url":"http://twitter.com"}},{"cardImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"cardTitle":[{"type":"heading3","text":"Expedite front-end methodologies","spans":[]}],"cardDescription":[{"type":"paragraph","text":"Dolor reprehenderit id ea officia consectetur commodo in consequat. Amet ut anim minim voluptate. Ad eu cupidatat non cupidatat consectetur cillum laborum consequat.","spans":[]}],"cardLinkLabel":"scale impactful initiatives","cardLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"cardImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"cardTitle":[{"type":"heading3","text":"Seize cutting-edge paradigms","spans":[]}],"cardDescription":[{"type":"paragraph","text":"Id dolore nulla commodo ullamco minim velit sit excepteur laborum id veniam culpa. Officia nulla ea culpa non.","spans":[]}],"cardLinkLabel":"iterate B2B users","cardLink":{"link_type":"Web","url":"http://twitter.com"}},{"cardImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"cardTitle":[{"type":"heading3","text":"Embrace rich vortals","spans":[]}],"cardDescription":[{"type":"paragraph","text":"Laboris dolore eu non aute. Officia minim et exercitation Lorem irure aliqua consequat veniam fugiat cupidatat.","spans":[]}],"cardLinkLabel":"exploit user-centric web services","cardLink":{"link_type":"Web","url":"http://twitter.com"}},{"cardImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"cardTitle":[{"type":"heading3","text":"Generate robust interfaces","spans":[]}],"cardDescription":[{"type":"paragraph","text":"Ipsum irure excepteur mollit pariatur nostrud. Ullamco Lorem commodo dolor ea amet nulla ex dolor laborum amet.","spans":[]}],"cardLinkLabel":"transition scalable e-tailers","cardLink":{"link_type":"Web","url":"http://google.com"}}],"primary":{"linkColor":"#509308","textColor":"#8a404c","title":[{"type":"heading1","text":"Redefine revolutionary niches","spans":[]}],"linkLabel":"repurpose frictionless users","link":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
