interface Button {
  children: string;
}

export default function Button({ children }: Button) {
  return (
    <button className={`px-2 py-1 rounded-2xl bg-green-400 text-white`}>
      {children}
    </button>
  );
}
