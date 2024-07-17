import { State } from './store/types';
import { connect } from "react-redux";
import Nav from './components/Nav';
import Header from './components/Header';
import TextInput from './components/TextInput';
import TextDisplay from './components/TextDisplay';
import './App.scss';
import MyService from './services/MyService';
import StoreManager from './store/StoreManager';
import MyModelsDisplay from './components/MyModelsDisplay';

export interface ServicesConfig {
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
        text
    } = props;

    const myService = new MyService(servicesConfig.myServiceUrl);

    return <div id="stock-app">
        <div className="container">
            <Nav/>
            <Header title="React Frontend" subtitle="sample application"/>
            <hr></hr>
            <MyModelsDisplay myService={myService}/>
            <hr></hr>
            <TextInput storeManager={storeManager}/>
            <TextDisplay text={text}/>
        </div>
    </div>;
}

const mapStateToProps = state => {
    return {
        text: state.text
    };
};

export default connect(mapStateToProps)(App);