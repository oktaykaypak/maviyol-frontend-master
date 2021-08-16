<template>
  <m-card class="account-page-card">
    <h3 class="account-page-card__title">Şirket Profili</h3>
    <m-tabs mode="flat">
      <m-tab title="Şirket Bilgileri" active>
        <CompanyDetail />
      </m-tab>
      <m-tab title="Banka Bilgileri">
        <BankAccount />
      </m-tab>
      <m-tab title="Yetkinlik Belgesi">
        <ExperienceDetail />
      </m-tab>
    </m-tabs>
  </m-card>
</template>

<script>
import CompanyDetail from '~/components/pages/Account/Company/CompanyDetail'
import BankAccount from '~/components/pages/Account/Company/BankAccount'
import ExperienceDetail from '~/components/pages/Account/Company/ExperienceDetail'

export default {
  middleware: 'renter',
  components: {
    CompanyDetail,
    BankAccount,
    ExperienceDetail,
  },
  head() {
    return {
      title: 'Şirket Bilgileri',
    }
  },
}
</script>
