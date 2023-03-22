import { Component, OnInit } from '@angular/core';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  private unsubscriber: Subject<void> = new Subject<void>();

  ngOnInit() {
    history.pushState(null, '', location.href);
    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
       alert(`You can't go back at this time.`);
      });
    }

}
