import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import { LeftLine, RightLine } from './design/Pricing'

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-1">
        <div className="relative justify-center hidden mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="sphere"
            className="relative z-1"
            width={255}
            height={255}
          />
          <div className="absolute top-1/2 w-[60rem] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              className="w-full"
              src={stars}
              alt="stars"
              width={950}
              height={400}
            />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-bold tracking-wide border-b font-coder"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  )
}
export default Pricing
