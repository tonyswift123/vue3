import { createStore } from 'vuex'
import home from './modules/home'
import {IHome} from '@/utils/home-data-type'
export interface IGlobalState {
    home:IHome
}
export default createStore<IGlobalState>({
  modules: {
    home
  }
})
