import Zone from "@type/Zone";
import { getDateByISO } from "@lib/getDateByISO";
import { getHourByISO } from "@lib/getHourByISO";

const URL_API = "http://worldtimeapi.org/api/timezone/";

interface WorldTimeApiZoneResponse {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: false;
  dst_from: null;
  dst_offset: number;
  dst_until: null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

const fetchData = (url: string) =>
  fetch(url)
    .then((response) => response.json())
    .catch(() => {});

const getZones = (): Promise<string[]> => fetchData(URL_API);
const getZoneByName = (name: string): Promise<Zone> =>
  fetchData(`${URL_API}${name}`).then(
    ({ datetime }: WorldTimeApiZoneResponse) => ({
      name,
      date: getDateByISO(datetime),
      hour: getHourByISO(datetime),
    })
  );

export default {
  getZones,
  getZoneByName,
};
