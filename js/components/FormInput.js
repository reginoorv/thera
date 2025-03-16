function FormInput({ 
  label, 
  name, 
  type = "text", 
  value, 
  onChange, 
  placeholder = "", 
  required = false, 
  error = null,
  className = "" 
}) {
  try {
    const id = `input-${name}`;
    
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
        
        <input
          data-name={`input-${name}`}
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`
            w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400
            focus:outline-none input-focus
            ${error ? 'border-red-500' : 'border-gray-300'}
          `}
        />
        
        {error && (
          <p data-name={`error-${name}`} className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  } catch (error) {
    console.error('FormInput component error:', error);
    reportError(error);
    return null;
  }
}
