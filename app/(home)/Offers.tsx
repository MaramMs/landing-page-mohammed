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
const CurveTop = () => (
<svg width="169" height="100" viewBox="0 0 169 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.500057 49.9434C69.2691 3.10615 106.119 7.78272 168.366 51.36" stroke="#203F6B" stroke-linecap="round" stroke-dasharray="6 6"/>
</svg>


);

const CurveBottom = () => (
  <svg width="169" height="100" viewBox="0 0 169 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.500057 50.0566C69.2691 96.8938 106.119 92.2173 168.366 48.64" stroke="#203F6B" stroke-linecap="round" stroke-dasharray="6 6"/>
</svg>
);

const CurveRight = () => (
<svg width="53" height="98" viewBox="0 0 53 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4538 96.6305C-7.35732 57.2493 -4.68022 36.1465 20.265 0.500083" stroke="#203F6B" stroke-linecap="round" stroke-dasharray="6 6"/>
</svg>

);


const CurveLeft = () => (
<svg width="21" height="98" viewBox="0 0 21 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.31132 96.6305C28.1225 57.2493 25.4454 36.1465 0.500093 0.500083" stroke="#203F6B" stroke-linecap="round" stroke-dasharray="6 6"/>
</svg>


);

<div className="flex flex-col items-center md:hidden">
  {STEPS.map((step, index) => (
    <div
      key={step.number}
      className="flex flex-col items-center text-center"
    >
      <StepIcon
        number={step.number}
        icon={step.icon}
        variant={step.variant}
      />

      <h4 className="mt-6 text-[32px] font-bold text-[#203F6B]">
        {step.title}
      </h4>

      <p className="mt-3 max-w-[260px] text-[14px] leading-[22px] text-[#525252]">
        {step.description}
      </p>

      {index < STEPS.length - 1 && (
        <div className="my-8">
          {index % 2 === 0 ? (
            <CurveRight />
          ) : (
            <CurveLeft />
          )}
        </div>
      )}
    </div>
  ))}
</div>



const Offers = () => {
  return (
    <section   id="offer" className="bg-[#EDF5FF]">
      <div className="mx-auto max-w-7xl px-[16px] md:px-0 py-[60px] md:py-25">
        <div className="mx-auto flex max-w-[960px] flex-col items-center gap-[40px] md:gap-10">
          
          {/* Header */}
          <div className="flex flex-col items-center gap-[16px] text-center">
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
          <div className="relative w-full max-w-[960px]">
  {/* Mobile */}
  <div className="flex flex-col items-center md:hidden">
  {STEPS.map((step, index) => (
    <div
      key={step.number}
      className="flex flex-col items-center text-center"
    >
      <StepIcon
        number={step.number}
        icon={step.icon}
        variant={step.variant}
      />

      <h4 className="mt-6 text-[32px] font-bold text-[#203F6B]">
        {step.title}
      </h4>

      <p className="mt-3 max-w-[260px] text-[14px] leading-[22px] text-[#525252]">
        {step.description}
      </p>

      {index < STEPS.length - 1 && (
        <div className="my-8">
          {index % 2 === 0 ? (
            <CurveRight />
          ) : (
            <CurveLeft />
          )}
        </div>
      )}
    </div>
  ))}
</div>

  {/* Desktop */}
  <div className="hidden md:block relative">
  <div className="absolute top-[2px] left-[32%] -translate-x-1/2">
    <CurveTop />
  </div>

  <div className="absolute top-[35px] right-[33%] translate-x-1/2">
    <CurveBottom />
  </div>

  <div className="grid grid-cols-3 gap-[80px]">
    {STEPS.map((step) => (
      <div
        key={step.number}
        className="flex flex-col items-center text-center"
      >
        <StepIcon
          number={step.number}
          icon={step.icon}
          variant={step.variant}
        />

        <h4 className="mt-6 text-[24px] font-bold text-[#203F6B]">
          {step.title}
        </h4>

        <p className="mt-4 text-[14px] leading-[24px] text-[#525252] max-w-[250px]">
          {step.description}
        </p>
      </div>
    ))}
  </div>
</div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Offers;