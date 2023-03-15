import axios from "../config/axios";

export const getBookingById = () => axios.get(`/booking/`);
export const createBooking = (eventId, zoneId, input) =>
  axios.post(`/booking/${eventId}/${zoneId}`, input);
export const getBooking = (bookingId) =>
  axios.get("/booking/getOne/" + bookingId);
export const deleteBooking = (bookingId) =>
  axios.delete("/booking/" + bookingId);
