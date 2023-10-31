function Mole() {
  return <div>M</div>;
}

function Hole() {
  return <div>H</div>;
}

export default function App() {
  return (
    <>
      <div className="grid grid-cols-3 mx-auto w-1/2 border mt-6">
        <Hole />
        <Hole />
        <Hole />
        <Hole />
        <Hole />
        <Hole />
        <Hole />
        <Hole />
        <Hole />
      </div>
    </>
  );
}
