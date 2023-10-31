import { useEffect, useState } from "react";

function Mole() {
  return <div>M</div>;
}

function Hole() {
  return <div>H</div>;
}

export default function App() {
  const [moles, setMoles] = useState(new Array(9).fill(false));

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
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 mx-auto w-1/2 border mt-6">
        {moles.map((isMole) => (isMole ? <Mole /> : <Hole />))}
      </div>
    </>
  );
}
