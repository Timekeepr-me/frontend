import Button from "./Button";
import styles from "../styles/Home.module.scss";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-start justify-evenly h-[84vh] w-full p-20 border-black border-2">
      <h1>Create your on-chain calender today.</h1>

      <Button text="Enter App" />
    </div>
  );
}
