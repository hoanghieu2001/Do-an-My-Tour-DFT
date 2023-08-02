import { Component, OnInit, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TourComponent implements OnInit {
  ngOnInit(): void {

  }

  listTour = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1597811209390-e674b6a68775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80",
      title: "COMBO HÀ NỘI- NHÀ TRANG",
      price: "3.000.000VNĐ"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1432889490240-84df33d47091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      title: "COMBO HÀ NỘI - MŨI NÉ",
      price: "4.000.000VNĐ"
    },
    {
      id: 3, img: "https://images.unsplash.com/photo-1586595276832-b6840c79bdfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "COMBO HÀ NỘI - ĐÀ LẠT",
      price: "5.000.000VNĐ"
    },
    {
      id: 4, img: "https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
      title: "HÀ NỘI - HẠ LONG",
      price: "3.500.000VNĐ"
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1609597254239-d9ace3c0b39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=917&q=80",
      title: "COMBO HÀ NỘI - PHÚ QUỐC",
      price: "4.000.000VNĐ"
    },
    {
      id: 6,
      img: "https://wecheckin.vn/wp-content/uploads/2019/10/Mo%CC%82c-chau.png",
      title: "HÀ NỘI - MỘC CHÂU",
      price: "2.000.000VNĐ"
    },
  ]
  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];
  khudulich() {
    this.router.navigateByUrl('/app/about/chi-tiet-khu-du-lich');
  }
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService,
    private router: Router,
  ) { }



}
