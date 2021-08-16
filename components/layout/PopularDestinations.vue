<template>
  <div class="w-100 container my-5">
    <h3 class="mb-5 font-weight-bold text-center text-night-blue">
      Popüler Destinasyonlar
    </h3>
    <div class="row">
      <n-link
        v-for="(destination, index) in getDestinations"
        :key="index"
        class="col-lg-3 col-6 mb-2 text-decoration-none text-dusk text-lg-left text-center"
        :to="`/tekne-kiralama/${destination.slug}`"
      >
        <span class="text-primary font-weight-semibold pb-2 d-block h6">{{
          destination.title
        }}</span>
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getDestinations() {
      return [
        {
          title: 'Marmaris',
          slug: 'marmaris',
        },
        {
          title: 'Bodrum',
          slug: 'bodrum',
        },
        {
          title: 'Fethiye',
          slug: 'fethiye',
        },
        {
          title: 'Göcek',
          slug: 'gocek',
        },
        {
          title: 'Bozburun',
          slug: 'bozburun',
        },
        {
          title: 'Kaş',
          slug: 'kas',
        },
        {
          title: 'Antalya',
          slug: 'antalya',
        },
        {
          title: 'Rodos',
          slug: 'rodos',
        },
        {
          title: 'Datça',
          slug: 'datca',
        },
        {
          title: 'Selimiye',
          slug: 'selimiye',
        },
        {
          title: 'İstanbul',
          slug: 'istanbul',
        },
        {
          title: 'Kuşadası',
          slug: 'kusadasi',
        },
        {
          title: 'Kekova',
          slug: 'kekova',
        },
        {
          title: 'Kemer',
          slug: 'kemer',
        },
        {
          title: 'İzmir',
          slug: 'izmir',
        },
        {
          title: 'Orhaniye',
          slug: 'orhaniye',
        },
        {
          title: 'Ayvalık',
          slug: 'ayvalk',
        },
      ]
    },
  },
}
</script>
