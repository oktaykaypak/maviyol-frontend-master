<template>
  <m-card shadow="soft" class="boat-agent">
    <div
      class="w-100 d-flex justify-content-center align-items-center flex-column"
    >
      <div class="boat-agent__pp" />
      <h6>Batuhan</h6>
      <h6 class="text-night-blue font-weight-semibold">Maviyyo Temsilcisi</h6>

      <div class="boat-agent__msg">
        <span>Mükemmel tatil planlamanıza</span>
        <span>yardımcı olmak için burdayız.</span>
      </div>
      <span class="font-weight-semibold d-block mb-3 text-night-blue"
        >Bize ulaşabilirsiniz:</span
      >
      <span>Pzt - Cts: 09:00 - 21:00 CET</span>
    </div>
  </m-card>
</template>

<style lang="scss">
.boat-agent {
  padding: 20px 0;

  &__pp {
    background: url('https://i.picsum.photos/id/829/536/354.jpg?hmac=6rRpe7XvZv5ZMKOdY_8VYdzR-FskGlRhkr433gnvel0')
      no-repeat center;
    background-size: cover;
    width: 100px;
    height: 100px;
    border: 4px solid #dee2e6;
    border-radius: 100px;
    margin-bottom: 10px;
  }

  &__msg {
    border-top: 1px solid #e4e9f1;
    border-bottom: 1px solid #e4e9f1;
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 0;
    margin-bottom: 1rem;
  }
}
</style>
