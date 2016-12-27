var date = new Date();
var year = +prompt('какой сейчас год?', 0);

if(year === date.getFullYear() ){
	alert('Вы правы!')
} else{
	alert('C луны свалился? ')
}

