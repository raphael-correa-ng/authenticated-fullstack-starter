import { State } from './store/types';
import { connect } from "react-redux";
import AuthService from './services/AuthService';
import MyService from './services/MyService';
import StoreManager from './store/StoreManager';
import Nav from './components/index/Nav';
import MyModels from './components/mymodels/MyModels';
import LoginRegister from './components/auth/LoginRegister';
import './App.scss';

export interface ServicesConfig {
  authServiceUrl: string;
  myServiceUrl: string;
}

interface Props extends State {
  storeManager: StoreManager;
  servicesConfig: ServicesConfig;
}

function App(props: Props) {

  const {
    storeManager,
    servicesConfig,
    userInfo
  } = props;

  const authService = new AuthService(servicesConfig.authServiceUrl);
  const myService = new MyService(servicesConfig.myServiceUrl);

  const isLoggedIn = !!userInfo;

  return <div id="stock-app">
    <Nav userInfo={userInfo} authService={authService} storeManager={storeManager}/>

    {
      !isLoggedIn &&
      <LoginRegister
        authService={authService}
        storeManager={storeManager}/>
    }

    {
      isLoggedIn &&
      <MyModels myService={myService}/>
    }
  </div>;
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  };
};

export default connect(mapStateToProps)(App);