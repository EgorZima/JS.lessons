function printNumbersInterval() {
    var i = 0;
    
    var timer = setTimeout(function count() {
        console.log(i);
        if (i != 20) {
          setTimeout(count, 100);
          i++;
        }
    }, 100);
}

printNumbersInterval();