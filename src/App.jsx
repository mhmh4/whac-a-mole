import { useState } from "react";

function Mole() {
  return <div>M</div>;
}

function Hole() {
  return <div>H</div>;
}

export default function App() {
  const [moles, setMoles] = useState(new Array(9).fill(false));

  return (
    <>
      <div className="grid grid-cols-3 mx-auto w-1/2 border mt-6">
        {moles.map((isMole) => (isMole ? <Mole /> : <Hole />))}
      </div>
    </>
  );
}
