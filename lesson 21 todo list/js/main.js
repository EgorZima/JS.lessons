$( function() {
	
	class ToDo {
     constructor() {
       this.model = []

       this.inputFiend = $('.task-form-text');
	   this.form = $('.task-form');
	   this.todoList = $('.table-body')

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

    	if(this.inputFiend.val().length === 0) {
           return 
    	}
        
        localStorage.setItem(this.getLength() + 1, this.inputFiend.val());
    	
    	this.addItem( this.inputFiend.val() );
    	this.form.trigger('reset');
    };

    // Добавить новый елемент в массив объектов 
    addItem(toDoText) {
      var newtoDo = {text: toDoText};
      this.model.push(newtoDo);

      this.appendItem(this.getLength(), newtoDo);
   
	}

    // Добавить в DOM
    appendItem(index, item) {
	    this.todoList.append(this.getItemHtml(index, item.text));
    }

    // Генерация HTML елемента
	getItemHtml(position, item) {
       var tmpl = '<tr class="one-task"> <th> :position </th><td class="task-text">:Text</td>  <td><button type="button" class="button btn-remove" data-index=":index" >X</button> </td></tr>'
	   
	   return tmpl.replace(/:position/gi, position).replace(/:Text/gi, item).replace(/:index/gi, position - 1);
	}
    
    // перерасчет порядкового номера и текста
    renderList() {
    	var list = '';
    	    self = this;
        
    	$.each(this.model, function(index, item) {
         list += self.getItemHtml(index + 1, item.text);
         localStorage.setItem(index + 1, item.text);
    	});

    	this.todoList.html(list)
    }
    
    // удаление задания
    removeItem(index) {
        this.model.splice(index, 1);

        this.renderList();
    }

  
    // показ данных сохраненных в localStorage
    showTasks() {
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

        this.showTasks();

    	this.form.submit( function(e) {
            self.onFormSubmit(e)
    	});

    	this.renderList();

    	this.todoList.on('click', '.btn-remove', function (e) {
    		var index = $(e.target).data('index');

    		localStorage.removeItem(self.getLength());
    		self.removeItem(index);
    	});
	

    }

 
    };

    window.todo = new ToDo();
})


