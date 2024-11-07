import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
    <header className="w-full lg:pl-[94px]">
      <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[234px] lg:h-[226px] flex items-center justify-center bg-white rounded-b-[20px] lg:rounded-b-[28px]">
        <Image src={'/pls-logo.svg'} alt="" height={178} width={117} />
      </div>
    </header>
    
    <main className="w-full h-full flex flex-col items-center lg:flex-row lg:items-start">
      <div className="lg:pl-[25.75rem] lg:pr-[18.125rem] text-center lg:text-left mt-8 lg:mt-0">
        
        <p className="text-[#009D9C] text-[20px] sm:text-[22px] lg:text-[24px] font-bold">
          Dear Patron,
        </p>
        
        <p className="text-[#FDBD28] text-[18px] sm:text-[22px] lg:text-[24px] font-bold pt-6 lg:pt-[60px] lg:pr-[10.05rem]">
          Thank you for visiting PROBA, a division of Pearey Lall & Sons (E.P.) Private Limited, delivering top-tier Human-Machine Interfaces for the Off-Highway Industry.
        </p>
        
        <p className="text-[#FDBD28] text-[20px] sm:text-[24px] lg:text-[32px] font-bold pt-6 lg:pt-[60px]">
          Our new website is coming soon to better serve you. For any enquiry, please contact us at info@plsproba.com.
        </p>
        
        <p className="text-[#FDBD28] text-[18px] sm:text-[22px] lg:text-[24px] font-bold pt-4 lg:pt-[40px]">
          We appreciate your trust and look forward to connecting with you.
        </p>
        
        <div className="pt-6 lg:pt-[60px]">
          <p className="text-[#009D9C] text-[20px] sm:text-[22px] lg:text-[24px] font-bold">
            Best Regards,
          </p>
          <p className="text-[#009D9C] text-[20px] sm:text-[22px] lg:text-[24px] font-bold">
            The PROBA Team
          </p>
        </div>
      </div>
    </main>
  </div>
  
  );
}
