import companyLogo from "../assets/PR_Logo.svg";
import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { userContext } from "../context/UserContext";

import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/LoginForm/LoginForm";

const LoginPage = () => {
  const getContext = useContext(userContext);
  const navigate = useNavigate();

  if (!getContext) {
    throw new Error("UserContext is not available");
  }

  useEffect(()=>{
        const saved = sessionStorage.getItem("userDetail")
        if(saved) {
          getContext.setUserName(saved)
             navigate("/articles");
        }
  },[])  

  const handleSubmit = (nameField: string) => {
    sessionStorage.setItem("userDetail", nameField);

    getContext.setUserName(nameField);
    navigate("/articles");
  };

  return (
    <>
      <Helmet>
        <title>Login - PublicRelay</title>
        <meta name="description" content="Login to PublicRelay" />
      </Helmet>
      <LoginForm onSubmit={handleSubmit} logo={companyLogo} />
    </>
  );
};
export default LoginPage;
