import { useState, createContext, useEffect, useContext } from "react";
import Zone from "@type/Zone";

const URL_API = "http://worldtimeapi.org/api/timezone/"

interface WorldClockValue { 
  options: string[]
  zonesSelected: Zone[]
  onSelect: (name: string) => void
} 


interface WorldTimeApiResponse {
  abbreviation: string
  client_ip: string
  datetime: string
  day_of_week: number
  day_of_year: number
  dst: false
  dst_from: null
  dst_offset: number
  dst_until: null
  raw_offset: number
  timezone: string
  unixtime: number
  utc_datetime: string
  utc_offset: string
  week_number: number
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

const fetchData = (url: string) => fetch(url).then(response => response.json()).catch(() => {});

const getZones = (): Promise<string[]>  => fetchData(URL_API)

const getZoneByName = (name: string): Promise<WorldTimeApiResponse>  => fetchData(`${URL_API}${name}`)


export function WorldClockProvider  ({ children }: WorldClockProviderProps)  {
  const [options, setOptions] = useState(initialValues.options)
  const [zonesSelected, setZonesSelected] = useState(initialValues.zonesSelected)

  useEffect(() => {
    getZones().then(setOptions)
  },[])

  const onSelect = (name: string) => {

    getZoneByName(name).then(({datetime}) => {
      const newZoneSelected: Zone = {
        name,
        date: datetime,
        hour:  datetime,
      };

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
