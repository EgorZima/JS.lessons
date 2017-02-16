(function() {
	
	class ToDo {
     constructor() {
       this.model = []

       this.inputFiend = document.querySelector('.task-form-text');
	   this.form = document.querySelector('.task-form');
	   this.todoList = document.querySelector('.table-body');


	   this.todoList.onclick = function(e) {
            var target = e.target;
            
            if (!target.classList.contains('btn-remove') ) {
            	return
            }

            var index = target.getAttribute('data-index');
            
            localStorage.removeItem(self.getLength());
            self.removeItem(index);
    	}

    	this.init();
     }

    // Получить длину модели
    getLength() {
       return this.model.length;
    }

     // Функция для отправки формы
    onFormSubmit(e) {
    	var self = this;
    	e.preventDefault();
    	var value = this.inputFiend.value;
        
        var newVal = value[0].toUpperCase() + value.slice(1);

    	if( newVal.length === 0) return 
    	
        localStorage.setItem(this.getLength() + 1, newVal);
    	
    	this.addItem( newVal );
    	this.form.reset();
    };

    // Добавить новый елемент в массив объектов 
    addItem(toDoText) {
      var newtoDo = {text: toDoText};
      this.model.push(newtoDo);

      this.appendItem(this.getLength(), newtoDo);
	}

    // Добавить в DOM
    appendItem(index, item) {
    	var tr = document.createElement('tr');
        tr.className = 'one-task'
        tr.innerHTML = this.getItemHtml(index, item.text);

        this.todoList.appendChild(tr);
    }

    // Генерация HTML елемента
	getItemHtml(position, item) { 
       var tmpl = '<tr class="one-task"> <th> :position </th><td class="task-text"><p>:Text</p></td> <td><button type="button" class="button btn-remove" data-index=":index">X</button> </td></tr>'
	   
	   return tmpl.replace(/:position/gi, position).replace(/:Text/gi, item).replace(/:index/gi, position - 1);    
	} 
    
    // перерасчет порядкового номера и текста
    renderList() {
    	var list = '';
    	    self = this;
        
    	for (var i = 0; i < this.model.length; i++) {
            var item = this.model[i];
           
            list += self.getItemHtml(i + 1, item.text);
            localStorage.setItem(i + 1, item.text);
    	}

    	this.todoList.innerHTML = list;
    }
    
    // удаление задания
    removeItem(index) {
        this.model.splice(index, 1);
        this.renderList();
    }

    // показ данных сохраненных в localStorage
    showLocalStorageTasks() {
      var loLen = localStorage.length;

    	if (loLen != 0) {
    		for (var i = 0; i < loLen; i++) {
    			var key = localStorage.key(i);

                this.addItem(localStorage.getItem(key))
    		}
    	}
    }	

    // Инициализация 
    init() {
        var self = this; 
        this.showLocalStorageTasks();

    	this.form.onclick =  function(e) {
    		var target = e.target;
            
            if (target.className != 'form-submit' ) {
            	return
            }
            self.onFormSubmit(e)
    	};

    	this.renderList();
     }

    }


    window.todo = new ToDo();
})()




