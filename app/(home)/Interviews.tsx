import Image from "next/image";
import videoImage from "../../public/assets/video-img.jpg";
import img1 from "../../public/assets/ve1.jpg";
import img2 from '../../public/assets/cover.jpg';
import img3 from '../../public/assets/blog.jpg'
import { FaPlay } from "react-icons/fa";

const Interviews = () => {
  return (
    <section id='interview' className="bg-[#EDF5FF] py-[60px] px-[16px] md:py-[100px]">
      <div className="max-w-7xl mx-auto py-2">
        <div className="flex flex-col gap-[40px] ">
          <div className="flex flex-col items-start gap-[16px]">
            <div className="relative flex flex-col items-center gap-2 w-fit ">
              <span className="text-[#EAEBF4] min-h-7 min-w-32 rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] py-2 px-5 text-center">
                التغطيات الإعلامية
              </span>
              <div className="absolute -bottom-3 right-0 w-[56px] h-[2px] bg-gradient-to-r from-[#F9FAFB] to-[#4D96FF]" />
            </div>
            <h2 className="text-[#203F6B]  text-[32px] md:text-[40px] font-extrabold md:min-h-[75px] h-full">
              المقابلات والتغطيات الإعلامية
            </h2>
            <p className="text-[#203F6B] text-[16px] font-medium ">
              أبرز التغطيات الإعلامية والمقابلات وظهوري في وسائل الإعلام
            </p>
          </div>

          <div className=" rounded-tl-[20px] rounded-tr-[20px] overflow-hidden ">
            <div className="h-[190px] md:h-auto relative rounded-tl-[20px] rounded-tr-[20px]">
              <Image
                src={videoImage}
                className="w-full h-[190px] md:h-[523px] object-cover rounded-tl-[20px] rounded-tr-[20px]"
                alt=""
              />

              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000075] opacity-80 z-10"></div>

              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[43px] h-[43px] rounded-full bg-white/30 backdrop-blur-sm flex justify-center items-center z-20 transition-transform hover:scale-110">
                <FaPlay size={15} className=" ml-0.5" color="#FAFAFA" />
              </div>
            </div>
            <div className="bg-[#FFFFFF] flex flex-col gap-[16px] p-[16px] md:p-[24px] rounded-bl-[20px] rounded-br-[20px] ">
              <div className="flex justify-between ">
                <span className="text-[#EAEBF4] min-h-[38px] min-w-[74px] rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] py-[8px] px-[20px] text-center">
                  مقابلة
                </span>

                <span> 2025</span>
              </div>
              <h2 className="text-[#203F6B] text-[14px] md:text-[18px] font-bold ">
                لقاء مع محمد العنيني حول تجربته كمؤثر في ينبع
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[24px]">
            <div className="col-span-3 md:col-span-1 flex flex-col bg-[#FFFFFF] rounded-[20px] overflow-hidden">
              <Image
                src={img1}
                alt=""
                className="h-[200px] rounded-tl-[20px] rounded-tr-[20px] object-cover"
              />

              <div className="flex flex-col gap-[16px] p-[16px] md:p-[24px] rounded-bl-[20px] rounded-br-[20px] ">
                <div className="flex justify-between ">
                  <span className="text-[#EAEBF4] min-h-[38px] min-w-[74px] rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] py-[8px] px-[20px] text-center">
                  ظهور إعلامي
                  </span>

                  <span className="text-[16px] text-[#203F6B]"> 2024</span>
                </div>
                <h2 className="text-[#203F6B] text-[14px] md:text-[18px] font-bold ">
                تغطية إطلاق مبادرة خصم العنيني في محلات ينبع
                </h2>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 flex flex-col bg-[#FFFFFF] rounded-[20px] overflow-hidden">
              <Image
                src={img2}
                alt=""
                className="h-[200px] rounded-tl-[20px] rounded-tr-[20px] object-cover"
              />

              <div className="flex flex-col gap-[16px]  p-[24px] rounded-bl-[20px] rounded-br-[20px] ">
                <div className="flex justify-between ">
                  <span className="text-[#EAEBF4] min-h-[38px] min-w-[74px] rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] py-[8px] px-[20px] text-center">
                  تغطية صحفية
                  </span>

                  <span> 2024</span>
                </div>
                <h2 className="text-[#203F6B]  text-[18px] font-bold ">
                العنيني .. نموذج صانع محتوى يُفيد متابعيه بعروض حصرية
                </h2>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 flex flex-col bg-[#FFFFFF] rounded-[20px] overflow-hidden">
              <Image
                src={img3}
                alt=""
                className="h-[200px] rounded-tl-[20px] rounded-tr-[20px] object-cover"
              />

              <div className="flex flex-col gap-[16px]  p-[24px] rounded-bl-[20px] rounded-br-[20px] ">
                <div className="flex justify-between ">
                  <span className="text-[#EAEBF4] min-h-[38px] min-w-[74px] rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] py-[8px] px-[20px] text-center">
                  مقالة
                  </span>

                  <span> 2024</span>
                </div>
                <h2 className="text-[#203F6B]  text-[18px] font-bold ">
                محمد العنيني: عقد من التأثير والإعلام الهادف
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
