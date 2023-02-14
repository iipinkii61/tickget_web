import axios from "../config/axios";

export const getZone = (venueId) => axios.get(`getData/zone/${venueId}`);
export const getZoneById = (zoneId) => axios.get(`getData/zones/${zoneId}`);
export const getZoneByZoneName = (zoneName) =>
  axios.get(`getData/zoneName/${zoneName}`);
