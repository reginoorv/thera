function validateEmail(email) {
  try {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  } catch (error) {
    console.error('Email validation error:', error);
    reportError(error);
    return false;
  }
}

function validatePhone(phone) {
  try {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(String(phone));
  } catch (error) {
    console.error('Phone validation error:', error);
    reportError(error);
    return false;
  }
}

function validateRequired(value) {
  try {
    return value !== null && value !== undefined && value.trim() !== '';
  } catch (error) {
    console.error('Required field validation error:', error);
    reportError(error);
    return false;
  }
}

function validateForm(formData, requiredFields) {
  try {
    const errors = {};
    
    requiredFields.forEach(field => {
      if (!validateRequired(formData[field])) {
        errors[field] = 'This field is required';
      }
    });
    
    if (formData.email && !validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  } catch (error) {
    console.error('Form validation error:', error);
    reportError(error);
    return {
      isValid: false,
      errors: { form: 'An error occurred during validation' }
    };
  }
}
