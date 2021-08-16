<template>
  <div class="search-boat">
    <ul class="search-boat__head">
      <li class="search-boat__head-item mr-1 active">Kiralık Tekneler</li>
      <li class="search-boat__head-item mr-1">Kabin Kiralama</li>
      <li class="search-boat__head-item mr-1">Cruise Turlar</li>

      <div
        class="search-boat__head-item mr-1 call-you"
        @click="$modal.show('call-you-modal')"
      >
        <i class="fa fa-phone mr-1 call-you-phone"></i>
        Sizi Arayalım
      </div>
    </ul>

    <div class="search-boat__body">
      <client-only><RentBoat /></client-only>
    </div>
    <call-you-modal />
  </div>
</template>

<style lang="scss">
@import '~/assets/scss/partials/breakpoints';
.mr-1 {
  margin-right: 10px;
}
.call-you {
  position: absolute !important;
  margin: 0 !important;
  right: 0px;
  display: flex;
  align-items: center;
  &-phone {
    color: var(--warning);
    transform: rotate(90deg);
  }
}
.search-boat {
  width: 100%;
  border-radius: 4px;
  &__body {
    background: #dde8f4;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &__head {
    display: flex;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: relative;

    &-item {
      height: 100%;
      padding: 10px 20px;
      margin-right: 10px;
      cursor: pointer;
      position: relative;
      color: #74869b;
      font-weight: bold;
      white-space: nowrap;
      background: #ecf2f9;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;

      &.active {
        color: var(--warning);
        background: #f4f7fb;
      }
    }
  }

  &__card {
    background: #fff;
    display: flex;
  }
}
</style>
