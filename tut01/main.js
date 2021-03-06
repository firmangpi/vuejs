Vue.component('product',{
	template: `
		<div class="product">		
		<div class="product-image">
			<img v-bind:src="image" v-bind:alt="altText" />
		</div>
		
		<div class="product-info">
			<h1>{{ title }}</h1>
			<a :href="link">More Products like this...</a>
			<!-- <p v-if="inStock">In Stock</p>
			<p v-else>Out Of Stock</p> -->
			<p v-if="inStock">In Stock</p>
			<p v-else :class="{ outOfStock : !inStock }">Out of Stock</p>
			<span v-show="onSale">ON SALE!</span>
			<h3>Details:</h3>
			<ul>
				<li v-for="detail in details">{{ detail }}</li>
			</ul>
			<h3>Variants</h3>
			<div class="color-box" 
				v-for="(variant, index) in variants" 
				:key="variant.variantId" 
				:style="{ backgroundColor: variant.variantColor }" 
				@mouseover="updateProduct(index)">
					{{variant.variantColor}}
				</p>
			</div>
			<h3>Available in size:</h3>
			<ul>
				<li v-for="size in sizes">{{size}}</li>
			</ul>
			<button v-on:click="addToCart">Add to cart</button>
			<button v-on:click="removeFromCart">Remove from cart</button>
			<div class="cart">
				<p>Cart({{cart}})</p>
			</div>
		</div>
		</div>
	`},
	data: {
		product: "Socks",
		description: "A pair of warm, fuzzy socks",
		brand: "Vue Mastery",
		// image: "./assets/vmSocks-green.png",
		selectedVariant: 0,
		altText: "A pair of socks",
		link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
		onSale: false,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [{variantId: 2234, 
				variantImage: "./assets/vmSocks-green.png", 
				variantColor:"green",
				variantQuantity: 10},
		  {variantId: 2235, 
		  	variantImage: "./assets/vmSocks-blue.png", 
		  	variantColor:"blue",
		  	variantQuantity: 0}],
		sizes: [36,37,39,41,43],
		cart: 0,
	},
	methods: {
		addToCart() {
			this.cart += 1
		},
		updateProduct(index){
			this.selectedVariant = index
			console.log(index)
		},
		removeFromCart() {
			this.cart > 0 ? this.cart -= 1 : 0;
		}
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product
		},
		image() {
			return this.variants[this.selectedVariant].variantImage
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity
		}
	}
)
// var product = "Socks";
var app = new Vue({
	el: '#app',
})