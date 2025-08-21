export const Input = ({
  label,
  placeholder,
  type,
  required = false,
  onChange,
}: {
  label: string;
  placeholder: string;
  type: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative w-full mb-5">
      <label className="absolute text-[13px] font-medium top-0 left-3 -translate-y-1/2 bg-gray-50 px-1 text-[#6c25ff]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        type={type}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#6c25ff] focus:border-[#6c25ff] outline-none transition"
      />
    </div>
  );
};
