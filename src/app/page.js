import Image from "next/image";
import AlternateLayout from "./alternateLayout";
import StandardLayout from "./standardLayout";

export default function Home() {
  
  const isLoggedIn = true;
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {isLoggedIn ? <AlternateLayout /> : <StandardLayout />}
    </div>
  );
}
