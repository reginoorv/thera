function Services({ navigateTo }) {
  try {
    // Services data
    const serviceCategories = [
      {
        title: "Individual Therapy",
        services: [
          {
            title: "Individual Counseling",
            description: "One-on-one therapy sessions focused on personal growth, healing from past trauma, and developing healthy coping strategies.",
            icon: "fa-user",
            price: 120
          },
          {
            title: "Anxiety Treatment",
            description: "Specialized therapy for managing anxiety disorders, panic attacks, and general anxiety using evidence-based techniques.",
            icon: "fa-brain",
            price: 120
          },
          {
            title: "Depression Treatment",
            description: "Therapy focused on alleviating symptoms of depression and developing strategies for maintaining emotional well-being.",
            icon: "fa-heart",
            price: 120
          },
          {
            title: "Trauma Therapy",
            description: "Specialized approach to healing from traumatic experiences using EMDR, cognitive processing therapy, and other proven methods.",
            icon: "fa-hand-holding-heart",
            price: 135
          }
        ]
      },
      {
        title: "Relationship Therapy",
        services: [
          {
            title: "Couples Counseling",
            description: "Therapy for couples looking to strengthen their relationship, improve communication, and resolve conflicts effectively.",
            icon: "fa-user-friends",
            price: 150
          },
          {
            title: "Premarital Counseling",
            description: "Prepare for marriage by addressing potential areas of conflict and building a strong foundation for your relationship.",
            icon: "fa-rings-wedding",
            price: 140
          },
          {
            title: "Family Therapy",
            description: "Sessions focused on improving family dynamics, communication patterns, and resolving conflicts within the family system.",
            icon: "fa-users",
            price: 160
          }
        ]
      },
      {
        title: "Specialized Services",
        services: [
          {
            title: "Career Counseling",
            description: "Guidance for career transitions, workplace stress, and achieving a healthy work-life balance.",
            icon: "fa-briefcase",
            price: 110
          },
          {
            title: "Grief Counseling",
            description: "Compassionate support for those dealing with loss and navigating the grief process.",
            icon: "fa-cloud-rain",
            price: 120
          },
          {
            title: "Stress Management",
            description: "Learn effective techniques to manage stress and prevent burnout in your personal and professional life.",
            icon: "fa-wind",
            price: 110
          },
          {
            title: "Mindfulness Training",
            description: "Develop mindfulness practices to reduce stress, improve focus, and enhance overall well-being.",
            icon: "fa-spa",
            price: 100
          }
        ]
      }
    ];
    
    return (
      <div data-name="services-page">
        {/* Services Header */}
        <section data-name="services-header" className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a range of therapeutic services designed to address various mental health 
              concerns and support your journey toward wellness and personal growth.
            </p>
          </div>
        </section>
        
        {/* Services Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <section 
            key={categoryIndex}
            data-name={`service-category-${categoryIndex}`} 
            className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container mx-auto px-4">
              <div data-name="category-header" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{category.title}</h2>
                <div className="w-20 h-1 bg-blue-500"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <ServiceCard 
                    key={serviceIndex}
                    title={service.title} 
                    description={service.description} 
                    icon={service.icon}
                    price={service.price}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
        
        {/* Insurance Information */}
        <section data-name="insurance-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-start">
                <div data-name="insurance-icon" className="text-blue-500 text-4xl mb-4 md:mb-0 md:mr-6">
                  <i className="fas fa-file-medical"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Insurance Information</h3>
                  <p className="text-gray-600 mb-4">
                    We accept most major insurance plans. Please contact us to verify your coverage before your first appointment.
                  </p>
                  <p className="text-gray-600 mb-4">
                    For clients without insurance coverage, we offer competitive self-pay rates and sliding scale options based on financial need.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <div className="bg-white p-3 rounded shadow-sm">
                      <img src="https://via.placeholder.com/80x30?text=Insurance1" alt="Insurance Provider" />
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <img src="https://via.placeholder.com/80x30?text=Insurance2" alt="Insurance Provider" />
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <img src="https://via.placeholder.com/80x30?text=Insurance3" alt="Insurance Provider" />
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <img src="https://via.placeholder.com/80x30?text=Insurance4" alt="Insurance Provider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section data-name="services-cta" className="py-16 bg-blue-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule your first appointment today and take the first step toward healing and growth.
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
    console.error('Services page error:', error);
    reportError(error);
    return null;
  }
}
