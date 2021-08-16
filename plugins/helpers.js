export default (app, inject) => {
  inject('helpers', {
    makeHourArr() {
      const arr = []
      for (let index = 0; index < 24; index++) {
        const hour = index < 10 ? '0' + index : index
        arr.push(
          {
            value: `${hour}:00`,
            text: `${hour}:00`,
          },
          {
            value: `${hour}:30`,
            text: `${hour}:30`,
          }
        )
      }

      return arr
    },
  })
}
