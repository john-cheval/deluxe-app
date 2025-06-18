import React from "react";

export const EmailTemplateTwo = ({ name, email, phone, message }) => (
  <div className="p-5 font-americana">
    {/* <img
      src="/Home/Navbar/Logo.svg"
      alt="MagnitudeLogo"
      //
      className="w-full h-auto mb-5"
    /> */}

    <div>
      <h2 className="font-americana text-3xl text-center font-bold mb-2">
        Contact Details
      </h2>

      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>

      <p>
        <strong>Message:</strong> {message}
      </p>
    </div>
  </div>
);
