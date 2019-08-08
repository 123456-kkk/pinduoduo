<template>
    <div class="wrap">
        <div class="main">
            <shopList :shopList="recommendedList"></shopList>
      </div> 
       <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/footer'
import {mapState,mapActions} from 'vuex'
import shopList from './shopList'
export default {
    computed:{
        ...mapState(['recommendedList'])
    },
    methods:{
        ...mapActions(['_getrecommendedList'])
    },
    mounted(){
        this._getrecommendedList()
    },
    components:{
        Footer,shopList
    }
}
</script>

<style>

</style>
