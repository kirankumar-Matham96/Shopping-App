import React, { useState } from "react";

const Contact = () => {
  const [countryCode, setCountryCode] = useState("+91");
  return (
    <div>
      <h2 className="text-3xl my-5">Contact</h2>
      <div className="flex items-center">
        <img
          className="w-[40%] rounded-4xl"
          src="/contact.webp"
          alt="contact us"
        />
        <div className="text-base ml-10">
          <ul>
            <li className="mb-5">
              <span className="font-semibold">Phone: </span>
              {countryCode} 0000000000
            </li>
            <li>
              <span className="font-semibold">Address: </span>
              <p className="ms-5 mt-3 mb-2">
                <span className="font-medium">Support Center: </span>
                MyTech Customer Hub 45 Digital Drive, Unit 12B Cloud City, CR
                56012 Australia
              </p>
              <p className="ms-5">
                <span className="font-medium">Asia Headquarters: </span>
                MyTech Asia Pacific 9 Skyline Avenue, Tower B Future Park, Tokyo
                104-0024 Japan
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
