import { ReactNode } from "react";
import { FaUser } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { TbRosetteDiscountFilled } from "react-icons/tb";

const STEPS = [
  {
    number: 1,
    icon: <FaUser color="#4D96FF" className="text-[32px] md:text-[50px]" />, 
    title: "المتابعة",
    description: 'من خلال متابعة حسابات "العنيني" يمكنك مشاهدة احدث العروض و التخفيضات',
    variant: "filled" as const,
    curve: (
      <svg width="169" height="36" viewBox="0 0 169 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.500057 1.91673C69.2691 48.754 106.119 44.0774 168.366 0.500134" stroke="#203F6B" strokeLinecap="round" strokeDasharray="6 6"/>
    </svg>
    
    ),
  },
  {
    number: 2,
    icon: <TbRosetteDiscountFilled color="#4D96FF" className="text-[32px] md:text-[50px]" />,
    title: "كود الخصم",
    description: 'استخدم كود الخصم الخاص ب "العنيني" عند الطلب والشراء',
    variant: "dashed" as const,
    curve: (
      <svg width="169" height="36" viewBox="0 0 169 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.500057 33.6963C69.2691 -13.1409 106.119 -8.46436 168.366 35.1129" stroke="#203F6B" strokeLinecap="round" strokeDasharray="6 6"/>
    </svg>
    ),
  },
  {
    number: 3,
    icon: <MdElectricBolt color="#4D96FF" className="text-[32px] md:text-[50px] rotate-148" />,
    title: "التخفيض",
    description: "يمكنك الحصول على التخفيض مباشرة من المتجر او مقدم الخدمة",
    variant: "dashed" as const,
    curve: null, 
  },
];

const StepIcon = ({
  number,
  icon,
  variant,
}: {
  number: number;
  icon: ReactNode;
  variant: "filled" | "dashed";
}) => (
  <div  className="flex justify-center relative  w-[60px] h-[60px] md:size-[100px] shrink-0 ">
    <span className="absolute -top-1 -right-1 z-10 flex size-[25px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] text-[12px] font-semibold text-[#FAFAFA]">
      {number}
    </span>
    <div
      className={[
        "flex w-[60px] h-[60px] md:size-full items-center justify-center rounded-full bg-[#FAFAFA]",
        variant === "filled"
          ? "shadow-[-2px_2px_10.8px_0px_#2626261A]"
          : "border border-dashed border-[#4D96FF80] bg-transparent",
      ].join(" ")}
    >
      {icon}
    </div>
  </div>
);

const Offers = () => {
  return (
    <section   id="offer" className="bg-[#EDF5FF]">
      <div className="mx-auto max-w-7xl px-[16px] md:px-0 py-[60px] md:py-25">
        <div className="mx-auto flex max-w-[960px] flex-col items-center gap-[40px] md:gap-10">
          
          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="relative flex flex-col items-center gap-2">
              <span className="min-h-7 min-w-32 rounded-[50px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] px-5 py-2 text-center text-[12px] font-semibold text-[#EAEBF4]">
                العروض
              </span>
              <div className="absolute -bottom-3 right-0 w-[56px] h-[2px] bg-gradient-to-r from-[#F9FAFB] to-[#4D96FF]" />
            </div>
            <h2 className="text-[32px] md:text-[40px] font-extrabold leading-[68px] md:leading-tight text-[#203F6B]">
              كيف يستفيد المتابع
            </h2>
            <p className="max-w-[520px] text-[16px] font-medium text-[#203F6B]/80">
              يمكن للمتابع الاستفادة من الخصومات بسهولة عبر
            </p>
          </div>

          {/* Stepper */}
          <div className="relative w-full">
    
                    {/* Cleaned up grid gap classes */}
            <div className="relative z-10 grid grid-cols-1 gap-[24px] md:grid-cols-5 md:gap-8 justify-center ">
              {STEPS.map((step) => (
            <>
                <div
                  key={step.number}
                  className="flex flex-col items-center gap-[24px] md:gap-8 text-center"
                >
                  <StepIcon
                    number={step.number}
                    icon={step.icon}
                    variant={step.variant}
                  />
                  <div className="flex flex-col items-center gap-4">
                    <h4 className="text-[24px] font-bold text-[#203F6B]">
                      {step.title}
                    </h4>
                    <p className="max-w-[308px] md:max-w-[280px] text-[14px] leading-[1.6] font-medium text-[#525252]">
                      {step.description}
                    </p>
                  </div>

                
                </div>

{step.curve && (
  <div className=" flex items-center justify-center">
     {step.curve}
  </div>
)}
            </>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;