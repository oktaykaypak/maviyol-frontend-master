// TODO Repo Data
const repoData = {
  features: {
    place: 'Marmaris',
    limit: 12,
    cabin: 6,
    bathroom: 5,
    personel: 3,
    width: '14.27',
    yearOfProduction: 2012,
  },
  similarCarousel: [
    {
      img: require(`~/assets/images/carousel/tekne-1.jpg`),
      boatName: 'Turgut Reis',
      choice: 'Günlük',
      price: '780€',
    },
    {
      img: require(`~/assets/images/carousel/tekne-2.jpg`),
      boatName: 'Yeni Turgut',
      choice: 'Günlük',
      price: '780€',
    },
    {
      img: require(`~/assets/images/carousel/tekne-2.jpg`),
      boatName: 'Yeni Turgut',
      choice: 'Günlük',
      price: '780€',
    },
  ],
  refund: {
    date: {
      start: '12 05 2020',
      end: '12 05 2020',
    },
    rules: [
      '120 gün ve daha öncesi için yapılan iptallerde ön ödemenin %25’i',
      '119 - 90 gün öncesi için yapılan iptallerde ön ödemenin %50’si',
      '89 - 60 gün öncesi için yapılan iptallerde ön ödemenin %75’i',
      '59 - 0 gün öncesi için yapılan ödemelerde toplam tutarın %100’ü',
      'Tarih değişikliği',
      'İadesiz',
    ],
  },
  rent: [
    {
      title: 'Fiyata Dahil Olan Hizmetler',
      list: [
        {
          icon: ['fa', 'check'],
          body: 'Tekne Sigortası.',
        },
        { icon: ['fa', 'check'], body: 'Günlük 2-3 saate kadar seyir süresi.' },
        { icon: ['fa', 'check'], body: 'Mutfakta kullanılan yakıt/gaz.' },
        { icon: ['fa', 'check'], body: 'Klima kullanımı.' },
        {
          icon: ['fa', 'check'],
          body:
            'Türk karasularındaki Transit Log ücretleri, palamar ücretleri, Türkiye sınırlarındaki liman vergileri.',
        },
        {
          icon: ['fa', 'check'],
          body:
            'Yat konaklama ücreti (anlaşmada belirtilen gün sayısı üzerinden geçerlidir).',
        },
        { icon: ['fa', 'check'], body: 'Günlük kabin ve banyo temizlikleri.' },
        {
          icon: ['fa', 'check'],
          body:
            'Yalnızca kabinlerdeki yatak örtüleri, çarşaflar, yastık kılıfları ve havluları kapsayan çamaşırhane hizmeti.',
        },
        {
          icon: ['fa', 'check'],
          body: 'Tekne üzerindeki ekipmanların kullanımı.',
        },
        {
          icon: ['fa', 'check'],
          body: 'Mürettebat servisi.',
        },
      ],
    },
    {
      title: 'Teslim alma ve iade',
      list: [
        {
          icon: ['fa', 'calendar-day'],
          body: 'Giriş: ',
        },
        {
          icon: ['fa', 'calendar-day'],
          body: 'Çıkış: ',
        },
      ],
    },
    {
      title: 'Fiyata Dahil Olmayan Hizmetler',
      list: [
        {
          icon: ['fa', 'check'],
          body: 'Öğünler, alkolsüz içecekler, şişelenmiş sular.',
        },
        { icon: ['fa', 'check'], body: '5 Çayı atıştırmalıkları.' },
        {
          icon: ['fa', 'check'],
          body: 'Tender bot ve su oyuncaklarına ait yakıt kullanımı.',
        },
        {
          icon: ['fa', 'check'],
          body:
            'TEPAI Yunan Adaları trafik vergisi her turda, her tekne için metre başına 8.-Eur olacak şekilde yansıtılmaktadır.',
        },
        {
          icon: ['fa', 'check'],
          body:
            'Özel Marina ücretleri. Guletler misafir özellikle talep etmediği sürece özel marinalara yanaşmazlar.',
        },
        {
          icon: ['fa', 'check'],
          body: 'Havalimanı /Otel transfer ücretleri.',
        },
        {
          icon: ['fa', 'check'],
          body: 'Alkollü içecekler',
        },
        {
          icon: ['fa', 'check'],
          body: 'Kara Turları',
        },
        {
          icon: ['fa', 'check'],
          body:
            'Tekne sigortası misafirin kişisel seyahat ve/veya iptal  sigortasını kapsamamaktadır.',
        },
        {
          icon: ['fa', 'check'],
          body: 'Mürettebat bahşiş.',
        },
        {
          icon: ['fa', 'check'],
          body: 'Hoş geldin kokteyl.',
        },
      ],
    },
  ],
  location: {
    title: 'Türkiye, Marmaris. Liman: Setur Netsel Marina.',
    body:
      'Tesis sahibi, rezervasyon onayladıktan sonra tam konumu hakkında bilgi verecektir.',
    frameUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6095.667106629037!2d29.062678057540293!3d40.19051751177186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1615744172884!5m2!1str!2str',
  },
}

