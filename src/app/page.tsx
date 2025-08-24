import Companies from "./sections/Companies"
import Features from "./sections/Features"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
const page = () => {
  return (
    <div >
      <Header></Header>
      <Hero></Hero>
      <Companies></Companies>
      <Features></Features>
    </div>
  )
}

export default page