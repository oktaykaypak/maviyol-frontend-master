<template>
  <m-modal name="share-comment" title="Bir Yorum Paylaş">
    <div class="row pt-4">
      <m-form-group label="İsim" class="col-lg-6">
        <m-input variant="classic" />
      </m-form-group>
      <m-form-group label="Soyisim" class="col-lg-6">
        <m-input variant="classic" />
      </m-form-group>
      <m-form-group label="Meslek" class="col-lg-6">
        <m-input variant="classic" />
      </m-form-group>
      <m-form-group label="Tekne" class="col-lg-6">
        <m-input variant="classic" />
      </m-form-group>
      <m-form-group label="Katıldığın Tur" class="col-lg-12">
        <m-input variant="classic" />
      </m-form-group>
      <m-form-group label="Tarih" class="col-lg-12">
        <m-date-input variant="classic" />
      </m-form-group>
      <m-form-group label="Mesajınız" class="messages col-lg-12">
        <m-input variant="classic" />
      </m-form-group>
      <div class="col-12 d-flex justify-content-end">
        <m-button variant="primary" class="messages__button px-5 py-3">{{
          $t('sharecomment_share_btn')
        }}</m-button>
      </div>
    </div>
  </m-modal>
</template>
<style lang="scss" scoped></style>
