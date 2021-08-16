<template>
  <div class="container payment">
    <div class="payment__data">
      <div class="payment__data-credit">
        <h3 class="payment__data-title">Ödeme Bilgileri</h3>
        <div class="payment__data-card">
          <!--Flex 3 -->
          <p class="payment__data-cardnum">Kart Numarası</p>
          <input type="text" class="payment__data-cardinput" />
          <div class="payment__data-carddetail mb-30">
            <div class="card__lastdate">
              <p class="card__lastdate-title">Son Kullanma Tarihi</p>
              <input type="text" class="card__lastdate-month" />
              <input type="text" class="card__lastdate-year" />
            </div>
            <div class="card__cvc">
              <p class="card__cvc-title">CVC</p>
              <input type="text" class="card__cvc-input" />
            </div>
          </div>

          <div>
            <m-checkbox variant="classic">
              Kullanım Koşulları ve Gizlilik Politikası’nı okudum, kabul
              ediyorum.
            </m-checkbox>
          </div>

          <div class="payment__buy-mobile">
            <h3>Genel Toplam</h3>
            <p>4,700 TL</p>
          </div>
          <a href="#" class="payment__btn-mobile">SATIN AL</a>

          <div class="payment__data-visa">
            <div class="payment__data-visalogo">
              <img
                src="~/assets/images/visa-and-mastercard-logo-26.png"
                width="155"
                height="40"
              />
            </div>
            <p class="payment__data-visacomment">
              Yapacağınız işlemler, SSL sertifikası ile korunmaktadır
            </p>
          </div>
        </div>
        <div class="payment__data-info">
          <div class="payment__details-cabin-one">
            <h3>1. Kabin Bilgileri</h3>
            <div class="payment__details-person-one">
              <div class="person-one__name">
                <h3>Ad</h3>
                <p>Mehmet</p>
              </div>
              <div class="person-one__surname">
                <h3>Soyad</h3>
                <p>Ertekin</p>
              </div>
              <div class="person-one__birth">
                <h3>Doğum Tarihi</h3>
                <p>22 Ağustos 1984</p>
              </div>
              <div class="person-one__idenity">
                <h3>TC No</h3>
                <p>00000000000</p>
              </div>
            </div>
            <div class="payment__details-person-two">
              <div class="person-two__name">
                <h3>Ad</h3>
                <p>Mehmet</p>
              </div>
              <div class="person-two__surname">
                <h3>Soyad</h3>
                <p>Ertekin</p>
              </div>
              <div class="person-two__birth">
                <h3>Doğum Tarihi</h3>
                <p>22 Ağustos 1984</p>
              </div>
              <div class="person-two__idenity">
                <h3>TC No</h3>
                <p>00000000000</p>
              </div>
            </div>
          </div>
          <hr class="payment__details-line" />
          <div class="payment__details-cabin-two">
            <h3>2. Kabin Bilgileri</h3>
            <div class="payment__details-person">
              <div class="person__name">
                <h3>Ad</h3>
                <p>Mehmet</p>
              </div>
              <div class="person__surname">
                <h3>Soyad</h3>
                <p>Ertekin</p>
              </div>
              <div class="person__birth">
                <h3>Doğum Tarihi</h3>
                <p>22 Ağustos 1984</p>
              </div>
              <div class="person__idenity">
                <h3>TC No</h3>
                <p>00000000000</p>
              </div>
            </div>
          </div>
          <hr class="payment__details-line" />
          <div class="payment__details-bill">
            <h3>Fatura Bilgileri</h3>
            <div class="payment__details-bill-company">
              <div class="company__name">
                <h3>Firma Adı</h3>
                <p>Şirket Adı</p>
              </div>
              <div class="tax__office">
                <h3>Vergi Dairesi</h3>
                <p>Vergi Dairesi</p>
              </div>
              <div class="tax__number">
                <h3>Vergi Numarası</h3>
                <p>0-00000000000</p>
              </div>
            </div>
            <div class="payment__details-bill-address">
              <div class="address__city">
                <h3>Şehir</h3>
                <p>İstanbul</p>
              </div>
              <div class="address__district">
                <h3>İlçe</h3>
                <p>Bir ilçe</p>
              </div>
              <div class="address__openaddress">
                <h3>Adres</h3>
                <p>Adres Adres Adres Adres</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="payment__buy">
      <div class="payment__buy-padding">
        <h3 class="payment__buy-title">Fethiye - Göcek - Fethiye</h3>
        <p class="payment__buy-subtitle">(4 Gün 5 Gece)</p>
        <hr class="payment__buy-line" />
        <h3 class="payment__buy-in">Tekneye Biniş</h3>
        <p class="payment__buy-indate">14 Temmuz 2018 Cumartesi - 15:00</p>
        <h3 class="payment__buy-out">Tekneden İniş</h3>
        <p class="payment__buy-outdate">24 Temmuz 2018 Perşembe - 12:00</p>
        <hr class="payment__buy-line" />
        <h3 class="payment__buy-person">Kişi Sayısı</h3>
        <p class="payment__buy-personnum">2 Yetişkin 1 Çocuk - 3 Kabin</p>
        <hr class="payment__buy-line" />
        <div class="payment__buy-persondata">
          <h3>Kişi Sayısı</h3>
          <p>3 x 1,450 TL</p>
        </div>
        <div class="payment__buy-difference">
          <h3>Tek Kişilik Kabin Farkı</h3>
          <p>1,015 TL</p>
        </div>
        <div class="payment__buy-total">
          <h3>Genel Toplam</h3>
          <p>4,700 TL</p>
        </div>
        <a href="#" class="payment__buy-btn">SATIN AL</a>
      </div>
      <div class="payment__buy-call">
        <img src="~assets/icons/success-print.svg" alt="phone" />
        <div class="payment__buy-number">
          <h3>444 3 851</h3>
          <p>Sorularınız için bizi arayın</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';
