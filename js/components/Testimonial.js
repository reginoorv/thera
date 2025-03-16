function Testimonial({ name, title, quote, image }) {
  try {
    return (
      <div data-name="testimonial" className="testimonial-card bg-white p-6 rounded-lg shadow-md">
        <div data-name="testimonial-quote" className="mb-4">
          <i className="fas fa-quote-left text-blue-300 text-xl mb-2"></i>
          <p className="text-gray-600 italic">{quote}</p>
        </div>
        
        <div data-name="testimonial-author" className="flex items-center">
          <div data-name="testimonial-avatar" className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80"} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 data-name="testimonial-name" className="font-medium text-gray-800">{name}</h4>
            {title && <p data-name="testimonial-title" className="text-sm text-gray-500">{title}</p>}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Testimonial component error:', error);
    reportError(error);
    return null;
  }
}
