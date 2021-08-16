<template>
  <div class="navbar__currency">
    <m-dropdown
      class="navbar__currency-dropdown"
      content-class="navbar__currency-dropdown-content"
    >
      <template v-slot:button>
        <div class="navbar__currency-text">
          <span class="pr-1">TL / TR </span>
          <fa :icon="['fas', 'angle-down']" />
        </div>
      </template>
      <div class="navbar__currency-content">
        <m-radio
          v-model="selectedLangauge"
          class="mb-2"
          name="language"
          option="tr"
        >
          <img
            src="~/assets/images/tr-flag.jpg"
            class="navbar__currency-flag"
            alt=""
          />
          Türkçe
        </m-radio>
        <m-radio v-model="selectedLangauge" name="language" option="en">
          <img
            src="~/assets/images/uk-flag.png"
            width="24"
            height="16"
            style="border-radius: 10px"
            class="navbar__currency-flag"
            alt=""
          />
          İngilizce</m-radio
        >
      </div>
      <div class="navbar__currency-dropdown-divider"></div>
      <div class="navbar__currency-content">
        <m-radio v-model="currency" name="currency" option="tl">
          <span class="navbar__currency-flag">₺</span>
          Türk Lirası</m-radio
        >
        <m-radio v-model="currency" name="currency" option="dolar">
          <span class="navbar__currency-flag">$</span>

          Dolar</m-radio
        >
        <m-radio v-model="currency" name="currency" option="euro">
          <span class="navbar__currency-flag">€</span>

          Euro</m-radio
        >
      </div>
    </m-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLangauge: '',
      currency: 'tl',
    }
  },
  watch: {
    selectedLangauge(v) {
      this.$i18n.setLocale(v)
    },
  },
  mounted() {
    this.selectedLangauge = this.$i18n.locale
  },
}
</script>

<style lang="scss">
.navbar__currency {
  font-weight: 300;

  &-text {
    cursor: pointer;
    white-space: nowrap;
  }

  &-dropdown-content {
    min-width: 12rem !important;
  }

  &-flag {
    width: 24px;
    height: auto;
    border-radius: 10px;
    margin-right: 8px;
    text-align: center;
  }

  &-content {
    padding: 0 1rem;
    font-weight: 400;
  }

  &-dropdown-divider {
    margin: 1rem 0;
    width: 100%;
    border-bottom: 1px solid #e9ecef;
  }
}
</style>
