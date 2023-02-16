import React from "react";

import { useState } from "react";

function Pincode() {
  const cities = [
    "",
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Sambhaji Nagar",
    "Bhandara",
    "Kolhapur",
    "Jalgaon",
    "Mumbai City",
    "Pune",
    "Sindhudurg",
  ];
  const pins = {
    Ahmednagar: [
      414001,
      414002,
      414003,
      414004,
      414005,
      414005,
      414006,
      414007,
      414008,
      414008,
      414009,
      414009,
      414011,
      4140014,
      4140021,
      4140025,
      4140022,
      4140028,
    ],
    Akola: [444001, 444002, 444003, 444004, 444005, 444006, 444008],
    Amravati: [10721, 107222, 10711, 10711,10725],
    Bhandara: [
     4419001,
      4419002,
      4419003,
      4419004,
      4419005,
      4419005,
      4419006,
      4419007,
      4419008,
      4419008,
      4419009,
      4419009,
      4419011,
      4419014,
      44190021,
      44190025,
      44190022,
      44190028,
      ],
      "Sambhaji Nagar":[
      431001,
      431002,
      431003,
      431004,
      431005,
      431005,
      431006,
      431007,
      431008,
      431008,
      431009,
    ] ,Kolhapur:[
     416001,
      416002,
      416003,
      416004,
      416005,
      416005,
      416006,
      416007,
      416008,
      416008,
      416009,
      416009,
      416011,
      416014,
      4160021,
      4160025,
      4160022,
      4160028,
      ],Jalgaon:[425001,
      425002,
      425003,
      425004,
      425005,
      425005,
      425006,
      425007,
      425008,
      425008,
      425009,
          425009,],
      "Mumbai City":[400001,
      400002,
      400003,
      400004,
      400005,
      400005,
      400006,
      400007,
      400008,
      400008,
      400009,
      400009,
          400011,],
      "Pune": [
      411001,
      411002,
      411003,
      411004,
      411005,
      411005,
      411006,
      411007,
      411008,
          411009,],
      "Sindhudurg": [
          416601,
      416602,
      416603,
      416604,
      416605,
      416605,
      416606,
      416607,
      416608,
          416608
      ]
      
  };
  const [selectCity, setSelectCity] = useState("");
  console.log(selectCity);
  return (
    <div>
      Cascading Drop down:
      <select
        onChange={(e) => {
          setSelectCity(e.target.value);
        }}
      >
        {cities.map((city) => {
          return <option>{city}</option>;
        })}
      </select>
      {
      selectCity && (
        <select>
          {pins[selectCity].map((pin) => {
            return <option>{pin}</option>;
          })}
        </select>
      )}
    </div>
  );
}

export default Pincode;
