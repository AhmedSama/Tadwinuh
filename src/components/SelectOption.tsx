// SelectOption.tsx
import React, { useState, useEffect, useRef } from 'react';
import {BiCheck} from 'react-icons/bi'
import {IoIosArrowDown,IoIosArrowUp} from "react-icons/io"

interface SelectOptionProps {
  options: string[];
  onSelect?: (selectedOption: string) => void;
  labelText?: string | null;
  default_value? : string | null
}

const SelectOption: React.FC<SelectOptionProps> = ({ options, onSelect, labelText = null,default_value }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(default_value || null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>(default_value || '');
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const dropdownRef = useRef<HTMLUListElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  
  const handleOutsideClick = (event:globalThis.MouseEvent) => {
    // close the options (set isOpen to false) when click not inside the input field nor the options    
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && !inputRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setSearchText(option)
    setIsOpen(false);
    setFilteredOptions(options)
    if(onSelect)
      onSelect(option);
  };

  const handleSearchInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    filterOptions(e.target.value);
  };

  const filterOptions = (text:string) => {
    const lowercaseSearchText = text.toLowerCase();
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(lowercaseSearchText)
    );
    console.log(filtered)
    setFilteredOptions(filtered);
  };

  return (
    <div className={`custom-select ${isOpen ? 'open' : ''}`}>
      {labelText && <p className='input-label'>{labelText}</p>}
      <div className="selected-option" onClick={toggleDropdown}>
        <input ref={inputRef} onChange={handleSearchInputChange} placeholder='Select an option' type="text" value={searchText} />
        {
          isOpen ? <IoIosArrowUp style={{fontSize:15,marginRight:5}} /> : <IoIosArrowDown style={{fontSize:15,marginRight:5}} />
        }
      </div>
      <ul ref={dropdownRef} className="options">
        {filteredOptions.map((option) => (
          <li  className={option ===selectedOption ? "active" : ""} key={option} onClick={() => handleOptionClick(option)}>
            {option ===selectedOption && <BiCheck />}
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectOption;
