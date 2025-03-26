import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "./Header";
import Footer from "./Footer";

const EventDetails = () => {
  const eventId = useParams();
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);
  const { data, loading } = useFetch(
    `https://meetup-app-backend-rho.vercel.app/events/${eventId.eventId}`
  );

  return data ? (
    <>
      <Header />
      <main className="container p-4">
        <div className="row gap-5">
          <div className="col-md-6" key={data._id}>
            <div className="card border-0">
              <h5>{data.title}</h5>
              <p>
                Hosted By: <br /> {data.hostedBy}
              </p>
              <img src={data.eventPosterUrl} alt="" className="img-fluid" />
              <h4>Details:</h4>
              <p className="text-wrap">{data.details}</p>
              <h4>Event Tags:</h4>
              <div className="d-grid d-md-block" key={data._id}>
                {data.eventTags.map((tag) => (
                  <span className="badge text-light bg-primary me-2 mb-2 p-2 ">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="d-flex gap-4 ms-3 my-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>
                </span>{" "}
                {data.dayAndDate}, {year} <br /> {data.startTime} to{" "}
                {data.endTime} IST
              </div>
              {!data.isOnline ? (
                <div className="d-flex gap-4 ms-3 my-3">
                  <div className="d-flex gap-4">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                    </span>
                    {data.address} <br /> {data.city}, {data.state}
                  </div>
                </div>
              ) : (
                <>
                  <div className="d-flex gap-4 ms-3 my-3">
                    <div className="d-flex gap-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-camera-video"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
                          />
                        </svg>
                      </span>
                      <div>
                        Online Event <br />{" "}
                        <span className="text-secondary">
                          Link visible to attendees
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <h5 className="my-4">Speakers: ({data.speakerDetails.length})</h5>
            <div className="row">
              {data.speakerDetails.map((speaker) => (
                <div className="col-md-6">
                  <div className="border rounded">
                    <div>
                      <img
                        src={speaker.imageUrl}
                        alt=""
                        className="img-fluid rounded-circle mx-5 mt-4"
                        height={75}
                        width={75}
                      />
                    </div>
                    <div className="mt-1 text-center">
                      <p className="fw-bolder">
                        {speaker.name} <br />
                        <span className="fw-normal">{speaker.position}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default EventDetails;
