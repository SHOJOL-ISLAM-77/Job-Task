import { useEffect } from "react";
import Card from "../Components/Card";
import { data } from "autoprefixer";

const Home = () => {
  useEffect(() => {
    fetch("/Json.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className=" overflow-x-scroll m-5 container mx-auto">
      <div className="flex justify-between w-screen gap-12  border ">
        <div className="max-h-full bg-slate-200">
          <div className="text-xl font-bold text-black px-10">Incomplete</div>
          <div className="w-[400px] ">
            <Card />
          </div>
        </div>
        <div className="w-[400px] ">a</div>
        <div className="w-[400px] ">d</div>
        <div className="w-[400px] ">f</div>
        <div className="w-[400px] ">e</div>
      </div>
    </div>
  );
};

export default Home;
