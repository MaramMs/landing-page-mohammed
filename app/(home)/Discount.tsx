import { CiGift } from "react-icons/ci";
import { FaPercent } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";
import { MdOutlineDiscount } from "react-icons/md";
import DiscountBadge from "./DiscountBadge";

const Discount = () => {
  return (
    <section id="discount" className="relative overflow-hidden bg-[#FAFAFA]">
      <DiscountBadge />
      <div className="relative z-10 mx-auto max-w-7xl py-25">
        <div className="flex flex-col gap-[43px]">
          <div className="flex flex-col items-start gap-[8px]">
            <div className="flex flex-col items-center gap-2 w-fit">
  <span className="text-[#EAEBF4] min-h-7 min-w-32 rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] py-2 px-5 text-center">
    خصم العنيني
  </span>
  <div className="w-10 h-[2px] bg-[linear-gradient(90deg,#4D96FF,#203F6B)]  rounded-full" />
</div>
            <h2 className="text-[#203F6B]  text-[40px] font-extrabold">
              عروض وخصومات حصرية للمتابعين
            </h2>
            <p className="text-[#203F6B] text-[16px] font-medium ">
              استفد من أقوى العروض في ينبع من خلال تعاوناتي المباشرة مع المتاجر
              والخدمات
            </p>
          </div>

          <div className="flex flex-col gap-[44px] bg-[linear-gradient(234.78deg,#376BB5_26.23%,#203F6B_93.11%)] border border-[#FFFFFF1F] rounded-[24px] p-[32px] justify-center items-center">
            <h2 className="text-white text-[40px] font-extrabold">
              وصول فوري لأفضل الخصومات
            </h2>
            <div className="grid grid-cols-4 gap-[24px]">
              <div className="col-span-1">
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

              <div className="col-span-1">
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
              <div className="col-span-1">
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
              <div className="col-span-1">
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
