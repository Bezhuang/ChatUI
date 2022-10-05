import './App.css';
import Button from './Button.js';
import useColorSwtich from './useColorSwitch';

function App() {
  const [color, handleButton1Click] = useColorSwtich();
  const [color2, handleButton2Click] = useColorSwtich("#0000ff", "#ff00ff");
  return <div></div>;
}

export default App;