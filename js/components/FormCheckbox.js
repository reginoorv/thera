function FormCheckbox({ 
  label, 
  name, 
  checked, 
  onChange, 
  required = false, 
  error = null,
  className = "" 
}) {
  try {
    const id = `checkbox-${name}`;
    
    return (
      <div data-name={`form-group-${name}`} className={`mb-4 ${className}`}>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              data-name={`checkbox-${name}`}
              id={id}
              name={name}
              type="checkbox"
              checked={checked}
              onChange={onChange}
              required={required}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
          
          <div className="ml-3 text-sm">
            <label 
              data-name={`label-${name}`}
              htmlFor={id} 
              className="font-medium text-gray-700"
            >
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
          </div>
        </div>
        
        {error && (
          <p data-name={`error-${name}`} className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  } catch (error) {
    console.error('FormCheckbox component error:', error);
    reportError(error);
    return null;
  }
}
