import { Component } from '@angular/core';

import {PostService} from './services/post.service'
import {Component} from './services/post.component'


@Component({
	selector : 'my-app',
	template : `
			<div>
				<h1>My Angular2 Services</h1>
				<br>
				<posts></posts>
			</div>`,
	providers : [PostService]
})

export class AppComponent {
			
}