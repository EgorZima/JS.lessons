function Article() {
  this.created = new Date();
  
  Article.count++;

  Article.last = this.created;

}

Article.count = 0;

Article.showStats = function() {
    console.log('Всего: ' + Article.count + ', ' + 'Последняя: ' + Article.last())
}

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата) 

