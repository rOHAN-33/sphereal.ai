import CallToAction from "./sections/CallToAction"
import Companies from "./sections/Companies"
import Features from "./sections/Features"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Testimonials from "./sections/Testimonials"
const page = () => {
  return (
    <div >
      <Header></Header>
      <Hero></Hero>
      <Companies></Companies>
      <Features></Features>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
    </div>
  )
}

export default page