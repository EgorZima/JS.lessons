( function() {

    class Search {
        constructor() {
            this.url = 'https://api.cognitive.microsoft.com/bing/v5.0/images/search?view=detailV2&'
            this.button = document.querySelector('.submit'),
            this.input  = document.querySelector('.search-input'),
            this.img = document.querySelectorAll('.grid-item img');
            this.form = document.querySelectorAll('.form');
        

            this.button.onclick = (e) => {
                e.preventDefault();

                if (this.input.value.length > 1) {
                    this.init();
                    return;
                }
                this.input.style.border = "1px solid red"; 
            }
        }

        init() {
            var data = this.input.value;

            this.getFeed(data);
        }

        getFeed(data) {
          let name = data[0].toUpperCase() + data.slice(1);

          jQuery.ajax({
            url: this.url + 'q=' + data,
            beforeSend: (xhrObj) => {
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","05327b0366cb482bb0e536b7da7f9d5a");
            },
            data: 'JSON',
            type: "GET",  

        })
            .done( (data) => {
                this.input.style.border = "1px solid #ccc";

                var rand = Math.floor(Math.random() * this.img.length);
                var imageDOM =  this.img[rand];

                let obj = data.value;
                let imgWeb = obj[rand].contentUrl;
                
                imageDOM.setAttribute('src', imgWeb);
        
                imageDOM.nextElementSibling.innerHTML = name;
                imageDOM.style.transition = "0.5s";
                
                this.form[0].reset();     
            })
            .fail(() => {
                this.input.style.border = "1px solid red";
            });
        }

    }

window.search = new Search();

})();


function tileChange() {
    let imgs = document.querySelectorAll('.grid-item img');
    let words = ['holiday', 'relax', 'sport', 'nature', 'animals', 'forest', 'beach', 'sea', 'seaside', 'flowers', 'garden', 'sunset' ];
    
    
    imgs.forEach( (item) => {
        var rand = Math.floor(Math.random() * words.length);
        
        let name = words[rand];

        search.getFeed(name);    

    })
};
tileChange()