import Seating from "./Seating";
import pung from "../assets/images/pung.png";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as zoneApi from "../apis/zone-api";

export default function SeatSelector() {
  const [zone, setZone] = useState([]);
  const [selectedZone, setSelectedZone] = useState([]);
  const { venueId, zoneName } = useParams();

  useEffect(() => {
    const fetchZone = async () => {
      const res = await zoneApi.getZone(venueId);
      setZone(res.data.zone);
    };
    fetchZone();
  }, [venueId]);

  useEffect(() => {
    const fetchZone = async () => {
      const res = await zoneApi.getZoneByZoneName("SE");
      setSelectedZone(res.data.zone);
    };
    fetchZone();
  }, [zoneName]);

  return (
    <>
      <div className="flex justify-center">
        <img src={pung} useMap="#image-map" />
        {/* image width 500px */}
        <map name="image-map">
          <area
            alt="se"
            title="se"
            href="#seating"
            coords="150,302,114,243"
            shape="rect"
          />
          <area
            alt="p"
            title="p"
            href="#seating"
            coords="401,291,484,314,467,358,416,333"
            shape="poly"
          />
        </map>
      </div>
      <div id="seating">
        <Seating zone={zone} />
      </div>
    </>
  );
}
