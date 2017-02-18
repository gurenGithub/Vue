var xUtils=(function(){ 
   	var methods={ 
   		addEvent:function(dom,type,fn){
   		 if(window.attachEvent) 
   		 	{ 
   		 		dom.attachEvent(type,fn); 
   		 	} else 
   		 	{
   		 	 dom.addEventListener(type, fn,false);
   		 	  } 
   		 	}
              ,cancelBubble:function(event){

               var e = window.event || event; 

if ( e.stopPropagation ){ //如果提供了事件对象，则这是一个非IE浏览器 
e.stopPropagation(); 
}else{ 
//兼容IE的方式来取消事件冒泡 
window.event.cancelBubble = true; 
} 
              }
            ,
   		 	getElementByClass:function(dom,className){


                var nodes= dom.children;
   		 		for (var i = 0; i < nodes.length; i++) {
   		 			
   		 			var node=nodes[i];
   		 			if(node.className.indexOf(className)>-1){
   		 				return node;
   		 			}
   		 		}
   		 	} 
   		 } 
   		 return methods; 
   		})()