import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
const InputField = ({
  icon: Icon,
  type = "text",
  placeholder,
  label,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="text-sm font-medium text-muted mb-1 block">
          {label}
        </label>
      )}
      <div className="relative flex items-center border border-border rounded-btn h-[52px] px-4 focus-within:border-primary transition-colors">
        {Icon && <Icon size={20} className="text-muted absolute left-4" />}
        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          className={`w-full h-full bg-transparent outline-none text-[15px] font-body ${Icon ? "pl-10" : "pl-2"} pr-10`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 text-muted"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};
export default InputField;
