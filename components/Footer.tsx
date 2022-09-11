/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full">
      <p className="text-center text-base font-light p-4 text-gray-600">
        Copyright © {new Date().getFullYear()} Lorenzo D'Elia
      </p>
    </footer>
  );
};

export default Footer;
