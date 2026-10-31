import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit, OnDestroy {
  public dataset: any = [];
  public susbcription: any;
  constructor(private http:HttpClient) {
    console.log("const activated");

}
  ngOnInit(): void {
       console.log("ng ONINIT Called");
    let result =this.http.get('https://fakestoreapi.com/products');
    console.log(result);
    this.susbcription=
    result.subscribe((record: any) => {
      console.log(record);
      this.dataset = record;

    });
      }
  ngOnDestroy(): void {
    console.log("ng DESTOROY Called");
    this.susbcription.unsubscribe;

  }
}
