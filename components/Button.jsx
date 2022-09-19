export default function Button({ text, click }) {
  return (
    <button
      onClick={click}
      className="flex items-center justify-center py-1 px-4 mx-8 my-auto text-5xl rounded-lg text-ternary bg-buttonPrimary shadow-yellow text-lg active:translate-y-[2px]"
    >
      {text}
    </button>
  );
}
