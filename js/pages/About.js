function About({ navigateTo }) {
  try {
    // Therapists data
    const therapists = [
      {
        name: "Dr. Emma Wilson",
        title: "Clinical Psychologist",
        bio: "Dr. Wilson specializes in cognitive-behavioral therapy with over 15 years of experience helping clients overcome anxiety, depression, and trauma.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        specialties: ["Anxiety", "Depression", "Trauma", "PTSD"]
      },
      {
        name: "Dr. Michael Rodriguez",
        title: "Marriage & Family Therapist",
        bio: "Dr. Rodriguez has dedicated his career to helping couples and families improve their relationships through effective communication and conflict resolution techniques.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        specialties: ["Couples Therapy", "Family Counseling", "Relationship Issues"]
      },
      {
        name: "Sarah Thompson, LCSW",
        title: "Licensed Clinical Social Worker",
        bio: "Sarah brings a compassionate, strengths-based approach to therapy, focusing on empowering clients to overcome challenges and build resilience.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
        specialties: ["Grief & Loss", "Life Transitions", "Self-Esteem"]
      }
    ];
    
    // Values and approach
    const values = [
      {
        title: "Client-Centered Care",
        description: "We believe that each client is unique and deserves personalized care tailored to their specific needs and goals.",
        icon: "fa-user-circle"
      },
      {
        title: "Evidence-Based Practices",
        description: "Our therapeutic approaches are grounded in research and proven techniques to ensure effective treatment outcomes.",
        icon: "fa-chart-line"
      },
      {
        title: "Holistic Perspective",
        description: "We consider the whole person - mind, body, and spirit - in our approach to healing and growth.",
        icon: "fa-balance-scale"
      },
      {
        title: "Compassionate Environment",
        description: "We create a safe, non-judgmental space where clients can explore their thoughts and feelings openly.",
        icon: "fa-heart"
      }
    ];
    
    return (
      <div data-name="about-page">
        {/* About Header */}
        <section data-name="about-header" className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn more about our practice, our therapists, and our approach to helping you achieve 
              mental wellness and personal growth.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section data-name="our-story" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div data-name="story-image" className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Our therapy practice" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div data-name="story-content" className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Serenity Therapy was founded in 2010 with a vision to create a warm, welcoming environment 
                  where individuals, couples, and families could receive high-quality mental health care.
                </p>
                <p className="text-gray-600 mb-4">
                  What began as a small practice with just two therapists has grown into a comprehensive 
                  center with specialists in various therapeutic approaches and mental health concerns.
                </p>
                <p className="text-gray-600">
                  Throughout our growth, we've maintained our commitment to personalized care, 
                  evidence-based practices, and creating a supportive community for healing and growth.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section data-name="our-values" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div data-name="values-header" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Values & Approach</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                These core principles guide our practice and inform how we work with each client
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} data-name={`value-${index}`} className="bg-white p-6 rounded-lg shadow-sm">
                  <div data-name="value-icon" className="text-blue-400 text-3xl mb-4">
                    <i className={`fas ${value.icon}`}></i>
                  </div>
                  <h3 data-name="value-title" className="text-xl font-medium text-gray-800 mb-2">{value.title}</h3>
                  <p data-name="value-description" className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Meet Our Team */}
        <section data-name="our-team" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div data-name="team-header" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet Our Team</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our therapists bring diverse backgrounds, specialties, and approaches to provide comprehensive care
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {therapists.map((therapist, index) => (
                <div key={index} data-name={`therapist-${index}`} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div data-name="therapist-image" className="mb-4">
                    <img 
                      src={therapist.image} 
                      alt={therapist.name} 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 data-name="therapist-name" className="text-xl font-medium text-gray-800 mb-1">{therapist.name}</h3>
                  <p data-name="therapist-title" className="text-blue-500 mb-3">{therapist.title}</p>
                  <p data-name="therapist-bio" className="text-gray-600 mb-4">{therapist.bio}</p>
                  
                  <div data-name="therapist-specialties">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {therapist.specialties.map((specialty, idx) => (
                        <span 
                          key={idx} 
                          className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Office Tour */}
        <section data-name="office-tour" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div data-name="tour-header" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Space</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We've created a calming environment designed to help you feel comfortable and at ease
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div data-name="office-image-1" className="aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Office reception" 
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                />
              </div>
              <div data-name="office-image-2" className="aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Therapy room" 
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                />
              </div>
              <div data-name="office-image-3" className="aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1630699144339-420f59b4747a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Waiting area" 
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section data-name="about-cta" className="py-16 bg-blue-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team is ready to support you. Schedule your first appointment today.
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
    console.error('About page error:', error);
    reportError(error);
    return null;
  }
}
