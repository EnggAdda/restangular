import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent {

  constructor(httpClient : HttpClient) {

   let response  = httpClient.get('https://jsonplaceholder.typicode.com/posts');
   response.subscribe((data)=>console.log(data));
  }

   }



