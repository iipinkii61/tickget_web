import axios from "../config/axios";

export const getZone = (venueId) => axios.get(`getData/zone/${venueId}`);
