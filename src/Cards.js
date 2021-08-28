import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "./Data";
import "./App.css";

const Cards = () => {
  const [datax, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v1/todos")
      .then((data) => {
        console.log(data.data.data);
        setData(data.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="cards_container">
      {datax &&
        datax.map((item, id) => {
          console.log(item);
          return (
            <>
              {datax &&
                datax.map((item, id) => {
                  console.log(item);
                  return (
                    <>
                      <Data
                        user_id={item.user_id}
                        title={item.title}
                        status={item.status}
                      />
                    </>
                  );
                })}
            </>
          );
        })}
    </div>
  );
};

export default Cards;
