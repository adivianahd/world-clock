import Layout from "./../styles/Layout"
import Container from "./../styles/Container"
import Input from "./../src/componets/Input"
import GridClock from "./../src/componets/GridClock"

const hintData = ["Europa/ Amsterdam", "America/ Argentina", "Asia/ japon", "Europa/ España", "probando esta vaina"]
const zonesSelected = [
  {name: "Europa/ Amsterdam", date: "23/2/2200", hour: "22:00 pm"}, 
  {name: "Asia/ japon", date: "23/2/2200", hour: "22:00 pm"},
  {name: "Europa/ España", date: "23/2/2200", hour: "22:00 pm"},
  {name: "Europa/ Amsterdam", date: "23/2/2200", hour: "22:00 pm"},
  {name: "Europa/ Amsterdam", date: "23/2/2200", hour: "22:00 pm"},
]

export default function Home() {
  return (
    <Container>
      <Layout>
        <Input options={hintData} onSelect={(o)=>{alert(o)}} />
        <GridClock zonesSelected={zonesSelected}/>
      </Layout>
    </Container>
  )
}
