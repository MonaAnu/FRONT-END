import { Component, OnInit } from '@angular/core';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-receptionist-dashboard',
  templateUrl: './receptionist-dashboard.component.html',
  styleUrls: ['./receptionist-dashboard.component.css']
})
export class ReceptionistDashboardComponent implements OnInit {
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
