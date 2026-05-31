import type { ChangeEventHandler, CSSProperties } from "react";

type TextFieldProps = {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  rows?: number;
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#fff",
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

export default function TextField({
  label,
  name,
  value,
  placeholder,
  onChange,
  rows,
}: TextFieldProps) {
  const Field = rows ? "textarea" : "input";

  return (
    <div>
      <label
        style={{
          fontSize: "0.75rem",
          color: "#64748b",
          display: "block",
          marginBottom: "6px",
          fontWeight: 500,
        }}>
        {label}
      </label>
      <Field
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        style={{ ...inputStyle, resize: rows ? "none" : undefined }}
        onFocus={(event) => {
          event.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
        }}
        onBlur={(event) => {
          event.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        }}
      />
    </div>
  );
}
