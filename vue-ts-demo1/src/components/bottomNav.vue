<template>
    <div class="footer-wrap">
      <router-link class="item" active-class="active" v-for="v in list" :to="v.path" :key="v.path">
        <div class="iconfont" :class="v.icon"></div>
        <div class="titile">{{v.title}}</div>
      </router-link>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive,computed, onMounted } from 'vue'
import {useStore,Store} from 'vuex'
import {IGlobalState} from '@/store/index'
import {useRouter} from 'vue-router'
import {IRouteType} from '@/utils/router-type'
//  hooks
//    vuex中取值,没有值发送请求
  function useNavList (store:Store<IGlobalState>){
    var list = computed(()=>store.state.home.footer);
   onMounted(()=>{
    if(!list.value.length){
       store.dispatch('home/navList')
    }
   })
    return {list}
  }
export default defineComponent({
  setup() {
    const store = useStore();
    let {list} =useNavList(store)
    
    const state = reactive({
    })
    return {...state,list}
  }
})
</script>
<style scoped>
.footer-wrap{
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  background:rgb(16, 236, 199);
  display:flex;
}
.item{
  flex:1;
  margin:5px 10px;
  text-align:center;
  height:100%;
}
.active{
 color:aquamarine;
}
</style>