// TODO State
export const state = () => ({
  id: null,
  name: null,
  features: null,
  equipments: null,
  similarCarousel: null,
  headerCarouselPhotos: null,
  comments: null,
  faqs: null,
  refund: null,
  rent: null,
  offers: null,
  location: null,
  harbours: null,
  pet: null,
  renter: null,
  type: null,
  guestCapacity: null,
  inventories: null,
  reservation: null,
  mapFrameUrl: null,
  slug: null,
  description: null,
  cleanlinessVoteCount: null,
  cleanlinessVoteScore: null,
  cleanlinessVoteAvg: null,
  captainVoteCount: null,
  captainVoteScore: null,
  captainVoteAvg: null,
  chefVoteCount: null,
  chefVoteScore: null,
  chefVoteAvg: null,
  serviceVoteCount: null,
  serviceVoteScore: null,
  serviceVoteAvg: null,
  manufacturer: null,
  captain: null,
  crewIncludedInPrice: null,
  constructionYear: null,
  refit: null,
  amount: null,
  minRentalDay: null,
  beam: null,
  bunkCabinCount: null,
  doubleCabinCount: null,
  draft: null,
  freshWaterCapacity: null,
  length: null,
  recommendedCapacity: null,
  saloonCabinCount: null,
  saloonSingleCount: null,
  showerCount: null,
  staffCabinCount: null,
  steeringWheelCount: null,
  toiletCount: null,
  airConditionerAvailable: null,
  airConditionerAllowedWorkingTime: null,
  cabinCount: null,
  captainCabinCount: null,
  masterCabinCount: null,
  twinCabinCount: null,
  vipCabinCount: null,
  favouriteStatus: null,
})

