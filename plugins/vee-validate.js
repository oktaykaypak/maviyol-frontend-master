import Vue from 'vue'
import * as VeeValidate from 'vee-validate'
import {
  email,
  required,
  regex,
  min,
  max,
  numeric,
  confirmed,
  max_value,
} from 'vee-validate/dist/rules'
import tr from '@/assets/vee-validate-tr.json'
import IBAN from 'iban'

Vue.component('ValidationProvider', VeeValidate.ValidationProvider)
Vue.component('ValidationObserver', VeeValidate.ValidationObserver)

VeeValidate.localize('tr', tr)

VeeValidate.extend('required', required)
VeeValidate.extend('email', email)
VeeValidate.extend('regex', regex)
VeeValidate.extend('min', min)
VeeValidate.extend('max', max)
VeeValidate.extend('numeric', numeric)
VeeValidate.extend('confirmed', confirmed)
VeeValidate.extend('max_value', max_value)

// Custom Validations

// iban
VeeValidate.extend('iban', {
  validate: (value) => IBAN.isValid(value),
  message: 'Geçerli bir IBAN adresi giriniz.',
})

// ext
VeeValidate.extend('ext', {
  validate: (files, extensions) => {
    const regex = new RegExp('.(' + extensions.join('|') + ')$', 'i')
    if (files.length) {
      return Array.from(files).every((file) => {
        if (file.hasOwnProperty('id')) return true
        return regex.test(file.name)
      })
    }
    return regex.test(files.name)
  },
})
// required_id
VeeValidate.extend('required_id', {
  validate: (v) => {
    return !!(typeof v === 'object' && v?.id)
  },
  message: (field) => field + ' alanı gereklidir.',
})
// size
VeeValidate.extend('size', {
  validate: (files, size) => {
    // as byte
    const maxSize = Number(size) * 1000
    return Array.from(files).every((file) => {
      if (file.id) return true
      else return file.size < maxSize
    })
  },
  message: (field, args) =>
    `${field} alanı ${args[0]}KB'dan daha az olmalıdır.`,
})
// greater
VeeValidate.extend('greater_equal', {
  params: ['target'],
  validate: (value, { target }) => {
    return value >= target
  },
  message: '{_field_} alanı {target} alanından büyük veya eşit olmalıdır.',
})

export default (app, inject) => {
  inject('validation', {
    focusFirstError() {
      const el = document.querySelector('.error-text:first-of-type')
      if (el) {
        el.scrollIntoView({
          block: 'center',
        })
      }
    },
    collectErrors(errors) {
      if (!errors) return []
      Object.keys(errors).map((v) => {
        errors[v] = errors[v]
      })
      return errors
    },
    setErrors(form, err) {
      if (!err.response) return
      const code = parseInt(err.response.status)
      if (code == 422 && err.response.data.errors) {
        form.setErrors(this.collectErrors(err.response.data.errors))
      }
    },
  })
}

VeeValidate.setInteractionMode('lazy')
