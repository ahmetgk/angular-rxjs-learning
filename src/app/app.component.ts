import {Component, OnInit} from '@angular/core';
import {ajax} from "rxjs/ajax";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    /* ----------------------------- */

    // Observable Örneği

    // const observable = new Observable<number>(data => {
    //   data.next(1)
    //   data.next(10)
    //   data.next(100)
    //   data.complete()
    // })
    // observable.subscribe(data => {
    //   console.log(data)
    // })

    /* ----------------------------- */

    //Observer Örneği

    // const observable = new Observable<number>(data => {
    //   data.next(1)
    //   data.next(10)
    //   data.next(100)
    //   data.complete()
    // })

    // 1.Kullanım Şekli
    // const observer = function (data:any){
    //   console.log(data)
    // }

    //2.Kullanım şekli
    // const observer = (data:any) => {
    //   console.log(data)
    // }

    // observable.subscribe(data => {
    //   console.log(data)
    // })

    /* ----------------------------- */

    // Operatörler

    // Ajax Operatörü

    // 1. Kullanım Şekli
    // ajax.getJSON("https://jsonplaceholder.typicode.com/posts").subscribe(data => console.log(data))

    // 2. Kullanım Şekli
    // ajax("https://jsonplaceholder.typicode.com/posts").subscribe(data => console.log(data))

    /* ----------------------------- */

  }
}
