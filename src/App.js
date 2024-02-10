import { useState } from "react";

function App() {
  const[Length,setLength] =useState(0);
  const[NumberAllowed,setNumber]  =useState(false);
  const[password,setPassword] = useState("");
  const[charpassword,Setchar] = useState(false)
  return (
    <>
      <h3 className="text-3xl bg-blue-400 font-bold text-center h-min p-2 w-full text-white">
        Password Generator
      </h3>
      <div className="flex justify-center mt-4 gap-3">
        <input type="text" 
        readOnly
        className="outline-none border border-cyan-400 p-2 w-[400px] rounded-lg shadow-lg"
        placeholder="enter here..."
        />

        <button className="pt-2 pb-2 p-3 border border-cyan-600 rounded-lg text-white bg-teal-400">Copy</button>

      </div>
      <div>
        <input type="range"
        min={5}
        max={100}
        />
      </div>
    </>
  );
}

export default App;
