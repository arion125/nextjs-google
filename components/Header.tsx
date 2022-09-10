import User from "./User";

const Header = () => {
  return (
    <header className="h-16 text-gray-700 flex justify-between pr-4 pl-4 items-center text-sm font-normal">
      <div className="flex gap-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex gap-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <User />
      </div>
    </header>
  );
};

export default Header;
