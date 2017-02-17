(function() {
    
    class Cart {
    	constructor() {
            this.lsFieldId = 'cart';
            this.content = document.querySelector('.content')
    		this.domElems = {
    			cart: document.querySelector('.cart'),
    			listLine: document.querySelector('.list-line'),
                cartTmpl:document.querySelector('.cart__item-tmpl'),
    			finalPrice: document.querySelector('.final-price'),
    			orderButton: document.querySelector('.order'),
                amt: document.querySelector('.amt'),
                notifi: document.querySelector('.notification'),
                notifiBlock: document.querySelector('.notification-block'),
                goods: document.querySelector('.goods'),
                cross: document.querySelector('.cross')
    		}
           
            this.domElems.notifiBlock.onmouseover = () => {
                this.domElems.notifiBlock.style.opacity = 0.9;
                this.content.classList.add('to-blur');
            }

            this.domElems.notifiBlock.onmouseout = () => {
                this.domElems.notifiBlock.style.opacity = 0.8;
                this.content.classList.remove('to-blur');
            }

    		this.domElems.cross.onclick = () => {
                this.domElems.notifi.classList.add('notification-display')
            }
            
            
            this.domElems.orderButton.onclick = () => {
                this.domElems.notifi.classList.remove('notification-display');
                
                let items = this.domElems.notifi.querySelector('.order-list-one');
                items.innerHTML = this.getCartAmount();

                let orderPrice = this.domElems.notifi.querySelector('.order-list-two');
                orderPrice.innerHTML = '$' + this.getTotalPrice();

            }

            this.domElems.goods.onclick = (e) => {
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

           this.showAmt(this.getCatrItems());

           this.viewCart();
    	}
        showAmt(arr) {
            if (arr.length > 0) {
               this.domElems.amt.style.display = 'block';
               this.domElems.amt.innerHTML = arr.length;
            }
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
            
            this.showAmt(this.cartArr);
            this.updateStorage();
        	this.viewCart();
        }

        checkId(item) {
            let arr = this.cartArr;

            let index = arr.findIndex(i => i.id === item.id);
            
            if (index < 0) {
                arr.push(item);
                return
            }
            
            arr[index].qty++;       
              
        }


    }
    
    window.cart = new Cart();

})()