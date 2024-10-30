import React from "react";
import { Link } from "lucide-react";

function TourItem({ item }) {
  return (
    <figure className="mb-4 p-10 ml-10 w-[85rem] h-[19rem]   rounded-lg relative flex">
      <img
        src={item.photos[0]}
        alt={item.title}
        className="w-[20rem]  hover:scale-105 hover:border-4 hover:border-sky-200 h-auto shadow-xl rounded-3xl mr-10"
      />

      <section>
        <article>
          <h2 className="text-2xl hover:underline  font-semibold text-gray-700">
            {item.title}
          </h2>
          <p className="text-gray-400">
            {item.description.length > 100
              ? item.description.substring(0, 100) + "..."
              : item.description}
          </p>
        </article>
        <div>
          <a
            href={item.url}
            className="text-sky-400 font-semibold underline hover:font-bold hover:text-blue-500"
            target="_blank"
          >
            อ่านต่อ
          </a>
        </div>

        <div className="mb-4">
          <span className="text-gray-500">หมวด</span>
          {item.tags.map((tag, index) => (
            <span className="text-gray-500 text-sm " key={index}>
              {index > 0 && index === item.tags.length - 1 ? "และ" : null}
              <a
                href={tag}
                className="text-gray-500 underline px-3 hover:scale-105 hover:text-black rounded-full text-sm"
              >
                {tag}
              </a>
            </span>
          ))}
        </div>

        <div className="flex space-x-2 gap-5 mb-4">
          {item.photos.slice(1).map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`${item.title} - ${index + 1}`}
              className="w-20 h-20 shadow-xl hover:scale-105 hover:border-4 hover:border-sky-200 object-cover rounded-lg"
            />
          ))}
        </div>
        <Link className="text-sky-400 rounded-full border-sky-300 border-4 w-[4rem] h-[4rem] hover:text-sky-600 hover:border-sky-600 bottom-10 absolute right-[200px]" />
      </section>
    </figure>
  );
}

export default TourItem;
