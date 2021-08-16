<template>
  <div class="extra">
    <div class="d-flex flex-column">
      <span class="font-weight-semibold text-night-blue">Jet Sky</span>
      <span class="f-14"
        >Mazot karşılanırsa jet sky için uygun fiyata kiralama
        yapabilirsiniz.</span
      >
    </div>
    <div
      class="d-flex flex-column justify-content-between align-items-end h-100 py-3"
    >
      <div>
        <m-radio> </m-radio>
      </div>
      <div>
        <span class="f-14">Gün</span>
        <span class="px-2 f-14">/</span>
        <span class="font-weight-bold text-night-blue">15 EUR</span>
      </div>

      <!-- <m-radio>
          <span class="f-14">Gün</span>
          <span class="px-2 f-14">/</span>
          <span class="font-weight-bold text-night-blue">15 EUR</span>
        </m-radio> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.extra {
  padding: 0 2rem;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgba(143, 143, 143, 0.2);
  cursor: pointer;
  border-radius: 4px;
}
</style>
