<template lang="html">
		<div class="swiper-container" style="height:100%;" >
    <div class="swiper-wrapper">
        <div class="swiper-slide">
           <img src="../../assets/img/test1.jpg" width="100%"  height="100%"/>
        </div>
        <div class="swiper-slide ">
         <img src="../../assets/img/test2.jpg" width="100%"  height="100%"/>
        </div>
        <div class="swiper-slide ">
          <img src="../../assets/img/test3.jpg" width="100%"  height="100%"/>
        </div>
    </div>
    <div class="pagination"></div>
</div>
</template>

<script type="text/javascript">
	
	export default{
		props:{
			 images:null

		},
		methods:{},
		data(){ return{

			 lists:[{title:null,images:null,link:null}]
		}},
		

        ready () {
            this.$nextTick(()=>{
                var mySwiper = new Swiper('.swiper-container',{
                           pagination: '.pagination',
                           paginationClickable: true
                        });
            });
        }

	}
</script>