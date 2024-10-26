import logo from './logo.svg';
import './App.css';

function App() {
  const tg = window.Telegram?.WebApp
  console.log(tg)
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p>{tg.initData?`${tg.initDataUnsafe}`:"not tg"}</p>
    </div>
  );
}

export default App;
