export default function Die({ value, isHeld, handleClick }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };
  return (
    <button className="die" style={styles} onClick={handleClick}>
      {value}
    </button>
  );
}
