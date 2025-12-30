import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
        <img
          src={logo}
          alt="Opportunity Atlas Logo"
          className="h-20 w-20 object-contain"
        />

        {/* Brand */}
        <div>
          <h1 className="text-xl font-bold text-slate-100">
            Opportunity Atlas
          </h1>
          <p className="text-sm text-slate-400">
            Map your path to the right opportunities
          </p>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
