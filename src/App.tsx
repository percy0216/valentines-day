import { useState } from 'react';
import Envelope from './components/Envelope';
import Newspaper from './components/Newspaper';
import Reasons from './components/Reasons';
import TheQuestion from './components/TheQuestion';
import Message from './components/Message';
import Closing from './components/Closing';

function App() {
  const [step, setStep] = useState(0);

  return (
    <main className="w-full min-h-screen bg-[#ffebf0] flex flex-col items-center">
      
      {/* Paso 0: Sobre */}
      {step === 0 && <Envelope onOpen={() => setStep(1)} />}
      
      {/* Paso 1: Periódico */}
      {step === 1 && (
        <Newspaper 
          onNext={() => setStep(2)} 
          onBack={() => setStep(0)}
        />
      )}
      
      {/* Paso 2: 5 Razones */}
      {step === 2 && (
        <Reasons 
          onNext={() => setStep(3)} 
          onBack={() => setStep(1)}
        />
      )}

      {/* Paso 3: Mensaje Importante */}
      {step === 3 && (
         <Message 
           onNext={() => setStep(4)} 
           onBack={() => setStep(2)} // Regresa a Razones
         /> 
      )}

      {/* Paso 4: La Pregunta */}
      {step === 4 && (
         <TheQuestion onYes={() => setStep(5)} /> 
      )}

      {/* Paso 5: Cierre Final */}
      {step === 5 && <Closing onRestart={() => setStep(0)} />}

    </main>
  );
}

export default App;