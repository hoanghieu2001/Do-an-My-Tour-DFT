import { Component, OnDestroy, OnInit, } from '@angular/core';

@Component({
  selector: 'app-sale-products',
  templateUrl: './sale-products.component.html',
  styleUrls: ['./sale-products.component.scss']
})
export class SaleProductsComponent implements OnInit, OnDestroy {
  targetDate: Date = new Date('2023-8-8'); // Set your target date here
  remainingTime: any;
  countdownInterval: any;

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  startCountdown() {
    const now = new Date().getTime();
    this.countdownInterval = setInterval(() => {
      const timeDifference = this.targetDate.getTime() - now;

      this.remainingTime = {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDifference % (1000 * 60)) / 1000)
      };

      if (timeDifference <= 0) {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.countdownInterval);
  }

  constructor() { }

  // navigateToRegistration() {
  //   const propertyBoxSaleElement = this.elementRef.nativeElement.querySelector('#khuyen_mai');
  //   propertyBoxSaleElement.scrollIntoView({ behavior: 'smooth' });
  // }


  itemsPerSlide = 4;

  slides = [
    { image: 'https://i.pinimg.com/originals/58/62/38/58623801a7a70d186cb26f865d90266c.jpg' },
    { image: 'https://i.pinimg.com/originals/58/62/38/58623801a7a70d186cb26f865d90266c.jpg' },
    { image: 'https://i.pinimg.com/originals/58/62/38/58623801a7a70d186cb26f865d90266c.jpg' },
    { image: 'https://i.pinimg.com/736x/4a/5e/e0/4a5ee0f8438b43b1309ebe84f95c97ea.jpg' },
    { image: 'https://i.ytimg.com/vi/nE-5PPXjuqg/maxresdefault.jpg' },
    { image: 'https://i.pinimg.com/736x/9d/3c/a5/9d3ca5906d602c943f66e9b0d629f82f.jpg' },
    { image: 'https://i.pinimg.com/736x/4a/5e/e0/4a5ee0f8438b43b1309ebe84f95c97ea.jpg' },
    { image: 'https://i.pinimg.com/736x/9d/3c/a5/9d3ca5906d602c943f66e9b0d629f82f.jpg' },
    { image: 'https://coinz.com.vn/wp-content/uploads/2023/01/bunny-rainbow-fan-token-social.jpg' },
    { image: 'https://i.pinimg.com/736x/9d/3c/a5/9d3ca5906d602c943f66e9b0d629f82f.jpg' }
  ];
  sales = [
    {
      image: "https://s3-alpha-sig.figma.com/img/91b8/7c97/3fedd0c420317215d589442c6625147e?Expires=1690156800&Signature=mjPUL33LvoBEEwCTeMOH08aL9ZWravOLB6-jwG2QwtEj8XQUxmK6ogJdBmDrHDnfjtNCAZUH8Dbd0g0ythTl3m5mp01b1I5IX2578yUaJgS9iBlLOP62kAZnIvACTeS~tbC5n4ES~lds2zcn3CC~5q9ZC3c8idyYVLvRXZSqiffCt37jhcug27K3A2QIIteAhJA6JRNJlNhPxuxN0i-f3X7F2wG~SqVDR6PQdNJSc5-YlDBeRHAQ6FUFuaE7uCRtRYUY5S5sSALDtJjo-Lj3mfR~Wyd9JM5KWYlViNykySbelmXH-j4dBXtq2XrRwCUWsnJGa33GgJRP5vkexd5nAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Khách sạn Imper Vũng Tàu",
      city: "Thành phố Vũng Tàu",
      status: "Rất tốt",
      price: "2.492.573 VND"
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/0cb4/50f1/f7518579f49908d04e771b6b285dbf61?Expires=1690156800&Signature=Uc9c-0q5xZ39Bd25A9RsDA8rBakPTLcQYamHl9a8HSZgKqGD9PhSPkXJ6OsRGvu7X~DR63a4FdxTP63W~gebp25rgTJ318KO1qCbbW0uE45jczlHGmnKB~W4buEda2Q-adi8b3~PHpppXXI6M1pxyHsGs~EBJpsBoKjgXAyTItjsuM3RZRYkq6VCXLD6txAktPVG2TYybVetcgXumXy4F~WH1wp9PUAhtcoJMJwBhSt4BWCPNTpBey3e5vxyVcCK0h93ZEgSlByYuI6FFh4grEm24K2XAGltE6FN6vMDbnvZktwzZxwkxkva1CVGRS2Uk5D3pku6pdmzcxVaLHCgrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Đà Nẵng - Mikazuki Japanese Resort & Spa",
      city: "Quận Liên Chiểu",
      status: "Tuyệt vời",
      price: "2.121.154 VND"

    },
    {
      image: "https://s3-alpha-sig.figma.com/img/c3af/847a/a26493555425f86d4f7443d12cccdac6?Expires=1690156800&Signature=FJfue57m6-L-rZoISiDAMcmppJP52llsrLsHFISxzRaaT7SfGpjYRdPfGTh0gOE082eXHAEHCLO1i63~NluFeE5LkFVM88nBn-HNB-Ct~1FCmUMizeOK8NxOzznul-ptn73cLBe~zP6UvrA6kFKrnOCQek3XnvMhMVaMaOC7yTOGdwWvwqtkVkUxoQ72zWb~v09kG4Ago8xeVwg3KqbNCMOOfovqsevpzmOKn7mO4s1JtGCuTc2x0sSGSk1v~6IFsthgb32ZRhhgEUkTecizTgPF2-l6euBGYCgItn6aO1kK2aalKw3H0Cz8EMvOtMYpKG-VRR3jWXmJ2ZzKOvsIXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Khu nghỉ dưỡng Melia Núi Ba Vì ",
      city: "Huyện Ba Vì",
      status: "Tuyệt vời",
      price: "3.615.604 VND"

    },
    {
      image: "https://s3-alpha-sig.figma.com/img/7a1c/e011/764ca9e284c24a9a701e91d043cef1d7?Expires=1690156800&Signature=S9ZhUi9z2--E61wtj-gL1mz3a4ANVeQdBzX8GiP6Ac0Qo5-JyTFHdMmPXzAEyv5G-AOKyNjtbPHaywSPCGE3eIZYhZ116yWIPKMtchhHy3bhrY5Zgt3jOuJIVPBmvvRKRaipN4qCyqF0LjsV8Q6TTce5G~krOIUOLzgvkKc9AJYmzZx-PLQSyGS-~YNDtcPjJSkDxII6FrT9T11spMkF~LwtwFRCfbRxIY4L~tNxBo6kqM-SgBLsPdB~i9tYeSUdiIHknCmh~3SrlxZncsUuxMufDyhB-1hswH93IS0UVGKMa1NcUVHXlfv-NEaYrYnbqj76-mwWoI2KnCLN73A8JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "InterContinental Phú Quốc ",
      city: "Phú Quốc",
      status: "Tuyệt vời",
      price: "4.000.280 VND"

    },

    {
      image: "https://img.tripi.vn/cdn-cgi/image/width=548,height=310/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2Fthumb_UE8RSZ9H87_uUvzlVINQiiHi-9TlasXqQ-15.jpeg?generation=1612422711703287&alt=media",
      title: "Khách sạn Anya Quy nhơn ",
      city: "Quy Nhơn",
      status: "Tuyệt vời",
      price: "3.00.280 VND"

    },

    {
      image: "https://img.tripi.vn/cdn-cgi/image/width=548,height=310/https://storage.googleapis.com/hms_prod/photo/thumb/456774zEToKw/overview.png",
      title: "Khách sạn citadines Hạ Long ",
      city: "Thành phố Hạ Long",
      status: "Tuyệt vời",
      price: "2.300.280 VND"

    },

    {
      image: "https://img.tripi.vn/cdn-cgi/image/width=548,height=310/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FJIZY9DOUB4_%2Ftmp%2Fplaytemp858296023012944501%2FmultipartBody694757521126482023asTemporaryFile?generation=1587699044706126&alt=media",
      title: "Flamingo Đại Lải Resort ",
      city: "Thị xã Phúc Yên",
      status: "Tuyệt vời",
      price: "4.355.280 VND"

    },

    {
      image: "https://img.tripi.vn/cdn-cgi/image/width=548,height=310/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FGJGKG9M0WP_%2Ftmp%2Fplaytemp4451784278522770582%2FmultipartBody3634899464400714441asTemporaryFile?generation=1586495920714726&alt=media",
      title: "Novotel Phú Quốc ",
      city: "Phú Quốc",
      status: "Rất tốt",
      price: "1.355.280 VND"

    },
  ]
}
