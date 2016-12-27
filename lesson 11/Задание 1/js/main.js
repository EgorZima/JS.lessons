function formatDate(date) {
	if (typeof date == 'number') {
        date = new Date(date * 1000);

    } else if (typeof date == 'string') {
        date = new Date(date); 

    } else if (Array.isArray(date)) { 
        date = new Date(date[0], date[1], date[2]);
    }
      
    return date.toLocaleString( {day: '', 
    	                         month: '', 
    	                         year: ''
    	                        });
}

console.log( formatDate('2011-10-02') ); 
console.log( formatDate(1234567890) );
console.log( formatDate([2014, 0, 1]) ); 
console.log( formatDate(new Date(2014, 0, 1)) ); 