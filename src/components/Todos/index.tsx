import { useState } from "react";

interface TodosProps {
  date: string;
  text: string;
  isActive: boolean;
}

export function Todos({ date, text, isActive }: TodosProps) {
  const [active, setActive] = useState(isActive);
  return (
    <>
      <div>
        <span>{date}</span>
        <br />
        <p>{text}</p>
      </div>
      <input
        type="checkbox"
        name="active"
        id="active"
        checked={active}
        onChange={() => setActive(!active)}
      />
    </>
  );
}
