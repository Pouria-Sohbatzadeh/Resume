// Form.jsx
import React from "react";
import { HeadlineStyle } from "../styled_component/HeadlineStyle";

export default function Form({
  headline,
  htmlFor,
  type,
  placeholder,
  invalidMassage,
  value,
  onChange,
  onKeyDown,
  minLen = "11",
  maxLen = "11"
}) {
  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor={htmlFor}>
        <HeadlineStyle className="text-[14px] !font-bold">
          {headline}
        </HeadlineStyle>
      </label>

      <input
        id={htmlFor}
        type={type}
        className="input validator tabular-nums !bg-white !rounded-[12px]"
        required
        placeholder={placeholder}
        pattern="[0-9]*"
        minLength={minLen}
        maxLength={minLen}
        title="Must be 11 digits"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      {invalidMassage && (
        <p className="validator-hint relative bottom-[10px]">{invalidMassage}</p>
      )}
    </div>
  );
}
