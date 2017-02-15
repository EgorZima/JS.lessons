(function() {
    
    class Local {
    	constructor() {
    		this.ls = localStorage;
    	}

    	initField(fieldId) {
            if (!this.ls[fieldId]) {
                this.clearField(fieldId);
            }
    	}

        getFieldData(fieldId) {
           return JSON.parse(this.ls[fieldId]);    
        }

    	updateField(fieldId, data) {
       		this.ls[fieldId] = JSON.stringify(data);
    	}

    	clearField(fieldId) {
    		this.ls[fieldId] = '[]';
    	}
    }

window.ls = new Local();
})()