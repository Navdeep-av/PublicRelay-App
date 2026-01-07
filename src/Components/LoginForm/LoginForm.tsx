import { useState } from "react";
import {
  Page,
  LoginDiv,
  Label,
  FieldWrapper,
  Input,
  Button,
  Logo
} from "./LoginForm.styles";

interface LoginFormProps {
  onSubmit: (name: string) => void;
  logo: string;
}

const LoginForm = ({ onSubmit, logo }: LoginFormProps) => {
  const [nameField, setNameField] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const validate = (value:string) => {
    const textVal = value.trim();
    return textVal.length > 2;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNameField(value);
    const res = validate(value);
    setIsValid(res);
  };

  const handleButtonSubmit = () => {
    onSubmit(nameField.trim());
  };

  return (
    <Page>
      <LoginDiv>
          <Logo src={logo} alt="PublicRelayLogo" />
        
        <FieldWrapper>
          <Label htmlFor="" className="labelColor">
            Full Name
          </Label>

          <Input
            type="text"
            name="nameField"
            onChange={handleChange}
            value={nameField}
            className="fieldStyle"
          />

          <Button disabled={!isValid} onClick={handleButtonSubmit}>
            Submit
          </Button>
        </FieldWrapper>
      </LoginDiv>
    </Page>
  );
};

export default LoginForm;
