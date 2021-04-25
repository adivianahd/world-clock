import Layout from "@styles/Layout";
import Container from "@styles/Container";
import Loader from "@styles/Loader";
import Input from "@components/Input";
import GridClock from "@components/GridClock";
import { useWorldClock } from "@hooks/useWorldClock";

export default function TimeZoneContainer() {
  const { options, zonesSelected, loading, onSelect, onDelete } = useWorldClock();

  return (
    <Container>
      {loading && <Loader />}
      <Layout>
        <Input options={options} onSelect={onSelect} />
        <GridClock zonesSelected={zonesSelected} onDelete={onDelete} />
      </Layout>
    </Container>
  );
}