.payment {
  &__buy-mobile,
  &__btn-mobile {
    display: none;
  }

  display: flex;
  padding: 48px 0 124px 0;

  &__buy-padding {
    padding: 25px 25px 0 25px;
    height: 100%;
    width: 100%;
    margin-bottom: 32px;
  }

  &__data {
    position: relative;
    flex: 3;
    margin-right: 30px;
    background-color: #fff;
    display: flex;

    &-credit {
      display: flex;
      flex-direction: column;
      padding: 32px 43px 0 48px;

      .payment__data-title {
        color: #172b4d;
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
        margin-bottom: 24px;
      }

      .payment__data-card {
        display: flex;
        margin-right: 44px;
        flex-direction: column;

        .payment__data-cardnum {
          color: #525f7f;
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 8px;
        }

        .payment__data-cardinput {
          height: 47px;
          width: 455.06px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          background-color: #ffffff;
          margin-bottom: 24px;
        }

        .payment__data-carddetail {
          display: flex;

          .card__lastdate {
            flex: 1;
            display: flex;
            flex-wrap: wrap;

            &-title {
              width: 100%;
              color: #525f7f;
              font-size: 16px;
              line-height: 22px;
              margin-bottom: 8px;
            }

            &-year,
            &-month {
              height: 47px;
              width: 40%;
              border: 1px solid #ced4da;
              border-radius: 4px;
              background-color: #ffffff;
            }

            &-month {
              margin-right: 20px;
            }
          }

          .card__cvc {
            flex: 1;
            display: flex;
            flex-direction: column;

            &-title {
              color: #525f7f;
              font-size: 16px;
              line-height: 22px;
              margin-bottom: 8px;
            }

            &-input {
              height: 47px;
              width: 153.97px;
              border: 1px solid #ced4da;
              border-radius: 4px;
              background-color: #ffffff;
            }
          }
        }
      }
    }

    &-visa {
      display: flex;
      flex-direction: column;
      width: 150px;
      position: absolute;
      right: 30px;
      top: 115px;

      &logo {
        width: 150px;
        height: 40px;
        margin-bottom: 33px;
      }

      &comment {
        color: #525f7f;
        font-size: 13px;
        font-weight: 600;
        line-height: 17px;
      }
    }
    &-info {
      .payment__details-line {
        height: 2px;
        width: 100%;
        border: 1px solid #dee2e6;
        margin-bottom: 50px;
      }

      .payment__details-cabin-one {
        display: flex;
        margin-top: 90px;
        flex-direction: column;
        width: 60%;

        h3 {
          color: #172b4d;
          font-size: 18px;
          font-weight: bold;
          line-height: 24px;
          margin-bottom: 24px;
        }

        .payment__details-person-one,
        .payment__details-person-two {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;

          .person-two__name,
          .person-two__surname,
          .person-two__birth,
          .person-two__idenity,
          .person-one__name,
          .person-one__surname,
          .person-one__birth,
          .person-one__idenity {
            display: flex;
            flex-direction: column;

            h3 {
              color: #525f7f;
              font-size: 14px;
              font-weight: normal;
              margin-bottom: 6px;
              line-height: 21px;
            }

            p {
              color: #525f7f;
              font-size: 16px;
              font-weight: 600;
              line-height: 18px;
            }
          }
        }

        .payment__details-person-two {
          margin-bottom: 50px;
        }
      }

      .payment__details-cabin-two {
        display: flex;
        flex-direction: column;
        width: 60%;

        h3 {
          color: #172b4d;
          font-size: 18px;
          font-weight: bold;
          line-height: 24px;
          margin-bottom: 24px;
        }

        .payment__details-person {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          margin-bottom: 50px;

          .person__name,
          .person__surname,
          .person__birth,
          .person__idenity {
            display: flex;
            flex-direction: column;

            h3 {
              color: #525f7f;
              font-weight: normal;
              font-size: 14px;
              margin-bottom: 6px;
              line-height: 21px;
            }

            p {
              color: #525f7f;
              font-size: 16px;
              font-weight: 600;
              line-height: 18px;
            }
          }
        }
      }
      .payment__details-bill {
        display: flex;
        flex-direction: column;
        width: 60%;
        margin-bottom: 55px;

        h3 {
          color: #172b4d;
          font-size: 18px;
          font-weight: bold;
          line-height: 24px;
          margin-bottom: 22px;
        }

        &-address,
        &-company {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;

          .company__name,
          .tax__office,
          .tax__number,
          .address__city,
          .address__district,
          .address__openaddress {
            flex: 1;

            h3 {
              color: #525f7f;
              font-size: 14px;
              line-height: 21px;
              margin-bottom: 6px;
              font-weight: normal;
            }

            p {
              color: #525f7f;
              font-size: 16px;
              font-weight: 600;
              line-height: 18px;
            }
          }
        }
      }
    }
  }

  &__buy {
    flex: 1;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07),
      0 15px 4px 0 rgba(50, 50, 93, 0.01);
    display: flex;
    max-height: 620px;
    flex-direction: column;

    &-title {
      color: #32325d;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 6px;
      font-weight: bold;
    }

    &-subtitle {
      color: #32325d;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 24px;
    }

    &-line {
      width: 100%;
      border: 1px solid #dee2e6;
      margin-bottom: 24px;
    }

    &-out,
    &-person,
    &-in {
      color: #525f7f;
      font-size: 16px;
      font-weight: bold;
      line-height: 22px;
      margin-bottom: 7px;
    }

    &-outdate,
    &-personnum,
    &-indate {
      color: #525f7f;
      font-size: 15px;
      font-weight: 600;
      line-height: 20px;
      margin-bottom: 24px;
    }

    &-difference,
    &-persondata {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;

      h3 {
        flex: 1;
        color: #172b4d;
        font-size: 14px;
        line-height: 19px;
      }

      p {
        flex: 1;
        color: #172b4d;
        font-size: 14px;
        line-height: 19px;
        text-align: right;
      }
    }

    &-total {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;

      h3 {
        flex: 1;
        color: #172b4d;
        font-size: 16px;
        line-height: 22px;
        font-weight: bold;
      }

      p {
        flex: 1;
        color: #172b4d;
        font-size: 16px;
        font-weight: bold;
        line-height: 22px;
        text-align: right;
      }
    }

    &-btn {
      margin: 0 auto 0 auto;
      height: 50px;
      display: block;
      width: 305px;
      border-radius: 4px;
      background-color: #fb6340;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08),
        0 4px 6px 0 rgba(50, 50, 93, 0.11);
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.36px;
      line-height: 45px;
      text-align: center;
      text-decoration: none;
    }

    &-call {
      height: 80px;
      width: 100%;
      border-radius: 4px;
      background-color: #ffffff;
      margin-top: 32px;
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07),
        0 15px 4px 0 rgba(50, 50, 93, 0.01);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 10px;

      img {
        flex: 1;
        height: 38px;
        width: 38px;
        margin-right: 18px;
      }

      .payment__buy-number {
        flex: 3;
        display: flex;
        flex-direction: column;

        h3 {
          color: #525f7f;
          font-size: 24px;
          line-height: 28px;
          font-weight: bolder;
          margin-bottom: 1px;
        }

        p {
          color: #525f7f;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }
}

@include bp(desktop-md) {
  .payment__data-visa {
    display: none;
  }

  .card__lastdate {
    flex: 2 !important;
  }

  .payment__details-cabin-one,
  .payment__details-cabin-two,
  .payment__details-bill {
    width: 100% !important;
  }
}

@include bp(tablet) {
  .payment__buy {
    display: none !important;
  }

  .payment__data-cardinput {
    width: 95% !important;
  }
}

@include bp(tablet-sm) {
  .payment__data-cardinput {
    width: 100% !important;
  }
}

@include bp(mobile) {
  .payment__buy,
  .payment__buy-call,
  .payment__data-visa {
    display: none !important;
  }

  .card__cvc-input {
    width: 100% !important;
  }

  .payment__details-cabin-one {
    margin-top: 45px !important;
  }

  .payment__btn-mobile {
    display: flex !important;
    margin: 0 auto 0 auto;
    height: 50px;
    display: block;
    width: 100%;
    border-radius: 4px;
    background-color: #fb6340;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08),
      0 4px 6px 0 rgba(50, 50, 93, 0.11);
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.36px;
    line-height: 45px;
    text-align: center;
    justify-content: center;
    text-decoration: none;
  }

  .payment__buy-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    margin-bottom: 23px;
    margin-top: 23px;
    width: 100%;

    h3,
    p {
      color: #525f7f;
      font-size: 16px;
      font-weight: bold;
      line-height: 22px;
    }
  }

  .payment {
    padding-top: 0 !important;

    &__data {
      margin-right: 0 !important;

      &-card {
        margin-right: 0 !important;
        padding-right: 10px !important;
      }

      &-credit {
        padding: 32px 0 0 10px !important;
      }

      &-cardinput {
        width: 100% !important;
      }
    }
    &__details {
      &-cabin-one,
      &-cabin-two,
      &-bill {
        width: 100% !important;
      }

      &-person-one,
      &-person-two,
      &-bill-address,
      &-bill-company,
      &-person {
        flex-direction: column !important;
      }
    }
  }
  .person-one__name,
  .person-one__surname,
  .person-one__birth,
  .person-one__idenity,
  .person-two__name,
  .person-two__surname,
  .person-two__birth,
  .person-two__idenity,
  .person__name,
  .person__surname,
  .person__birth,
  .person__idenity,
  .company__name,
  .tax__number,
  .tax__office,
  .address__city,
  .address__district,
  .address__openaddress {
    flex-direction: row !important;
    display: flex;

    h3 {
      flex: 1 !important;
    }

    p {
      flex: 1 !important;
    }
  }
}
</style>
