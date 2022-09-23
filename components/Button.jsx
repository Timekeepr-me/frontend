export default function Button({ text, click }) {
  return (
    <button
      onClick={click}
      className="flex items-center justify-center py-1 px-4 mx-auto my-auto text-3xl rounded-lg text-ternary bg-buttonPrimary shadow-yellow text-lg active:translate-y-[2px]"
    >
      {text}
    </button>
  );
}
