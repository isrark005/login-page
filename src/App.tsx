import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import { FaExclamationTriangle } from "react-icons/fa";


function App() {
  const [timer, setTimer] = useState(60);


  useEffect(() => {
  const startTimer = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(startTimer);
  }, []);

  return (
    <main
      className={`h-[100vh] w-[100%] grid content-center justify-center bg-[url('https://e1.pxfuel.com/desktop-wallpaper/581/154/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg')] bg-cover bg-no-repeat`}
    >
      <div className="login-form w-[500px] border-2 bg-white bg-opacity-80 pt-5 rounded-lg">
        <div className="flex items-center gap-2 justify-center"> {timer > 0 ? `Login timeout in ${timer}` : `Please Refresh to login! `} {timer <= 0 && <FaExclamationTriangle />}</div>
        <LoginForm timer={timer}/>
      </div>
    </main>
  );
}

export default App;
