import MyComponent from '../../../../slices/FullWidthVideo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FullWidthVideo'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"full_width_video","items":[{"socialText":"iterate customized e-services","socialIcon":{"dimensions":{"width":20,"height":20},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=20&h=20&fit=crop"}},{"socialText":"revolutionize extensible schemas","socialIcon":{"dimensions":{"width":20,"height":20},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=20&h=20&fit=crop"}}],"primary":{"title":[{"type":"heading1","text":"Productize compelling vortals","spans":[]}],"fontColor":"#936649","videoLink":{"link_type":"Web","url":"http://twitter.com"},"link":{"link_type":"Web","url":"https://prismic.io"},"linkLabel":"revolutionize impactful users"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
