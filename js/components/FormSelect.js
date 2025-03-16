function FormSelect({ 
  label, 
  name, 
  options, 
  value, 
  onChange, 
  required = false, 
  error = null,
  placeholder = "Select an option",
  className = "" 
}) {
  try {
    const id = `select-${name}`;
    
    return (
      <div data-name={`form-group-${name}`} className={`mb-4 ${className}`}>
        {label && (
          <label 
            data-name={`label-${name}`}
            htmlFor={id} 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <select
          data-name={`select-${name}`}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm 
            focus:outline-none input-focus appearance-none
            ${error ? 'border-red-500' : 'border-gray-300'}
          `}
        >
          <option value="" disabled>{placeholder}</option>
          
          {options.map((option, index) => (
            <option 
              key={index} 
              value={option.value !== undefined ? option.value : option}
            >
              {option.label !== undefined ? option.label : option}
            </option>
          ))}
        </select>
        
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
        
        {error && (
          <p data-name={`error-${name}`} className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  } catch (error) {
    console.error('FormSelect component error:', error);
    reportError(error);
    return null;
  }
}
