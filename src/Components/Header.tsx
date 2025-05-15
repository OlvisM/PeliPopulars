import Logo from "../assets/Peli-Photoroom.png";

function Header() {
  return (
    <>
      <header className="flex items-center justify-center">
        <img src={Logo} alt="Logo" className="w-[200px] object-contain" />
        <h1 className="text-3xl text-center mt-4 font-black text-gray-800">
          Peliculas del momento
        </h1>
      </header>
    </>
  );
}

export default Header;
