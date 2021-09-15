function Loader({ color }: { color?: string }) {
  return <span className={`loader ${color ? color : ""}`}></span>;
}
export { Loader };
