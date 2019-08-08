<template>
  <div class="main">
    <Swiper></Swiper>
    <Icons></Icons>
    <ShopList></ShopList>
  </div>
</template>

<script>
import Swiper from './swiper'
import Icons from './icons'
import ShopList from './homeShopList'
export default {
  name:'hom',
components:{
  Swiper,Icons,ShopList
}
}
</script>

<style>

</style>
