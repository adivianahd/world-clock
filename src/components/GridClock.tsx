import StyleGridClock from "@styles/StyleGridClock";
import CardZone from "@styles/CardZone";
import ZoneName from "@styles/ZoneName";
import ZoneInfo from "@styles/ZoneInfo";
import Zone from "@type/Zone";

interface Props {
  zonesSelected: Zone[];
  onDelete: (option: string) => void;
}

const GridClock = ({ onDelete, zonesSelected }: Props): JSX.Element => {
  return (
    <StyleGridClock>
      {zonesSelected.map((zone) => (
        <CardZone key={zone.name}>
          <button onClick={() => onDelete(zone.name)}>X</button>
          {zone.name.split('/').map(e => <ZoneName key={e}>{e}</ZoneName>)}
          <ZoneInfo>Date: {zone.date}</ZoneInfo>
          <ZoneInfo>Hour: {zone.hour}</ZoneInfo>
        </CardZone>
      ))}
    </StyleGridClock>
  );
};

export default GridClock;
