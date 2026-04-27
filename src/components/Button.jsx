export default function Button({onClick, buttontype, children}) {
  return (
    <button
    onClick={onClick}
    className={`btn ${buttontype === "secondary" ?
     "btn--secondary" : ""}`}>
      {children}    
    
    </button>
  );
}