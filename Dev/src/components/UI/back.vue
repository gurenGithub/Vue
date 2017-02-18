<template lang="html">
<header class="header mui-bar mui-bar-nav nav-title">
        <a @click="goBack" class="mui-icon mui-icon-left-nav mui-pull-left"></a>
        <h1 id="title" class="mui-title" style="color:#FFF !important;">{{title}}</h1></header>
  
</div>
</template>

<script type="text/javascript">
	
	export default{
		props:{
			 title:null

		},
		methods:{goBack:function(){history.go(-1)}},
		data(){ return{};}

	}
</script>