import { Component, OnInit } from '@angular/core';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {
  private unsubscriber: Subject<void> = new Subject<void>();
  ngOnInit(): void {
    history.pushState(null, '', location.href);
    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
         alert(`You can't go back at this time.`);
      });
  }

}
