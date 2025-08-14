import { forwardRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomDatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}

const CustomInput = forwardRef<HTMLInputElement, any>(
  ({ value, onClick }, ref) => (
    <div className="relative w-full">
      <input
        className="border border-slate-300 rounded-md p-2 w-full pr-10"
        onClick={onClick}
        ref={ref}
        value={value}
        readOnly
        placeholder="Select a date"
      />
      <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  )
);

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  selectedDate,
  onChange,
}) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      customInput={<CustomInput />}
      dateFormat="dd/MM/yyyy"
    />
  );
};

export default CustomDatePicker;
