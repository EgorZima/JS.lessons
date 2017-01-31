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
  var slideSize = sliderImagesNode.offsetWidth;
  
  
  this.__render = function() {
     sliderImagesNode.style.marginLeft = -(currentSlideIndex * slideSize) + 'px'
  }


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

  

  prevArrow.onclick = function() {
  	self.prevSlide()
  	self.__render()
  }

  nextArrow.onclick = function() {
  	self.nextSlide();
  	self.__render()
  }


  
  this.__render()
}

