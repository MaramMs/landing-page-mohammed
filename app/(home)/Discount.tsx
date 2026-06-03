import { CiGift } from "react-icons/ci";
import { FaPercent } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";
import { MdOutlineDiscount } from "react-icons/md";
import Image from "next/image";
import discountImage from '../../public/assets/mobile.png'

const Discount = () => {
  return (
    <section id="discount" className="relative overflow-hidden bg-[#FAFAFA]">
      <div
        className="pointer-events-none absolute -left-[5%] top-[27%] md:top-[-22%] md:left-[-6%]  z-11 md:w-[514px] md:h-[514px] md:rounded-full md:bg-[#EDF5FF33]"
        aria-hidden
      >
        <Image
          src={discountImage}
          alt="discounnt"
          className="w-[124px] h-[126px] md:w-[514px] md:h-[514px] object-contain md:object-cover"
          width={514}
          height={514}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl md:py-25 py-[60px] px-[16px]">
        <div className="flex flex-col gap-[43px]">
          <div className="flex flex-col items-start gap-[24px] md:gap-[16px]">
            <div className=" relative flex flex-col items-center gap-2 w-fit">
              <span className="text-[#EAEBF4] min-h-7 min-w-32 rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] py-2 px-5 text-center">
                خصم العنيني
              </span>
              <div className="absolute -bottom-3 right-0 w-[56px] h-[2px] bg-gradient-to-r from-[#F9FAFB] to-[#4D96FF]" />
            </div>
            <h2 className="text-[#203F6B] text-[32px]  md:text-[40px] font-extrabold">
              عروض وخصومات حصرية للمتابعين
            </h2>
            <p className="text-[#203F6B] text-[16px] font-medium ">
              استفد من أقوى العروض في ينبع من خلال تعاوناتي المباشرة مع المتاجر
              والخدمات
            </p>
          </div>

          <div className="flex flex-col gap-[24px] md:gap-[44px] bg-[linear-gradient(234.78deg,#376BB5_26.23%,#203F6B_93.11%)] border border-[#FFFFFF1F] rounded-[24px] py-[40px] px-[32px] md:py-[40px] md:p-[32px] justify-center items-center">
            <h2 className="text-white text-[32px] text-center md:text-right md:text-[40px] font-extrabold">
              وصول فوري لأفضل الخصومات
            </h2>
            <div className="grid grid-cols-4 gap-[24px]">
              <div className="col-span-4 md:col-span-1">
                <div className=" flex flex-col gap-[4px] overflow-hidden relative max-w-99 mx-auto border-b-[0.5px] border-[#EAEBF4] pb-[16px]">
                  <span className="text-[#EAEBF4] text-[16px] font-medium flex items-center gap-[8px]">
                    <FaPercent size={16} color="white" />
                    تخفيضات أسعار
                  </span>
                  <p className="text-[#FAFAFA] text-[14px] font-medium">
                    خصومات حصرية على مختلف المنتجات والخدمات
                  </p>
                </div>
              </div>

              <div className="col-span-4 md:col-span-1">
                <div className=" flex flex-col gap-[4px] overflow-hidden relative max-w-99 mx-auto border-b-[0.5px] border-[#EAEBF4] pb-[16px]">
                  <span className="text-[#EAEBF4] text-[16px] font-medium flex items-center gap-[8px]">
                    <CiGift size={16} color="white" />
                    هدايا مجانية
                  </span>
                  <p className="text-[#FAFAFA] text-[14px] font-medium">
                    هدايا وعروض مجانية مع بعض الطلبات
                  </p>
                </div>
              </div>
              <div className="col-span-4 md:col-span-1">
                <div className=" flex flex-col gap-[4px] overflow-hidden relative max-w-99 mx-auto border-b-[0.5px] border-[#EAEBF4] pb-[16px]">
                  <span className="text-[#EAEBF4] text-[16px] font-medium flex items-center gap-[8px]">
                    <LuBadgePercent size={16} color="white" />
                    عروض موسمية
                  </span>
                  <p className="text-[#FAFAFA] text-[14px] font-medium">
                    عروض خاصة في المواسم والمناسبات
                  </p>
                </div>
              </div>
              <div className="col-span-4 md:col-span-1">
                <div className=" flex flex-col gap-[4px] overflow-hidden relative max-w-99 mx-auto border-b-[0.5px] border-[#EAEBF4] pb-[16px]">
                  <span className="text-[#EAEBF4] text-[16px] font-medium flex items-center gap-[8px]">
                    <MdOutlineDiscount size={16} color="white" />
                    أكواد خصم
                  </span>
                  <p className="text-[#FAFAFA] text-[14px] font-medium">
                    أكواد خصم مباشرة جاهزة للاستخدام
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
