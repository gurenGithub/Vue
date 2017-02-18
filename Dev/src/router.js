module.exports = function(router){
	router.map({
		'*': {
            component: require('./components/index.vue')
        },
        '/': {
            component: require('./components/index.vue')
        },
        '/details/:id': {
            component: require('./components/details.vue')
        },
        '/shopcart': {
            component: require('./components/cart.vue')
          }
    })
	
}