import axios from "../config/axios";

export const getAllEvent = () => axios.get("/getData/event");
export const getEventById = (eventId) => axios.get("/getData/event/" + eventId);
