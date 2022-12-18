const BenifitCard = ({ benifit }) => {
  return (
    <div className="p-10 hover:border-lime-400 font-Poppins bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300  rounded-lg border flex items-start space-x-2">
      <div className="bg-gradient-to-tr from-lime-500 to-green-500 rounded-full p-2 text-white">
        {benifit.icon}
      </div>
      <div className="flex flex-col justify-start items-start">
        <h3 className="font-bold text-xl text-gray-700">{benifit.title}</h3>
        <p className="text-sm">{benifit.content}</p>
      </div>
    </div>
  );
};

export default BenifitCard;
