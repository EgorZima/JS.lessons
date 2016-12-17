function checkSpam(str) {
	if(str.toLowerCase().indexOf('spam') != -1) {
		return true;
	} else {
		return false;
	}
};


checkSpam('Hi I want to send you a spam');
checkSpam('Hi I want to send you a ');