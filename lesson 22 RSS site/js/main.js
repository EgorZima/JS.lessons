(function() {
   
   class RSSReader {
      
      constructor() {
       this.feedURL = 'http://node.dev.puzankov.com/rss/data';
       this.articles = document.querySelector('.articles');  
       this.news = document.querySelector('.one-news');
       this.menu = document.querySelector('.menu');

       this.init();
      } 

      init() {
        var self = this;

        this.getFeed(this.getUrlHash());

        this.currentMenuItem();
        
        window.onhashchange = function(e) {
          self.articles.innerHTML = ' ';
          
          self.getFeed(self.getUrlHash());
          self.currentMenuItem();
        };         
      }

      currentMenuItem() {
        var links = this.menu.querySelectorAll('a');
           
        links.forEach(function(item, index) {
          item.classList.remove('current-link')
        });
        
        var currentLink = this.getUrlHash();
        var elemMenu = 'menu-' + currentLink;

        var currentElem = this.menu.querySelector('.' + elemMenu);
        currentElem.classList.add('current-link');
      }
      
      getUrlHash() {
        var hash = window.location.hash || 'habr';
        
        return hash.replace('#', '');
      }

      getFeed(feedId) {
        var self = this;
          $.ajax({
            url: this.feedURL,
            data: {kind: feedId},
            method: 'GET',
            dataType: 'json'
          })
          .done(this.onGetData.bind(this))
	        .fail(function(error) {
             self.showError(); 
          });

	    }

      showError() {
        var error = document.querySelector('.error');
        error.classList.remove('error-dis');
      }

      onGetData(data) {
        var error = document.querySelector('.error');
        error.classList.add('error-dis');
        this.renderFeed(data.items);
      }

      renderFeed(dataList) {
       var self = this,
           listHTML = [];

       dataList.forEach( function(item) {

        listHTML.push(self.renderItem(item).innerHTML); 

       })
      
      var newList = listHTML.join('');
      
      this.articles.innerHTML += newList;

     }
    

     renderItem(item) {
      var newItem = this.news.cloneNode(true);
      newItem.querySelector('article').classList.remove('article-tmpl');
      
      var post = newItem.querySelector('.post-heading')
      post.innerHTML= item.title;

      var author = newItem.querySelector('.author');
      author.innerHTML = item.author;
  
      
      var date = newItem.querySelector('.date');
      date.innerHTML = this.convertDate(item.pubDate);
      

      var description = newItem.querySelector('.description');
      description.innerHTML = item.summary;
      
      var readMore = newItem.querySelector('.read-more');
      readMore.href = item.guid;
     
      
      if (newItem.querySelector('table') ) {
        newItem.querySelector('table').remove()
      }
      return newItem;
     }


     convertDate(date) {
        var date = new Date(date);
         
        function month(date) {
          if (date.getMonth() < 10) {
            return '' + 0 + ( 1 + date.getMonth() ) ;
          }
          date.getMonth() + 1;
        }

        var newDate = date.getDate() + '.'  +  month(date) + '.' + date.getFullYear();
              
        return newDate;
     }

   };


   window.rssReades = new RSSReader();

})();