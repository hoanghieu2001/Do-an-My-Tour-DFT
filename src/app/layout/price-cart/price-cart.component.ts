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
      image: "https://s3-alpha-sig.figma.com/img/0ed6/3a11/c315a4f436fa076bd86dd72ab1c3b988?Expires=1688342400&Signature=Lc2E0F3fXTHj3bcBWBU7u5rlJTdAOWCkjDPgNIHorbLBLwEhTS5yZkDX5rB15s~vBj9q0iY8R3ywDS-cKLn5obAJ~O7EGuxu4rmACt6~PY96eYBhFhmyQneuDivMX6wWyIespd38MbFxnUdiA0vVa-CdnEJ0hDw6wCRMTrCqkazTDdB3p7RnstcZ19U~d~s8ovR1zH07QqhqddUimvqwA9899R3MkAwPHW4nrZKsApSJKq9~464IuXuVGj122qmf129oSj4TguRghuwObYZujoPdSP~tV2W0UURBvmTB~Uz4lJJ0Et1LwNkFghI8Z4Rp4TplEgjG5ykr00xYSbp5CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 2,
      title: "Hà Giang",
      image: "https://s3-alpha-sig.figma.com/img/8331/592b/c05d1cbaa1cd9b7eb8eb3802c3248bb7?Expires=1688342400&Signature=E--1dH8gtFwtwk5Yt6KEpobU7Thu9vQ1OVoZ63G8w6iWYjbyYTW7B2TTTMdF93YPGCWHFlB-RyVpgFAMAqLi3hoJlv8V66xxrAUj64iSF4DFz-s49CXh-2bGoEzeXlJTDaV2aNqXdoKf31rBNNhibLWy8AegYxkozAlRSLpwb7H1g-1IcDyT7xzGDO7tgamTWQX~DLlfW0-L6Z9GRg6p4DSUCl~1MV4jrlhQRpF8tfNvxN1f6jlDpK8D-vyAI6UBnygnrXuDmzaXaRx0W0BUi1aL5bsOF~cas-iChX8ZwY6JQuE~LE7owhgtZYsmyAY3zPv0uZaHEQqmtO8197vQ0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 3,
      title: "Phú Quốc",
      image: "https://s3-alpha-sig.figma.com/img/e007/55c3/c3123cb5af6cbaf151232846c4d939d6?Expires=1688342400&Signature=SSOrkhdiZxyt47ntFIw4~KHBeqKOuEp6CHei2DxLTwbBCM8NFExsG3vncxo22xdQ3e3NALgN2o-WFAFUoeZAXMH5BCqxEWZzlt7yeimo~rZCELTkjHsqKfHy9b67-Fjhw58dh-zOxgWl--h0-b6h4cWPFQn5O6qP6cdFKSYvBROxu6GwNEjZ4SsVzKPd5A3fRpbxD9w2CnnylJ00nimOE9ixnSYhn8RgiK9WELWR9BXl3YHLWyCJ1EBDXUk2Mxt~1X5G0xCAxoac4678bDcRDm-FhmiPLbRPMuE9CQp7sAzUGxsJYTIbnFxR6VAhVWq4TKEgd3SifKaNWxuRkY3cPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 4,
      title: "Đài Loan",
      image: "https://s3-alpha-sig.figma.com/img/be86/0306/aef1937c9e68aa1fb70b29f611ea3c20?Expires=1688342400&Signature=Nz5cybIxMkpbzuSDLSSCO~h6avSBRobbL5zYY3oJ~2EdR-JkzU4obLkV20xQQrKpcThS-QLSKszO~Nd7ZK2uEpROWOT2HJklEd-90UsBgvC1QB8AKUyI-fb4t~xIhSAkTNv5KxtPEUoQIBwiLOYpWdDW6xUjc-xM3oUROv1njz0tqf79pd7eYUm0iy4lbWBfPzkv~5crEkTkg0jJlv~asV-8rG9HKStR5eDtgH3XD2UlgOAcBFlFVmVBt5FMiNlFM1I2sfMICnIgx1dRjWORQYP~WhgX-uY8JntKorRSIPMm0qjfKl8xGsM-4g-L3FS7bYiGjp3w8RuQBrOnF2gXLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 5,
      title: "Hàn Quốc",
      image: "https://s3-alpha-sig.figma.com/img/b3c6/6540/28975952fe9f2bb44235879c3cd6e9d8?Expires=1688342400&Signature=V2VfjoF5WHRl1bbR3o~7x3bXtYFZm5ycgTrI24zN9XqfFVf4gOnvf6m~L248qKI8upvb7QAZ5IU41g1-uyANkg5k6DM0-pP3cCkBJJyB7ReI5cJ6lym0K8GWzVSmf~vbit8xkzu~NpPzYgwq1Tj5vsqLKcxrV36Kjy0YK3jjj8OWsBrvqrQQW9N5qpsvoOubZ2YaadQZ6Emg6e-zO3wUZbWKhg4gd~eYf~qjKF0RSDKzkMLba-ZJQFv4pHC9kFADeKfBfgjftQd-DmDb~00ajKEgCf1W-ANZ9Sv16itOCP8n7GCIcCdXxljsYOBFxcY8vP3Eqq7DjGoP~yX~M3em9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 6,
      title: "Du Bai",
      image: "https://s3-alpha-sig.figma.com/img/aafb/a95d/51df3dcd44fce228ac1ef43ab4067ee0?Expires=1688342400&Signature=AxHiy5v1pAoixwDr6-Dw-yOAFOmloLRzL5YdtjjSHxyOkszOtzZ3OCbKaSGbGHT0lvui2mUk0FWn9iYMVYWx29UIMEmxmYLZE3QmB9gEyqILph5MEYtEarvSsgRZxXXVCP1l7LsbNjqc953iDAr-cmM7ZLXo0-AYAa~l2EnrIKPlJCtydrHSjXYwStS359XblzYw3uEytBmOtU25eBOr9YS5fYmZhtkO7ytAUuTcwl-4C6fpZUTvPf2pUOrMwJAEjdzyDJlwDnTmdl1ewfJWU208bNSLEnPwg1UOJHgm8NmbgMNZCt9bcbY7IYsU5kBO8NYP7IoeY9AUUmu6GSoRoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 7,
      title: "Châu Âu",
      image: "https://s3-alpha-sig.figma.com/img/e5b5/c20d/0980a78e7a6396f32373edb0478a0cbf?Expires=1688342400&Signature=KG8l9kyDEqJkzwqwDJpslkbMHPZMF1HykuJ1DVCa4~yrc569PN6tS00ii~D-xDYJsyfqGCy0OefUy8E-WmIQMocCJYy07lwDqrZUXxBfkCfsVR5EVeeVaahgt0WQJIXrXGmjGXBdl6kmLAPW7t-YGaQtjOJguEZvzM680ssIKhTbKSsQzRnJ-EVnvMXrj-38D6pConlieN~r8TfsYrqYrvd4X32R2WDF45Mo2qLSEww9JA8hvKefJ50xKLlJAychLb2CpLPjiRsNerY~1cGrMqfO0U3fu81o626WbRcXO4IdixYdtHHH3f-eZqjEi8Yo0e3bLEtLdeXr~DchdQI2Mg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 8,
      title: "Sa Pa",
      image: "https://s3-alpha-sig.figma.com/img/89e1/93c4/f7ca0dfc2c102b3ed26fecabedbbb621?Expires=1688342400&Signature=fziTo0jQw7QvZOewZKsFbWCVxPQ4dxIjtYtrAj5D-gatEmDvDX61UNtad2GpCiNrOatJfGbtCvmQ8ZdBIZ8lDAEQFQ5lZS4ByAdv0UZ6FpNEGaq0zTTO9s06jEgjgu24z2R7GhSbvxIaC3HN43bK9JOguWkCK~8Xke-QRVcHHrLRPLYfniEnB2qmOif1SAxLmCHAXpknefZG2trq~MzCGZ1wZldZv4um3W9FwqR9Zf~t3hla8MoIP3UssPhUq2sZ3ZSw4FBaxM0UbbAqmwiGOGZ4mBA8MVwQ1SNWCS09nrSbXTm6t-ISvYU7m3lfJLCLo4d2EoGQntq2w5bLFXrSpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ]
  itemsPerSlide = 4;

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
