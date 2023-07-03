import { Component, OnInit } from '@angular/core';
import { PhotoService } from './service/photoservice';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  images: any[] | undefined;

  responsiveOptions: any[] | undefined;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }
}
