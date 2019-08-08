<template>
    <div>
          <dl v-for="item in shopList" :key="item.id">
           <dt>
               <img :src="item.imgUrl">
           </dt>
           <dd>
               <p>{{item.title}}</p> 
               <span>￥{{item.price}}</span>
           </dd>
       </dl>
    </div>
</template>

<script>
export default {
props:["shopList"]
}
</script>

<style scoped>
div{
    width: 100%;
    height: 6.48rem;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
}
dl{
    width: 50%;
    height: 100%;
}
dt img{
    width: 4.16rem;
    height: 4.16rem;
}
p{ 
    width: 165px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
}
span{
    color:red;
    margin: 18px 5px;
    display: inline-block;
}
</style>
