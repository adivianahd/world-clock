import { useState, createContext, useEffect, useContext } from "react";
import Zone from "@type/Zone";
import WorldTimeApiService from "@services/WorldTimeApiService";

interface WorldClockValue {
  options: string[];
  zonesSelected: Zone[];
  loading: boolean;
  onSelect: (name: string) => void;
  onDelete: (name: string) => void;
}

const initialValues: WorldClockValue = {
  options: [],
  loading: true,
  zonesSelected: [],
  onSelect: () => { },
  onDelete: () => { },
};

const WorldClockContext = createContext<WorldClockValue>(initialValues);

interface WorldClockProviderProps {
  children: JSX.Element;
}

export function WorldClockProvider({ children }: WorldClockProviderProps) {
  const [options, setOptions] = useState<string[]>(initialValues.options);
  const [zonesSelected, setZonesSelected] = useState<Zone[]>(
    initialValues.zonesSelected
  );
  const [loading, setLoading] = useState<boolean>(initialValues.loading);

  useEffect(() => {
    loadZones();
  }, []);

  const loadZones = () =>
    WorldTimeApiService.getZones()
      .then(setOptions)
      .then(() => setLoading(false))
      .catch(loadZones);

  const checkIfItWasAdded = (name) =>
    zonesSelected.some((zone) => zone.name === name);

  const onSelect = (name: string) => {
    if (checkIfItWasAdded(name)) return;

    setLoading(true);
    WorldTimeApiService.getZoneByName(name).then((newZoneSelected) => {
      setZonesSelected([newZoneSelected, ...zonesSelected]);
      setLoading(false);
    }).catch(() => {
      onSelect(name)
    });
  };

  const onDelete = (name: string) => {
    setZonesSelected(zonesSelected.filter((zone) => zone.name !== name));
  };

  return (
    <WorldClockContext.Provider
      value={{ options, zonesSelected, loading, onSelect, onDelete }}
    >
      {children}
    </WorldClockContext.Provider>
  );
}

export const useWorldClock = (): WorldClockValue =>
  useContext(WorldClockContext);
