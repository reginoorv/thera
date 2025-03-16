function Home({ navigateTo }) {
  try {
    // Testimonials data
    const testimonials = [
      {
        name: "Sarah Johnson",
        title: "Client for 1 year",
        quote: "Working with Serenity Therapy has been transformative. I've gained valuable tools to manage my anxiety and improve my relationships.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80"
      },
      {
        name: "Michael Chen",
        title: "Client for 6 months",
        quote: "I was skeptical about therapy at first, but the compassionate approach here has helped me process grief in ways I never thought possible.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80"
      },
      {
        name: "Emily Rodriguez",
        title: "Client for 2 years",
        quote: "The personalized care and guidance I've received has helped me overcome childhood trauma and build a more fulfilling life.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80"
      }
    ];
    
    return (
      <div data-name="home-page">
        {/* Hero Section */}
        <section data-name="hero-section" className="bg-blue-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div data-name="hero-content" className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Find Your Path to Healing and Growth
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Professional therapy services focused on your wellbeing and personal development. 
                  Take the first step towards a more fulfilling life.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button onClick={() => navigateTo('booking')}>
                    Book an Appointment
                  </Button>
                  <Button type="outline" onClick={() => navigateTo('services')}>
                    Explore Our Services
                  </Button>
                </div>
              </div>
              <div data-name="hero-image" className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Therapy session" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Services Section */}
        <section data-name="featured-services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div data-name="section-header" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
              <p className="text-gray-600">Comprehensive therapy options tailored to your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="Individual Therapy" 
                description="One-on-one sessions focused on personal growth, healing, and developing coping strategies."
                icon="fa-user"
                price="$120 / session"
              />
              <ServiceCard 
                title="Couples Counseling" 
                description="Strengthen your relationship through improved communication and conflict resolution techniques."
                icon="fa-heart"
                price="$150 / session"
              />
              <ServiceCard 
                title="Anxiety Treatment" 
                description="Learn effective strategies to manage anxiety and reclaim control of your life."
                icon="fa-brain"
                price="$120 / session"
              />
            </div>
            
            <div data-name="services-cta" className="text-center mt-10">
              <Button type="outline" onClick={() => navigateTo('services')}>
                View All Services
              </Button>
            </div>
          </div>
        </section>
        
        {/* Approach Section */}
        <section data-name="approach-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div data-name="approach-image" className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <img 
                  src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Therapy approach" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div data-name="approach-content" className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Approach</h2>
                <p className="text-gray-600 mb-4">
                  At Serenity Therapy, we believe in a holistic, client-centered approach that recognizes 
                  the unique needs and experiences of each individual.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                    <span>Evidence-based therapeutic techniques</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                    <span>Compassionate, non-judgmental environment</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                    <span>Personalized treatment plans</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                    <span>Focus on sustainable growth and healing</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button onClick={() => navigateTo('about')}>
                    Learn More About Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section data-name="testimonials-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div data-name="section-header" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Client Testimonials</h2>
              <p className="text-gray-600">Hear from those who've experienced our services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Testimonial 
                  key={index} 
                  name={testimonial.name} 
                  title={testimonial.title} 
                  quote={testimonial.quote} 
                  image={testimonial.image} 
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section data-name="cta-section" className="py-16 bg-blue-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step toward healing and personal growth by scheduling an appointment today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => navigateTo('booking')}
                className="bg-white text-blue-500 hover:bg-gray-100"
              >
                Book an Appointment
              </Button>
              <Button 
                type="outline" 
                onClick={() => navigateTo('contact')}
                className="border-white text-white hover:bg-blue-600"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Home page error:', error);
    reportError(error);
    return null;
  }
}
