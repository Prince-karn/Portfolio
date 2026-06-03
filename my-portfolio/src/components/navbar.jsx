const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 text-white flex justify-between px-8 py-4 z-50">
      
      <h1 className="font-bold text-xl">Prince</h1>

      <ul className="flex gap-6 text-gray-300">
        <li><a href="#about" className="hover:text-white">About</a></li> 
        <li><a href="#skills" className="hover:text-white">Skills</a></li>       
        <li><a href="#projects" className="hover:text-white">Projects</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;