import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import socialImg from "../../public/assets/social-img.jpg";
import { BsPatchCheck } from "react-icons/bs";

const Social = () => {
  return (
    <div className="bg-[#EDF5FF] ">
      <div className="max-w-7xl mx-auto py-25">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="col-span-1 flex flex-col items-start gap-6 m-auto">
            <div className="flex flex-col items-start gap-2">
              <span className="text-[#EAEBF4] min-h-7 min-w-32 rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF,4.33%,#203F6B_100%)] py-2 px-5">
                الحسابات الرسمية
              </span>
              <h2 className="text-[#203F6B] mt-5 text-[40px] font-extrabold">
                تابعني عبر المنصات الرسمية
              </h2>
            </div>
            <p className="text-[#203F6B] text-[16px] font-medium w-[50%]">
              جميع الحسابات الرسمية لمحمد العنيني اختر المنصة المفضلة لديك
            </p>
            <ul className="flex items-center gap-4">
              <li className="text-[#203F6B] text-[20px] font-bold w-10 h-10 rounded-[85px]  border-[#4D96FF80] bg-[#4689E8] flex items-center justify-center  ">
                <a
                  href="https://www.instagram.com/mohammed.alenany/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={14} color="white" />
                </a>
              </li>
              <li className="text-[#203F6B] text-[20px] font-bold w-10 h-10 rounded-[85px]  border-[#4D96FF80] bg-[#4689E8] flex items-center justify-center ">
                <a
                  href="https://www.twitter.com/mohammed_alenany/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={14} color="white" />
                </a>
              </li>

              <li className="text-[#203F6B] text-[20px] font-bold w-10 h-10 rounded-[85px]  border-[#4D96FF80] bg-[#4689E8] flex items-center justify-center ">
                <a
                  href="https://www.twitter.com/mohammed_alenany/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSnapchatGhost size={14} color="white" />
                </a>
              </li>

              <li className="text-[#203F6B] text-[20px] font-bold w-10 h-10 rounded-[85px]  border-[#4D96FF80] bg-[#4689E8] flex items-center justify-center ">
                <a
                  href="https://www.twitter.com/mohammed_alenany/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={14} color="white" />
                </a>
              </li>
              <li className="text-[#203F6B] text-[20px] font-bold w-10 h-10 rounded-[85px]  border-[#4D96FF80] bg-[#4689E8] flex items-center justify-center ">
                <a
                  href="https://www.twitter.com/mohammed_alenany/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={14} color="white" />
                </a>
              </li>
              <li className="text-[#203F6B] text-[20px] font-bold w-10 h-10 rounded-[85px]  border-[#4D96FF80] bg-[#4689E8] flex items-center justify-center ">
                <a
                  href="https://www.twitter.com/mohammed_alenany/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={14} color="white" />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 flex justify-end relative">
            <div className="rounded-3xl overflow-hidden  max-w-99 ">
          <div className="relative">
          <Image
                src={socialImg}
                alt="محمد العنيني"
                width={396}
                height={517}
                className="rounded-[3xl] "
              />
              <div className=" absolute  top-0 left-0 right-0 bottom-0 bg-[linear-gradient(180deg,rgba(47,105,229,0)_0%,#2B3A91_100%)] flex flex-col items-center justify-center p-4 text-center gap-[4px]">
                <p className="text-[#EAEBF4] text-[12px]">محمد العنيني</p>
                <p className="text-[16px] text-[#EAEBF4]">المؤثر السعودي</p>
              </div>
          </div>

         
            </div>

            <div className="z-9999 border border-[#4D96FF80] absolute  top-[10%]  right-[19%] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] flex  items-center justify-center  text-center gap-[6.4px] rounded-[50px] py-[8px] px-[20px]">
                <BsPatchCheck color="white" size={24} />
                <p className="text-[#EAEBF4] text-[12px] font-semibold">
                  جميع الحسابات موثقة ومُعتمدة رسميا
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
