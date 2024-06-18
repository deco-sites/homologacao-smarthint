import BannerCarousel from "../../components/ui/BannerCarousel.tsx";
import { Banner } from "apps/smarthint/utils/typings.ts";

export interface Props {
  banners: Banner[] | null;
}

const SmartHintBanners = ({ banners }: Props) => {
  if (!banners?.length) return null;

  const images = banners.map((banner) => ({
    alt: banner.Name ?? "",
    desktop: banner.UrlBanner!,
    href: banner.UrlRedirect ?? "",
    mobile: banner.UrlBanner!,
  }));

  return <BannerCarousel images={images} />;
};

export default SmartHintBanners;
