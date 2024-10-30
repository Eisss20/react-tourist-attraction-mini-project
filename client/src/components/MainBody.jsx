import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'lucide-react';

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
      <header className="container mx-auto px-4  py-8 mt-5 text-center">
        <h1 className="mb-8 text-6xl font-bold text-blue-500">เที่ยวไหนดี</h1>
        <div className="mx-auto max-w-7xl">
          <label className="block text-gray-700 text-sm text-left">ค้นหาที่เที่ยว</label>
          <input
            className="w-full rounded-lg border-b-2 border-gray-300 px-4 py-3 text-sm text-center shadow-sm transition-colors placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="หาที่เที่ยวแล้วไปกัน..."
          />
        </div>
      </header>

      <body className="container mx-auto pl-10">
        {getData.length > 0 ? (
          getData.map((item, index) => (
            <figure key={index} className="mb-4 p-10 ml-10 w-[85rem]  rounded-lg relative flex">
              {/* Image Section */}
              <img
                src={item.photos[0]}
                alt={item.title}
                className="w-[20rem] hover:scale-105  hover:border-4 hover:border-sky-200 h-auto shadow-xl rounded-3xl mr-10"
              />

              {/* content Section */}
              {/* title */}
              <section>
                <article>
                <h2 className="text-2xl  hover:underline font-semibold text-gray-700 ">
                  {item.title}
                </h2>
                <p className="text-gray-400">
                  {item.description.length > 100
                    ? item.description.substring(0, 100) + "..."
                    : item.description}
                </p>
                </article>
                        {/* image url */}
                <div>
                  <a
                    href={item.url} // ใช้ item.url โดยตรง
                    className="text-sky-400 font-semibold underline hover:font-bold hover:text-blue-500 "
                    target="_blank">
                    อ่านต่อ
                  </a>
                </div>

                <article className="text-gray-400 text-sm flex flex-wrap gap-1 mb-4">
                    <span> หมวด </span>
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 underline hover:scale-105 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </article>


                    {/* image inner */}
                <div className="flex space-x-2 gap-5 mb-4 ">
                  {item.photos.slice(1).map((photo, photoIndex) => (
                    <img
                      key={photoIndex}
                      src={photo}
                      alt={`${item.title} - ${photoIndex + 1}`}
                      className="w-20 h-20 shadow-xl hover:scale-105 hover:border-4 hover:border-sky-200  object-cover rounded-lg "
                    />
                  ))}
                </div>
                <Link className=" text-sky-400 rounded-full border-sky-300 border-4 ru w-[4rem]  h-[4rem] bottom-10 absolute right-[200px] "/>
              </section>
            </figure>
          ))
        ) : (
          <p className="text-center text-gray-500">ไม่พบข้อมูลที่เกี่ยวข้องกับการค้นหา</p>
        )}
      </body>
    </div>
  );
}

export default MainBody;