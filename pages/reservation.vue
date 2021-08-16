<template>
  <div class="container py-4 pb-5">
    <div class="row">
      <div class="col-lg-8">
        <m-card shadow="soft" class="p-3">
          <h5 class="font-weight-bold text-night-blue">Sahibine Başvurun</h5>
          <p class="text-night-blue mb-30">
            <b>İsteğe bağlı:</b> Yelken geziniz hakkında sahibine daha fazla
            ayrıntı verin. Ne kadar fazla bilgi verirseniz, isteğinizi kabul
            etmeleri de o kadar olasıdır.
          </p>
          <div class="mb-30">
            <h5 class="font-weight-bold text-night-blue">
              Onay sürenizi kendiniz belirleyin
            </h5>
            <p class="text-night-blue mb-3">
              Kendi sürenizi aciliyetinize göre kendiniz belirleyebilirsiniz.
              Bahsettiğiniz süre içinde onay gelmezse ödemeniz geri iade olur.
            </p>
            <m-form-group label="Bekleme Süreniz" style="width: 200px">
              <m-select />
            </m-form-group>
          </div>
          <div class="mb-30">
            <h5 class="font-weight-bold text-night-blue">Sigorta</h5>
            <p class="mb-3">
              Maviyyo yatları sigortalıdır ancak kişisel sigorta yapmanız
              önerilir.
            </p>
            <div
              class="insurance-card d-flex justify-content-between align-items-lg-center p-3"
            >
              <div class="d-flex flex-column">
                <span class="font-weight-semibold text-night-blue">
                  İptal, yardım ve geri dönüşhizmeti almak istiyorum.
                </span>
                <span class="f-14"
                  >Öngörülemeyen durumlar, tıbbi teminat, geri dönüş, parça
                  teslimi vb.</span
                >
              </div>
              <div class="d-flex flex-column align-items-end">
                <span class="font-weight-bold text-night-blue pb-2 d-block"
                  >20 EUR</span
                >
                <m-switch />
              </div>
            </div>
          </div>
          <h5 class="font-weight-bold text-night-blue">Extralar</h5>
          <div v-for="x in 3" :key="x" class="mb-3">
            <ReservationExtra />
          </div>
        </m-card>
      </div>
      <div class="col-lg-4">
        <m-card shadow="soft" class="p-1 mb-3">
          <div
            :style="`
              background: url(${require('~/assets/images/banner.webp')});
              width: 100%;
              height: 200px;
              background-size: cover;
              background-position: center;
              border-radius:4px;
            `"
            class="mb-3"
          ></div>
          <h5 class="text-night-blue font-weight-bold mb-1">
            Cristina Umba Teknesi…
          </h5>
          <div class="mb-3">Lorem ipsum dolor sit amet.</div>
          <div
            class="mb-3 d-flex justify-content-end align-items-end flex-column"
          >
            <h5 class="text-night-blue font-weight-bold mb-1">2000 EUR</h5>
            <span class="f-14 text-night-blue"> Rezervasyon Toplamı: 10% </span>
          </div>
          <m-button
            text="SATIN AL"
            variant="success"
            class="w-100 font-weight-bold"
            style="padding: 1.1rem 0"
            to="/payment"
          />
        </m-card>
        <m-card v-for="x in 3" :key="x" shadow="soft" class="mb-3">
          <div class="d-flex flex-column">
            <span class="text-night-blue font-weight-semibold f-14"
              >Onay almadan paranız çekilmez</span
            >
            <span class="text-night-blue font-weight-light f-14"
              >Sadece onaylanan rezervasyonlar</span
            >
          </div>
        </m-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.insurance-card {
  border: 2px solid rgba(143, 143, 143, 0.2);
  border-radius: 4px;
  padding: 1.25rem;
}
</style>
