import profile from "../../images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-11/12 md:w-9/12 mx-auto py-2 md:py-4 border-b-2">
      <div className="text-2xl md:text-4xl font-bold">Knowledge Cafe</div>;
      <img className="w-10 md:w-14" src={profile} alt="" />
    </div>
  );
};

export default Header;
