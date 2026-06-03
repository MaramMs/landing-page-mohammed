import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaQuoteLeft,
  FaSnapchatGhost,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import { HiArrowLeft, HiCheckBadge } from "react-icons/hi2";

const STATS = [
  { value: "5+", label: "منصات رسمية" },
  { value: "100%", label: "محتوى أصيل" },
  { value: "موثق", label: "الهوية الرسمية" },
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/aloniniyb/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://x.com/aloniniyb?s=21&t=15mbFQHY5hIlTxsZoViGmw",
    icon: FaXTwitter,
    label: "X",
  },
  {
    href: "https://www.snapchat.com/@aloniniyb",
    icon: FaSnapchatGhost,
    label: "Snapchat",
  },
  {
    href: "https://www.youtube.com/@aloniniyb",
    icon: FaYoutube,
    label: "YouTube",
  },
  {
    href: "https://www.tiktok.com/@aloniniyb",
    icon: FaTiktok,
    label: "TikTok",
  },
  {
    href: "https://www.facebook.com/aloniniyb/?_rdr",
    icon: FaFacebookF,
    label: "Facebook",
  },
] as const;

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[#4D96FF33] bg-[#FAFAFA] py-[60px] px-[16px]   md:pt-[25px] md:pb-0 md:min-h-[400px]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1  gap-[5px] lg:grid-cols-3 lg:gap-[5px] xl:gap-[5px] items-center">
          {/* Headline — visual right in RTL */}
          <div className="order-1 flex flex-col gap-6  lg:order-1 md:col-span-1 ">
            <div className="flex flex-col gap-[12px]">
              <p className="text-[20px] font-bold text-[#203F6B] md:text-[40px]">
                محمد العنيني
              </p>
              <h1 className="text-[32px] md:text-[72px] font-extrabold leading-[1.05] tracking-tight text-[#203F6B]  xl:text-[64px]">
                المؤثر السعودي
              </h1>
            </div>
            <Link
              href="#discount"
              className="flex items-center min-w-[236px] max-w-fit gap-2 rounded-[16px] bg-[#4D96FF] px-[24px] py-[12px] text-[16px] font-medium text-white shadow-[0_8px_24px_rgba(77,150,255,0.35)] transition hover:bg-[#3d85ef] hover:shadow-[0_10px_28px_rgba(77,150,255,0.45)]"
            >
              احصل على خصم العنيني
              <HiArrowLeft size={18} aria-hidden />
            </Link>
          </div>

          <div className="order-2 relative flex justify-center overflow-visible lg:order-1 md:col-span-1 after:content-[''] after:absolute after:rounded-full after:blur-[140px] after:w-[331px] md:after:w-[790px] after:aspect-square after:bg-[linear-gradient(163.37deg,rgba(77,150,255,0.6)_29.9%,rgba(70,137,232,0)_92.81%)] after:z-[1] after:translate-x-[0%]  md:after:translate-x-[22%] after:translate-y-[30%]  md:after:-translate-y-[11%]">
            <Image
              src="/assets/hero.png"
              alt="محمد العنيني — المؤثر السعودي"
              width={490}
              height={639}
              priority
              className="relative z-10 mx-auto h-[317px] md:h-[600px] w-full object-contain top-[-10%] rotate-y-180 left-[10%]"
            />
            <div className="absolute left-[25%] md:left-[-28%] bottom-[5%] md:bottom-[11%] z-20  md:min-w-[237px] flex items-center justify-center gap-[4px] rounded-full border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] md:px-[20px] md:py-[8px] shadow-lg  px-[8px] py-[4px]">
              <HiCheckBadge color="#FFFFFF" size={19} />
              <span className="text-center md:text-[12px] font-semibold leading-snug text-[#EAEBF4] text-[10px]">
                الصفحة الرسمية للمؤثر السعودي
              </span>
            </div>
          </div>

          <div className="order-3 flex flex-col gap-4 lg:order-3 md:col-span-1 ">
            <h2 className="text-center md:text-right md:text-[40px] font-bold text-[#203F6B] text-[32px]">
              من أنا
            </h2>

            <div className="flex flex-col gap-4">
              <div className="relative pr-1">
              
                <p className="text-[16px] leading-[1.75] font-medium text-[#203F6B] sm:text-[15px]">
  صانع محتوى ومؤثر سعودي، مختص بمشاركة العروض والخصومات
  والتغطيات الإعلامية عبر المنصات الرسمية في السعودية - المدينة
  المنورة وما جوارها.{" "}
  <FaQuoteLeft className="inline-block align-middle flex-shrink-0 text-[#4D96FF]" />
</p>
              </div>
              <div className="grid grid-cols-3 gap-6 border-b border-[#203F6B1A] pb-6 ">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-1 text-center lg:items-start lg:text-right"
                  >
                    <span className="text-[24px] font-bold text-[#4D96FF] sm:text-[24px]">
                      {stat.value}
                    </span>
                    <span className="text-[12px] font-normal leading-snug text-[#203F6B] sm:text-[12px]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[16px] font-bold text-[#203F6B]">
                  تابعني على
                </p>
                <ul className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex size-10 items-center justify-center rounded-full border border-[#4D96FF80] bg-[#4689E8] text-white transition hover:bg-[#4D96FF] hover:shadow-md"
                      >
                        <Icon size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
