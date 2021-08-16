<template>
  <div class="container py-5">
    <h3 class="text-black text-center mb-5">
      Merak edilen ve karşılaştığımız sorular
    </h3>
    <div class="row">
      <div class="col-lg-6">
        <img
          src="~/assets/images/question-illustration.png"
          width="100%"
          alt=""
        />
      </div>
      <div class="col-lg-6">
        <div v-for="x in 4" :key="x">
          <m-accordion class="mb-3">
            <template v-slot:heading="{ isActive }">
              <div class="question-heading">
                <span class="text-black"
                  >Tekne kiralayan tekneye zarar verirse ne olur ?</span
                >
                <span class="arrow" :class="{ active: isActive }">
                  <m-svg icon="arrow-black" />
                </span>
              </div>
            </template>
            <template v-slot:content>
              <p class="text-black">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                iure vero incidunt animi, natus culpa dicta inventore repellat
                exercitationem veritatis cupiditate atque beatae voluptates
                excepturi ducimus doloremque iste fuga itaque.
              </p>
            </template>
          </m-accordion>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.question-heading {
  background: #f8f8f8;
  padding: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .arrow {
    transition: all 0.3s cubic-bezier(0.32, 0.08, 0.24, 1);

    &.active {
      transform: rotate(180deg);
    }
  }
}
</style>
