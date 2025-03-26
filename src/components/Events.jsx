import { useState } from "react";
import useFetch from "../useFetch";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const Events = () => {
  const { data, loading } = useFetch(
    "https://meetup-app-backend-rho.vercel.app/events"
  );

  const [value, setValue] = useState("Both");

  const filteredData =
    value === "Online"
      ? data.filter((event) => event.isOnline === true)
      : value === "Offline"
      ? data.filter((event) => event.isOnline === false)
      : data;

  return filteredData ? (
    <>
      <Header />
      <main className="container p-3 mb-5">
        <div className="d-flex justify-content-between">
          <h2 className="mb-4">Meetup Events</h2>
          <div>
            <select
              name=""
              id=""
              className="form-select "
              aria-label="Default select example"
              onChange={(e) => setValue(e.target.value)}
            >
              <option defaultValue>Select Event Type</option>
              <option value="Both">Both</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>
        <div className="row">
          {filteredData.map((event) => (
            <div className="col-md-4" key={event._id}>
              <div className="card border-0">
                <img
                  src={event.eventThumbnailUrl}
                  alt="event thumbnail"
                  height={200}
                  width={300}
                  className="rounded img-fluid card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to={`/events/${event._id}`}>{event.title}</Link>
                  </h5>
                  <p className="card-text text-secondary">
                    Hosted by: {event.hostedBy}
                  </p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                    </svg>
                    <span className="mx-2">
                      {event.dayAndDate} · {event.startTime} IST
                    </span>
                  </p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-people"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                    </svg>
                    <span className="mx-2">{event.peopleAttending} going</span>
                    <span className="mx-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-ticket-perforated"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 4.85v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9z" />
                        <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9z" />
                      </svg>
                      <span className="mx-2">
                        {event.isFree ? "Free" : "Paid"}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default Events;
