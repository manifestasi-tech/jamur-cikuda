import TentangKamiSection from './BerandaSection/TentangKami.section';
import BannerSection from './BerandaSection/Banner.section';
import PelayananKamiSection from './BerandaSection/PelayananKami.section';
import KenapaCikudaSection from './BerandaSection/KenapaCikuda.section';
import ReviewCikudaSection from './BerandaSection/ReviewCikuda.section';
import FAQSectionSection from './BerandaSection/FAQ.section';

const Homepage = () => {
  return (
    <div className="flex flex-col mx-auto max-w-7xl px-4 xl:px-0 overflow-x-hidden">
      <BannerSection />
      <div className="space-y-16">
        <TentangKamiSection />
        <PelayananKamiSection />
        <KenapaCikudaSection />
        <ReviewCikudaSection />
        <FAQSectionSection />
      </div>
    </div>
  );
};

export default Homepage;
