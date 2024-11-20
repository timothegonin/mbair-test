import { useState } from 'react';
import Header from './components/Header'
import Configuration from './components/Configuration'
import Confirmation from './components/Confirmation'
import Cart from './components/Cart'
import MacBookProviders from './providers/MacBookProviders';
import AlertNotification from './components/AlertNotification';


function App() {
  const [step, setStep] = useState('configurationStep')

  let DisplayComponent = Configuration;

  switch (step) {
    case "configurationStep":
      DisplayComponent = Configuration
      break;
    case "confirmationStep":
      DisplayComponent = Confirmation
      break;
    case "cartStep":
      DisplayComponent = Cart
      break;
  
    default:
      DisplayComponent = () => <AlertNotification/>
      break;
  }

  return (
    <div className="container">
      <div className="bg row d-flex pb-5">
        <Header/>
        <MacBookProviders>
          <DisplayComponent setStep={setStep}/>
        </MacBookProviders>
      </div>
    </div>
  );
}

export default App;
