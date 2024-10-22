import profile from "../../images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-2 p-4 mx-4">
      <div className="text-4xl font-bold">Knowledge Cafe</div>;
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
