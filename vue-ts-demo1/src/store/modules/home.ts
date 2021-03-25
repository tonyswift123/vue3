import { Module } from "vuex"
import {IHome,IResponse} from '@/utils/home-data-type'
import {IGlobalState} from '../index'
import * as Types from '../data-type'
import {getFooterList,getSwiperList} from '@/api/index'
const state:IHome = {
    swiper:[],
    list:[],
    footer:[]
}
const home:Module<IHome,IGlobalState> = {
    namespaced:true,//命名空间，为了防止数据定义重复
    state,
    mutations:{
        [Types.GET_FOOTER_NAV] (state,data){
            state.footer = data
        },
        [Types.SWIPER] (state,data){
          state.swiper = data
        }
    },
    actions:{
      // 获取底部导航数据
      async navList({commit}){
        let res = await getFooterList<IResponse>()
        commit(Types.GET_FOOTER_NAV,res.data)
      },
      // 获取轮播数据
      async getSwiperList({commit}){
        let res = await getSwiperList<IResponse>()
        commit(Types.SWIPER,res.data)
      }
    }
}
export default home