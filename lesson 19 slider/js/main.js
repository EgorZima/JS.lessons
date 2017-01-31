function Slider(selector, options) {
  
  //DOM Nodes
  var sliderNode = document.querySelector(selector);
      sliderImagesNode = sliderNode.querySelector('.images-wrap');
      prevArrow = sliderNode.querySelector('.arrow-previous')
      nextArrow = sliderNode.querySelector('.arrow-next');
      paginationNode = sliderNode.querySelector('.slider-pagination');

  var currentSlideIndex = options.currentImg || 0;
  var imagesCount = sliderImagesNode.children.lenght;
  var slideSize = sliderImagesNode.offsetWidth;
  
 
}

