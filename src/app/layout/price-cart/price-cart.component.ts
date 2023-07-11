import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-cart',
  templateUrl: './price-cart.component.html',
  styleUrls: ['./price-cart.component.scss']
})
export class PriceCartComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {

  }
  carts = [
    {
      id: 1,
      title: "Côn Đảo",
      image: "https://s3-alpha-sig.figma.com/img/0ed6/3a11/c315a4f436fa076bd86dd72ab1c3b988?Expires=1690156800&Signature=jJNx1VtAabl7CkY9M9gxoGFEDIirrcSClWhyhTNn0AJdORvhyRfvztxye4p7MoWMQErI0JF-J3hSWgiMzwX~esQW7pvklxl4qqArBSJPUre1CtJXci1z81qE-EqdbOVbffF23p-Wuc-CgdQ91Z7Em86xg-PjYzeQUuCzBkOvVlygPnrWyW2zQwEqZQmXu9xG0HqFnFYWW-ZPjY7NabzmtSjUQREzpzvFMMbG3hgAH9oq8jm83oiOiQhk8~Qq~QeZauO9b~4uByeEELjzErChOnXeDFIspFjFqjqCLFo57uawDIFQmHA5MjRyrXO40zCHS7v0a4RzK1nbMDibVQ8obw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 2,
      title: "Hà Giang",
      image: "https://s3-alpha-sig.figma.com/img/8331/592b/c05d1cbaa1cd9b7eb8eb3802c3248bb7?Expires=1690156800&Signature=g~~IplMeOZ5ayp7YqH~7-9L6gPC5rCjcwpgj0pVvW14SdXu1DkOXyED9OZ90BLhYhZ8bMkNf-Ik4zv8kbWA0SU1~jKgmvwZqW9Mb3MQGEEn~jOL6af8yki1tphWWVXPVgtE2fpf~gp31HZDqCZOiBAxEhI071s~R6BaSYApHZ0gLQDRqNgqnzTcoONO5WlVRb8190Rmy1nQRyLtSC6t6k4nQxNHJkhmkstJ3uAlawA5F1Cye9nd54wK7PXLldkml0UONY1k8u~0QhOV9A94ibSq17O~k1O1~RhKuPphybCD8tiL38v5-npVlG~qtZ1gmJCs9SeBbCneQcTXUMgo9mw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 3,
      title: "Phú Quốc",
      image: "https://s3-alpha-sig.figma.com/img/e007/55c3/c3123cb5af6cbaf151232846c4d939d6?Expires=1690156800&Signature=FOETjzY0h3Bbrf85NYB~BIlDxB13OvUNeLAI7jWCyt~YuHtoSVtVfrXOXIdo~mo7QMusoIllWbNugfzRWtzv~~ciUgNoWmM-U4bN8tVizaQVT1~h38WAe6v-B~IW~3MEtCYTB6r6HwYkv~AfZePx-KrxHM5uK3qhAY45RlaubP6qAbwE2bekAlY2H4baltyuZOoZtE8JfCGUpYi7Cu6Ax6sckfCYA250UKXeGq89q8jrHjgaFjylxUC3g6QFkLoH09Owlvue2QSTLuQWq8XemuA-3z0vaPv6j0kf5TP8PgF7BZbS5YEiCdzmFq7wR~VlJ72t8Es261ExYvOmlBIE-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 4,
      title: "Đài Loan",
      image: "https://s3-alpha-sig.figma.com/img/e5b5/c20d/0980a78e7a6396f32373edb0478a0cbf?Expires=1690156800&Signature=Oow1xRiK7eNlq4pp91QHJE55-Zw-iVdHTuc9X5p0cDgl4cLngdGsg90fbXor1-kbMXJCWhsTrCBPGGai33TTaoXSevJiTJtNIi5KEYwKL-85ZOMplU0HWhuudX0~cDDqfeLv6QoCxizOkqtKc2F8Evt5dLzyRDLqkqqhPidwiKvcEtgocelO2fnB45~sEUQUiIM4DJXiyxc-upzdVPwUDS5J7bY3DLxIz9m4I3lMyYQfJbnAIGwNb7O0vO0wCVgkWfRJEkSZd~wBkNLUH04GRzfTk2tpMftB~nzf2OBASlb0SAVkmaanRabm-GkC0Y-mMfwarpxHqwmw8TH4KtZejQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 5,
      title: "Hàn Quốc",
      image: "https://s3-alpha-sig.figma.com/img/b3c6/6540/28975952fe9f2bb44235879c3cd6e9d8?Expires=1690156800&Signature=N5PVJg7T1girVRtDIq-f4akvDHyF99mDxGU4xaUIsn8maBWzR~Qg0NsnPrwj~TgteL0Th1DXHmKEedFBQ6ZnrH7pvJ0a1lkZN2HHA4a9TECf4XO7WlmSVyE0pPVxnv-ZE66YjHCF-T~pINVS8jMLp6H-9MhQ9mhWBtsNguMKfdg0NYDuRbYXus1~-rYzb~qcs-dEID1tfoJAeeLhm1mEGY3x8bElu9ef0bJz17o2NzTtGAQf6a1NoKdy0gOZwBO7tin~JNFmQo5t5cWO2iTf4QEc~iwTkfasiBQ7-THxwyD4u-viWwFR3xHa0EceCQMOjTzHT7vx4lPrSVlea~G9TQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 6,
      title: "Du Bai",
      image: "https://s3-alpha-sig.figma.com/img/aafb/a95d/51df3dcd44fce228ac1ef43ab4067ee0?Expires=1690156800&Signature=WKPIAXsZktwQKKanIVTnCB6icIA4P-kf03HWvOhq5Mme42N-tkx7dnKDpGupix4x8eli-FD-vwCUYK3xP8w4ot8GNinr6XnDxBgyp51rolB48h7CyIGiy85tq0OPyZEG54HpaTfEN2ptl1mamLl~astzYvnOz5QeMxuabX0As-bPNXDTEDUyJO7ATdL--A6aUTdGZzVRx-B1wI5P98UpSRcJK6ZP4-UURgNz2uPh8QfMR3ozDrdYI6VCYH2-3UcAGJIWVDYISZOLCwc3aCVwzrSJEgkQQstkPP4Tx95-0JPMNiYpzrBnsAuvosBNLWyxoRo1xUJlqP0hGXPPgZgxAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 7,
      title: "Châu Âu",
      image: "https://s3-alpha-sig.figma.com/img/e5b5/c20d/0980a78e7a6396f32373edb0478a0cbf?Expires=1688342400&Signature=KG8l9kyDEqJkzwqwDJpslkbMHPZMF1HykuJ1DVCa4~yrc569PN6tS00ii~D-xDYJsyfqGCy0OefUy8E-WmIQMocCJYy07lwDqrZUXxBfkCfsVR5EVeeVaahgt0WQJIXrXGmjGXBdl6kmLAPW7t-YGaQtjOJguEZvzM680ssIKhTbKSsQzRnJ-EVnvMXrj-38D6pConlieN~r8TfsYrqYrvd4X32R2WDF45Mo2qLSEww9JA8hvKefJ50xKLlJAychLb2CpLPjiRsNerY~1cGrMqfO0U3fu81o626WbRcXO4IdixYdtHHH3f-eZqjEi8Yo0e3bLEtLdeXr~DchdQI2Mg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 8,
      title: "Sa Pa",
      image: "https://s3-alpha-sig.figma.com/img/89e1/93c4/f7ca0dfc2c102b3ed26fecabedbbb621?Expires=1690156800&Signature=ZsnWKc4PzrnsKSEX~tUiruFTWzjjqvxt~RH7~KEJj6Mpqq-S~Ln1vTvjSWQV6sV41zWwK7jioVTMKUZMvPn-EGYTFdXCcbs8dEooChSgONXutmbGKjfOS6B-D97FgIiEa90--hrhg0AQ6g3NS6u~FvBK84R6n~qDeg8ukhgxNAXLUCLTvy1~xmn4rPRagafPmsMQTRMGgCQyiDw3bqTArqtcLZ6N9toPpZ0LN9HHtn0X64~0TGWG~w-nw7uRzlvmBjDCxIXtgmv6fpbxY3tdsuHJvBtdiHrAnI39E5Z09GCcnHtS1ToYsnPbxnazPlR2e-jKiGigL7~GYNSND5CDPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 4,
      title: "Đài Loan",
      image: "https://s3-alpha-sig.figma.com/img/be86/0306/aef1937c9e68aa1fb70b29f611ea3c20?Expires=1688342400&Signature=Nz5cybIxMkpbzuSDLSSCO~h6avSBRobbL5zYY3oJ~2EdR-JkzU4obLkV20xQQrKpcThS-QLSKszO~Nd7ZK2uEpROWOT2HJklEd-90UsBgvC1QB8AKUyI-fb4t~xIhSAkTNv5KxtPEUoQIBwiLOYpWdDW6xUjc-xM3oUROv1njz0tqf79pd7eYUm0iy4lbWBfPzkv~5crEkTkg0jJlv~asV-8rG9HKStR5eDtgH3XD2UlgOAcBFlFVmVBt5FMiNlFM1I2sfMICnIgx1dRjWORQYP~WhgX-uY8JntKorRSIPMm0qjfKl8xGsM-4g-L3FS7bYiGjp3w8RuQBrOnF2gXLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 7,
      title: "Châu Âu",
      image: "https://s3-alpha-sig.figma.com/img/e5b5/c20d/0980a78e7a6396f32373edb0478a0cbf?Expires=1688342400&Signature=KG8l9kyDEqJkzwqwDJpslkbMHPZMF1HykuJ1DVCa4~yrc569PN6tS00ii~D-xDYJsyfqGCy0OefUy8E-WmIQMocCJYy07lwDqrZUXxBfkCfsVR5EVeeVaahgt0WQJIXrXGmjGXBdl6kmLAPW7t-YGaQtjOJguEZvzM680ssIKhTbKSsQzRnJ-EVnvMXrj-38D6pConlieN~r8TfsYrqYrvd4X32R2WDF45Mo2qLSEww9JA8hvKefJ50xKLlJAychLb2CpLPjiRsNerY~1cGrMqfO0U3fu81o626WbRcXO4IdixYdtHHH3f-eZqjEi8Yo0e3bLEtLdeXr~DchdQI2Mg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ]
  itemsPerSlide = 5;

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