// TODO Getters
export const getters = {
  getSimilarCarouselData: ({ similarCarousel }) => similarCarousel,

  getHeaderCarouselPhotosData: ({ headerCarouselPhotos }) =>
    headerCarouselPhotos,

  getNameData: ({ name }) => name,

  getHarboursData: ({ harbours }) => harbours,

  getCommentsData: ({ comments }) => comments,

  getFaqsPageData: ({ faqs }) => faqs,

  getRefundPageData: ({ refund }) => refund,

  getRentPageData: ({ rent }) => rent,

  getOffersData: ({ offers }) => offers,

  getLocationData: ({ location }) => location,

  getPetData: ({ pet }) => pet,

  getRenterData: ({ renter }) => renter,

  getTypeData: ({ type }) => type,

  getGuestCapacityData: ({ guestCapacity }) => guestCapacity,

  getInventoriesData: ({ inventories }) => inventories,

  getReservationData: ({ reservation }) => reservation,

  getFromData: ({ from }) => from,

  getSlugData: ({ slug }) => slug,

  getDescriptionData: ({ description }) => description,

  getIdData: ({ id }) => id,

  getFeaturesData: ({ features }) => features,

  getCleanlinessVoteCountData: ({ cleanlinessVoteCount }) =>
    cleanlinessVoteCount,

  getCleanlinessVoteScoreData: ({ cleanlinessVoteScore }) =>
    cleanlinessVoteScore,

  getCleanlinessVoteAvgData: ({ cleanlinessVoteAvg }) => cleanlinessVoteAvg,

  getCaptainVoteCountData: ({ captainVoteCount }) => captainVoteCount,

  getCaptainVoteScoreData: ({ captainVoteScore }) => captainVoteScore,

  getCaptainVoteAvgData: ({ captainVoteAvg }) => captainVoteAvg,

  getChefVoteCountData: ({ chefVoteCount }) => chefVoteCount,

  getChefVoteScoreData: ({ chefVoteScore }) => chefVoteScore,

  getChefVoteAvgData: ({ chefVoteAvg }) => chefVoteAvg,

  getServiceVoteCountData: ({ serviceVoteCount }) => serviceVoteCount,

  getServiceVoteScoreData: ({ serviceVoteScore }) => serviceVoteScore,

  getServiceVoteAvgData: ({ serviceVoteAvg }) => serviceVoteAvg,

  getManufacturerData: ({ manufacturer }) => manufacturer,

  getCaptainData: ({ captain }) => captain,

  getCrewIncludedInPriceData: ({ crewIncludedInPrice }) => crewIncludedInPrice,

  getConstructionYearData: ({ constructionYear }) => constructionYear,

  getRefitData: ({ refit }) => refit,

  getAmountData: ({ amount }) => amount,

  getMinRentalDayData: ({ minRentalDay }) => minRentalDay,

  getBeamData: ({ beam }) => beam,

  getBunkCabinCountData: ({ bunkCabinCount }) => bunkCabinCount,

  getDoubleCabinCountData: ({ doubleCabinCount }) => doubleCabinCount,

  getDraftData: ({ draft }) => draft,

  getFreshWaterCapacityData: ({ freshWaterCapacity }) => freshWaterCapacity,

  getLengthData: ({ length }) => length,

  getRecommendedCapacityData: ({ recommendedCapacity }) => recommendedCapacity,

  getSaloonCabinCountData: ({ saloonCabinCount }) => saloonCabinCount,

  getSaloonSingleCountData: ({ saloonSingleCount }) => saloonSingleCount,

  getShowerCountData: ({ showerCount }) => showerCount,

  getStaffCabinCountData: ({ staffCabinCount }) => staffCabinCount,

  getSteeringWheelCountData: ({ steeringWheelCount }) => steeringWheelCount,

  getToiletCountData: ({ toiletCount }) => toiletCount,

  getAirConditionerAvailableData: ({ airConditionerAvailable }) =>
    airConditionerAvailable,

  getAirConditionerAllowedWorkingTimeData: ({
    airConditionerAllowedWorkingTime,
  }) => airConditionerAllowedWorkingTime,

  getCabinCountData: ({ cabinCount }) => cabinCount,

  getCaptainCabinCountData: ({ captainCabinCount }) => captainCabinCount,

  getMasterCabinCountData: ({ masterCabinCount }) => masterCabinCount,

  getTwinCabinCountData: ({ twinCabinCount }) => twinCabinCount,

  getVipCabinCountData: ({ vipCabinCount }) => vipCabinCount,

  getBoatCommentScoreData: ({
    cleanlinessVoteCount,
    cleanlinessVoteAvg,
    captainVoteCount,
    captainVoteAvg,
    chefVoteCount,
    chefVoteAvg,
    serviceVoteCount,
    serviceVoteAvg,
  }) => ({
    total:
      (cleanlinessVoteAvg + captainVoteAvg + chefVoteAvg + serviceVoteAvg) / 4,
    count:
      cleanlinessVoteCount +
      captainVoteCount +
      chefVoteCount +
      serviceVoteCount,
  }),
  getFavouriteStatusData: ({ favouriteStatus }) => favouriteStatus,
}

