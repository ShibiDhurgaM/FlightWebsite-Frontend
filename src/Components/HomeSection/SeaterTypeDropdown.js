import React, { useState } from 'react';

const SeaterTypeDropdown = ({ onChange, value, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="seater-type-dropdown">
      <input
        type="text"
        placeholder="Select Seater Type"
        value={value}
        readOnly
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SeaterTypeDropdown;
