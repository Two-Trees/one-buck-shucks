import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";


const Calendar = () => {

    const [cardData, setCardData] = useState([]);
    const [monday, setMonday] = useState([])
    const [tuesday, setTuesday] = useState([])


    useEffect(() => {
      // Fetch data from your backend server
      const mongoString = process.env.MONGO_STRING;
      axios
        .get("http://localhost:4000/api/cards", {
          headers: {
            Authorization: `Bearer ${mongoString}`,
          },
        })
        .then((res) => setCardData(res.data))
        .catch((error) => console.error("Error:", error));

        sortMonday()

    }, []);

    const sortMonday = () => {}
}

export default Calendar