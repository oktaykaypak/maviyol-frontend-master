<template>
  <div class="boat-ask-offer" @click="catchClick($event)">
    <div class="row">
      <div class="col-12" style="margin-bottom: 46px">
        <h1 class="title">{{ $t('boat_detail_ask_offer_title') }}</h1>
        <hr style="opacity: 0.7" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 select">
        <div class="customInputGroup">
          <label style="margin-bottom: 9px" for="choicePort"
            >Liman Tercihiniz
          </label>
          <VMultiSelect
            :id="'choicePort'"
            v-model.trim="$v.form.harbour.$model"
            :options="harbourOptions"
            :searchable="false"
            :close-on-select="true"
            :show-labels="false"
            placeholder="Liman Seçiniz"
            class="harbourSelect"
          ></VMultiSelect>
        </div>

        <div class="customInputGroup">
          <label for="dateInput">Tur Tarihi </label>
          <AskOfferDateInput
            id="dateInput"
            style="margin-top: 9px"
            @dateHandler="emitStartDate($event)"
          />
        </div>
        <div class="customInputGroup">
          <label style="margin-bottom: 9px" for="choicePort"
            >Kişi Sayısı
          </label>
          <div class="guestInputGroup">
            <MDropdownTwo id="dropcuks" width="100%" :title="guestInfos">
              <MDropdownItemTwo
                v-for="(item, index) in dropdownInformation"
                :id="index"
                :key="item.id"
                :option="item.option"
                :value="item.value"
                @emitDropdownInfo="emitDropdownInfo($event)"
              />
            </MDropdownTwo>
            <div class="guestCounter">
              <MDropdownThree
                :default="'go'"
                class="select"
                @emitCabinMethod="emitCabinMethod($event)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="customInputGroup">
          <label for="offerNameSurname">İsim Soyisim</label>
          <input
            id="offerNameSurname"
            v-model.trim="$v.form.nameAndSurname.$model"
            type="text"
          />
        </div>

        <div class="customInputGroup">
          <label for="offerEmail">E-posta adresi </label>
          <input
            id="offerEmail"
            v-model.trim="$v.form.email.$model"
            type="text"
          />
        </div>

        <div id="offerInput" class="customInputGroup">
          <label for="offerInput">Telefon Numaranız : </label>
          <m-tel-input
            v-model="form.phone"
            rules="required"
            placeholder="Telefon Numarası"
            variant="classic"
            title="Telefon"
          />
        </div>
        <div class="textAreaGroup">
          <textarea
            id="lorem"
            v-model.trim="$v.form.message.$model"
            name="lorem"
            cols="30"
            rows="10"
          />
          <div class="charCounterBox">
            <span>Kalan karakter: {{ charCounter.charLimit }} </span>
          </div>
        </div>
        <button
          style="text-transform: uppercase"
          class="customBtn"
          @click="validButton"
        >
          Teklif İsteyin
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, minValue } from 'vuelidate/lib/validators'

