import { useState, ChangeEvent } from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[];
    onChange: (selectedValue: string) => void;
}

const Select = ({ options, onChange }: SelectProps) => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedValue(value);
        onChange(value);
    };

    return (
        <select value={selectedValue} onChange={handleSelectChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
