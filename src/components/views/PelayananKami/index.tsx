import EdutourSection from './PelayananKamiSection/Edutour.section';
import PelayananKamiSection from './PelayananKamiSection/PelayananKami.section';
import PeluangKerjasamaUmumSection from './PelayananKamiSection/PeluangKerjasamaUmum.section';
import PeluangKerjasamaInvestorSection from './PelayananKamiSection/PeluangKerjasamaInvestor.section';

const PelayananKami = () => {
  return (
    <div className="flex flex-col mx-auto max-w-7xl gap-20 pb-10 px-4 xl:px-0  overflow-x-hidden">
      <PelayananKamiSection />
      <EdutourSection />
      <PeluangKerjasamaUmumSection />
      <PeluangKerjasamaInvestorSection />
    </div>
  );
};

export default PelayananKami;
