import { useEffect, useState } from "react";

function Mole() {
  return "M";
}

function Hole() {
  return "H";
}

export default function App() {
  const [moles, setMoles] = useState(new Array(9).fill(false));
  const [score, setScore] = useState(0);

  function setMoleVisibility(index, isVisibile) {
    setMoles((curMoles) => {
      const newMoles = [...curMoles];
      newMoles[index] = isVisibile;
      return newMoles;
    });
  }

  function handleClick(index) {
    if (!moles[index]) return;
    setMoleVisibility(index, false);
    setScore(score + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      setMoleVisibility(randomIndex, true);
      setTimeout(() => {
        setMoleVisibility(randomIndex, false);
      }, 700);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [moles]);

  return (
    <>
      <div className="mx-auto w-1/2">
        <h1 className="text-center text-3xl mt-6">Score: {score}</h1>
        <div className="grid grid-cols-3 border mt-6 w-[20em] mx-auto select-none">
          {moles.map((isMole, index) => {
            return (
              <div
                className={`text-8xl w-9em text-center border ${
                  isMole ? "bg-[#d2b48c]" : "bg-green-700"
                }`}
                key={index}
                onClick={() => handleClick(index)}
              >
                {isMole ? <Mole /> : <Hole />}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