export default {
  name: 'BoatAskOffer',
  data() {
    return {
      dropdownInformation: [
        { option: ['Yetişkin', '12+ yaş'], value: 0 },
        { option: ['Çocuk', '2-12 yaş'], value: 0 },
        { option: ['Bebek', '0-1 yaş'], value: 0 },
      ],
      value: '',
      counter: 0,
      harbourOptions: [],
      harbourFullOptions: [],
      selectedHarbour: 0,
      form: {
        email: '',
        nameAndSurname: '',
        phone: { code: '', number: '' },
        start: '',
        end: '',
        harbour: '',
        message: '',
        cabin: 0,
      },
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      message: {},
      nameAndSurname: {
        minLength: minLength(5),
        required,
      },
      harbour: {
        required,
      },
      start: {
        required,
      },
      end: {
        required,
      },
      cabin: {
        required,
        minValue: minValue(1),
      },
    },
  },
  computed: {
    charCounter() {
      const charLimit = 450 - this.form.message.length

      if (charLimit <= 0)
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.form.message = this.form.message.substring(0, 449)

      return {
        charLimit,
      }
    },
    guestInfos() {
      const filtered = this.dropdownInformation.filter((item) => item.value > 0)
      return filtered.length !== 0
        ? filtered.length === 3
          ? filtered[0].value +
            ' ' +
            filtered[0].option[0] +
            ' ' +
            filtered[1].value +
            ' ' +
            filtered[1].option[0] +
            '...'
          : filtered.length === 2
          ? filtered[0].value +
            ' ' +
            filtered[0].option[0] +
            ' ' +
            filtered[1].value +
            ' ' +
            filtered[1].option[0]
          : filtered.length === 1 &&
            filtered[0].value + ' ' + filtered[0].option[0]
        : 'Seçim yapınız'
    },
    findHarbour() {
      const selected = this.harbourFullOptions.filter(
        (item) => item.name === this.form.harbour
      )[0]
      console.log(this.form)

      if (selected) {
        return selected.id
      } else {
        return null
      }
    },
    computeGuestCounter() {
      let counter = 0
      for (const info of this.dropdownInformation) {
        counter += info.value
      }
      return counter
    },
  },
  async mounted() {
    try {
      const harbours = await this.$axios.$get('/popular-harbours')
      this.harbourFullOptions = harbours
      console.log('TEKNE LİMANLARI', harbours)
      const cleanHarbours = harbours.map((item) => item.name)
      this.harbourOptions = cleanHarbours
    } catch (error) {
      throw error
    }
  },
  methods: {
    catchClick($event) {
      console.log('event', $event.target)

      const element = document.getElementById('dropcuks')
      if ($event.target.id === 'upper-button-offer') {
        element.style.display === 'block'
          ? (element.style.display = 'none')
          : (element.style.display = 'block')
      } else if ($event.target.className === 'customBtn') {
      } else {
        element.style.display = 'none'
      }
    },
    validButton() {
      if (!this.$v.form.$invalid && this.computeGuestCounter > 0) {
        this.$toast.success('Teklifiniz başarıyla iletildi.')

        this.$axios.$post('offer-request', {
          boat: parseInt(this.$route.params.id),
          email: this.form.email,
          name: this.form.nameAndSurname,
          phoneCode: this.form.phone.code,
          phoneNumber: this.form.phone.number,
          start: this.form.start,
          end: this.form.end,
          harbour: this.findHarbour,
          guestCapacity: this.computeGuestCounter,
          message: this.form.message,
          cabinCount: this.form.cabin,
        })
        console.log('OBJECT', {
          boat: this.$route.params.id,
          email: this.form.email,
          name: this.form.nameAndSurname,
          phoneCode: this.form.phone.code,
          phoneNumber: this.form.phone.number,
          start: this.form.start,
          end: this.form.end,
          harbour: this.findHarbour,
          guestCapacity: this.computeGuestCounter,
          message: this.form.message,
          cabin: this.form.cabin,
        })
      } else {
        //  this.$emit('closeModal')
        this.$toast.error('Bir hata meydana geldi.')
      }
    },
    emitStartDate(event) {
      event.type === 'start'
        ? (this.form.start = event.date)
        : (this.form.end = event.date)
    },
    emitDropdownInfo(event) {
      if (event.type === '+') {
        this.dropdownInformation[event.id].value++
      } else {
        this.dropdownInformation[event.id].value > 0 &&
          this.dropdownInformation[event.id].value--
      }
    },
    emitCabinMethod(event) {
      this.form.cabin = event
      console.log(this.form)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/input';

.harbourSelect {
  margin-bottom: -3px;
}
.boat-ask-offer {
  margin: 15px 10px;

  .select {
    .title {
      margin-top: 10px;
      height: 20px;
      font-family: 'Open Sans';
      font-size: 10px;
      font-weight: 500;
      color: #525f7f;
    }

    .box {
      width: 305px;
      height: 53px;
      margin: 9px 0 0;
      padding: 15px 13px 14px 15px;
      border-radius: 4px;
      border: solid 1px #e9ecef;
      background-color: #ffffff;

      &::after {
        background-color: red;
      }

      &::before {
        background-color: red;
      }
    }
  }

  .title {
    font-family: 'Open Sans';
    font-size: 24px;
    font-weight: bold;
    color: #172b4d;
    margin-bottom: 20px;
  }
  #lorem {
    border-color: #d5d6df;
  }
  .guestCounter {
    width: 30%;
  }

  .customBtn {
    margin-top: 30px;
    background-color: #fb6340;
    color: #fff;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 4px;
  }
  .textAreaGroup {
    position: relative;
    width: 100%;
    textarea {
      outline: none;
      padding: 5px 5px 35px 5px;
      width: 100%;
      height: 100px;
    }
    .charCounterBox {
      background-color: #d5d6df;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 12px;
      }
    }
  }
  .customBtn {
    font-size: 16px;
    letter-spacing: 0.36px;
    font-weight: 700;
    outline: none;
  }
  .customInputGroup {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    .guestInputGroup {
      display: flex;
      justify-content: space-between;
    }
    label {
      margin-bottom: 10px;
    }
    input {
      height: 46px;
      border: 1px solid #ced4da;
      outline: none;
      padding: 2px 6px;
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 1248px) {
  .guestInputGroup {
    flex-direction: column;
    .dropdown {
      margin-bottom: 10px;
      width: 100%;
    }
    .guestCounter {
      width: 100%;
    }
  }
}

@media screen and (max-width: 468px) {
  .guestInputGroup {
    flex-direction: column;
    .guestCounter {
      margin-top: 10px;
      width: 100%;
    }
  }
  .boat-ask-offer .title {
    margin-top: 20px;
  }

  .boat-ask-offer .customBtn {
    margin-bottom: 50px;
  }
}
</style>
