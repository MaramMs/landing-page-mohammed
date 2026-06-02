import { ImCamera } from "react-icons/im";
import { IoHeartSharp } from "react-icons/io5";

const Helpe = () => {
  return (
    <section id="help">
      <div className="max-w-7xl mx-auto py-[60px] md:py-25 px-[16px]">
        <div className="flex flex-col justify-center  items-center gap-[24px] md:gap-[40px]">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#203F6B]">
            مجالات التعاون
          </h2>
          <div className="grid grid-cols-4 gap-x-[16px]  gap-y-[24px]  md:gap-[24px]">
            <div className="col-span-2 md:col-span-1 flex flex-col gap-[16px] bg-[#EDF5FF] rounded-[16px] py-[40px] px-[16px] h-[250px]">
              <span className="w-[32px] md:w-[48px] h-[32px] md:h-[48px] bg-[#203F6B] rounded-[8px] md:rounded-[14px] padding-[12px] flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 5.12109C5.59 5.12109 5.25 4.78109 5.25 4.37109V2.62109C5.25 2.21109 5.59 1.87109 6 1.87109C6.41 1.87109 6.75 2.21109 6.75 2.62109V4.37109C6.75 4.79109 6.41 5.12109 6 5.12109Z"
                    fill="#FAFAFA"
                  />
                  <path
                    d="M10 5.12109C9.59 5.12109 9.25 4.78109 9.25 4.37109V2.62109C9.25 2.21109 9.59 1.87109 10 1.87109C10.41 1.87109 10.75 2.21109 10.75 2.62109V4.37109C10.75 4.79109 10.41 5.12109 10 5.12109Z"
                    fill="#FAFAFA"
                  />
                  <path
                    d="M14 5.12109C13.59 5.12109 13.25 4.78109 13.25 4.37109V2.62109C13.25 2.21109 13.59 1.87109 14 1.87109C14.41 1.87109 14.75 2.21109 14.75 2.62109V4.37109C14.75 4.79109 14.41 5.12109 14 5.12109Z"
                    fill="#FAFAFA"
                  />
                  <path
                    d="M22.25 13.2517C22.25 10.6317 20.22 8.51172 17.66 8.29172C16.92 7.08172 15.6 6.26172 14.08 6.26172H6.71C4.39 6.26172 2.5 8.15172 2.5 10.4717V11.0017H18.29V10.4717C18.29 10.2817 18.26 10.0917 18.23 9.91172C19.68 10.3417 20.75 11.6617 20.75 13.2517C20.75 14.8217 19.71 16.1317 18.29 16.5717V12.0017H2.5V17.7917C2.5 20.1117 4.39 22.0017 6.71 22.0017H14.08C16.28 22.0017 18.07 20.3017 18.25 18.1417C20.53 17.6817 22.25 15.6617 22.25 13.2517Z"
                    fill="#FAFAFA"
                  />
                </svg>

                {/* <PiCoffee color="white"  className="text-[14px] md:text-[24px]"/> */}
              </span>
              <h4 className="text-[#203F6B] font-bold text-[16px] md:text-[24px]">
                المطاعم والكافيهات
              </h4>
              <p className="text-[#525252] text-[12px] md:text-[14px] leading-[20px] line-clamp-3">
                تعتبر المطاعم والكافيهات من أبرز الوجهات الاجتماعية التي تجمع
                بين الأصدقاء والعائلة تقدم هذه الأماكن مجموعة متنوعة{" "}
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col gap-[16px] bg-[#EDF5FF] rounded-[16px] py-[40px] px-[16px] h-[250px]">
              <span className="w-[32px] md:w-[48px] h-[32px] md:h-[48px] bg-[#203F6B] rounded-[8px] md:rounded-[14px] padding-[12px] flex justify-center items-center">
                <IoHeartSharp
                  color="white"
                  className="text-[20px] md:text-[24px]"
                />
              </span>
              <h4 className="text-[#203F6B] font-bold text-[16px] md:text-[24px]">
                الخدمات الطبية
              </h4>
              <p className="text-[#525252] text-[12px] md:text-[14px] leading-[20px] line-clamp-3">
                تعتبر الخدمات الطبية من أهم العوامل التي تساهم في تحسين جودة
                الحياة. تشمل هذه الخدمات الرعاية الصحية، الفحوصات الدورية
              </p>
            </div>
            <div className="col-span-2 md:col-span-1  flex flex-col gap-[16px] bg-[#EDF5FF] rounded-[16px] py-[40px] px-[16px] h-[250px]">
              <span className="w-[32px] md:w-[48px] h-[32px] md:h-[48px] bg-[#203F6B] rounded-[8px] md:rounded-[14px] padding-[12px] flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12.5C2 12.2239 2.22386 12 2.5 12H7.5C7.77614 12 8 12.2239 8 12.5V18C8 19.6569 6.65685 21 5 21C3.34315 21 2 19.6569 2 18V12.5Z"
                    fill="#FAFAFA"
                  />
                  <path
                    d="M3 10.5H7V5.99983C7 5.25644 6.21769 4.77295 5.55279 5.1054L3.55279 6.1054C3.214 6.27479 3 6.62105 3 6.99983V10.5Z"
                    fill="#FAFAFA"
                  />
                  <path
                    d="M11 10.5C11 7.46243 13.4624 5 16.5 5C19.5376 5 22 7.46243 22 10.5C22 13.5376 19.5376 16 16.5 16C13.4624 16 11 13.5376 11 10.5Z"
                    fill="#FAFAFA"
                  />
                  <path
                    d="M15.75 17.7102C15.9964 17.7364 16.2466 17.7499 16.5 17.7499C16.7534 17.7499 17.0036 17.7364 17.25 17.7102V19.4999H19.5C19.9142 19.4999 20.25 19.8357 20.25 20.2499C20.25 20.6641 19.9142 20.9999 19.5 20.9999H13.5C13.0858 20.9999 12.75 20.6641 12.75 20.2499C12.75 19.8357 13.0858 19.4999 13.5 19.4999H15.75V17.7102Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </span>
              <h4 className="text-[#203F6B] font-bold text-[16px] md:text-[24px]">
                العطور والتجميل
              </h4>
              <p className="text-[#525252] text-[12px] md:text-[14px] leading-[20px] line-clamp-3">
                تعتبر العطور والتجميل من العناصر الأساسية التي تضفي لمسة من
                الجمال والسحر على حياتنا. فالعطور تعكس شخصيتنا
              </p>
            </div>
            <div className="col-span-2 md:col-span-1  flex flex-col gap-[16px] bg-[#EDF5FF] rounded-[16px] py-[40px] px-[16px] h-[250px]">
              <span className="w-[32px] md:w-[48px] h-[32px] md:h-[48px] bg-[#203F6B] rounded-[8px] md:rounded-[14px] padding-[12px] flex justify-center items-center">
                <ImCamera
                  color="white"
                  className="text-[16px] md:text-[24px]"
                />
              </span>
              <h4 className="text-[#203F6B] font-bold text-[1px] md:text-[24px]">
                التصوير والمناسبات
              </h4>
              <p className="text-[#525252] text-[12px] md:text-[14px] leading-[20px] line-clamp-3">
                التصوير هو فن توثيق اللحظات الجميلة والمناسبات الخاصة، حيث يمكن
                للكاميرا أن تلتقط المشاعر والذكريات التي تبقى معنا
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col gap-[16px] bg-[#EDF5FF] rounded-[16px] py-[40px] px-[16px] h-[250px]">
              <span className="w-[32px] md:w-[48px] h-[32px] md:h-[48px] bg-[#203F6B] rounded-[8px] md:rounded-[14px] padding-[12px] flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3057 9.59106L19.368 10.8125C19.2274 10.897 19.0613 10.9284 18.8996 10.901C18.7379 10.8737 18.5913 10.7894 18.4863 10.6635L17.5238 9.45464V18.6201C17.5234 18.7791 17.4601 18.9316 17.3477 19.044C17.2352 19.1565 17.0828 19.2198 16.9238 19.2201H7.08377C6.92474 19.2198 6.77232 19.1565 6.65987 19.044C6.54742 18.9316 6.4841 18.7791 6.48377 18.6201V9.44453L5.5124 10.6635C5.40746 10.7891 5.26111 10.8732 5.0997 10.9005C4.93829 10.9278 4.77243 10.8966 4.63198 10.8125L2.69303 9.59106C2.62823 9.55382 2.57283 9.50222 2.53109 9.44023C2.48935 9.37823 2.46239 9.30749 2.45226 9.23344C2.44214 9.1594 2.44912 9.08401 2.47269 9.01309C2.49625 8.94216 2.53576 8.87759 2.58819 8.82432L5.42398 5.67653C5.75729 5.30601 6.16481 5.00972 6.62006 4.80691C7.0753 4.60409 7.56812 4.49928 8.0665 4.49927H9.24755C9.47875 5.03865 9.86313 5.49833 10.3531 5.82137C10.843 6.14441 11.4169 6.3166 12.0038 6.3166C12.5906 6.3166 13.1645 6.14441 13.6545 5.82137C14.1444 5.49833 14.5288 5.03865 14.76 4.49927H15.9398C16.4384 4.49942 16.9315 4.60441 17.387 4.80745C17.8424 5.01048 18.2501 5.30701 18.5836 5.67779L21.413 8.82306C21.4654 8.87661 21.5047 8.94145 21.5281 9.01258C21.5514 9.08371 21.5582 9.15926 21.5478 9.23341C21.5375 9.30756 21.5103 9.37835 21.4683 9.44035C21.4263 9.50235 21.3707 9.5539 21.3057 9.59106Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </span>
              <h4 className="text-[#203F6B] font-bold text-[14px] md:text-[24px]">
                الملابس والأزياء
              </h4>
              <p className="text-[#525252] text-[12px] md:text-[14px] leading-[20px] line-clamp-3">
                تعتبر الملابس والأزياء من أهم وسائل التعبير عن الشخصية والأناقة.
                فهي تعكس ذوق الفرد وتساهم في تعزيز الثقة بالنفس.
              </p>
            </div>
            <div className="col-span-2 md:col-span-1  flex flex-col gap-[16px] bg-[#EDF5FF] rounded-[16px] py-[40px] px-[16px] h-[250px]">
              <span className="w-[32px] md:w-[48px] h-[32px] md:h-[48px] bg-[#203F6B] rounded-[8px] md:rounded-[14px] padding-[12px] flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_336)">
                    <path
                      d="M3.75 10.5117V22.875H12.7819V16.9326C12.7819 15.5519 13.9011 14.4326 15.2818 14.4326C16.6626 14.4326 17.7819 15.5519 17.7819 16.9326V22.875H20.25V10.5117H3.75ZM10.1654 15.5625H7.16537C6.75114 15.5625 6.41537 15.2267 6.41537 14.8125C6.41537 14.3983 6.75114 14.0625 7.16537 14.0625H10.1654C10.5796 14.0625 10.9154 14.3983 10.9154 14.8125C10.9154 15.2267 10.5796 15.5625 10.1654 15.5625Z"
                      fill="#FAFAFA"
                    />
                    <path
                      d="M23.25 23.625H0.75C0.335815 23.625 0 23.2892 0 22.875C0 22.4608 0.335815 22.125 0.75 22.125H23.25C23.6642 22.125 24 22.4608 24 22.875C24 23.2892 23.6642 23.625 23.25 23.625Z"
                      fill="#FAFAFA"
                    />
                    <path
                      d="M3.91848 9.39844C1.66112 9.39844 0.129341 7.10308 0.995634 5.01856L2.92543 0.375H7.92543L7.05373 6.66757C6.83689 8.23288 5.49874 9.39844 3.91848 9.39844Z"
                      fill="#FAFAFA"
                    />
                    <path
                      d="M12.1161 9.39844H11.8839C9.96313 9.39844 8.48508 7.70152 8.74864 5.79893L9.50001 0.375H14.5L15.2514 5.79893C15.5149 7.70152 14.0369 9.39844 12.1161 9.39844Z"
                      fill="#FAFAFA"
                    />
                    <path
                      d="M20.0815 9.39844C18.5013 9.39844 17.1631 8.23288 16.9463 6.66757L16.0746 0.375H21.0746L23.0044 5.01856C23.8707 7.10308 22.3389 9.39844 20.0815 9.39844Z"
                      fill="#FAFAFA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_336">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h4 className="text-[#203F6B] font-bold text-[14px] md:text-[24px]">
                المتاجر الإلكترونية
              </h4>
              <p className="text-[#525252] text-[12px] md:text-[14px] leading-[20px] line-clamp-3">
                تعتبر المتاجر الإلكترونية من أبرز التطورات في عالم التسوق، حيث
                توفر للناس إمكانية شراء المنتجات من منازلهم بسهولة ويسر.
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col gap-[16px] bg-[#EDF5FF] rounded-[16px] py-[40px] px-[16px] h-[250px]">
              <span className="w-[32px] md:w-[48px] h-[32px] md:h-[48px] bg-[#203F6B] rounded-[8px] md:rounded-[14px] padding-[12px] flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_326)">
                    <path
                      d="M16 6L19 10H21C22.11 10 23 10.89 23 12V15H21C21 16.66 19.66 18 18 18C16.34 18 15 16.66 15 15H9C9 16.66 7.66 18 6 18C4.34 18 3 16.66 3 15H1V12C1 10.89 1.89 10 3 10L6 6H16ZM10.5 7.5H6.75L4.86 10H10.5V7.5ZM12 7.5V10H17.14L15.25 7.5H12ZM6 13.5C5.17 13.5 4.5 14.17 4.5 15C4.5 15.83 5.17 16.5 6 16.5C6.83 16.5 7.5 15.83 7.5 15C7.5 14.17 6.83 13.5 6 13.5ZM18 13.5C17.17 13.5 16.5 14.17 16.5 15C16.5 15.83 17.17 16.5 18 16.5C18.83 16.5 19.5 15.83 19.5 15C19.5 14.17 18.83 13.5 18 13.5Z"
                      fill="#FAFAFA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_326">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h4 className="text-[#203F6B] font-bold text-[14px] md:text-[24px]">
                السيارات والتلميع
              </h4>
              <p className="text-[#525252] text-[12px] md:text-[14px] leading-[20px] line-clamp-3">
                تعتبر السيارات من أهم وسائل النقل في حياتنا اليومية، حيث توفر
                لنا الراحة والسرعة. ومع تزايد استخدامها.
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col gap-[16px] bg-[#EDF5FF] rounded-[16px] py-[40px] px-[16px] h-[250px]">
              <span className="w-[32px] md:w-[48px] h-[32px] md:h-[48px] bg-[#203F6B] rounded-[8px] md:rounded-[14px] padding-[12px] flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2_316)">
                    <path
                      d="M11.3196 3H5.08961C3.09961 3 2.09961 4.01 2.09961 6.02V22H7.49961V18.25C7.49961 17.84 7.83961 17.5 8.24961 17.5C8.65961 17.5 8.99961 17.83 8.99961 18.25V22H14.2996V6.02C14.2996 4.01 13.3096 3 11.3196 3ZM10.7496 12.75H5.79961C5.38961 12.75 5.04961 12.41 5.04961 12C5.04961 11.59 5.38961 11.25 5.79961 11.25H10.7496C11.1596 11.25 11.4996 11.59 11.4996 12C11.4996 12.41 11.1596 12.75 10.7496 12.75ZM10.7496 9H5.79961C5.38961 9 5.04961 8.66 5.04961 8.25C5.04961 7.84 5.38961 7.5 5.79961 7.5H10.7496C11.1596 7.5 11.4996 7.84 11.4996 8.25C11.4996 8.66 11.1596 9 10.7496 9Z"
                      fill="#FAFAFA"
                    />
                    <path
                      d="M23 21.2511H20.73V18.2511C21.68 17.9411 22.37 17.0511 22.37 16.0011V14.0011C22.37 12.6911 21.3 11.6211 19.99 11.6211C18.68 11.6211 17.61 12.6911 17.61 14.0011V16.0011C17.61 17.0411 18.29 17.9211 19.22 18.2411V21.2511H1C0.59 21.2511 0.25 21.5911 0.25 22.0011C0.25 22.4111 0.59 22.7511 1 22.7511H19.93C19.95 22.7511 19.96 22.7611 19.98 22.7611C20 22.7611 20.01 22.7511 20.03 22.7511H23C23.41 22.7511 23.75 22.4111 23.75 22.0011C23.75 21.5911 23.41 21.2511 23 21.2511Z"
                      fill="#FAFAFA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_316">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h4 className="text-[#203F6B] font-bold text-[14px] md:text-[24px]">
                الخدمات المحلية
              </h4>
              <p className="text-[#525252] text-[12px] md:text-[14px] leading-[20px] line-clamp-3">
                تعتبر الخدمات المحلية جزءاً أساسياً من حياة المجتمع، حيث تلبي
                احتياجات الأفراد وتساهم في تحسين جودة الحياة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Helpe;
