/* eslint-disable react/prop-types */
import {
  FaBuffer,
  FaCalendarAlt,
  FaClipboardList,
  FaRegComments,
} from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";

const Card = ({
  name,
  img,
  viewer_name,
  viewer_img,
  viewer_Photos,
  date,
  description,
  message,
  attachment,
}) => {
  console.log(viewer_Photos);
  return (
    <div className="bg-slate-50 p-4 m-2 mb-5 h-44 flex flex-col gap-4 rounded-lg">
      <div className="flex justify-between">
        {" "}
        <div className="flex items-center font-semibold gap-2">
          <img src={img} className="h-10 w-10 rounded-full object-cover" />{" "}
          <p>{name}</p>
        </div>
        <div className="flex items-center font-semibold gap-2">
          <img
            src={viewer_img}
            className="h-10 w-10 rounded-full object-cover"
          />{" "}
          <p>{viewer_name}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {" "}
          <FaBuffer className="text-xl" />
          {description}
        </div>
        <div>
          <div className="flex items-center bg-gray-200 rounded-lg p-[2px] gap-1">
            <FaClipboardList /> 1/2
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 justify-between">
        <div className="flex items-center font-semibold gap-3">
          {viewer_Photos?.map((photo) => (
            <img
              key={photo}
              src={photo}
              className="h-9 w-9 rounded-full object-cover"
            />
          ))}
        </div>
        <div>
          <FaRegComments className="inline-block text-xl" />
          {message}
        </div>
        <div className="cursor-pointer">
          <FaPaperclip className="inline-block text-xl" />
          {attachment}
        </div>
        <div className="flex items-center">
          <FaCalendarAlt className="inline-block " />
          {date}
        </div>
      </div>
    </div>
  );
};

export default Card;
