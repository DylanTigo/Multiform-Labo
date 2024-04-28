// eslint-disable-next-line react/prop-types
export default function ButtonInput({children}) {
  return (
    <button className=" btn text-nowrap min-w-24 bg-blue-200 border-2 !mt-0 border-blue-200 hover:border-e-blue-400 hover:bg-blue-400">
      {children}
    </button>
  );
}
