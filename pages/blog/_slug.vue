<template>
  <div class="container blog">
    <div class="blog__header">
      <h3 class="blog__title">Maviyyo Blog</h3>
      <p class="blog__subtitle">
        Your yacht will soon be visible to the largest community of sailors
        interested in peer-to-peer yacht charters. Welcome to maviyyo!
      </p>
      <div class="blog__buttons">
        <a href="#maviyyo">Maviyyo</a>
        <a href="#rotalar">Rotalar</a>
        <a href="#kabin">Kabin Kiralama</a>
        <a href="#tekne">Tekne Kiralama</a>
        <a href="#cruise">Cruise Turları</a>
      </div>
    </div>
    <div class="blog__sidebar">
      <a href="#hakkimizda">Hakkımızda</a>
      <a href="#tarihce">Tarihçe</a>
      <a href="#nasil">Nasıl Çalışır</a>
    </div>
    <div class="blog__content">
      <m-card class="blog__image">
        <img src="~/assets/images/logo.png" alt="maviyyo-logo" />
      </m-card>
      <h3 class="blog__content-title">
        The rock in Bryce Canyon is composed of layer after layer of sediment
        deposits,
      </h3>
      <p class="blog__content-paragraph">
        The state of Utah in the United States is home to lots of beautiful
        National Parks, & Bryce Canyon National Park ranks as three of the most
        magnificent & awe inspiring.
      </p>
      <p class="blog__content-paragraph">
        Bryce Canyon isn’t a canyon. it is the spectacular edge of the
        Paunsaugunt Plateau, a place where intricately carved towers & archways
        of stone shimmer in a dazzling array of colour under the bright sun.
      </p>
      <p class="blog__content-paragraph">
        The rock in Bryce Canyon is composed of layer after layer of sediment
        deposits, deposited millions of years ago when the area was at the
        bottom of a lake. Now the Paria River has exposed the layers, allowing a
        detailed history of the lake to be determined.
      </p>
      <p class="blog__content-paragraph">
        15 million years ago the earth in this region began to shift, forming a
        series of plateaus. The Paunsaugunt is an extensive plateau, with the
        Paria River gradually eroding away the edge to form Bryce Canyon.
      </p>
      <p class="blog__content-paragraph">
        The Park itself was established in 1924, & was named after an early
        settler in the area, Ebenezer Bryce. they emigrated from Scotland,
        married a local girl then moved southwards in stages, building sawmills
        as they went.
      </p>
      <p class="blog__content-paragraph">
        In the mid 1870s they reached the Paria River, where they & his
        relatives settled for a number of years. It was at this time that Bryce
        made his immortal comment about Bryce Canyon – they called it “one hell
        of a place to lose a cow”.
      </p>
    </div>
    <div class="blog__footer">
      <div class="blog__footer-content">
        <div class="blog__footer-line"></div>
        <img src="~/assets/images/logo-grey.png" alt="Maviyyo logo" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog {
  display: grid;
  margin-top: 50px;
  min-height: 1410px;
  padding: 0;
  margin-bottom: 122px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07),
    0 15px 4px 0 rgba(50, 50, 93, 0.01);
  grid-template: repeat(6, 1fr) / repeat(5, 1fr);
  grid-template-areas:
    'Header Header Header Header Header'
    'Sidebar Content Content Content Content'
    'Sidebar Content Content Content Content'
    'Sidebar Content Content Content Content'
    'Sidebar Content Content Content Content'
    'Sidebar Footer Footer Footer Footer';

  &__header {
    grid-area: Header;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 390px 0 50px;
    border-bottom: 1px solid #dee2e6;

    .blog__title {
      color: #32325d;
      font-size: 26px;
      font-weight: bold;
      line-height: 36px;
      margin-bottom: 16px;
    }

    .blog__subtitle {
      height: 44px;
      font-size: 16px;
      letter-spacing: -0.3px;
      line-height: 22px;
      color: #525f7f;
      margin-bottom: 36px;
    }

    .blog__buttons {
      display: flex;
      justify-content: space-between;

      a {
        text-decoration: none;
        font-size: 16px;
        line-height: 22px;
        color: #525f7f;
        font-weight: 600;

        &:first-child {
          color: var(--primary);
          transition: color;
          transition-duration: 0.5s;
        }
      }
    }
  }

  &__sidebar {
    grid-area: Sidebar;
    border-right: 1px solid #dee2e6;
    margin: 54px 0 54px 49px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    a {
      font-size: 16px;
      line-height: 34px;
      letter-spacing: -0.3px;
      color: #525f7f;
      text-decoration: none;

      &:focus {
        color: var(--primary);
        transition: color;
        transition-duration: 0.5s;
      }
    }
  }
  &__content {
    grid-area: Content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 41px 50px 91px 50px;

    &-title {
      font-size: 26px;
      line-height: 36px;
      font-weight: bold;
      color: #32325d;
      margin-bottom: 32px;
    }

    &-paragraph {
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.3px;
      color: #525f7f;
      margin-bottom: 20px;
    }
  }

  &__footer {
    grid-area: Footer;
    padding: 0 43px 0 90px;

    &-content {
      display: flex;
      align-items: center;
      margin-bottom: 50px;
      justify-content: space-between;

      .blog__footer-line {
        width: 100%;
        height: 1px;
        background-color: var(--primary);
      }

      img {
        height: 47px;
        width: 177px;
        margin-left: 50px;
      }
    }
  }
}

.blog__image {
  background-image: url('~assets/images/banner.webp') !important;
  background-size: cover !important;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 32px;
}
</style>
