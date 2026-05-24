import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi2";

const STATS = [
  { value: "5+", label: "منصات رسمية" },
  { value: "100%", label: "محتوى أصيل" },
  { value: "موثق", label: "الهوية الرسمية" },
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://www.tiktok.com/",
    icon: FaTiktok,
    label: "TikTok",
  },
  {
    href: "https://www.youtube.com/",
    icon: FaYoutube,
    label: "YouTube",
  },
  {
    href: "https://www.snapchat.com/",
    icon: FaSnapchatGhost,
    label: "Snapchat",
  },
  {
    href: "https://www.twitter.com/mohammed_alenany/",
    icon: FaXTwitter,
    label: "X",
  },
  {
    href: "https://www.instagram.com/mohammed.alenany/",
    icon: FaInstagram,
    label: "Instagram",
  },
] as const;

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[#4D96FF33] bg-[#FAFAFA] pt-28 pb-8 md:pt-[25px] md:pb-0 min-h-[400px]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1  gap-[5px] lg:grid-cols-3 lg:gap-[5px] xl:gap-[5px] items-center">
          {/* Headline — visual right in RTL */}
          <div className="order-1 flex flex-col gap-6  lg:order-1 md:col-span-1 ">
            <div className="flex flex-col gap-[12px]">
              <p className="text-[20px] font-bold text-[#203F6B] md:text-[40px]">
                محمد العنيني
              </p>
              <h1 className="text-[48px] font-extrabold leading-[1.05] tracking-tight text-[#203F6B] sm:text-[56px] xl:text-[64px]">
                <span className="block">المؤثر</span>
                <span className="block">السعودي</span>
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

    <div className="order-2 relative flex justify-center overflow-visible lg:order-1 md:col-span-1 after:content-[''] after:absolute after:rounded-full after:blur-[50px] after:w-[790px] after:aspect-square after:bg-[linear-gradient(163.37deg,rgba(77,150,255,0.6)_29.9%,rgba(70,137,232,0)_92.81%)] after:z-[1] after:translate-x-[22%] after:-translate-y-[11%]">

<div className="relative  ">
  <Image
    src="/assets/hero.png"
    alt="محمد العنيني — المؤثر السعودي"
    width={490}
    height={639}
    priority
    className="relative z-10 mx-auto h-[600px] w-full object-contain top-[-10%] rotate-y-180 left-[10%]"
  />
</div>
              {/* <div className=" "> */}
                <div className="absolute left-[-28%] bottom-[11%] z-20  min-w-[237px] flex items-center justify-center gap-2 rounded-full border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] px-[20px] py-[8px] shadow-lg sm:gap-3 sm:px-5 sm:py-3">
                 
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#203F6B] sm:size-8">
                    <BsPatchCheck size={18} className="text-white" />
                  </span>
                  <span className="text-center text-[11px] font-semibold leading-snug text-[#EAEBF4] sm:text-[12px]">
                    الصفحة الرسمية للمؤثر السعودي
                  </span>
               
                {/* </div> */}
              {/* </div> */}
            </div>
          </div>

          {/* About — visual left in RTL */}
          <div className="order-3 flex flex-col gap-4 lg:order-3 md:col-span-1 ">
              <h2 className="text-[40px] font-bold text-[#203F6B] sm:text-[32px]">
                من أنا
              </h2>
         

            <div className="flex flex-col gap-4">

                   <div className="relative pr-1">
            
                <p className="text-[16px] leading-[1.75] font-medium text-[#203F6B] sm:text-[15px]">
                صانع محتوى ومؤثر سعودي، مختص بمشاركة العروض والخصومات والتغطيات الإعلامية عبر المنصات الرسمية في السعودية - المدينة المنورة وما جوارها.
                </p>
                    <span
                  className="absolute -bottom-1 left-10 text-[32px] font-serif leading-none text-[#4D96FF]"
                  aria-hidden
                >
                  &ldquo;
                </span>
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
                <p className="text-[16px] font-bold text-[#203F6B]">تابعني على</p>
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


 

