import WorldTimeApiService from "@services/WorldTimeApiService";

export default async (req, res) => {
  const zones = await WorldTimeApiService.getZones();
  res.status(200).json(zones);
};
