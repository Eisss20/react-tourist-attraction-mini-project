import React, { useState, useEffect } from "react";
import axios from "axios";

function MainBody() {
  const [input, setInput] = useState("");
  const [getData, setGetData] = useState([]);

  const fechtDataTour = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${input}`
      );
      console.log(response.data.data);
      setGetData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fechtDataTour();
  }, []);

  useEffect(() => {
    fechtDataTour();
  }, [input]);

  return (
    <div className=" font-NotoSans font-bold">
      <header className="container mx-auto px-4 py-8 mt-5 text-center">
        <h1 className="mb-8 text-6xl font-bold text-blue-500">เที่ยวไหนดี</h1>
        <div className="mx-auto max-w-7xl">
          <label className="block text-gray-700 text-sm text-left">ค้นหาที่เที่ยว</label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-center shadow-sm transition-colors placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="หาที่เที่ยวแล้วไปกัน..."
          />
        </div>
      </header>

      <div className="container mx-auto px-4">
        {getData.length > 0 ? (
          getData.map((item, index) => (
            <div key={index} className="mb-8 p-6 bg-white shadow-lg rounded-lg flex">
              {/* Image Section */}
              <img
                src={item.photos[0]}
                alt={item.title}
                className="w-1/3 h-1/4  rounded-lg      mr-10"
              />

              {/* descript Section */}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600">
                  {item.description.length > 100
                    ? item.description.substring(0, 100) + "..."
                    : item.description}
                </p>

                        {/* image url */}
                <div>
                  <a
                    href={item.url} // ใช้ item.url โดยตรง
                    className="text-sky-400 font-semibold underline  hover:underline"
                    target="_blank">
                    อ่านต่อ
                  </a>
                </div>

                <div className="text-gray-500 text-sm flex flex-wrap gap-2 mb-4">
                    <span> หมวด </span>
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 underline rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>


                    {/* image inner */}
                <div className="flex space-x-2 overflow-x-auto mb-4">
                  {item.photos.slice(1).map((photo, photoIndex) => (
                    <img
                      key={photoIndex}
                      src={photo}
                      alt={`${item.title} - ${photoIndex + 1}`}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  ))}
                </div>
                  
                    

              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">ไม่พบข้อมูลที่เกี่ยวข้องกับการค้นหา</p>
        )}
      </div>
    </div>
  );
}

export default MainBody;