import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ajax} from "rxjs/ajax";
import {
  audit, auditTime,
  bindCallback, combineLatest, concat, debounce,
  defer, distinct, distinctUntilKeyChanged, filter, forkJoin,
  from,
  fromEvent,
  generate,
  iif,
  interval, map, mapTo, merge,
  Observable,
  of, partition, race,
  range,
  throwError,
  timer, zip
} from "rxjs";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("txt")
  txt!: ElementRef

  ngAfterViewInit() {
    /* ----------------------------- */

    // debounce

    // text e yazılan kelimeleri console a yazdırır

    // const obs = fromEvent(this.txt.nativeElement, "keyup")
    // obs.pipe(debounce(x => interval(75))).subscribe(data => console.log(data))

    /* ----------------------------- */

    // debounceTime

    // text e yazılan kelimeleri console a yazdırır

    // const obs = fromEvent(this.txt.nativeElement, "keyup")
    // obs.pipe(debounce(x => interval(75))).subscribe(data => console.log(data))

    /* ----------------------------- */
  }

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


    /* ----------------------------- */

    // Ajax Operatörü

    // 1. Kullanım Şekli
    // ajax.getJSON("https://jsonplaceholder.typicode.com/posts").subscribe(data => console.log(data))

    // 2. Kullanım Şekli
    // ajax("https://jsonplaceholder.typicode.com/posts").subscribe(data => console.log(data))

    /* ----------------------------- */

    // bindCallback

    // $.getJSON("https://jsonplaceholder.typicode.com/posts", (data: any) => {
    //   console.log(data)
    // })

    // const obs: (url: string) => Observable<any[]> = bindCallback($.getJSON)
    // obs("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
    //   console.log(data)
    // })

    /* ----------------------------- */

    // defer

    // const obs1 = of(new Date())
    //
    // const obs2 = defer(() => of(new Date()))
    //
    // timer(5000).subscribe(() => {
    //   obs1.subscribe(data => console.log(data))
    //   obs2.subscribe(data => console.log(data))
    // })

    /* ----------------------------- */

    // from

    // const sayilar = [5,10,15]
    // const obs = from(sayilar)
    // obs.subscribe(data => {
    //   console.log(data)
    // })

    // const araclar = new Map<string,number>()
    // araclar.set("Klavye", 1)
    // araclar.set("Monitor", 2)
    // araclar.set("Mouse", 3)
    // const obs = from(araclar)
    // obs.subscribe(data => {
    //   console.log(data)
    // })

    /* ----------------------------- */

    // fromEvent

    //const button = document.getElementsByTagName("button")[0]
    // button.addEventListener("click", () => {
    //   console.log("click")
    // })

    // const obs = fromEvent(button, "click")
    // obs.subscribe(e => {
    //   console.log(e)
    // })

    /* ----------------------------- */

    // generate

    // const obs = generate(100, x => x > 0, x => x = x - 1)
    // obs.subscribe(data => console.log(data))

    /* ----------------------------- */

    // interval

    // const obs = interval(5000)
    // obs.subscribe(data => console.log("Merhaba", data)
    // )

    /* ----------------------------- */

    // of

    // const obs = of(1,3,5, "Ahmet", [1,10,20])
    // obs.subscribe(data => {
    //   console.log(data)
    // })

    /* ----------------------------- */

    // range

    // const obs = range(555,50)
    // obs.subscribe(data => console.log(data))

    /* ----------------------------- */

    // throwError

    //throwError(new Error("Yeni hata")).subscribe(data => console.log(data))

    /* ----------------------------- */

    // timer

    // timer(3000, 1000).subscribe(data => {
    //   console.log("Merhaba")
    // })

    /* ----------------------------- */

    // iif

    // let state : boolean = true;
    // const obs = iif(() => state, of(3,5,7), of(10,20,30))
    //
    // obs.subscribe(data => console.log(data))
    // state = false
    // obs.subscribe(data => console.log(data))

    /* ----------------------------- */

    // combineLatest

    // const obs1 = timer(1500,1000)
    // const obs2 = timer(500,1000)
    // const obs3 = timer(250,1000)
    //
    // const combine = combineLatest(obs1 , obs2, obs3)
    // combine.subscribe(data => console.log(data))

    /* ----------------------------- */

    // concat

    // const obs1 = of(1,2,3)
    // const obs2 = of(4,5,6)
    // const obs3 = of(7,8,9)
    //
    // const obs4 = concat(obs1, obs3,obs2)
    // obs4.subscribe(data => console.log(data))

    /* ----------------------------- */

    // forkJoin

    // const obs1 = of(1, 2, 3)
    // const obs2 = of(4, 5, 6)
    // const obs3 = of(7, 8, 9)
    //
    // const obs4 = forkJoin(obs1, obs2, obs3)
    // obs4.subscribe(data => console.log(data))

    /* ----------------------------- */

    // merge

    // const obs1 = of('a','b','c')
    // const obs2 = of(1,2,3)
    // const obs3 = merge(obs1,obs2)
    // obs3.subscribe(data => console.log(data))

    /* ----------------------------- */

    // partition

    // const obs1 = of(1,2,3,4,5,6,7,8,9)
    // const [obs2 , obs3] = partition(obs1 , x => x % 3 == 0)
    // obs2.subscribe(data => console.log(data + " Şarta uyanlar"))
    // obs3.subscribe(data => console.log(data))

    /* ----------------------------- */

    // race

    // const obs1 = interval(1000).pipe(mapTo("Ahmet"))
    // const obs2 = interval(250).pipe(mapTo("Mehmet"))
    // const obs3 = interval(2000).pipe(mapTo("Ali"))
    //
    // race(obs1, obs2, obs3).subscribe(data => console.log(data))

    /* ----------------------------- */

    // pipe

    // const obs1 = of(1,2,3,4,5, 1241,141,46524,4564,3219874,684)

    // obs1.pipe(filter(x => x % 3 == 0), map(x => x + ' değeri')).subscribe(data => console.log(data))

    /* ----------------------------- */

    // zip

    // const obs1 = of(1,2,3)
    // const obs2 = of(4,5,6)
    // const obs3 = of(7,8,9)
    //
    // zip(obs1, obs2,obs3).subscribe(data => console.log(data))

    /* ----------------------------- */

    // audit

    // const obs = interval(1000)
    // const obs2 = obs.pipe(audit(x => interval(2000)), map(x => x + 'değeri'))
    // obs2.subscribe(data => console.log(data))

    /* ----------------------------- */

    // auditTime

    // const obs = interval(1000)
    // const obs2 = obs.pipe(auditTime(2000), map(x => x + 'değeri'))
    // obs2.subscribe(data => console.log(data))

    /* ----------------------------- */

    // debounce
    // const obs = fromEvent(document, "click")
    // obs.pipe(debounce(x => interval(250))).subscribe(data => console.log("Tıklandı"))

    // bu kısımda sayfaya tıklandığında her 250 saniyede bir tıklandığı diye console yazdırıyor.

    /* ----------------------------- */

    // debounceTime

    // const obs = fromEvent(document, "click")
    // obs.pipe(debounceTime(250)).subscribe(data => console.log("Tıklandı"))

    // bu kısımda sayfaya tıklandığında her 250 saniyede bir tıklandığı diye console yazdırıyor.

    /* ----------------------------- */

    // distinct

    // const obs = of(12,235,72,31,62,7,8,234,137,83,31,7,8,137,83)
    // obs.pipe(distinct(x => x)).subscribe(data => console.log(data))

    // tekrarlanan verileri tek veriye düşürür aynı değerden birkaç tane varsa diğerlerini göstermez

    /* ----------------------------- */

    // distinctUntilKeyCharged

    /* ----------------------------- */
  }
}
