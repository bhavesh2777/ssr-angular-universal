import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  routeSub: Subscription;
  paramValue = '';
  constructor(private readonly route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.paramValue = params.id;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
