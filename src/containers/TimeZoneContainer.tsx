import Layout from "@styles/Layout";
import Loader from "@styles/Loader";
import Title from "@styles/Title";
import Input from "@components/Input";
import GridClock from "@components/GridClock";
import { useWorldClock } from "@hooks/useWorldClock";

export default function TimeZoneContainer() {
  const { options, zonesSelected, loading, onSelect, onDelete } = useWorldClock();

  return (
    <>
      {loading && <Loader />}
      <Layout>
        <Title>World Clock</Title>
        <p>Select yours time zones</p>
        <Input options={options} onSelect={onSelect} />
        <GridClock zonesSelected={zonesSelected} onDelete={onDelete} />
      </Layout>
    </>
  );
}
