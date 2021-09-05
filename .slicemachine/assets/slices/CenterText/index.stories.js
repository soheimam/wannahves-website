import MyComponent from '../../../../slices/CenterText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CenterText'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"center_text","items":[],"primary":{"paragraph":[{"type":"paragraph","text":"Mollit est sit esse laborum Lorem duis occaecat aliqua fugiat irure pariatur cillum adipisicing ad. Cupidatat dolore esse nulla officia ipsum cillum labore pariatur tempor.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":"innovate collaborative users"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
