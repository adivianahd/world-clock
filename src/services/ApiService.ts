import Zone from "@type/Zone";
import { fetchData } from "@lib/fetch-data";

const URL_API = "/api/timezone/";

const getZones = (): Promise<string[]> => fetchData(URL_API).catch(getZones);

const getZoneByName = (name: string): Promise<Zone> =>
  fetchData(`${URL_API}${name}`).catch(() => getZoneByName(name));

export default {
  getZones,
  getZoneByName,
};
