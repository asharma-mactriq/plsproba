import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen ">
      <header className="w-full pl-[94px]">
        <div className="w-[234px] h-[226px] flex items-center justify-center bg-[#fff] rounded-b-[28px]" >
        <Image src={'/pls-logo.svg'} alt="" height={178} width={117} />
        </div>
      </header>
      <main className="w-full h-full flex items-center justify-start">
        <div className="pl-[25.75rem]">
          <p className="text-[#009D9C] text-[24px] font-bold">Dear Patron,</p>
          <p className="text-[#FDBD28] text-[24px] font-bold pt-[60px]">Thank you for visiting PROBA, a division of Pearey Lall & Sons (E.P.) Private Limited, delivering top-tier Human-Machine Interfaces for the Off-Highway Industry.</p>
          <p className="text-[#FDBD28] text-[32px] font-bold pt-[60px]">Our new website is coming soon to better serve you. For any enquiry, please contact us at info@plsproba.com.</p>
          <p className="text-[#FDBD28] text-[24px] font-bold pt-[40px]">We appreciate your trust and look forward to connecting with you.</p>
          <div className="pt-[60px]">
          <p className="text-[#009D9C] text-[24px] font-bold">Best Regards,</p>
          <p className="text-[#009D9C] text-[24px] font-bold">The PROBA Team</p>
          </div>
        </div>
      </main>
   
    </div>
  );
}
