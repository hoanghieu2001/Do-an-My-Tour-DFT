import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(
    private router: Router
  ) {
  }

  cacTourTrongNuoc() {
    this.router.navigate(['app/about/cac-tour-trong-nuoc']);
  }
}
