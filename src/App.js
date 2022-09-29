import './App.css';
import Button from './Button.js';
import useColorSwtich from './useColorSwitch';

function App() {
  const [color, handleButton1Click] = useColorSwtich();
  const [color2, handleButton2Click] = useColorSwtich("#0000ff", "#ff00ff");
  return (
    <div>
      <Button width="120px" onClick={handleButton1Click} label="label">
        <span>&gt;</span>
      </Button>
      <p style={{ color }}>这是一段文本</p>
      <Button onClick={handleButton2Click} label="点我" />
      <p style={{ color: color2 }}>这是第二段文本</p>
    </div>
  );
}

export default App;