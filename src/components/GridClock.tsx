import StyleGridClock from "@styles/StyleGridClock";
import BoxRegionWorld from "@styles/BoxRegionWorld";
import Zone from "@type/Zone";

interface Props {
  zonesSelected: Zone[];
  onDelete: (option: string) => void;
}

const GridClock = ({ onDelete, zonesSelected }: Props): JSX.Element => {
  return (
    <StyleGridClock>
      {zonesSelected.map((zone, index: number) => (
        <BoxRegionWorld key={index} className={"box-region-world"}>
          <button onClick={() => onDelete(zone.name)}>X</button>
          <h2>{zone.name}</h2>
          <h3>Date: {zone.date}</h3>
          <h3>Hour: {zone.hour}</h3>
        </BoxRegionWorld>
      ))}
    </StyleGridClock>
  );
};

export default GridClock;
