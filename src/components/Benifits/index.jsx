import { FaTruckMoving } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";
import BenifitCard from "../Cards/BenifitCard";

const benifits = [
  {
    id: 1,
    title: "Free Shipping",
    content: "Free shipping on all domestic orders and international orders",
    icon: <FaTruckMoving className="!h-5 !w-5" />,
  },
  {
    id: 2,
    title: "Easy Return",
    content: "Free & Fast returns on all orders",
    icon: <RxUpdate className="!h-5 !w-5" />,
  },
  {
    id: 3,
    title: "Back Guarantee",
    content: "Money back guarantee within 1 week into your bank account",
    icon: <RiMoneyDollarCircleFill className="!h-5 !w-5" />,
  },
  {
    id: 4,
    title: "Secure Payment",
    content: "Pay securely through our prominent payment gateway",
    icon: <RiSecurePaymentFill className="!h-5 !w-5" />,
  },
];

const Benifits = () => {
  return (
    <div className="w-full bg-slate-50 border py-20">
      <h1 className="text-center font-bold font-Poppins text-5xl mb-6">
        Our Offerings
      </h1>
      <div className="grid grid-cols-2 gap-4 max-w-[1024px] mx-auto">
        {benifits.map((b) => (
          <BenifitCard benifit={b} key={b.id} />
        ))}
      </div>
    </div>
  );
};

export default Benifits;
