import Image from "next/image";
import videoImage from "../../public/assets/video-img.jpg";
import img1 from "../../public/assets/ve1.jpg";

const Interviews = () => {
  return (
    <section className="bg-[#EDF5FF] py-[100px]">
      <div className="max-w-7xl mx-auto py-2">
        <div className="flex flex-col gap-[40px] ">
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-center gap-2 w-fit min-h-[50px]">
              <span className="text-[#EAEBF4] min-h-7 min-w-32 rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] py-2 px-5 text-center">
                التغطيات الإعلامية
              </span>
              <div className="w-10 h-[2px] bg-[linear-gradient(90deg,#4D96FF,#203F6B)]  rounded-full" />
            </div>
            <h2 className="text-[#203F6B]  text-[40px] font-extrabold min-h-[75px]">
              المقابلات والتغطيات الإعلامية
            </h2>
            <p className="text-[#203F6B] text-[16px] font-medium ">
              أبرز التغطيات الإعلامية والمقابلات وظهوري في وسائل الإعلام
            </p>
          </div>

          <div className="rounded-tl-[20px] rounded-tr-[20px] overflow-hidden ">
            <div className=" relative rounded-tl-[20px] rounded-tr-[20px]">
              <Image
                src={videoImage}
                className="w-full h-[523px] object-cover rounded-tl-[20px] rounded-tr-[20px]"
                alt=""
              />
              <div className=" absolute top-0 left-0 right-0 bottom-0 opacity-80 bg-[#00000075]"></div>
            </div>
            <div className="bg-[#FFFFFF] flex flex-col gap-[16px]  p-[24px] rounded-bl-[20px] rounded-br-[20px] ">
              <div className="flex justify-between ">
                <span className="text-[#EAEBF4] min-h-[38px] min-w-[74px] rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] py-[8px] px-[20px] text-center">
                  مقابلة
                </span>

                <span> 2025</span>
              </div>
              <h2 className="text-[#203F6B]  text-[18px] font-bold ">
                لقاء مع محمد العنيني حول تجربته كمؤثر في ينبع
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[24px]">
            <div className="flex flex-col bg-[#FFFFFF] rounded-[20px] overflow-hidden">
              <Image
                src={img1}
                alt=""
                className="h-[200px] rounded-tl-[20px] rounded-tr-[20px] object-cover"
              />

              <div className="flex flex-col gap-[16px]  p-[24px] rounded-bl-[20px] rounded-br-[20px] ">
                <div className="flex justify-between ">
                  <span className="text-[#EAEBF4] min-h-[38px] min-w-[74px] rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] py-[8px] px-[20px] text-center">
                    مقابلة
                  </span>

                  <span> 2025</span>
                </div>
                <h2 className="text-[#203F6B]  text-[18px] font-bold ">
                  لقاء مع محمد العنيني حول تجربته كمؤثر في ينبع
                </h2>
              </div>
            </div>
            <div className="flex flex-col bg-[#FFFFFF] rounded-[20px] overflow-hidden">
              <Image
                src={img1}
                alt=""
                className="h-[200px] rounded-tl-[20px] rounded-tr-[20px] object-cover"
              />

              <div className="flex flex-col gap-[16px]  p-[24px] rounded-bl-[20px] rounded-br-[20px] ">
                <div className="flex justify-between ">
                  <span className="text-[#EAEBF4] min-h-[38px] min-w-[74px] rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] py-[8px] px-[20px] text-center">
                    مقابلة
                  </span>

                  <span> 2025</span>
                </div>
                <h2 className="text-[#203F6B]  text-[18px] font-bold ">
                  لقاء مع محمد العنيني حول تجربته كمؤثر في ينبع
                </h2>
              </div>
            </div>
            <div className="flex flex-col bg-[#FFFFFF] rounded-[20px] overflow-hidden">
              <Image
                src={img1}
                alt=""
                className="h-[200px] rounded-tl-[20px] rounded-tr-[20px] object-cover"
              />

              <div className="flex flex-col gap-[16px]  p-[24px] rounded-bl-[20px] rounded-br-[20px] ">
                <div className="flex justify-between ">
                  <span className="text-[#EAEBF4] min-h-[38px] min-w-[74px] rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] py-[8px] px-[20px] text-center">
                    مقابلة
                  </span>

                  <span> 2025</span>
                </div>
                <h2 className="text-[#203F6B]  text-[18px] font-bold ">
                  لقاء مع محمد العنيني حول تجربته كمؤثر في ينبع
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interviews;
