import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [Length, setLength] = useState(5);
  const [NumberAllowed, setNumber] = useState(false);
  const [password, setPassword] = useState("");
  const [charpassword, Setchar] = useState(false);
  const passwordRef = useRef(null);
  const generate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (NumberAllowed) {
      str += "0123456789";
    }
    if (charpassword) {
      str += "!@#$%^&*()_+";
    }

    for (let index = 0; index < Length; index++) {
      const cha = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(cha);
    }
    setPassword(pass);
  }, [Length, NumberAllowed, charpassword]);
  useEffect(() => {
    generate();
  }, [Length, NumberAllowed, charpassword]);
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <h3 className="text-3xl bg-blue-400 font-bold text-center h-min p-2 w-full text-white">
        Password Generator
      </h3>
      <div className="flex justify-center mt-4 gap-3">
        <input
          type="text"
          readOnly
          value={password}
          className="outline-none border border-cyan-400 p-2 w-[400px] rounded-lg shadow-lg"
          placeholder="enter here..."
          ref={passwordRef}
        />

        <button
          onClick={copyPassword}
          className="pt-2 pb-2 p-3 border border-cyan-600 rounded-lg text-white bg-teal-400 hover:bg-teal-600"
        >
          Copy
        </button>
      </div>
      <div className="flex justify-center border flex-col items-center ">
        <div>
          <input
            type="range"
            value={Length}
            onChange={(e) => setLength(e.target.value)}
            min={5}
            max={20}
          />
          <sapn>{Length}</sapn>
        </div>
        <div className="flex gap-5">
          <input
            defaultChecked={NumberAllowed}
            type="checkbox"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <sapn>Numbers</sapn>
        </div>
        <div className="flex gap-5">
          <input
            defaultChecked={charpassword}
            type="checkbox"
            onChange={() => {
              Setchar((prev) => !prev);
            }}
          />
          <sapn>characters</sapn>
        </div>
      </div>
    </>
  );
}

export default App;
