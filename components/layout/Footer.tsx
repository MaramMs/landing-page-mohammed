export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(138.32deg,#4D96FF_-8.54%,#203F6B_71.23%)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-20">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col  gap-3.5 mb-4">
           
              
                <p className="font-bold text-lg leading-tight">العنيني | aloniniyb</p>
                  <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              الصفحة الرسمية للمؤثر السعودي محمد العنيني صانع محتوى ومختص بعروض ينبع الحصرية.
            </p>
            
            </div>
            
          
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-4">الاقسام</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              {[ "التوثيق الرسمي", "التغطيات الاعلامية", "خصم العنيني", "الحسابات الرسمية"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-accent transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-4">التواصل</h4>
            <ul className="space-y-3 text-blue-200 text-sm">
             {[ "العروض والخصومات", "للاعلانات", "للتعاون والشركات"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-accent transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

   
        <div className="border-t border-[#EDF5FF] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm ">
          <p className='text-[#FFFFFF66] text-[12px]'>© {new Date().getFullYear()} محمد العنيني – جميع الحقوق محفوظة</p>
            <a className='text-[#EDF5FF] text-[12px] font-bold' href="#">aloniniyb.com</a>
          </div>
      </div>
    </footer>
  );  
}
