function Header({ activePage, setActivePage }) {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    
    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Services' },
      { id: 'about', label: 'About Us' },
      { id: 'booking', label: 'Booking' },
      { id: 'contact', label: 'Contact' }
    ];
    
    return (
      <header data-name="header" className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div data-name="logo" className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              <span className="text-blue-400">Serenity</span> Therapy
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav data-name="desktop-nav" className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                data-name={`nav-item-${item.id}`}
                className={`nav-link text-gray-600 hover:text-gray-900 ${activePage === item.id ? 'nav-link-active font-medium' : ''}`}
                onClick={() => setActivePage(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* Mobile Navigation Button */}
          <button 
            data-name="mobile-menu-button"
            className="md:hidden text-gray-500 focus:outline-none" 
            onClick={toggleMenu}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div data-name="mobile-menu" className="md:hidden bg-white shadow-md py-2 px-4 mt-2 fade-in">
            {navItems.map(item => (
              <button
                key={item.id}
                data-name={`mobile-nav-item-${item.id}`}
                className={`block py-2 w-full text-left ${activePage === item.id ? 'text-blue-500 font-medium' : 'text-gray-600'}`}
                onClick={() => {
                  setActivePage(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    reportError(error);
    return null;
  }
}
