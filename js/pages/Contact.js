function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitSuccess, setSubmitSuccess] = React.useState(false);
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
      
      // Clear error when field is edited
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: null
        });
      }
    };
    
    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      
      if (formData.phone && !validatePhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
      
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!validateForm()) {
        return;
      }
      
      setIsSubmitting(true);
      
      try {
        const response = await submitContactForm(formData);
        
        if (response.success) {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        } else {
          setErrors({
            form: response.message || 'There was an error sending your message. Please try again.'
          });
        }
      } catch (error) {
        console.error('Error submitting contact form:', error);
        setErrors({
          form: 'An unexpected error occurred. Please try again.'
        });
      } finally {
        setIsSubmitting(false);
      }
    };
    
    return (
      <div data-name="contact-page">
        {/* Contact Header */}
        <section data-name="contact-header" className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions or need more information? Reach out to us using the form below or through our contact information.
            </p>
          </div>
        </section>
        
        {/* Contact Information and Form */}
        <section data-name="contact-section" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div data-name="contact-info">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div data-name="contact-address" className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <i className="fas fa-map-marker-alt text-blue-500"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-800">Our Location</h3>
                      <p className="text-gray-600 mt-1">123 Healing Street, Wellness City, WC 12345</p>
                    </div>
                  </div>
                  
                  <div data-name="contact-phone" className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <i className="fas fa-phone-alt text-blue-500"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                      <p className="text-gray-600 mt-1">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div data-name="contact-email" className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <i className="fas fa-envelope text-blue-500"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-800">Email</h3>
                      <p className="text-gray-600 mt-1">contact@serenity-therapy.com</p>
                    </div>
                  </div>
                  
                  <div data-name="contact-hours" className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <i className="fas fa-clock text-blue-500"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-800">Hours</h3>
                      <div className="text-gray-600 mt-1">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div data-name="contact-map" className="mt-8 rounded-lg overflow-hidden h-64 bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <i className="fas fa-map-marked-alt text-4xl mb-2"></i>
                      <p>Map Placeholder</p>
                      <p className="text-sm">Interactive map would be displayed here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div data-name="contact-form">
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                  
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">Your message has been sent successfully!</p>
                          <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <FormInput 
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      error={errors.name}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormInput 
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        error={errors.email}
                      />
                      
                      <FormInput 
                        label="Phone (Optional)"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        error={errors.phone}
                      />
                    </div>
                    
                    <FormInput 
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                    />
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        placeholder="How can we help you?"
                        className={`w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none input-focus ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>
                    
                    {errors.form && (
                      <div className="p-3 bg-red-50 text-red-700 rounded-md mt-4 mb-6">
                        {errors.form}
                      </div>
                    )}
                    
                    <div className="mt-6">
                      <Button 
                        type="submit"
                        isLoading={isSubmitting}
                        fullWidth
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section data-name="faq-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our therapy services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div data-name="faq-item" className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">What should I expect in my first therapy session?</h3>
                  <p className="text-gray-600">
                    Your first session is primarily an intake appointment where we'll discuss what brings you to therapy, gather background information, and establish goals for your treatment. It's also an opportunity for you to ask questions and determine if the therapist is a good fit for your needs.
                  </p>
                </div>
                
                <div data-name="faq-item" className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">How long does each therapy session last?</h3>
                  <p className="text-gray-600">
                    Standard therapy sessions are 50 minutes long, which is considered a "therapy hour." However, initial intake appointments may last longer, typically 60-90 minutes.
                  </p>
                </div>
                
                <div data-name="faq-item" className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Is therapy confidential?</h3>
                  <p className="text-gray-600">
                    Yes, therapy is confidential with a few legal exceptions: if there is suspected child or elder abuse, if there is a threat of harm to yourself or others, or if records are court-ordered. These limitations to confidentiality will be discussed in detail during your first session.
                  </p>
                </div>
                
                <div data-name="faq-item" className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">What is your cancellation policy?</h3>
                  <p className="text-gray-600">
                    We require 24-hour notice for cancellations. Late cancellations or missed appointments may be subject to a fee, as that time has been reserved specifically for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Contact page error:', error);
    reportError(error);
    return null;
  }
}
