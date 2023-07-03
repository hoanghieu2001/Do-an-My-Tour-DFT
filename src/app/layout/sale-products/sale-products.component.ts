import { Component } from '@angular/core';

@Component({
  selector: 'app-sale-products',
  templateUrl: './sale-products.component.html',
  styleUrls: ['./sale-products.component.scss']
})
export class SaleProductsComponent {
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
      image: "https://s3-alpha-sig.figma.com/img/91b8/7c97/3fedd0c420317215d589442c6625147e?Expires=1688342400&Signature=CH2CJhDOCFPEQ524bPPfgr4ih0Z6lbGWl2oYncMfChi-iqA1sh~-JxerAcZXVbFPr~tXkz9lceSEYKd~rTN8KNjcf0rvGRdOm2rokHVd0zKSrTzphnwd5NBXmMONrX9UOW3bHvraVdbgYPaMpVnFTwQ-jIFEhxcPhCM~heUDivLo9mGzrGr5jwH8Ya3JaOHcu~Ox4yNljRkiMmfD2G3zVEJlz26oplPTaIDKFXixhQMlfxH~apxhuT29M8bc20FSlcPM0d1SeivvcAay~CcR2yAtpn5jiQW-E9gUMCod~2W8ZKpzo6SvXmtmvWdjBu~0wwbLNk5xZdt74j8HF~DTFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Khách sạn Imper Vũng Tàu",
      city: "Thành phố Vũng Tàu",
      status: "Rất tốt",
      price: "2.492.573 VND"
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/0cb4/50f1/f7518579f49908d04e771b6b285dbf61?Expires=1688342400&Signature=pdZN9SVp8t9E-Zs6x03GoC0pgIAzOVCG1MXmFqdC4AZzvRsU7Lh8MkTuQcoeX-LnMDhYhqUrOll72xnybhAbzk542c7LCt61r~iEt5DZQ1kb1QIij7~Nqv01DZZw8zSmKakqiIufL29mQDWXdAcU4RLdO86iMfUXmLF39bxVRenj9XR7l5P33lKNvzqqSaTwUNlC8UHNOP7GZWPyS5rvSpHwmFkqpnxyGbGmS9Dn13T5q3v18ewxJUsEYDR91NuG9IetXHKPiCP7hdLeHb7y8zDLb1vlr3O4CtwrS-9jM9cb5pZvK34URwmm~lHIU2XWWNxOCh28fZRxlhaKMUvrLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Đà Nẵng - Mikazuki Japanese Resort & Spa",
      city: "Quận Liên Chiểu",
      status: "Tuyệt vời",
      price: "2.121.154 VND"

    },
    {
      image: "https://s3-alpha-sig.figma.com/img/c3af/847a/a26493555425f86d4f7443d12cccdac6?Expires=1688342400&Signature=WcTCjoFcpujK71HxReArrpc5u-Xi~jnLxQ7TA3SQIGnmOiLKxHAIyBwCTZFKrnf7zBa7wKUxm3Bl3SBC43bkGZre-88VprNSxj8vvQ3hi7xnWsbm2HrTAciQf8rD5-QSr2fjDJOtpodL0mR3xqRKl~9ts-1y6ZQkS02pGC-SnV3ZwKfTY38CaLglgqHJ65sZLGTXngNy1HUOd2H0zKIzL6wSGKRzZwbNWpHc8e5~DSztFsiLTAF4snLpk8uRjMeC5dnA7ufSUUHoQBY9vH6SWmRSr7j-5t8BQwBneMzldx--QbOAf-pwjnQslQa6L5T8kkuU0P-KnbX~p8hcksXcdQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Khu nghỉ dưỡng Melia Núi Ba Vì ",
      city: "Huyện Ba Vì",
      status: "Tuyệt vời",
      price: "3.615.604 VND"

    },
    {
      image: "https://s3-alpha-sig.figma.com/img/7a1c/e011/764ca9e284c24a9a701e91d043cef1d7?Expires=1688342400&Signature=hbuKhQ0ZMM~MeZU3HQ5n5RFcTe1ZO0WkfLnZthcpTgkgyTaywafgRDkdacUL~mObbzUqno1SVxUaRCKyXW2k9AZOfbYJpSAOsJeI1bdVCpZEHzUp-94vpzu2GsRK2dgzH5QHxEPM~LjAixcuhM1pul6yBodTs~RBQdZCSCY1BK-4JlljsgISctmX6KCYBvAS~OZNC-~O3cT-wJts-EYxSt4EysMqifAqB69gBBrkjeuf78u03MZXqy8h6-B5SCIPyF6eMa8awIOtSdQtK2yGuaY69DtK1wOp-hrqvRQ63bnvaKHQ5N~DHmX8IZKzlL4ZzbLKLUbjex3DeN1upi3X5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
