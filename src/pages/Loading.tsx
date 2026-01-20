import { BlinkBlur } from "react-loading-indicators";

export default function Loadin() {
  return (
    <div className="flex w-full h-screen  justify-center items-center">
      <BlinkBlur
        text="loading"
        color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]}
      />
    </div>
  );
}
