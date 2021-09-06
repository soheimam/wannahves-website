import MyComponent from '../../../../slices/CaseSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CaseSlider'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"case_slider","items":[{"caseImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"caseTitle":[{"type":"heading3","text":"Transform sexy markets","spans":[]}],"caseBrand":"integrate transparent infomediaries","caseLink":{"link_type":"Web","url":"https://prismic.io"}},{"caseImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"caseTitle":[{"type":"heading3","text":"Repurpose frictionless mindshare","spans":[]}],"caseBrand":"cultivate bleeding-edge interfaces","caseLink":{"link_type":"Web","url":"http://twitter.com"}},{"caseImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"caseTitle":[{"type":"heading3","text":"Deploy value-added interfaces","spans":[]}],"caseBrand":"reintermediate value-added architectures","caseLink":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"title":[{"type":"heading1","text":"Empower cutting-edge users","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":"deliver viral deliverables"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
