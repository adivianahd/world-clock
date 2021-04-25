import TimeZoneContainer from "@containers/TimeZoneContainer"
import { WorldClockProvider } from "@hooks/useWorldClock"

export default function Home() {
  return (
    <WorldClockProvider>
      <TimeZoneContainer/>
    </WorldClockProvider>
    )
}
