const CardMedium = ({ bgImg, title, onClick }) => {
  return (
    <button
      className="h-34 w-34 flex flex-col justify-end bg-cover bg-center text-white shadow-lg rounded-2xl max-md:h-28 max-md:w-28"
      onClick={onClick}
    >
      <img src={bgImg} className="h-full w-full object-cover" />
      <p>{title}</p>
      <div>
        <i className="fa fa-arrow-up text-xs text-white"></i>
      </div>
    </button>
  );
};

export default CardMedium;
