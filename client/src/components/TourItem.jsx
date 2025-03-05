import React, { useState } from "react";
import { Link } from "lucide-react";

function TourItem({ item }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      <figure className="mb-4 p-10 ml-10 w-[85rem] h-[19rem] rounded-lg relative flex">
        <img
          src={item.photos[0]}
          alt={item.title}
          className="w-[20rem] hover:scale-105  h-auto shadow-xl rounded-3xl mr-10 cursor-pointer"
          onClick={() => setSelectedPhoto(item.photos[0])}
        />

        <section>
          <article>
            <h2 className="text-2xl hover:underline font-semibold text-gray-700">
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
                className="w-20 h-20 shadow-xl hover:scale-105  object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              />
            ))}
          </div>
          <a
        href={item.url} >  
            <Link className="text-sky-400 rounded-full border-sky-300 border-4 w-[4rem] h-[4rem] hover:text-sky-600 hover:border-sky-600 bottom-10 absolute right-[200px]" />
            </a> 
        </section>
      </figure>

      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative">
            <img
              src={selectedPhoto}
              alt="Expanded"
              className="max-w-3xl max-h-[80vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full"
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TourItem;
 