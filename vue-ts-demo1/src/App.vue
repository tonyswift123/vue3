<template>
  <div id="nav">
    <swiper/>
    <router-view/>
    <Suspense>
      <template #default>
        <footer-banner/>
      </template>
      <template #fallback>
         <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts">

import { defineComponent, reactive } from 'vue'
import Swiper from '@/components/swiper.vue'
import FooterBanner from '@/components/bottomNav.vue'
export default defineComponent({
  components:{
    Swiper,
    FooterBanner
  },
  setup() {
    let state = reactive({
    })
    return state
  }
})
</script>


<style>

</style>
