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
import { HiCheckBadge } from "react-icons/hi2";

const Social = () => {
  return (
    <div id="social" className="bg-[#EDF5FF] ">
      <div className="max-w-7xl mx-auto py-[60px] px-[16px] md:py-25">
        <div className="grid md:grid-cols-2 gap-10">
          <div className=" order-2 md:order-1 col-span-1 flex flex-col items-start gap-6 m-auto">
            <div className="flex flex-col items-start gap-2">
            <div className="relative flex flex-col items-center gap-2">
              <span className="min-h-7 min-w-32 rounded-[50px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] px-5 py-2 text-center text-[12px] font-semibold text-[#EAEBF4]">
                الحسابات الرسمية
              </span>
              <div className="absolute -bottom-3 right-0 w-[56px] h-[2px] bg-gradient-to-r from-[#F9FAFB] to-[#4D96FF]" />
            </div>
              <h2 className="text-[#203F6B] mt-2 md:mt-5 text-[32px] md:text-[40px] font-extrabold">
                تابعني عبر المنصات الرسمية
              </h2>
            </div>
            <p className="text-[#203F6B] text-[16px] font-medium md:w-[52%]">
              جميع الحسابات الرسمية لمحمد العنيني اختر المنصة المفضلة لديك
            </p>
            <ul className="flex items-center gap-4">
              <li className="text-[#203F6B] text-[20px] font-bold w-10 h-10 rounded-[85px]  border-[#4D96FF80] bg-[#4689E8] flex items-center justify-center  ">
                <a
                  href="https://www.instagram.com/aloniniyb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={14} color="white" />
                </a>
              </li>
              <li className="text-[#203F6B] text-[20px] font-bold w-10 h-10 rounded-[85px]  border-[#4D96FF80] bg-[#4689E8] flex items-center justify-center ">
                <a
                  href="https://x.com/aloniniyb?s=21&t=15mbFQHY5hIlTxsZoViGmw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={14} color="white" />
                </a>
              </li>

              <li className="text-[#203F6B] text-[20px] font-bold w-10 h-10 rounded-[85px]  border-[#4D96FF80] bg-[#4689E8] flex items-center justify-center ">
                <a
                  href="https://www.snapchat.com/@aloniniyb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSnapchatGhost size={14} color="white" />
                </a>
              </li>
              <li className="text-[#203F6B] text-[20px] font-bold w-10 h-10 rounded-[85px]  border-[#4D96FF80] bg-[#4689E8] flex items-center justify-center ">
                <a
                  href="https://www.youtube.com/@aloniniyb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={14} color="white" />
                </a>
              </li>

              <li className="text-[#203F6B] text-[20px] font-bold w-10 h-10 rounded-[85px]  border-[#4D96FF80] bg-[#4689E8] flex items-center justify-center ">
                <a
                  href="https://www.tiktok.com/@aloniniyb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={14} color="white" />
                </a>
              </li>
              <li className="text-[#203F6B] text-[20px] font-bold w-10 h-10 rounded-[85px]  border-[#4D96FF80] bg-[#4689E8] flex items-center justify-center ">
                <a
                  href="https://www.facebook.com/aloniniyb/?_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={14} color="white" />
                </a>
              </li>
         
            </ul>
          </div>

          <div className="order-1 md:order-2 col-span-1 flex justify-center md:justify-end relative">
            <div className="rounded-3xl overflow-hidden  max-w-99 ">
          <div className="relative h-[325px] md:h-[517px]">
          <Image
                src={socialImg}
                alt="محمد العنيني"
                width={396}
                height={517}
                className="rounded-[3xl] w-[248px] h-[325px] md:w-[396px] md:h-[517px] object-cover "
              />
              <div className=" absolute  top-0 left-0 right-0 bottom-0 bg-[linear-gradient(180deg,rgba(47,105,229,0)_0%,#2B3A91_138%)] flex flex-col items-center justify-center p-4 text-center gap-[4px]">
                <p className="text-[#EAEBF4] text-[12px]">محمد العنيني</p>
                <p className="text-[16px] text-[#EAEBF4]">المؤثر السعودي</p>
              </div>
          </div>

         
            </div>

            <div className="z-22 border border-[#4D96FF80] absolute  top-[6%] md:top-[10%] right-[-2%]  md:right-[19%] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] flex  items-center justify-center  text-center gap-[6.4px] rounded-[50px] py-[8px] px-[20px]">
            <HiCheckBadge color='#FFFFFF' size={19} />
            <p className="text-[#EAEBF4] text-[10px] md:text-[12px] font-semibold">
            جميع الحسابات موثقة ومُعتمدة 
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
