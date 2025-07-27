import React from "react";
import "./FormElements.css";

// TextField Component
type TextFieldProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  active?: boolean;
};
const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  active,
}) => (
  <div className={`textfield-group${error ? " error" : ""}${active ? " active" : ""}`}>
    <label className="textfield-label">
      {label}
      {error && <span className="textfield-error-msg">{error}</span>}
    </label>
    <input
      className="textfield-input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-invalid={!!error}
    />
  </div>
);

// RadioButton Component
type RadioButtonProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
  name: string;
};
const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  checked,
  onChange,
  name,
}) => (
  <label className={`radio-label${checked ? " checked" : ""}`}>
    <input
      type="radio"
      checked={checked}
      onChange={onChange}
      name={name}
      className="radio-input"
    />
    <span className="radio-custom" />
    {label}
  </label>
);

// NumberInput Component
type NumberInputProps = {
  value: number;
  onChange: (value: number) => void;
};
const NumberInput: React.FC<NumberInputProps> = ({ value, onChange }) => (
  <div className="number-input">
    <button onClick={() => onChange(value - 1)} disabled={value <= 1}>
        –
    </button>
    <span>{value}</span>
    <button onClick={() => onChange(value + 1)}>+</button>
  </div>
);

// Remove the demo usage and only export the components
export { NumberInput, RadioButton, TextField };
