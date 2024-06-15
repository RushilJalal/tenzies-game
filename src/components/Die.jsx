export default function Die({ value, isHeld }) {
  return <button className={`die ${isHeld ? "held" : ""}`}>{value}</button>;
}
