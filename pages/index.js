import Layout from "./../styles/Layout"
import Container from "./../styles/Container"
import Input from "./../src/componets/Input"

const hintData = ["Europa/ Amsterdam", "America/ Argentina", "Asia/ japon", "Europa/ España", "probando esta vaina"]

export default function Home() {
  return (
    <Container>
      <Layout>
        <Input options={hintData} onSelect={(o)=>{alert(o)}} />
      </Layout>
    </Container>
  )
}
