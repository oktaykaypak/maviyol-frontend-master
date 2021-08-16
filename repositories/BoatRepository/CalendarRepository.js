export default ({ $axios }) => ({
  newCalendar(data, boatId) {
    return $axios.post(`/backoffice/boat/${boatId}/calendar/new`, data)
  },
  getCalendar(boatId) {
    return $axios.get(`/backoffice/boat/${boatId}/calendar`)
  },
  deleteCalendar(calendarId, boatId) {
    return $axios.delete(`/backoffice/boat/${boatId}/calendar/${calendarId}`)
  },
  updateCalendar(data, calendarId, boatId) {
    return $axios.post(
      `/backoffice/boat/${boatId}/calendar/${calendarId}`,
      data
    )
  },
})
