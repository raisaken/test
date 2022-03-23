import { useSelector } from "react-redux";
const ComponentC = () => {
  const text = useSelector((state) => state.text);
  return (
    <>
      <h1>Uppercase</h1>
      <h2>{text && text.toUpperCase()}</h2>
    </>
  );
};
export default ComponentC;