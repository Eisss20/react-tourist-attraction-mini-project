import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import TourItem from "./components/TourItem";

function App() {
  const [input, setInput] = useState("");
  const [getData, setGetData] = useState([]);

  const fetchDataTour = async () => {
    if (!input.trim()) return; 
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/trips?keywords=${input}`);
      setGetData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (input.trim()) fetchDataTour();
  }, [input]);

  return (
    <div className="font-NotoSans font-bold">
      <Header />
      <SearchInput input={input} setInput={setInput} />
      <div className="container mx-auto pl-10">
        {getData.length > 0 ? (
          getData.map((item, index) => <TourItem key={index} item={item} />)
        ) : (
          <p className="text-center text-gray-500">ไม่พบข้อมูลที่เกี่ยวข้องกับการค้นหา</p>
        )}
      </div>
    </div>
  );
}

export default App;
