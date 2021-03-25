<template>
  <div class="wrapper">
      <img :src="require(`@/assets${v.url}`)" v-for="(v,i) in list" :key="i" v-show="active==i" alt="" class="swiper-img">
      <ul class="circle-wrap">
          <li v-for="(val,index)  in list" :key="index" :class="{'lightheight':active==index}" class="active-item"></li>
      </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent,computed, reactive,toRefs, onMounted} from 'vue'
import {Store, useStore} from 'vuex'
import {IGlobalState} from '@/store/index'
// hooks先在vuex中找，没有仔发起请求
function useSwiperist1(store:Store<IGlobalState>){
  let list = computed(()=>store.state.home.swiper)
  if(!list.value.length){
      store.dispatch('home/getSwiperList')
  }
  return {list}
}
export default defineComponent({
    setup() {
       let store = useStore()
       let {list} = useSwiperist1(store) 
       console.log(list.value)
       let state =reactive({
           active:0,
           timer:0
       })
       function autoPlay(){
           if(state.active == list.value.length-1){
               state.active=0;
           }else{
               state.active++;
           }
       }
       function play (){
           state.timer = setInterval(autoPlay,2000)
       }
       onMounted(()=>{
           play()
       })
       return {...toRefs(state),list}
    },
})
</script>
<style scoped>
.wrapper{
    width:100%;
    position:relative;
}
.wrapper img{
    width:100%;
    height:200px;
}
.circle-wrap{
    position:absolute;
    left:0;
    right:0;
    bottom:20px;
    display:flex;
    justify-content: center;
}
.active-item{
    background:red;
    width:10px;
    height:10px;
    border-radius:50%;
    margin:0 20px;
}
.lightheight{
    background:aquamarine;
}
</style>
