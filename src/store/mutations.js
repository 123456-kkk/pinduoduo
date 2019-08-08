import {GET_SWIPER_DATA,GET_ICON_DATA,GET_SHOPLIST_DATA,GET_RECOMMENDED_DATA} from './mutations-type'

export default {
   [GET_SWIPER_DATA](state,res){
        state.swiperList=res
    },
    [GET_ICON_DATA](state,res){
        state.iconList=res
    },
    [GET_SHOPLIST_DATA](state,res){
        state.homeShopList=res
    },
    [GET_RECOMMENDED_DATA](state,res){
        state.recommendedList=res
    }
}