<script>

import Back from  './UI/Back.vue'
import {getEntity} from './../vuex/actions/FoodActions.js'
import {addCart} from './../vuex/actions/CartActions.js'
export default {

 
  components:{

        Back
    },

       data() {
           
           return {
           itemNum:0 
         }
        },
        methods: {
            
            addCartClick:function(){
                this.itemNum++;
                this.addCart(this.entity,1);
                this.$router.go('/shopcart')
            },
            toSettlementCLick:function(e){

                this.$router.go('/shopcart')
            }
            
        },
        
       ready(){
        
         var id= this.$route.params.id;
         
         this.getEntity(id);

         var _tab=new tab();
           _tab.render();
        },
        computed:{
            title:function(){
                return entity.title;
            }
        },
      vuex:{
        actions:{
            getEntity,addCart
        },
       getters: {
            entity:({FoodStore})=> FoodStore.entity
        }
      }
        ,
       transitions: {
        'zoom': {
            enterClass: 'zoomIn',
            leaveClass: 'zoomOut'
        },
        'lineup': {
            enterClass: 'fadeInUp',
            leaveClass: 'fadeOutDown'
        }
    }
}

</script>
<template>
<back v-bind:title="entity.title"></back>
        
    <div class="mui-content">
     <div class="mhg280">
         
         <img v-bind:src="entity.images[0].src" class="mhg280" width="100%">
     </div>
     <div>
     <div class="food-details-title" >
     <span class="fl pdl10">地址:{{entity.address}}</span>  <span class="fr list-item-content-price">价格：（{{entity.price}}元）</span>
         </div>
    <div class="container tab cl">
    <div class=" tab_title">
        <ul><li style="width:50% !important;"><span>详细信息</span></li><li style="width:50% !important;"><span>评论</span></li></ul>
    </div>
    <div class="voucher tab_content">
   
        
    <div class="detail-content">
        <div  class="cl"><span class="fl">描述</span> <span class="fr">{{entity.desc}}</span></div>
        <div class="cl"><span class="fl">销售量</span> <span class="fr">{{entity.saleNum}}份/月</span></div>
        <div  class="cl"><span class="fl">价格</span><span class="fr">{{entity.price}}元</span></div>
        <div  class="cl"><span class="fl">地址</span><span class="fr">{{entity.address}}</span></div>
             <div ></div>
             <div ></div>
             <div ></div>
           <div ></div>
              <div ></div>
              <div ></div>
    </div>
       
    <div class="detail-discuss">
         
    </div>
     </div>
    </div>
    <div class="mui-bar mui-bar-footer food-details-footer">
     
        <span class="fl settlement" v-on:click="addCartClick">加入购物车（{{itemNum}}）</span> <span class="settlement fr" v-on:click="toSettlementCLick">去结算</span>
    </div>
   
  
</template>
<style type="text/css">
    

</style>