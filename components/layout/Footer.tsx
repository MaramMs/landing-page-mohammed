import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(138.32deg,#4D96FF_-8.54%,#203F6B_71.23%)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-4 gap-[40px] md:gap-20">
          {/* Brand */}
          <div className="col-span-4 md:col-span-2">
            <div className="flex flex-col gap-[14px] md:gap-3.5 mb-4">
           
              
                <p className="font-bold text-lg leading-tight">العنيني | aloniniyb</p>
                  <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              الصفحة الرسمية للمؤثر السعودي محمد العنيني صانع محتوى ومختص بعروض ينبع الحصرية.
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
            
          
          </div>

          {/* Links */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-4 text-[14px]">الاقسام</h4>
            <ul className="flex flex-col gap-[16px] text-blue-200 text-sm">
              {[ "التوثيق الرسمي", "التغطيات الاعلامية", "خصم العنيني", "الحسابات الرسمية"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-accent transition-colors text-[#FAFAFA] text-[16px]">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-4 text-[14px]">التواصل</h4>
            <ul className="flex flex-col gap-[16px] text-blue-200 text-sm">
             {[ "العروض والخصومات", "للاعلانات", "للتعاون والشركات"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-accent transition-colors text-[16px] text-[#FAFAFA]">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

   
        <div className="border-t border-[#EDF5FF] mt-12 pt-6 flex flex-row items-center justify-between gap-4 text-sm ">
          <p className='text-[#FFFFFF66] text-[12px]'>© {new Date().getFullYear()} محمد العنيني – جميع الحقوق محفوظة</p>
            <a className='text-[#EDF5FF] text-[12px] font-bold' href="#">aloniniyb.com</a>
          </div>
      </div>
    </footer>
  );  
}
