import axios from "../config/axios";

export const getBookingById = (userId) => axios.get(`/booking/${userId}`);
export const createBooking = (userId, eventId, zoneId, input) =>
  axios.post("/booking" + userId + eventId + zoneId, input);
export const getBooking = (bookingId) => axios.get("/booking" + bookingId);
export const deleteBooking = (bookingId) =>
  axios.delete("/booking" + bookingId);

// router.post("/:userId/:eventId/:zoneId", bookingController.createBooking);
// router.get("/:userId", bookingController.getAllBookingById);
// router.get("/:bookingId", bookingController.getBooking);
// router.delete("/:bookingId", bookingController.deleteBooking);
