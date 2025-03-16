function Footer() {
  try {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer data-name="footer" className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-name="footer-about">
              <h3 className="text-lg font-medium mb-4">Serenity Therapy</h3>
              <p className="text-gray-600 mb-4">
                Providing compassionate therapy services to help you find balance, healing, and growth.
              </p>
              <div data-name="footer-social" className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div data-name="footer-contact">
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li data-name="footer-address" className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400"></i>
                  <span>123 Healing Street, Wellness City, WC 12345</span>
                </li>
                <li data-name="footer-phone" className="flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-blue-400"></i>
                  <span>(555) 123-4567</span>
                </li>
                <li data-name="footer-email" className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-blue-400"></i>
                  <span>contact@serenity-therapy.com</span>
                </li>
              </ul>
            </div>
            
            <div data-name="footer-hours">
              <h3 className="text-lg font-medium mb-4">Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                <li>Saturday: 10:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          
          <div data-name="footer-bottom" className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
            <p>&copy; {currentYear} Serenity Therapy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    reportError(error);
    return null;
  }
}
