import Background from "./components/Background";
import Foreground from "./components/Foreground";
const App = () => {
  return (
    <div className="relative z-10 w-full h-screen bg-zinc-800 overflow">
      <Background />
      <Foreground />
    </div>
  );
};

export default App;
