import Link from "next/link"
import { IoShieldOutline } from "react-icons/io5"

const OfficalDocumentation =() =>{
    return (
<section id='offical' className="px-[16px] py-[60px]">
<div className="max-w-7xl mx-auto py-2">
    <div className="flex flex-col justify-center items-center gap-[40px]">
    <div className="relative flex flex-col items-center gap-2 w-fit ">
    <span className="text-[#EAEBF4] min-h-7 min-w-32 rounded-[50px] font-semibold text-[12px] border border-[#4D96FF80] bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] py-2 px-5 text-center">
    التوثيق الرسمي
              </span>
              <div className="absolute -bottom-3 right-0 w-[56px] h-[2px] bg-gradient-to-r from-[#F9FAFB] to-[#4D96FF]" />
    </div>


 

              <div className="bg-[linear-gradient(90deg,#4D96FF_4.33%,#203F6B_100%)] border border-[#2B3A9140] rounded-[24px] py-[40px] px-[16px] md:p-[64px] flex flex-col gap-[20px] justify-center items-center">
              <span className="w-[70px] h-[70px] bg-[#4D96FF66] rounded-[20px] border border-[#FFFFFF1A] flex justify-center items-center">
              <IoShieldOutline size={32} color='#FFFFFF' />
              </span>
              <h2 className="text-white font-extrabold text-[20px] md:text-[40px]">
              الهوية الرسمية الموثّقة

              </h2>

                <p className="text-[#FAFAFA] text-[16px] font-medium w-[94%] leading-[30px] md:w-[60%] text-center">
                جميع الحسابات والروابط الرسمية الخاصة
                
                 بمحمد العنيني
                 <br/>
                موثّقة داخل هذا الموقع فقط. 
                </p>

                <Link href='' className="bg-[#FAFAFA] border broder-[#4D96FF80] py-[8px] px-[20px] rounded-[50px] text-[12px] font-medium text-[#203F6B]">
                aloniniyb.com
                </Link>

              </div>
    </div>
    </div>
    </section>
    )
}
export default OfficalDocumentation