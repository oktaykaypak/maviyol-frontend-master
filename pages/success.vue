<template>
  <div class="container payment">
    <div class="payment__approval">
      <img
        class="payment__approval-img"
        src="~/assets/icons/success-approval.svg"
        alt="Ödeme başarılı ."
      />
      <h3 class="payment__approval-title">İşleminiz Gerçekleştirildi</h3>
      <p class="payment__approval-subtitle">
        Hayal gibi bu mavi yolculukta bizi tercih ettiğiniz için teşekkür ederiz
      </p>
      <hr class="payment__approval-line" />
      <p class="payment__approval-contact">
        Bilgileriniz mail@mail.com adresine mail olarak ve 0500 000 00 00
        Numaralı telefona SMS ile iletildi
      </p>
      <!-- <a href="#" class="payment__aproval-button">ANA SAYFAYA GİT</a> -->

      <m-button variant="outline-primary" class="font-weight-bold"
        >ANA SAYFAYA GİT</m-button
      >
      <div class="payment__approval-call">
        <img src="~/assets/icons/success-print.svg" alt="Bize Ulaşın" />
        <p>
          Sorularınız için bizi arayın <span>444 3 851</span> numaralı
          telefondan bizi arayabilirsiniz.
        </p>
      </div>
    </div>
    <div class="payment__details">
      <div class="payment__details-tour">
        <h3>Tur Bilgileri</h3>
        <h4>Fethiye - Göcek - Fethiye <span>(4 Gün 5 Gece)</span></h4>
        <div class="payment__details-tourtime">
          <div class="payment__details-tourtime-in">
            <h4>Tekneye Biniş</h4>
            <p>14 Temmuz 2018 Cumartesi - 15:00</p>
          </div>
          <div class="payment__details-tourtime-out">
            <h4>Tekneden İniş</h4>
            <p>24 Temmuz 2018 Perşembe - 12:00</p>
          </div>
        </div>
        <div class="payment__details-person">
          <h4>Kişi Sayısı</h4>
          <p>2 Yetişkin 1 Çocuk - 3 Kabin</p>
        </div>
      </div>
      <hr class="payment__details-line" />
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
      <!-- <div class="payment__details-btn">
        <a href="#">BİLGİLERİ YAZDIR</a>
      </div> -->
      <m-button variant="primary" class="font-weight-normal">
        <img src="~/assets/icons/success-print.svg" alt="Bilgileri Yazıdr" />
        BİLGİLERİ YAZDIR
      </m-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/partials/breakpoints';

.payment {
  min-height: 500px;
  margin: 48px auto 64px auto;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  align-items: center;

  &__approval {
    padding: 60px 0 60px 0;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07),
      0 15px 4px 0 rgba(50, 50, 93, 0.01);
    flex-direction: column;
    background-color: #f4f5f7;
    align-items: center;
    position: relative;

    &-call {
      position: absolute;
      min-height: 80px;
      padding: 30px 32px;
      display: flex;
      justify-content: center;
      width: 60%;
      border-radius: 4px;
      background-color: #ffffff;
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07),
        0 15px 4px 0 rgba(50, 50, 93, 0.01);
      bottom: -50px;

      img {
        color: #fff;
        margin-right: 10px;
      }

      p {
        color: #525f7f;
        font-size: 16px;
        line-height: 18px;

        span {
          font-weight: bold;
        }
      }
    }

    &-img {
      height: 70px;
      width: 70px;
      margin-bottom: 12px;
    }

    &-title {
      font-size: 18px;
      font-weight: bold;
      line-height: 25px;
      text-align: center;
      color: #2dce89;
      margin-bottom: 6px;
    }

    &-subtitle {
      color: #525f7f;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      margin-bottom: 24px;
    }

    &-line {
      width: 25%;
      border: 1px solid #dee2e6;
      margin-bottom: 24px;
    }

    &-contact {
      color: #525f7f;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 23px;
      text-align: center;
      margin-bottom: 40px;
    }

    .payment__aproval-button {
      height: 44px;
      width: 172px;
      border: 1px solid #3282fd;
      border-radius: 4px;
      background-color: #ffffff;
      text-align: center;
      color: var(--primary);
      line-height: 40px;
      text-decoration: none;
      font-weight: bold;
    }
  }
  &__details {
    padding: 120px 0 60px 0;
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    align-items: center;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07),
      0 15px 4px 0 rgba(50, 50, 93, 0.01);
    background-color: #fff;
    width: 100%;
    &-tour {
      display: flex;
      width: 60%;
      flex-direction: column;

      h3 {
        color: #172b4d;
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
        margin-bottom: 24px;
      }

      h4 {
        color: #32325d;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 18px;
        font-weight: bold;

        span {
          font-weight: normal;
        }
      }

      .payment__details-tourtime {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

        &-out,
        &-in {
          flex: 1;
          display: flex;
          flex-direction: column;

          h4 {
            color: #525f7f;
            font-size: 16px;
            line-height: 22px;
            margin-bottom: 6px;
            font-weight: normal;
          }

          p {
            color: #525f7f;
            font-size: 15px;
            font-weight: 600;
            line-height: 20px;
          }
        }
      }
    }

    .payment__details-person {
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;

      h4 {
        color: #525f7f;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 6px;
        font-weight: normal;
      }

      p {
        color: #525f7f;
        font-size: 15px;
        font-weight: 600;
        line-height: 20px;
      }
    }
    &-line {
      height: 2px;
      width: 50%;
      border: 1px solid #dee2e6;
      margin-bottom: 50px;
    }

    &-cabin-one {
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

    &-cabin-two {
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
    &-bill {
      display: flex;
      flex-direction: column;
      width: 60%;
      margin-bottom: 80px;

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
    &-btn {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 180px;
      border: 1px solid #3282fd;
      border-radius: 4px;
      background-color: #3282fd;
      height: 44px;
      padding: 0 15px;

      a {
        text-decoration: none;
        line-height: 40px;
        letter-spacing: -0.09px;
        color: #fff;
      }

      img {
        color: #fff;
        height: 20px;
        width: 20px;
      }
    }
  }
}

@include bp(mobile) {
  .payment__details-tourtime {
    flex-direction: column;

    &-in {
      margin-bottom: 24px;
    }
  }

  .payment__details-bill-address,
  .payment__details-bill-company,
  .payment__details-person,
  .payment__details-person-two,
  .payment__details-person-one {
    flex-direction: column !important;

    .company__name,
    .tax__office,
    .tax__number,
    .address__city,
    .address__district,
    .address__openaddress,
    .person__name,
    .person__surname,
    .person__birth,
    .person__idenity,
    .person-two__birth,
    .person-two__idenity,
    .person-two__name,
    .person-two__surname,
    .person-one__idenity,
    .person-one__birth,
    .person-one__surname,
    .person-one__name {
      display: flex;
      flex-direction: row !important;

      h3 {
        flex: 1;
      }

      p {
        flex: 1;
      }
    }
  }

  .payment__details-bill-company {
    margin-bottom: 0;
  }

  .payment__approval-call {
    width: 95%;
  }
}
</style>
