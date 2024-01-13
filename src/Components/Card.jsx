/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaBuffer,
  FaCalendarAlt,
  FaClipboardList,
  FaRegComments,
} from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";
import Modal from "./Modal";
import axios from "axios";
import toast from "react-hot-toast";

const Card = ({
  id,
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
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const handleUpdateCount = async (id) => {
    const data = files.length;
    const result = await axios.put(
      `http://localhost:7000/update-attachment/${id}`,
      {
        data: data,
      }
    );
    console.log(result.data);
  };

  const handleUpload = async (id) => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    try {
      console.log(files.length);
      const response = await axios.post(
        `http://localhost:7000/upload-files`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response);
      if (response) {
        handleUpdateCount(id);
        setShowModal(false);
        toast.success("Successful !");
        setFiles([]);
        setSelectedFiles(null);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      setShowModal(false);
      toast.error("Failed !");
      setFiles([]);
      setSelectedFiles(null);
    }
  };

  return (
    <div className="bg-slate-50 p-4 m-2 mb-5 h-44 flex flex-col gap-4 rounded-lg">
      <div className="flex justify-between">
        <div className="flex items-center font-semibold gap-2">
          <img src={img} className="h-10 w-10 rounded-full object-cover" />
          <p>{name}</p>
        </div>
        <div className="flex items-center font-semibold gap-2">
          <img
            src={viewer_img}
            className="h-10 w-10 rounded-full object-cover"
          />
          <p>{viewer_name}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
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
        <div className="cursor-pointer flex items-center gap-2">
          <FaRegComments className="text-xl" />
          {message}
        </div>
        <div
          className="cursor-pointer flex items-center gap-2"
          onClick={() => openModal(id)}
        >
          <FaPaperclip className="inline-block text-xl" />
          {attachment}
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="inline-block " />
          {date}
        </div>
      </div>

      <Modal showModal={showModal} onClose={closeModal}>
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded">
          <h2 className="text-xl font-semibold mb-4">Multiple File Upload</h2>
          <input type="file" onChange={handleFileChange} multiple />
          <div className="mt-4">
            {files.length > 0 && (
              <ol className="list-decimal list-inside">
                {files.map((file, index) => (
                  <li className="pb-2" key={index}>{`${file.name}`}</li>
                ))}
              </ol>
            )}
          </div>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => handleUpload(id)}
          >
            Upload
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
