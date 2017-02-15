(function() {
    
    class Cart {
    	constructor() {

    		this.domElems = {
    			cart: document.querySelector('.cart'),
    			listLine: document.querySelector('.list-line'),
                cartTmpl:document.querySelector('.cart__item-tmpl'),
    			finalPrice: document.querySelector('.final-price'),
    			orderButton: document.querySelector('.order'),   
    		}

    		this.icon = document.querySelector('.basket-icon')

            this.icon.onclick = (e) => {
            	e.preventDefault();

                var item =  {
         	       name: 'wallet',
         	       price: '14',
         		   qty: '1'
         	    }

         	    this.addToCart(item)

            }

            this.catrArr = [
                {
         	        name: 'bag',
         			price: '26',
         		    qty: '3'
         		},
         		 {
         	        name: 'watch',
         			price: '200',
         		    qty: '1'
         		},

         		{
         			name: 'book',
         			price: '18',
         			qty: '5'
         		},
    		]

    		this.init()

    	}


    	init() {
           this.viewCart()
    	}

    	viewCart() {
           this.getCartAmount();
           this.viewTotalPrice();
           this.viewCartList()
        }

        getCartAmount() {
    		return this.getCatrItems().length;
    	}

    	getCatrItems() {
           return this.catrArr;
        }

    	viewTotalPrice() {
        	this.domElems.finalPrice.innerHTML = '$' + this.getTotalPrice();
        }

        getTotalPrice() {
        	var items = this.getCatrItems(),
                total = 0;

        	items.forEach( item => {
                total += item.price * item.qty;
        	})

        	return total;
        }

        



        viewCartList() {
        	var items = this.getCatrItems(),
                listHTML = [];

            var div = document.createElement('div');
            var titles = this.domElems.listLine;
            div.appendChild(titles);

        	listHTML.push(div.innerHTML);
            
        	items.forEach( item => {
        		listHTML.push(this.viewCatrItem(item).innerHTML);
        	}) 

            var newList = listHTML.join('')
            
        	this.domElems.cart.innerHTML = newList;
        }

        viewCatrItem(item) {
        	var div = document.createElement('div');

            var tmpl = this.domElems.cartTmpl.cloneNode(true);
            tmpl.classList.remove('cart__item-tmpl');
            
            var qty = tmpl.querySelector('.amount');
            qty.innerHTML = item.qty;

            var name = tmpl.querySelector('.name');
            name.innerHTML = item.name;

            var price = tmpl.querySelector('.cost');
            price.innerHTML = '$' + (item.price * item.qty);
            
            div.appendChild(tmpl);
          
            return div;

        }
        
 
        addToCart(item) {
        	this.catrArr.push(item);
        	this.viewCart();
        }


    



    }
    
    window.cart = new Cart();

})()