export const mutations = {
  setBoatDetail: (state, result) => {
    // TODO Repo Data
    const { location, rent, refund, features, similarCarousel } = repoData

    // TODO Result Data
    const {
      id,
      faqs,
      prices,
      description,
      harbours,
      name,
      pets,
      comments,
      renter,
      type,
      guestCapacity,
      inventories,
      reservation,
      mapFrameUrl,
      from,
      slug,
      cleanlinessVoteCount,
      cleanlinessVoteScore,
      cleanlinessVoteAvg,
      captainVoteCount,
      captainVoteScore,
      captainVoteAvg,
      chefVoteCount,
      chefVoteScore,
      chefVoteAvg,
      serviceVoteCount,
      serviceVoteScore,
      serviceVoteAvg,
      manufacturer,
      captain,
      crewIncludedInPrice,
      constructionYear,
      refit,
      amount,
      minRentalDay,
      beam,
      bunkCabinCount,
      doubleCabinCount,
      draft,
      freshWaterCapacity,
      length,
      recommendedCapacity,
      saloonCabinCount,
      saloonSingleCount,
      showerCount,
      staffCabinCount,
      steeringWheelCount,
      toiletCount,
      airConditionerAvailable,
      airConditionerAllowedWorkingTime,
      cabinCount,
      captainCabinCount,
      masterCabinCount,
      twinCabinCount,
      vipCabinCount,
      photos,
    } = JSON.parse(JSON.stringify(result))

    // TODO Map Location
    const mapLocation = location
    mapLocation.frameUrl = mapFrameUrl

    // TODO Map Rent
    const mapRent = rent

    const getReservationCheck = (element) => {
      const getHours = String(new Date(element).getHours())
      const getMinutes = String(new Date(element).getMinutes())
      const hours = getHours.length === 1 ? '0' + getHours : getHours
      const minites = getMinutes.length === 1 ? '0' + getMinutes : getMinutes
      return hours + ':' + minites
    }

    mapRent[1].list[0].body =
      'Giriş: ' + getReservationCheck(reservation.checkIn)
    mapRent[1].list[1].body =
      'Çıkış: ' + getReservationCheck(reservation.checkOut)

    // TODO Map Inventories
    const mapInventories = {
      crew: {
        name: 'boat_detail_equipments_crew',
        data: [],
      },
      waterToys: {
        name: 'boat_detail_equipments_water_toys',
        data: [],
      },
      other: {
        name: 'boat_detail_equipments_other',
        data: [],
      },
      electronic: {
        name: 'boat_detail_equipments_electron',
        data: [],
      },
      deck: {
        name: 'boat_detail_equipments_deck',
        data: [],
      },
    }

    inventories.forEach((item) => {
      if (item.type === 'CREW' && item.existence === true) {
        mapInventories.crew.data.push({
          body: item.names,
          status: item.existence,
        })
      }

      if (item.type === 'DECK' && item.existence === true) {
        mapInventories.deck.data.push({
          body: item.names,
          status: item.existence,
        })
      }

      if (item.type === 'ELECTRONIC' && item.existence === true) {
        mapInventories.electronic.data.push({
          body: item.names,
          status: item.existence,
        })
      }

      if (item.type === 'OTHER' && item.existence === true) {
        mapInventories.other.data.push({
          body: item.names,
          status: item.existence,
        })
      }

      if (item.type === 'WATER_TOYS' && item.existence === true) {
        mapInventories.waterToys.data.push({
          body: item.names,
          status: item.existence,
        })
      }
    })

    // TODO Map Commets
    const mapComments = comments.map((item) => {
      return {
        name: item.user.name,
        image: item.user.avatar
          ? item.user.avatar.small
          : require(`~/assets/images/boat/null-photos.jpg`),
        text: item.comment,
        date: item.createdAt,
      }
    })

    // TODO Map Renter
    const mapRenter = {
      name: renter.name,
      avatar: renter.avatar
        ? renter.avatar.small
        : require(`~/assets/images/boat/null-photos.jpg`),
    }

    // TODO Map Faqs
    const mapFaqs = faqs.map((item, index) => {
      return {
        id: index,
        title: item.name,
        context: item.description,
      }
    })

    // TODO Insert State
    state.id = id
    state.headerCarouselPhotos = photos
    state.faqs = mapFaqs
    state.harbours = harbours
    state.offers = prices
    state.name = name
    state.pet = pets
    state.comments = mapComments
    state.renter = mapRenter
    state.type = type
    state.guestCapacity = guestCapacity
    state.inventories = mapInventories
    state.reservation = reservation
    state.rent = mapRent
    state.location = mapLocation
    state.refund = refund
    state.description = description
    state.from = from
    state.slug = slug
    state.similarCarousel = similarCarousel
    state.features = features
    state.cleanlinessVoteCount = cleanlinessVoteCount
    state.cleanlinessVoteScore = cleanlinessVoteScore
    state.cleanlinessVoteAvg = cleanlinessVoteAvg
    state.captainVoteCount = captainVoteCount
    state.captainVoteScore = captainVoteScore
    state.captainVoteAvg = captainVoteAvg
    state.chefVoteCount = chefVoteCount
    state.chefVoteScore = chefVoteScore
    state.chefVoteAvg = chefVoteAvg
    state.serviceVoteCount = serviceVoteCount
    state.serviceVoteScore = serviceVoteScore
    state.serviceVoteAvg = serviceVoteAvg
    state.manufacturer = manufacturer
    state.crewIncludedInPrice = crewIncludedInPrice
    state.captain = captain
    state.constructionYear = constructionYear
    state.refit = refit
    state.amount = amount
    state.minRentalDay = minRentalDay
    state.beam = beam
    state.bunkCabinCount = bunkCabinCount
    state.doubleCabinCount = doubleCabinCount
    state.draft = draft
    state.freshWaterCapacity = freshWaterCapacity
    state.length = length
    state.recommendedCapacity = recommendedCapacity
    state.saloonCabinCount = saloonCabinCount
    state.saloonSingleCount = saloonSingleCount
    state.showerCount = showerCount
    state.staffCabinCount = staffCabinCount
    state.steeringWheelCount = steeringWheelCount
    state.toiletCount = toiletCount
    state.airConditionerAvailable = airConditionerAvailable
    state.airConditionerAllowedWorkingTime = airConditionerAllowedWorkingTime
    state.cabinCount = cabinCount
    state.captainCabinCount = captainCabinCount
    state.masterCabinCount = masterCabinCount
    state.twinCabinCount = twinCabinCount
    state.vipCabinCount = vipCabinCount
  },
  setFavouriteStatus: (state, result) => {
    state.favouriteStatus = Object.entries(
      JSON.parse(JSON.stringify(result))
    )[0][1]
  },
}

