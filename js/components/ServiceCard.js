function ServiceCard({ title, description, icon, price }) {
  try {
    return (
      <div data-name="service-card" className="service-card bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div data-name="service-icon" className="text-blue-400 text-3xl mb-4">
          <i className={`fas ${icon}`}></i>
        </div>
        
        <h3 data-name="service-title" className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
        
        <p data-name="service-description" className="text-gray-600 mb-4">{description}</p>
        
        {price && (
          <div data-name="service-price" className="text-gray-800 font-medium">
            {typeof price === 'string' ? price : `$${price}`}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Service card component error:', error);
    reportError(error);
    return null;
  }
}
