import { InputContainer, InputField, Label } from "./styles";

interface InputProps {
  label: string;
  type: "text" | "email" | "password" | "number" | "tel" | "textarea";
}

export function Input({ label, type, ...rest }: InputProps) {
  return (
    <>
      <InputContainer>
        <Label htmlFor={label}>{label}</Label>
        <InputField type={type} id={label} {...rest} />
      </InputContainer>
    </>
  );
}
