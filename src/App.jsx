import { useEffect, useState } from "react";

function Mole() {
  return <div>M</div>;
}

function Hole() {
  return <div>H</div>;
}

export default function App() {
  const [moles, setMoles] = useState(new Array(9).fill(false));
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      const newMoles = [...moles];
      newMoles[randomIndex] = true;
      setMoles(newMoles);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [moles]);

  function onClick(index) {
    const newMoles = [...moles];
    newMoles[index] = false;
    setScore(score + 1);
    setMoles(newMoles);
  }

  return (
    <>
      <div className="mx-auto w-1/2">
        <h1 className="text-center text-5xl mt-6">{score}</h1>
        <div className="grid grid-cols-3 border mt-6">
          {moles.map((isMole, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  onClick(index);
                }}
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