// TODO Actions
export const actions = {
  async fetchGetBoatData({ commit, rootGetters }, { paramId }) {
    try {
      const boatDetail = await this.$axios.$get(`/boat/${paramId}/detail`)

      commit('setBoatDetail', boatDetail)

      if (rootGetters['auth/isLoggedIn']) {
        const favouriteCheck = await this.$axios.$get(
          `/favourite-check?id[]=${paramId}`
        )

        commit('setFavouriteStatus', favouriteCheck)
      }

      return boatDetail
    } catch (error) {
      throw error
    }
  },

  async fetchPostBoatFavorite(
    { commit, rootGetters },
    { token, pageId, status }
  ) {
    try {
      const urls = {
        active: `/boat/${pageId}/favourite`,
        disable: `/boat/${pageId}/unfavourite`,
        check: `/favourite-check?id[]=${pageId}`,
      }

      const options = {
        method: 'post',
        url: urls[!status ? 'active' : 'disable'],
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }

      const favouriteCount = rootGetters['user/getFavouriteCount']
      if (!status) {
        commit('user/updateFavouriteCount', favouriteCount + 1, { root: true })
      } else {
        commit('user/updateFavouriteCount', favouriteCount - 1, { root: true })
      }

      const favourite = await this.$axios(options)

      const favouriteCheck = await this.$axios.$get(urls.check)

      commit('setFavouriteStatus', favouriteCheck)

      return favourite
    } catch (error) {
      console.log(error)
    }
  },
}
