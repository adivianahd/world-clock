import StyleGridClock from "@styles/StyleGridClock";
import BoxRegionWorld from "@styles/BoxRegionWorld";
import Zone from "@type/Zone";

interface Props {
  zonesSelected: Zone[];
  onSelect?: (option: string) => void;
}

const GridClock = ({ onSelect, zonesSelected }: Props): JSX.Element => {
  return (
    <StyleGridClock>
      {zonesSelected.map((object, index: number) => (
        <BoxRegionWorld key={index} className={"box-region-world"}>
          <button>X</button>
          <h2>{object.name}</h2>
          <h3>Date: {object.date}</h3>
          <h3>Hour: {object.hour}</h3>
        </BoxRegionWorld>
      ))}
    </StyleGridClock>
  );
};

export default GridClock;
