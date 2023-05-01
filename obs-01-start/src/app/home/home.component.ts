import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  ngOnInit() {
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
        if (count === 8) {
          observer.complete();
        }
        if (count > 9) {
          observer.error('count cannot be more than 9');
        }
      }, 1000);
    });

    this.subscription = customIntervalObservable
      .pipe(
        filter((data: number) => data % 2 === 0),
        map((data: number) => 'Round: ' + data)
      )
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      }, () => {
        console.log('Subscription completed!');
      }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
