import StoreManager from "../../store/StoreManager";
import AuthService from "../../services/AuthService";
import { useState } from "react";
import UserCredentialsForm from "./UserCredentialsForm";
import Header from "../index/Header";

interface Props {
  authService: AuthService;
  storeManager: StoreManager;
}

export default function LoginRegister(props: Props) {

  const { authService, storeManager } = props;

  const [ loginError, setLoginError ] = useState<string>(undefined);
  const [ registerError, setRegisterError ] = useState<string>(undefined);
  const [ registerSuccess, setRegisterSuccess ] = useState<string>(undefined);

  const handleLogin = (username, password) => {
    authService.login(username, password)
      .then(success => {
        if (success) {
          storeManager.setUserInfo({ username })
        } else {
          setLoginError('Failed to log in');
        }
      })
      .catch(error => {
        setLoginError('Network error');
      });
  }

  const handleRegister = (username, password) => {
    if (password.length < 8) {
      setRegisterError('The password must contain at least 8 characters');
    } else {
      authService.register(username, password)
        .then(response => {
          if (response.ok) {
            setRegisterSuccess(`Welcome, ${username}. You may now login with your credentials`);
            setRegisterError(undefined);
          } else {
            setRegisterSuccess(undefined);
            switch(response.status) {
              case 409: setRegisterError('A user with that username already exists'); break;
              default: setRegisterError('Failed to register');
            }
          }
        })
        .catch(error => {
          setRegisterError('Network error');
        });;
    }
  }

  return <div id="login-register">
    <div className="container">
      <Header
        title="Welcome to Authenticated Fullstack Starter"
        subtitle="Login to view data from the server"/>

      <div className="flex-column">
        <UserCredentialsForm
          title="Login"
          submitLabel="Login"
          error={loginError}
          onSubmit={handleLogin}/>

        <UserCredentialsForm
          title="Not yet a user?"
          submitLabel="Register"
          error={registerError}
          success={registerSuccess}
          onSubmit={handleRegister}/>
      </div>
    </div>
  </div>
}