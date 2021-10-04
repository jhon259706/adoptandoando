import Banner from '@components/index/Banner';
import OurServices from '@components/index/OurServices/OurServices';
import AboutUs from '@components/index/AboutUs';
import Stories from '@components/index/Stories/Stories';

export default function Home() {
  return (
    <div>
      <h1 id="title">Chempopet</h1>
      <Banner />
      <AboutUs />
      <OurServices />
      <Stories />
    </div>
  );
}
