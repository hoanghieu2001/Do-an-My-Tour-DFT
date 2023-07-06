import { Component, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  private router: Router
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  cacTourTrongNuoc() {
    this.router.navigate(['app/about/cac-tour-trong-nuoc']);
  }
}
