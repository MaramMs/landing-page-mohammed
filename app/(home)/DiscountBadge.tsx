const DiscountBadge = () => {
  return (
    <div
      className="pointer-events-none absolute left-[22%] md:top-0 md:left-[6%] z-0  -translate-x-[38%] -translate-y-[32%] block"
      aria-hidden
    >
      <div className="relative w-[124px] h-[126px] md:size-[514px]">
        <div className="absolute inset-0 rounded-full bg-[#EDF5FF]/60" />

        <svg
          className="absolute inset-0 size-full"
          viewBox="0 0 514 514"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="257"
            cy="257"
            r="248"
            stroke="#203F6B"
            strokeOpacity="0.18"
            strokeWidth="2"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center pt-6">
          <div
            className="flex items-end justify-center gap-1 leading-none"
            dir="ltr"
          >
            <span className="-rotate-6 text-[88px] font-black leading-[0.85] text-[#4D96FF]">
              خصم
            </span>
            <span className="mb-1 text-[108px] font-black leading-none text-[#203F6B]">
              %
            </span>
          </div>
          <span className="-mt-2 text-[72px] font-black leading-none tracking-tight text-[#203F6B]">
            العنيني
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiscountBadge;
