<script>
import Title from './UI/title.vue';
import Swiper from './UI/Swiper.vue';
import {getList} from './../vuex/actions/FoodActions.js'
export default {

    data() {
            
        
        return {
            
        }

    },
    vuex:{
    	actions:{
    		getList
    	},
    	getters: {
            list:({FoodStore})=> FoodStore.list
        }
    },
    computed:{

    },
    ready(){


if(!this.list || this.list.length==0 ){
    	this.getList();
    }
    },

    components:{
    	Title,Swiper
    },
    methods: {
        goBack: function(e) {
            history.go(-1);
        }

    ,onTestClick:function(e){
          
    }
    },
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
	<div class="app-container mg0 pd0">
	  <title title="么么订餐">
	  </title>
	  <div class="app-swiper hg280 mui-content">
	  	  <swiper></swiper>
	  </div>
	  <div>
	  	<div class="list-container">
	      <div class="list-title" v-on:click="onTestClick">今天推荐</div>

	      
	        <div v-for="item in list" class="list-item">
	        <a v-link="{ path: '/details/'+$index}" >
	        	<div class="list-item-img">
	        		<img  v-bind:src="item.images[0].src" width="100%" height="100%">
	        	</div>
	      	 <div class="list-item-content">
	      	 <div class="list-item-content-title">{{item.title}} <span class="list-item-content-price">（{{item.price}}元）</span> </div>
	      	 	<div class="list-item-content-saleNum">已售:{{item.saleNum}}份</div>
	      	 	<div class="list-item-content-address location"> {{item.address}}</div>
	      	 </div>
	      	  </a>
	        </div >
	       
            
	      </div>
	  </div>
	  <div class="list-container">
	  	  <div class="list-title">猜你喜欢</div>

	  	      <div v-for="item in list" class="list-item">
	  	          <a v-link="{ path: '/details', params:{id:$index}}" >
	        	<div class="list-item-img">
	        		<img  v-bind:src="item.images[0].src" width="100%" height="100%">
	        	</div>
	      	 <div class="list-item-content">
	      	 <div class="list-item-content-title">{{item.title}} <span class="list-item-content-price">（{{item.price}}元）</span> </div>
	      	 	<div class="list-item-content-saleNum">已售:{{item.saleNum}}份</div>
	      	 	<div class="list-item-content-address location"> {{item.address}}</div>
	      	 </div>
	      	</a>
	        </div >
	      
            
	      </div>
	  </div>
	</div>
</template>
