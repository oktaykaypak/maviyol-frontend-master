const steps = [
  {
    name: 'Genel',
    icon: 'general',
    step: 0,
  },
  {
    name: 'Açıklama',
    icon: 'statement',
    step: 1,
  },
  {
    name: 'Ekipman',
    icon: 'equip',
    step: 2,
  },
  {
    name: 'Fotoğraflar',
    icon: 'image',
    step: 3,
  },
  {
    name: 'Takvimim',
    icon: 'calendar',
    step: 4,
  },
  {
    name: 'Fiyatlandırma',
    icon: 'price',
    step: 5,
  },
  {
    name: 'Rezervasyon',
    icon: 'rezervation',
    step: 6,
  },
  {
    name: 'Sigorta',
    icon: 'insurance',
    step: 7,
  },
  {
    name: 'Ekstralar',
    icon: 'extras',
    step: 8,
  },
  {
    name: 'İndirimler',
    icon: 'discounts',
    step: 9,
  },
]

export const state = () => ({
  step: 0,
  totalStep: 0,
  progress: 0,
  transactionId: '',
  status: '',
  boat: {},
  updating: false,
})

export const mutations = {
  next(state) {
    state.step++
  },
  prev(state) {
    if (state.step !== 0) {
      state.step--
    }
  },
  setTotalStep(state, value) {
    state.totalStep = value
  },
  setStep(state, value) {
    state.step = value
  },
  setTransactionId(state, value) {
    state.transactionId = value
  },
  setStatus(state, value) {
    state.status = value
  },
  updateBoat(state, value) {
    state.boat = value
  },
  setProgress(state, value) {
    state.progress = value
  },
  setUpdating(state, value) {
    state.updating = value
  },
}

export const getters = {
  isLastStep: (state) => state.step + 1 === state.totalStep,
  isFirstStep: (state) => state.step === 0,
  isEdit: (state) => state.status === 'edit',
  isUpdating: (state) => state.updating,
  getStep: (state) => state.step,
  getTransactionId: (state) => state.transactionId,
  getSteps: () => steps,
  getBoat: (state) => state.boat,
  getBoatType: (state) => state.boat?.type?.code,
  getProgress: (state) => (state.step > 0 ? state.step * 10 : 0),
}
