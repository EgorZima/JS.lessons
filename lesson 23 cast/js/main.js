(function() {
    
    class Cart {
    	constructor() {
            this.lsFieldId = 'cart';

    		this.domElems = {
    			cart: document.querySelector('.cart'),
    			listLine: document.querySelector('.list-line'),
                cartTmpl:document.querySelector('.cart__item-tmpl'),
    			finalPrice: document.querySelector('.final-price'),
    			orderButton: document.querySelector('.order'),   
    		}

    		this.goods = document.querySelector('.goods')
            
            

            this.goods.onclick = (e) => {
            	e.preventDefault();
                let target = e.target;

                if (target.className != 'add') {
                    return 
                }

                let item =  {}

                item.name = target.parentNode.children[0].classList[1];
                item.price = target.parentNode.children[1].innerHTML; 
                item.qty = 1;
                item.id = target.parentNode.children[0].classList[2];;

         	    this.addToCart(item)

            }

            this.cartArr = [];

    		this.init()

    	}




        

    	init() {
           window.ls.initField(this.lsFieldId);
           this.viewCart();
    	}

        updateStorage() {
            window.ls.updateField(this.lsFieldId, this.cartArr);
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
           this.cartArr = window.ls.getFieldData(this.lsFieldId);
       
           return this.cartArr;
        }

    	viewTotalPrice() {
        	this.domElems.finalPrice.innerHTML = '$' + this.getTotalPrice();
        }

        getTotalPrice() {
        	let items = this.getCatrItems(),
                total = 0;
            
        	items.forEach( item => {
                total += item.price * item.qty;
        	})

        	return total;
        }

        



        viewCartList() {
        	let items = this.getCatrItems(),
                listHTML = [];

            let div = document.createElement('div');
            let titles = this.domElems.listLine;
            div.appendChild(titles);

        	listHTML.push(div.innerHTML);
            
        	items.forEach( item => {
        		listHTML.push(this.viewCatrItem(item).innerHTML);
        	}) 

            let newList = listHTML.join('')
            
        	this.domElems.cart.innerHTML = newList;
        }

        viewCatrItem(item) {
        	let div = document.createElement('div');

            let tmpl = this.domElems.cartTmpl.cloneNode(true);
            tmpl.classList.remove('cart__item-tmpl');
            
            let qty = tmpl.querySelector('.amount');
            qty.innerHTML = item.qty;

            let name = tmpl.querySelector('.name');
            name.innerHTML = item.name;

            let price = tmpl.querySelector('.cost');
            price.innerHTML = '$' + (item.price * item.qty);
            
            div.appendChild(tmpl);
          
            return div;

        }
    
        addToCart(item) {
            if (this.cartArr.length === 0) {
                this.cartArr.push(item);
            }
            else {
                this.checkId(item);
            }
            
            this.updateStorage();
        	this.viewCart();
        }

        checkId(item) {
            let id = item.id;
            let current = item;
            
            // if ( this.cartArr.indexOf(current) === -1) {
            //    this.cartArr.push(current);
               
            // } 
            // console.log(this.cartArr)

            // else if (this.cartArr.indexOf(current) === 1) {
            //   console.log( id )
            // }
            console.log(this.cartArr);

            this.cartArr.some( item => {
                if (item.id === id) {
                    item.qty++; 
                    return;   
                } 

                else if( item != current) {
                    this.cartArr.push(current);

               }
               
            })
              
        }



        
            
            

          
            
       
            
            

        



    



    }
    
    window.cart = new Cart();

})()