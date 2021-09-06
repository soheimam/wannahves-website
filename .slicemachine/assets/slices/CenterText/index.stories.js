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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"center_text","items":[],"primary":{"paragraph":[{"type":"paragraph","text":"Voluptate nulla incididunt magna pariatur mollit anim.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":"empower efficient eyeballs"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
