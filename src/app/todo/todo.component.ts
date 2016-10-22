import {Component} from '@angular/core';

@Component({
	selector: 'todo-app',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.css']
})

export class TodoComponent {
	items = [
		{name: 'check your email', id: 1},
		{name: 'check your texts', id: 2}
	];
	checkedItems = [];

	toggleCheck(id){
		if (this.checkedItems.indexOf(id) > -1){
			this.checkedItems.splice(this.checkedItems.indexOf(id), 1);
		}
		else {
			this.checkedItems.push(id);
		}
	}

	addItem(task){
		let item = {
			name: task,
			id: Math.random()
		};
		this.items.push(item);
	}

	removeItem(item){
		if (this.items.indexOf(item) > -1){
			this.items.splice(this.items.indexOf(item), 1);
		}else{
			alert('Item not available')
		}
	}
}