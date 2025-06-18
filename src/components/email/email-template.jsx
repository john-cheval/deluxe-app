import React from "react";

export const EmailTemplate = ({
  company,
  name,
  email,
  phone,
  numberOfGuests,
  typeOfEvents,
  date,
  venue,
  specialRequest,
}) => (
  <div className="p-5 font-americana">
    {/* <img
      src="/Home/Navbar/Logo.svg"
      alt="MagnitudeLogo"
      //
      className="w-full h-auto mb-5"
    /> */}

    <div>
      <h2 className="font-americana text-3xl text-center font-bold mb-2">
        New Event Request
      </h2>

      <p>
        <strong>Company:</strong> {company}
      </p>
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
        <strong>Number of Guests:</strong> {numberOfGuests}
      </p>
      <p>
        <strong>Type of Events:</strong> {typeOfEvents}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Venue:</strong> {venue}
      </p>
      <p>
        <strong>Special Request:</strong> {specialRequest}
      </p>
    </div>
  </div>
);
