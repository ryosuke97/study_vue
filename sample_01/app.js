var items = [
	{
		name: 'pen',
		price: 200,
		quantity: 0,
	},
	{
		name: 'notebook',
		price: 300,
		quantity: 0,
	},
	{
		name: 'eraser',
		price: 400,
		quantity: 0,
	},
]

var vm = new Vue({
	el: "#app",
	data: {
		items: items
	}
})