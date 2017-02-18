(function() {
    
    class Local {
    	constructor() {
    		this.ls = localStorage;
    	}

    	initField(fieldId) {
            if (!this.ls[fieldId]) {
                this.makeField(fieldId);
            }
    	}
        
        makeField(fieldId) {
            this.ls[fieldId] = '[]';
        }

        getFieldData(fieldId) {
           return JSON.parse(this.ls[fieldId]);    
        }

    	updateField(fieldId, data) {
       		this.ls[fieldId] = JSON.stringify(data);
    	}

    }

window.ls = new Local();
})()