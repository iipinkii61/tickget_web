import axios from "../config/axios";

export const updatePayment = (bookingId, data) =>
  axios.patch(`/payment/${bookingId}`, data);
