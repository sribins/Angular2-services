import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/operator/map'


interface Post {
	_id : number,
	title : string,
	body : string
}

@Injectable() 



export class PostService {
	private posts : any[];
	private apiUrl : string;
	private postDate : any;

	constructor(private _http: Http){
		this.apiUrl = "https://jsonplaceholder.typicode.com/posts"
		// hard coding. instaed of hardcoding we using http service
		/*this.posts = [
		{
			title : 'Hello Hyderabad',
			body : 'I am Wishing EveryBody !!!'
		},
		{
			title: 'latest Updates',
			body : 'Why do you need latest updates ? just go home'
		},
		{
			title : 'Who is Johngalt ?',
			body : 'Johngalt is the of highest virtue !!!'
		},
		{
			title : 'I am Home',
			body : 'I am done for the day and going home !!'
		}
		]*/
	}
	getPosts() : Observable<Post[]> {
		console.log("hello")
		return this._http
							.get(this.apiUrl)
							.map(function(response){
								return response.json()
							});

		
		//return this.posts;
	}
	addPost(newPost:any){
	this.posts.push(newPost);
}
}