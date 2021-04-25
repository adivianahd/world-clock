import { useState, createContext, useEffect, useContext } from "react";
import Zone from "@type/Zone";
import WorldTimeApiService from "@services/WorldTimeApiService";

interface WorldClockValue { 
  options: string[]
  zonesSelected: Zone[]
  onSelect: (name: string) => void
}

const initialValues: WorldClockValue = {
   options: [],
   zonesSelected: [],
   onSelect: () => {}
}

const WorldClockContext = createContext<WorldClockValue>(initialValues);

interface WorldClockProviderProps { 
  children: JSX.Element
}

export function WorldClockProvider  ({ children }: WorldClockProviderProps)  {
  const [options, setOptions] = useState(initialValues.options)
  const [zonesSelected, setZonesSelected] = useState(initialValues.zonesSelected)

  useEffect(() => {
    WorldTimeApiService.getZones().then(setOptions)
  },[])

  const onSelect = (name: string) => {
    WorldTimeApiService.getZoneByName(name).then((newZoneSelected) => {
      setZonesSelected([newZoneSelected, ...zonesSelected])
    })
  }

  return (
    <WorldClockContext.Provider value={{ options, zonesSelected, onSelect }}>
      {children}
    </WorldClockContext.Provider>
  )
}

export const useWorldClock = (): WorldClockValue => useContext(WorldClockContext)
