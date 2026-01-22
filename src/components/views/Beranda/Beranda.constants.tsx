import GroupPeopleIcon from "@/components/icons/GroupPeopleIcon";
import MushroomIcon from "@/components/icons/MushroomIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import PersonIdeaIcon from "@/components/icons/PersonIdeaIcon";
import StarIcon from "@/components/icons/StarIcon";

const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const BANNER_ITEMS = [
  {
    img: "/images/banner/Banner1.png",
    titleKey: "home.banner.banner1.title",
    descKey: "home.banner.banner1.desc",
    actionKey: "common.explore",
    action: "#tentangkami",
  },
  {
    img: "/images/banner/Banner2.png",
    titleKey: "home.banner.banner2.title",
    descKey: "home.banner.banner2.desc",
    actionKey: "common.contactUs",
    action: `https://wa.me/${phoneNumber}?text=Halo%20saya%20ingin%20bertanya`,
  },
];
const MITRA_ITEMS = [
  {
    img: "/images/logo/Mitra1.png",
    alt: "Mitra 1",
  },
  {
    img: "/images/logo/Mitra2.png",
    alt: "Mitra 2",
  },
  {
    img: "/images/logo/Mitra3.png",
    alt: "Mitra 3",
  },
];

const PELAYANAN_KAMI_ITEMS = [
  {
    img: "/images/pelayanan/BudidayaJamur.png",
    titleKey: "home.services.items.cultivation.title",
    descKey: "home.services.items.cultivation.desc",
  },
  {
    img: "/images/pelayanan/PembuatanBibitUnggul.png",
    titleKey: "home.services.items.seedProduction.title",
    descKey: "home.services.items.seedProduction.desc",
  },
  {
    img: "/images/pelayanan/PenjualanBaglogMiselium.png",
    titleKey: "home.services.items.baglogSales.title",
    descKey: "home.services.items.baglogSales.desc",
  },
  {
    img: "/images/pelayanan/Edutour.png",
    titleKey: "home.services.items.edutour.title",
    descKey: "home.services.items.edutour.desc",
  },
  {
    img: "/images/pelayanan/JamurCrispyFrozenFood.png",
    titleKey: "home.services.items.frozenFood.title",
    descKey: "home.services.items.frozenFood.desc",
  },
  {
    img: "/images/pelayanan/RestoJamur.png",
    titleKey: "home.services.items.restaurant.title",
    descKey: "home.services.items.restaurant.desc",
  },
  {
    img: "/images/pelayanan/PembuatanSewaKumbung.png",
    titleKey: "home.services.items.kumbungRental.title",
    descKey: "home.services.items.kumbungRental.desc",
  },
  {
    img: "/images/pelayanan/KonsultasiBisnis.png",
    titleKey: "home.services.items.consultation.title",
    descKey: "home.services.items.consultation.desc",
  },
  {
    img: "/images/pelayanan/PengelolaanMandiri.png",
    titleKey: "home.services.items.management.title",
    descKey: "home.services.items.management.desc",
  },
  {
    img: "/images/pelayanan/PemasanganIOTKumbung.png",
    titleKey: "home.services.items.iot.title",
    descKey: "home.services.items.iot.desc",
  },
  {
    img: "/images/pelayanan/BudidayaBersama.png",
    titleKey: "home.services.items.partnership.title",
    descKey: "home.services.items.partnership.desc",
  },
  {
    img: "/images/pelayanan/PelatihanBudidaya.png",
    titleKey: "home.services.items.training.title",
    descKey: "home.services.items.training.desc",
  },
];

const KENAPA_CIKUDA_ITEMS = [
  {
    icon: <MushroomIcon />,
    descKey: "home.whyCikuda.items.quality",
  },
  {
    icon: <StarIcon />,
    descKey: "home.whyCikuda.items.products",
  },
  {
    icon: <PersonIcon />,
    descKey: "home.whyCikuda.items.training",
  },
  {
    icon: <GroupPeopleIcon />,
    descKey: "home.whyCikuda.items.businessConsultant",
  },
  {
    icon: <PersonIdeaIcon />,
    descKey: "home.whyCikuda.items.cultivationConsultant",
  },
];

const REVIEW_CIKUDA_ITEMS = [
  {
    nameKey: "home.reviews.items.review1.name",
    descKey: "home.reviews.items.review1.desc",
  },
  {
    nameKey: "home.reviews.items.review2.name",
    descKey: "home.reviews.items.review2.desc",
  },
  {
    nameKey: "home.reviews.items.review3.name",
    descKey: "home.reviews.items.review3.desc",
  },
];

const FAQ_ITEMS = [
  {
    questionKey: "home.faq.items.faq1.question",
    answerKey: "home.faq.items.faq1.answer",
  },
  {
    questionKey: "home.faq.items.faq2.question",
    answerKey: "home.faq.items.faq2.answer",
  },
  {
    questionKey: "home.faq.items.faq3.question",
    answerKey: "home.faq.items.faq3.answer",
  },
];

export {
  BANNER_ITEMS,
  MITRA_ITEMS,
  PELAYANAN_KAMI_ITEMS,
  KENAPA_CIKUDA_ITEMS,
  REVIEW_CIKUDA_ITEMS,
  FAQ_ITEMS,
};
