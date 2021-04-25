import Layout from "@styles/Layout";
import Container from "@styles/Container";
import Input from "@components/Input";
import GridClock from "@components/GridClock";
import { useWorldClock } from "@hooks/useWorldClock";

export default function TimeZoneContainer() {
  const { options, zonesSelected, onSelect } = useWorldClock();

  return (
    <Container>
      <Layout>
        <Input options={options} onSelect={onSelect} />
        <GridClock zonesSelected={zonesSelected} />
      </Layout>
    </Container>
  );
}
