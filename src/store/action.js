import {GET_SWIPER_DATA,GET_ICON_DATA,GET_SHOPLIST_DATA,GET_RECOMMENDED_DATA} from './mutations-type'
import axios from 'axios'
export default {
    _getSwiperData({commit}){
        axios.get('/api/swiper').then(res=>{
            commit(GET_SWIPER_DATA,res.data.results)
        })
        
    },
    _getIconData({commit}){
        axios.get('/api/icon').then(res=>{
            commit(GET_ICON_DATA,res.data.results)
        })
        
    },
    _getShopListData({commit}){
        axios.get('/api/homeShopList').then(res=>{
            commit(GET_SHOPLIST_DATA,res.data.results)
        })
        
    },
    _getrecommendedList({commit}){
        axios.get('/api/recommendedList').then(res=>{
            commit(GET_RECOMMENDED_DATA,res.data.results)
        })
        
    },
    
    
}