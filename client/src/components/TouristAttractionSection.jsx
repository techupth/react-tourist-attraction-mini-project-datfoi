import axios from "axios";
import { useState, useEffect } from "react";

function TouristAttractionSection() {
  const [TourAttractList, setTourAttractList] = useState([]);

  const getTourAttract = async () => {
    const result = await axios.get("http://localhost:4001/trips");
    setTourAttractList(result.data.data);
    console.log(result);
  };
}

export default TouristAttractionSection;
