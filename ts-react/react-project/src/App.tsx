import Heading from "./components/Heading"
import './App.css'
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"
function App() {
  return (
    <>
      <Heading title={"Hello "} />
      <Section>Ms Dhoni</Section>
      <Counter />
      <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={(item: string) => <span className="bold">{item}</span>} />
    </>
  )
}

export default App
