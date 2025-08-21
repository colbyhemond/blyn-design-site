import Hero from "../components/Hero";
import ServicesGrid from '@/components/ServicesGrid'
import FeaturedProjects from '@/components/FeaturedProjects'
import ProcessSteps from '@/components/ProcessSteps'
import CommunitiesStrip from '@/components/CommunitiesStrip'
import { CTABand } from '@/components/CTABand'

const Home = async () => {
  
  return (
    <div>
      <Hero/>
      {/* <LatestPosts /> */}
      {/* <CallToActionSection text={calltoaction.text} button={calltoaction.button}/> */}
      <ProcessSteps />
      <ServicesGrid  />
      <FeaturedProjects type="Senior Living" limit={3} featuredOnly={true} />
      {/* <CommunitiesStrip communities={["Norton Shores", "Bloomfield Hills" ]} /> */}
      <CTABand />
    </div>
  );
}

export default Home;