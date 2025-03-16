function Booking() {
  try {
    const [step, setStep] = React.useState(1);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [bookingComplete, setBookingComplete] = React.useState(false);
    const [confirmationDetails, setConfirmationDetails] = React.useState(null);
    
    // Form data
    const [formData, setFormData] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      appointmentDate: '',
      appointmentTime: '',
      serviceType: '',
      isNewClient: true,
      preferredTherapist: '',
      insuranceProvider: '',
      policyNumber: '',
      emergencyContact: '',
      emergencyPhone: '',
      reasonForVisit: '',
      additionalNotes: '',
      agreeToTerms: false
    });
    
    // Form errors
    const [errors, setErrors] = React.useState({});
    
    // Service types
    const serviceTypes = [
      { value: "individual", label: "Individual Therapy" },
      { value: "couples", label: "Couples Counseling" },
      { value: "family", label: "Family Therapy" },
      { value: "anxiety", label: "Anxiety Treatment" },
      { value: "depression", label: "Depression Treatment" },
      { value: "trauma", label: "Trauma Therapy" }
    ];
    
    // Therapists
    const therapists = [
      { value: "any", label: "No Preference" },
      { value: "emma-wilson", label: "Dr. Emma Wilson" },
      { value: "michael-rodriguez", label: "Dr. Michael Rodriguez" },
      { value: "sarah-thompson", label: "Sarah Thompson, LCSW" }
    ];
    
    // Insurance providers
    const insuranceProviders = [
      { value: "self-pay", label: "Self Pay" },
      { value: "blue-cross", label: "Blue Cross Blue Shield" },
      { value: "aetna", label: "Aetna" },
      { value: "cigna", label: "Cigna" },
      { value: "united", label: "United Healthcare" },
      { value: "medicare", label: "Medicare" },
      { value: "medicaid", label: "Medicaid" },
      { value: "other", label: "Other" }
    ];
    
    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
      
      // Clear error when field is edited
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: null
        });
      }
    };
    
    const handleDateSelect = (date) => {
      setFormData({
        ...formData,
        appointmentDate: date.toISOString().split('T')[0]
      });
      
      // Clear error when field is edited
      if (errors.appointmentDate) {
        setErrors({
          ...errors,
          appointmentDate: null
        });
      }
    };
    
    const handleTimeSelect = (time) => {
      setFormData({
        ...formData,
        appointmentTime: time
      });
      
      // Clear error when field is edited
      if (errors.appointmentTime) {
        setErrors({
          ...errors,
          appointmentTime: null
        });
      }
    };
    
    const validateStep1 = () => {
      const stepErrors = {};
      const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'serviceType'];
      
      requiredFields.forEach(field => {
        if (!formData[field]) {
          stepErrors[field] = 'This field is required';
        }
      });
      
      if (formData.email && !validateEmail(formData.email)) {
        stepErrors.email = 'Please enter a valid email address';
      }
      
      if (formData.phone && !validatePhone(formData.phone)) {
        stepErrors.phone = 'Please enter a valid phone number';
      }
      
      setErrors(stepErrors);
      return Object.keys(stepErrors).length === 0;
    };
    
    const validateStep2 = () => {
      const stepErrors = {};
      
      if (!formData.appointmentDate) {
        stepErrors.appointmentDate = 'Please select an appointment date';
      }
      
      if (!formData.appointmentTime) {
        stepErrors.appointmentTime = 'Please select an appointment time';
      }
      
      setErrors(stepErrors);
      return Object.keys(stepErrors).length === 0;
    };
    
    const validateStep3 = () => {
      const stepErrors = {};
      
      if (formData.insuranceProvider && formData.insuranceProvider !== 'self-pay' && !formData.policyNumber) {
        stepErrors.policyNumber = 'Please enter your policy number';
      }
      
      if (!formData.agreeToTerms) {
        stepErrors.agreeToTerms = 'You must agree to the terms and conditions';
      }
      
      setErrors(stepErrors);
      return Object.keys(stepErrors).length === 0;
    };
    
    const handleNextStep = () => {
      let isValid = false;
      
      if (step === 1) {
        isValid = validateStep1();
      } else if (step === 2) {
        isValid = validateStep2();
      }
      
      if (isValid) {
        setStep(step + 1);
        window.scrollTo(0, 0);
      }
    };
    
    const handlePrevStep = () => {
      setStep(step - 1);
      window.scrollTo(0, 0);
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!validateStep3()) {
        return;
      }
      
      setIsSubmitting(true);
      
      try {
        const response = await bookAppointment(formData);
        
        if (response.success) {
          setBookingComplete(true);
          setConfirmationDetails({
            appointmentId: response.appointmentId,
            date: formData.appointmentDate,
            time: formData.appointmentTime,
            service: serviceTypes.find(s => s.value === formData.serviceType)?.label || formData.serviceType,
            therapist: therapists.find(t => t.value === formData.preferredTherapist)?.label || 'Any Available Therapist'
          });
          window.scrollTo(0, 0);
        } else {
          setErrors({
            form: response.message || 'There was an error booking your appointment. Please try again.'
          });
        }
      } catch (error) {
        console.error('Error submitting booking form:', error);
        setErrors({
          form: 'An unexpected error occurred. Please try again.'
        });
      } finally {
        setIsSubmitting(false);
      }
    };
    
    // Booking confirmation screen
    if (bookingComplete && confirmationDetails) {
      return (
        <div data-name="booking-confirmation" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <div data-name="confirmation-header" className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <i className="fas fa-check text-green-500 text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Appointment Confirmed!</h2>
                <p className="text-gray-600">
                  Your appointment has been scheduled successfully.
                </p>
              </div>
              
              <div data-name="confirmation-details" className="border-t border-b border-gray-200 py-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Appointment ID</p>
                    <p className="font-medium">{confirmationDetails.appointmentId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Service Type</p>
                    <p className="font-medium">{confirmationDetails.service}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{formatDate(new Date(confirmationDetails.date))}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">
                      {confirmationDetails.time.replace(':00', '')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Therapist</p>
                    <p className="font-medium">{confirmationDetails.therapist}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Client Name</p>
                    <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                  </div>
                </div>
              </div>
              
              <div data-name="confirmation-message" className="mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-2">What's Next?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-envelope text-blue-500 mt-1 mr-2"></i>
                    <span>You will receive a confirmation email with these details.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-file-alt text-blue-500 mt-1 mr-2"></i>
                    <span>Please complete any intake forms sent to your email prior to your appointment.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-clock text-blue-500 mt-1 mr-2"></i>
                    <span>Please arrive 15 minutes before your appointment time.</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-id-card text-blue-500 mt-1 mr-2"></i>
                    <span>Bring your insurance card and a valid ID to your appointment.</span>
                  </li>
                </ul>
              </div>
              
              <div data-name="confirmation-actions" className="text-center">
                <p className="mb-4 text-gray-600">Need to make changes to your appointment?</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button type="outline">
                    <i className="fas fa-calendar-alt mr-2"></i> Add to Calendar
                  </Button>
                  <Button>
                    <i className="fas fa-phone-alt mr-2"></i> Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div data-name="booking-page">
        {/* Booking Header */}
        <section data-name="booking-header" className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Book an Appointment</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Schedule your therapy session in just a few simple steps.
            </p>
          </div>
        </section>
        
        {/* Booking Form */}
        <section data-name="booking-form" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Progress Steps */}
              <div data-name="booking-progress" className="mb-8">
                <div className="flex items-center justify-center">
                  <div className="flex items-center w-full max-w-3xl">
                    {[1, 2, 3].map((stepNumber) => (
                      <div key={stepNumber} className="flex-1">
                        <div className="flex items-center relative">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 relative ${
                            stepNumber < step ? 'bg-blue-500 text-white' : 
                            stepNumber === step ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                          }`}>
                            {stepNumber < step ? (
                              <i className="fas fa-check"></i>
                            ) : (
                              stepNumber
                            )}
                          </div>
                          <div className="flex-1 h-1 bg-gray-200">
                            {stepNumber < 3 && (
                              <div 
                                className={`h-full ${stepNumber < step ? 'bg-blue-500' : 'bg-gray-200'}`}
                              ></div>
                            )}
                          </div>
                          
                          {stepNumber < 3 && (
                            <div className="absolute top-0 left-0 -ml-12 md:ml-12 mt-16 md:mt-0 md:top-10 whitespace-nowrap text-xs">
                              <span className={`font-medium ${
                                stepNumber < step ? 'text-blue-500' : 
                                stepNumber === step ? 'text-blue-500' : 'text-gray-500'
                              }`}>
                                {stepNumber === 1 ? 'Personal Info' : 
                                 stepNumber === 2 ? 'Select Date & Time' : 'Additional Details'}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Form Container */}
              <div data-name="form-container" className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                <form onSubmit={handleSubmit}>
                  
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <div data-name="step-1" className="fade-in">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormInput 
                          label="First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          required
                          error={errors.firstName}
                        />
                        
                        <FormInput 
                          label="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          required
                          error={errors.lastName}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormInput 
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          required
                          error={errors.email}
                        />
                        
                        <FormInput 
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          required
                          error={errors.phone}
                        />
                      </div>
                      
                      <FormSelect 
                        label="Service Type"
                        name="serviceType"
                        options={serviceTypes}
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        placeholder="Select a service"
                        required
                        error={errors.serviceType}
                      />
                      
                      <FormCheckbox 
                        label="I am a new client"
                        name="isNewClient"
                        checked={formData.isNewClient}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                  
                  {/* Step 2: Date and Time Selection */}
                  {step === 2 && (
                    <div data-name="step-2" className="fade-in">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Date & Time</h2>
                      
                      <div className="mb-6">
                        <Calendar 
                          onDateSelect={handleDateSelect}
                          onTimeSelect={handleTimeSelect}
                        />
                        
                        {errors.appointmentDate && (
                          <p data-name="error-date" className="mt-2 text-sm text-red-500">
                            {errors.appointmentDate}
                          </p>
                        )}
                        
                        {errors.appointmentTime && (
                          <p data-name="error-time" className="mt-2 text-sm text-red-500">
                            {errors.appointmentTime}
                          </p>
                        )}
                      </div>
                      
                      <FormSelect 
                        label="Preferred Therapist (Optional)"
                        name="preferredTherapist"
                        options={therapists}
                        value={formData.preferredTherapist}
                        onChange={handleInputChange}
                        placeholder="Select a therapist"
                      />
                    </div>
                  )}
                  
                  {/* Step 3: Additional Information */}
                  {step === 3 && (
                    <div data-name="step-3" className="fade-in">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Information</h2>
                      
                      <FormSelect 
                        label="Insurance Provider"
                        name="insuranceProvider"
                        options={insuranceProviders}
                        value={formData.insuranceProvider}
                        onChange={handleInputChange}
                        placeholder="Select your insurance"
                      />
                      
                      {formData.insuranceProvider && formData.insuranceProvider !== 'self-pay' && (
                        <FormInput 
                          label="Policy Number"
                          name="policyNumber"
                          value={formData.policyNumber}
                          onChange={handleInputChange}
                          placeholder="Enter your policy number"
                          error={errors.policyNumber}
                        />
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormInput 
                          label="Emergency Contact Name"
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleInputChange}
                          placeholder="Emergency contact name"
                        />
                        
                        <FormInput 
                          label="Emergency Contact Phone"
                          name="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={handleInputChange}
                          placeholder="Emergency contact number"
                        />
                      </div>
                      
                      <FormInput 
                        label="Reason for Visit"
                        name="reasonForVisit"
                        value={formData.reasonForVisit}
                        onChange={handleInputChange}
                        placeholder="Briefly describe why you're seeking therapy"
                      />
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Notes (Optional)
                        </label>
                        <textarea
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none input-focus"
                          placeholder="Any other information you'd like to share"
                        ></textarea>
                      </div>
                      
                      <FormCheckbox 
                        label="I agree to the terms and conditions, including the cancellation policy"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                        error={errors.agreeToTerms}
                      />
                      
                      {errors.form && (
                        <div className="p-3 bg-red-50 text-red-700 rounded-md mt-4 mb-6">
                          {errors.form}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Form Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    {step > 1 ? (
                      <Button type="secondary" onClick={handlePrevStep}>
                        <i className="fas fa-arrow-left mr-2"></i> Previous
                      </Button>
                    ) : (
                      <div></div>
                    )}
                    
                    {step < 3 ? (
                      <Button onClick={handleNextStep}>
                        Next <i className="fas fa-arrow-right ml-2"></i>
                      </Button>
                    ) : (
                      <Button type="submit" isLoading={isSubmitting}>
                        Book Appointment
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Booking page error:', error);
    reportError(error);
    return null;
  }
}
