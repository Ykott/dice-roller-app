import Die from "./components/Die";

function App() {
  let val = ["A","E","i"];
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-green-700">
      <h1 className="text-4xl font-bold text-white">Dice Roller</h1>
      <Die></Die>
      {val.map((item)=> <span key={item}>{item}</span>)}
    </div>
  );
}

export default App;
