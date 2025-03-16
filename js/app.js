function App() {
  try {
    const [activePage, setActivePage] = React.useState('home');
    
    // Function to navigate between pages
    const navigateTo = (page) => {
      setActivePage(page);
      window.scrollTo(0, 0);
    };
    
    // Render the active page
    const renderPage = () => {
      switch (activePage) {
        case 'home':
          return <Home navigateTo={navigateTo} />;
        case 'services':
          return <Services navigateTo={navigateTo} />;
        case 'about':
          return <About navigateTo={navigateTo} />;
        case 'booking':
          return <Booking />;
        case 'contact':
          return <Contact />;
        default:
          return <Home navigateTo={navigateTo} />;
      }
    };
    
    return (
      <div data-name="app">
        <Header activePage={activePage} setActivePage={setActivePage} />
        <main data-name="main-content">
          {renderPage()}
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App error:', error);
    reportError(error);
    return (
      <div data-name="error-fallback" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md">
          <div className="text-red-500 text-5xl mb-4">
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h1>
          <p className="text-gray-600 mb-6">
            We're sorry, but there was an error loading the application. Please refresh the page or try again later.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md font-medium"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }
}

// Error reporting function
function handleGlobalError(error, errorInfo) {
  console.error('Global error:', error);
  console.error('Error info:', errorInfo);
}

// Initialize the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
