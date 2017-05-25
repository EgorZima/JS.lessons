(function() {
   
   class RSSReader {
      
      constructor() {  
       this.newsSource = '';
       this.newsSource = this.getUrlHash();
       this.feedURL =  `https://newsapi.org/v1/articles?source=${this.newsSource}&sortBy=top&apiKey=f52da78d1f6e4d7290151421b119af96`;
       this.articles = document.querySelector('.articles');  
       this.news = document.querySelector('.one-news');
       this.menu = document.querySelector('.menu');
       this.postHeading = document.querySelector('.post-heading');
       this.init();
      } 

      init() {
        let self = this;
        this.getFeed();
        this.currentMenuItem();
        
        window.onhashchange = function(e) {
          self.articles.innerHTML = '';
          self.newsSource = self.getUrlHash();
          self.feedURL = `https://newsapi.org/v1/articles?source=${self.newsSource}&sortBy=top&apiKey=f52da78d1f6e4d7290151421b119af96`;
          
          self.getFeed();
          self.currentMenuItem();
        };         
      }
      
      
      currentMenuItem() {
        let links = this.menu.querySelectorAll('a');
           
        links.forEach(function(item, index) {
          item.classList.remove('current-link')
        });
        
        let currentLink = this.getUrlHash();
        let elemMenu = 'menu-' + currentLink;

        let currentElem = this.menu.querySelector('.' + elemMenu);
        currentElem.classList.add('current-link');
      }
      
      getUrlHash() {
        let hash = window.location.hash || 'cnn';

        return hash.replace('#', '');    
      }

      getFeed() {
        let self = this;
          $.ajax({
            url: this.feedURL,
            method: 'GET',
            dataType: 'json'
          })
          .done(this.onGetData.bind(this))
	        .fail(function(error) {
             self.showError(); 
          });

	    }

      showError() {
        let error = document.querySelector('.error');
        error.classList.remove('error-dis');
      }

      onGetData(data) {
        this.renderFeed(data.articles);
      }

      renderFeed(dataList) {
       let self = this,
           listHTML = [];

       dataList.forEach( function(item) {

        listHTML.push(self.renderItem(item).innerHTML); 

       })
      
      let newList = listHTML.join('');
      
      this.articles.innerHTML += newList;

     }
    

     renderItem(item) {
      let newItem = this.news.cloneNode(true);
      newItem.querySelector('article').classList.remove('article-tmpl');
      
      let post = newItem.querySelector('.post-heading')
      post.innerHTML= item.title;

      let author = newItem.querySelector('.author');
      author.innerHTML = item.author;


      let publishDate = newItem.querySelector('.date');
      publishDate.innerHTML = this.convertDate(item.publishedAt);
      

      let description = newItem.querySelector('.description');
      description.innerHTML = item.description;
      
      let readMore = newItem.querySelector('.read-more');
      readMore.href = item.url;
      this.postHeading.href = item.url;

      let image = newItem.querySelector('.news-image') ;
      image.src = item.urlToImage;
     
      
      if (newItem.querySelector('table') ) {
        newItem.querySelector('table').remove()
      }
      return newItem;
     }


     convertDate(dateId) {
        let date = new Date(dateId);
         
        function month(date) {
          if (date.getMonth() < 10) {
            return '' + 0 + ( 1 + date.getMonth() ) ;
          }
          date.getMonth() + 1;
        }

        let newDate = date.getDate() + '.'  +  month(date) + '.' + date.getFullYear();
              
        return newDate;
     }

   };


   window.rssReades = new RSSReader();

})();