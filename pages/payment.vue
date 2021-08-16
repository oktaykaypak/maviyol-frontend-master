<template>
  <div class="container py-4 pb-5">
    <div class="row">
      <div class="col-lg-8">
        <m-card shadow="soft" class="p-3">
          <h5 class="font-weight-bold text-night-blue">Ödeme Bilgileri</h5>
          <div class="row mb-3">
            <div class="col-lg-8">
              <m-form-group label="Kart Numarası">
                <m-input variant="classic" />
              </m-form-group>
              <div class="row">
                <m-form-group class="col-lg-6" label="Son Kullanma Tarihi">
                  <div class="row">
                    <div class="col-lg-6">
                      <m-select placeholder="Ay" />
                    </div>
                    <div class="col-lg-6">
                      <m-select placeholder="Yıl" />
                    </div>
                  </div>
                </m-form-group>
                <m-form-group class="col-lg-6" label="CVC">
                  <m-input variant="classic" />
                </m-form-group>
              </div>
              <m-form-group>
                <div class="row">
                  <div class="col-lg-4">
                    <m-radio>
                      <div class="d-flex flex-column">
                        <span class="font-weight-semibold"> Tek Çekim </span>
                        <span>-</span>
                      </div>
                    </m-radio>
                  </div>
                  <div class="col-lg-4">
                    <m-radio>
                      <div class="d-flex flex-column">
                        <span class="font-weight-semibold"> Tek Çekim </span>
                        <span>-</span>
                      </div>
                    </m-radio>
                  </div>
                  <div class="col-lg-4">
                    <m-radio>
                      <div class="d-flex flex-column">
                        <span class="font-weight-semibold"> Tek Çekim </span>
                        <span>-</span>
                      </div>
                    </m-radio>
                  </div>
                </div>
              </m-form-group>
            </div>
            <div class="col-lg-4" style="margin-top: 24px">
              <img
                src="~/assets/images/visa-and-mastercard-logo-26.png"
                width="150"
                height="40"
              />
              <p class="font-weight-semibold f-14">
                Yapacağınız işlemler, SSL sertifikası ile korunmaktadır
              </p>
            </div>
          </div>
          <div class="mb-3">
            <m-checkbox variant="classic">
              Kullanım Koşulları ve Gizlilik Politikası’nı okudum, kabul
              ediyorum.
            </m-checkbox>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <m-button
              class="px-5 py-3 font-weight-semibold"
              variant="success"
              text="Onayla"
            />
          </div>
        </m-card>
      </div>
      <div class="col-lg-4">
        <m-card shadow="soft" class="p-3">
          <h5 class="font-weight-bold text-night-blue">Ödeme Özetiniz</h5>
          <div class="mb-3">
            <span
              class="font-weiht-bold text-night-blue pb-2 d-block font-weight-semibold"
              >Fiyatlandırma</span
            >
            <div class="d-flex justify-content-between pb-2">
              <span class="f-14">Sigorta</span>
              <span class="f-14">200 EUR</span>
            </div>
            <div class="d-flex justify-content-between pb-2">
              <span class="f-14">Sigorta</span>
              <span class="f-14">200 EUR</span>
            </div>
            <div class="d-flex justify-content-between pb-2">
              <span class="f-14">Sigorta</span>
              <span class="f-14">200 EUR</span>
            </div>
          </div>
          <div class="mb-3">
            <span
              class="font-weiht-bold text-night-blue pb-2 d-block font-weight-semibold"
              >Fiyatlandırma</span
            >
            <div class="d-flex justify-content-between pb-2">
              <span class="f-14">Sigorta</span>
              <span class="f-14">200 EUR</span>
            </div>
            <div class="d-flex justify-content-between pb-2">
              <span class="f-14">Sigorta</span>
              <span class="f-14">200 EUR</span>
            </div>
            <div class="d-flex justify-content-between pb-2">
              <span class="f-14">Sigorta</span>
              <span class="f-14">200 EUR</span>
            </div>
          </div>
          <div class="d-flex align-items-end flex-column">
            <h4 class="font-weight-bold text-night-blue mb-0">1.100 EUR</h4>
            <span class="f-14 text-night-blue font-weight-light"
              >Rezervasyon Toplamı % 40
            </span>
          </div>
        </m-card>
      </div>
    </div>
  </div>
</template>
