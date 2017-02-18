<script>
import Back from  './UI/Back.vue'
import {getCartList} from './../vuex/actions/CartActions.js'
export default {

 
  components:{

        Back
    },

       data() {
           
           return {}
        },
        methods: {
            
            onDivClick:function(item){
                item.num--;
            },
            onAddClick:function(item){

                item.num++;
            }
            
        },
        
       ready(){
        
         this.getCartLis();

        },
        computed:{
           
        },
      vuex:{
        actions:{
            getCartList
        },
       getters: {
            list:({CartStore})=> CartStore.list
        }
      },
      computed:{

        totalCount:function(){

           var total=0;
            for (var i = 0; i < this.list.length; i++) {
               
               var item = this.list[i];
               var _price = item.item.price;
               var _num=item.num;

               var amount= _price*_num;
               total+=amount;
            }

            return total;
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
<back  title="我的购物车"></back>
        
    <div class="mui-content">

      <div v-for="item in list" class="list-item">
             
                <div class="list-item-img">
                    <img  v-bind:src="item.item.images[0].src" width="100%" height="100%">
                    
                </div>
                
             <div class="list-item-content">
             <div class="list-item-content-title">{{item.item.title}} <span class="list-item-content-price">（{{item.item.price}}元）</span> </div>
                
              <div class="cartNum mhg30 textright">
                <span v-on:click="onDivClick(item)">-</span> <span> {{item.num}} </span>
                 <span v-on:click="onAddClick(item)">+</span> 
              </div>
              <div class="list-item-content-address mhg30 textright">小计: （{{item.item.price*item.num}}元）</div>
             </div>
            
            </div >
    </div>
    <div class="mui-bar mui-bar-footer food-details-footer">
        <span class="fl settlement" >合计（{{totalCount}}）元</span> 
        <span class="settlement fr" v-on:click="toPaymentCLick">去付款</span>
    </div>
  
</template>
