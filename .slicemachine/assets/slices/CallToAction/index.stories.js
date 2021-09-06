import MyComponent from '../../../../slices/CallToAction';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CallToAction'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Leverage killer web-readiness","spans":[]}],"description":[{"type":"paragraph","text":"Consequat do exercitation commodo enim aliquip deserunt cupidatat pariatur velit incididunt. Cillum ullamco tempor officia amet magna sint irure Lorem mollit sit consequat non exercitation. Dolor elit nulla ea qui officia sunt.","spans":[]}],"backgroundColor":"#954ce","buttonColor":"#fd2a9e","linkColor":"#6b9ad4","textColor":"#37b0cd","link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":"leverage e-business web services"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
