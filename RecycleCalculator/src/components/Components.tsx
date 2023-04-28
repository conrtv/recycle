import { useState } from "react";

type ComponentProps = {
  id: number;
  name: string;
  imageSrc: string;
  recycleAmount: number;
  onAddToRecycle: (id: number, amount: number) => void;
  onClick: (id: number) => void;
};

function Component(props: ComponentProps) {
  const { id, imageSrc, name, recycleAmount, onAddToRecycle, onClick } = props;
  const [amount, setAmount] = useState(0);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(parseInt(event.target.value));
  }

  function handleClick() {
    onClick(id);
    // Handle component click event
  }

  function handleAddToRecycle() {
    onAddToRecycle(id, amount);
    setAmount(0);
  }

  return (
    <div className="component" onClick={handleClick}>
      <img
        src={imageSrc}
        alt={name}
        style={{ width: "100px", height: "100px" }}
      />
      <div className="input-group">
        <input type="number" value={amount} onChange={handleInputChange} />
        <button onClick={handleAddToRecycle}>Add to Recycle</button>
      </div>
      {/* Add any other details you want to display */}
    </div>
  );
}

export default Component;
