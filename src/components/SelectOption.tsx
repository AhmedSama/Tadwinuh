// SelectOption.tsx
import React, { useState, useEffect } from 'react';
import { HiSelector } from 'react-icons/hi';
import {BiCheck} from 'react-icons/bi'

interface SelectOptionProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
  labelText?: string | null;
}

const SelectOption: React.FC<SelectOptionProps> = ({ options, onSelect, labelText = null }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);

  useEffect(() => {
    filterOptions();
  }, [searchText, options]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchText("");
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleSearchInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filterOptions = () => {
    const lowercaseSearchText = searchText.toLowerCase();
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(lowercaseSearchText)
    );
    setFilteredOptions(filtered);
  };

  return (
    <div className={`custom-select ${isOpen ? 'open' : ''}`}>
      {labelText && <p style={{ padding: 5 }}>{labelText}</p>}
      <div className="selected-option" onClick={toggleDropdown}>
        <span>{selectedOption ? selectedOption : 'Select an option'}</span>
        <HiSelector />
      </div>
        {isOpen && ( // Only show the input when the dropdown is open
            <input type="text" placeholder="Search..." onChange={handleSearchInputChange} />
        )}
      <ul className="options">
        {filteredOptions.map((option) => (
          <li className={option ===selectedOption ? "active" : ""} key={option} onClick={() => handleOptionClick(option)}>
            {option ===selectedOption && <BiCheck />}
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectOption;
