export default function Button({ text }) {
  return (
    <button className="py-2.5 px-8 text-5xl rounded-lg text-ternary bg-buttonPrimary shadow-yellow w-auto text-lg active:translate-y-[2px]">
      {text}
    </button>
  );
}
