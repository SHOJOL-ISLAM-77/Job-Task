import { useEffect, useState } from "react";
import Card from "../Components/Card";
import "../Components/css.css";

const Home = () => {
  const [Cards, setCards] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [complete, setComplete] = useState([]);
  const [doing, setDoing] = useState([]);
  const [toDo, setToDo] = useState([]);
  const [underReview, setUnderReview] = useState([]);
  useEffect(() => {
    fetch("/Json.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCards(data);
      });
  }, []);

  useEffect(() => {
    const CompleteData = Cards.filter((card) => card.category == "Complete");
    setComplete(CompleteData);

    const TodoData = Cards.filter((card) => card.category == "To do");
    setToDo(TodoData);

    const IncompleteData = Cards.filter(
      (card) => card.category == "Incomplete"
    );
    setIncomplete(IncompleteData);

    const doingData = Cards.filter((card) => card.category == "Doing");
    setDoing(doingData);

    const UnderReview = Cards.filter((card) => card.category == "Under review");
    setUnderReview(UnderReview);
  }, [Cards]);

  return (
    <div className=" overflow-x-scroll m-5 scroll-x">
      <div className="flex justify-between w-screen gap-12  border ">
        <div className="max-h-full bg-slate-200">
          <div className="text-xl font-bold text-black px-10 py-3">Incomplete</div>
          <div
            style={{ height: "calc(100vh - 100px)" }}
            className=" overflow-y-auto scroll-container overflow-x-hidden"
          >
            <div className="w-[400px]">
              {incomplete?.map((card, i) => (
                <Card
                  key={i}
                  name={card.name}
                  img={card.img}
                  viewer_name={card.viewer_name}
                  viewer_img={card.viewer_img}
                  viewer_Photos={card.viewer_photos}
                  date={card.date}
                  description={card.description}
                  message={card.message_count}
                  attachment={card.attachments_count}
                ></Card>
              ))}
            </div>
          </div>
        </div>
        <div className="max-h-full bg-slate-200">
          <div className="text-xl font-bold text-black px-10 py-3">To Do</div>
          <div
            style={{ height: "calc(100vh - 100px)" }}
            className=" overflow-y-auto scroll-container overflow-x-hidden"
          >
            <div className="w-[400px]">
              {toDo?.map((card, i) => (
                <Card
                  key={i}
                  name={card.name}
                  img={card.img}
                  viewer_name={card.viewer_name}
                  viewer_img={card.viewer_img}
                  viewer_Photos={card.viewer_photos}
                  date={card.date}
                  description={card.description}
                  message={card.message_count}
                  attachment={card.attachments_count}
                ></Card>
              ))}
            </div>
          </div>
        </div>
        <div className="max-h-full bg-slate-200">
          <div className="text-xl font-bold text-black px-10 py-3">Doing</div>
          <div
            style={{ height: "calc(100vh - 100px)" }}
            className=" overflow-y-auto scroll-container overflow-x-hidden"
          >
            <div className="w-[400px]">
              {doing?.map((card, i) => (
                <Card
                  key={i}
                  name={card.name}
                  img={card.img}
                  viewer_name={card.viewer_name}
                  viewer_img={card.viewer_img}
                  viewer_Photos={card.viewer_photos}
                  date={card.date}
                  description={card.description}
                  message={card.message_count}
                  attachment={card.attachments_count}
                ></Card>
              ))}
            </div>
          </div>
        </div>
        <div className="max-h-full bg-slate-200">
          <div className="text-xl font-bold text-black px-10 py-3">Under Review</div>
          <div
            style={{ height: "calc(100vh - 100px)" }}
            className=" overflow-y-auto scroll-container overflow-x-hidden"
          >
            <div className="w-[400px]">
              {underReview?.map((card, i) => (
                <Card
                  key={i}
                  name={card.name}
                  img={card.img}
                  viewer_name={card.viewer_name}
                  viewer_img={card.viewer_img}
                  viewer_Photos={card.viewer_photos}
                  date={card.date}
                  description={card.description}
                  message={card.message_count}
                  attachment={card.attachments_count}
                ></Card>
              ))}
            </div>
          </div>
        </div>
        <div className="max-h-full bg-slate-200">
          <div className="text-xl font-bold text-black px-10 py-3">Complete</div>
          <div
            style={{ height: "calc(100vh - 100px)" }}
            className=" overflow-y-auto scroll-container overflow-x-hidden"
          >
            <div className="w-[400px]">
              {complete?.map((card, i) => (
                <Card
                  key={i}
                  name={card.name}
                  img={card.img}
                  viewer_name={card.viewer_name}
                  viewer_img={card.viewer_img}
                  viewer_Photos={card.viewer_photos}
                  date={card.date}
                  description={card.description}
                  message={card.message_count}
                  attachment={card.attachments_count}
                ></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
