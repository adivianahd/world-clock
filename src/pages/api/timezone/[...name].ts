import WorldTimeApiService from "@services/WorldTimeApiService";

export default async (req, res) => {
  const name = req.query.name.join("/");
  const zone = await WorldTimeApiService.getZoneByName(name);
  res.status(200).json(zone);
};
