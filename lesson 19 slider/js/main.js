function Slider(selector, options) {
  var self = this;
  //DOM Nodes
  var sliderNode = document.querySelector(selector);
      sliderImagesNode = sliderNode.querySelector('.images-wrap');
      prevArrow = sliderNode.querySelector('.arrow-previous')
      nextArrow = sliderNode.querySelector('.arrow-next');
      paginationNode = sliderNode.querySelector('.slider-pagination');

  var currentSlideIndex = options.currentImg || 0;
  var imagesCount = sliderImagesNode.children.length;
  var slideSize = ( options.direction === 'horizontal' ) ? sliderImagesNode.offsetWidth : sliderImagesNode.offsetHeight;
 
  sliderImagesNode.style.transition = '0.7s';

 
  //Автоматическое создание точек по количеству картинок
  function createPaginationItem() {
   	paginationNode.querySelector('a').dataset.sliderItem = 0;
   
   	for( var i = 0; i < imagesCount - 1; i++) {
   	   var cloneElem = paginationNode.querySelector('.slider-pagination-item');
   	    
   	   var newElem = cloneElem.cloneNode(true);

       newElem.querySelector('a').dataset.sliderItem = i + 1;           
       paginationNode.appendChild(newElem);
    }
    
    paginationNode.children[currentSlideIndex].classList.add('active');
   }


  //Проверка на направление(вертикальное илигоризонтальное) слайдера
  this.init = function() {
     (options.direction === 'vertical') ? sliderImagesNode.style.whiteSpace = 'normal' : sliderImagesNode.style.whiteSpace = 'nowrap';
     
     createPaginationItem()
  }
  
  // Смещение картинок на расстояние равное их размеру; закрашивание точек навигации
  this.__render = function() {
  	var directionStyle = ( options.direction === 'horizontal' ) ? 'marginLeft' : 'marginTop';

    sliderImagesNode.style[directionStyle] = -(currentSlideIndex * slideSize) + 'px';


    paginationNode.querySelector('.active').classList.remove('active');

    paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');   
  }


  // расчет текущего индекса картинки
  this.prevSlide = function() {
  	if(currentSlideIndex === 0 ) {
  		currentSlideIndex = imagesCount - 1;
  		return
  	}
    currentSlideIndex--;
   } 

  this.nextSlide = function() {
  	if(currentSlideIndex === imagesCount - 1) {
  		currentSlideIndex = 0;
  		return
  	}
    currentSlideIndex++;    
  }

  
  // вызов функций при клике на стрелки
  prevArrow.onclick = function() {
  	self.prevSlide()
  	self.__render()
  }

  nextArrow.onclick = function() {
  	self.nextSlide();
  	self.__render()
  }


  // навигация по точкам 
  paginationNode.onclick = function(e) {
    e.preventDefault();
    var link = e.target;

    if ( link.tagName !== 'A' ) return 
    
    currentSlideIndex = +link.dataset.sliderItem;
    
    self.__render();
  }


  this.init();
  this.__render();
}