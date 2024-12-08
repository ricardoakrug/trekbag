/* eslint-disable react/prop-types */

export default function Button({ buttonType, children, onClick }) {
  return (
    <button
      onClick={() => {
        console.log("Button clicked");
        onClick();
      }}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
