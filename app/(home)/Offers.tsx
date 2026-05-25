import { ReactNode } from "react";
import { FaUser } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";
import { MdElectricBolt } from "react-icons/md";

const STEPS = [
  {
    number: 1,
    icon: <FaUser color="#4D96FF" className="text-[32px] md:50px" />,
    title: "المتابعة",
    description: 'من خلال متابعة حسابات "العنيني" يمكنك مشاهدة احدث العروض و التخفيضات',
    variant: "filled" as const,
    curve: "border-l-[#203F6B] border-b-[#203F6B] rounded-bl-full  rotate-[30deg] ",

  },
  {
    number: 2,
    icon: <LuBadgePercent color="#4D96FF" className="text-[32px] md:50px" />,
    title: "كود الخصم",
    description: 'استخدم كود الخصم الخاص ب "العنيني" عند الطلب والشراء',
    variant: "dashed" as const,
    curve: "border-r-[#203F6B] border-b-[#203F6B] rounded-br-full  -rotate-20",
  },
  {
    number: 3,
    icon: <MdElectricBolt color="#4D96FF" className="text-[32px] md:50px" />,
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
  <div className="flex justify-center relative mx-auto w-[60px] h-[60px] md:size-[100px] shrink-0">
    <span className="absolute -top-1 -right-1 z-10 flex size-[25px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] text-[12px] font-semibold text-[#FAFAFA]">
      {number}
    </span>
    <div
      className={[
        "flex w-[60px] h-[60px] md:size-full items-center justify-center rounded-full bg-[#FAFAFA]",
        variant === "filled"
          ? "shadow-[-2px_2px_10.8px_0px_#2626261A]"
          : "border border-dashed border-[#4D96FF80]",
      ].join(" ")}
    >
      {icon}
    </div>
  </div>
);

const Offers = () => {
  return (
    <section className="bg-[#EDF5FF]">
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

         {/* Single continuous wave — desktop only */}
         <svg
              className="pointer-events-none absolute top-[50px] right-[11%] left-[11%] z-0 hidden h-[56px] w-[78%] -translate-y-1/2 md:block"
              viewBox="0 0 600 56"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M 60 28 C 140 54, 160 54, 300 28 C 440 2, 460 2, 540 28"
                stroke="#203F6B"
                strokeOpacity="0.4"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
            </svg>
            <div className="relative z-10 grid grid-cols-1 gap-0 md:grid-cols-3 gap-[24px] md:gap-8">
              {STEPS.map((step) => (
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

                  {step.curve && (
                    <div
                      className={`md:hidden  w-[69px] h-[90px] border-[1px] border-dashed border-transparent ${step.curve}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;