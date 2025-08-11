import React from 'react';

interface InputProps {
  label?: string;
  type?: string;
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  labelClass?: string;
  inputClass?: string;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  name,
  id,
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
  labelClass = '',
  inputClass = '',
  children,
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      {label && (
        <label htmlFor={id} className={`block mb-2 text-sm text-gray-600 ${labelClass}`}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${inputClass}`}
      />
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default Input;
