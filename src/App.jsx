import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="container p-5 mb-5">
        <div className="mb-3 py-5">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title display-5 fw-bold py-3">
                  The people platform - Where interests become friendships
                </h2>
                <p className="card-text fs-5 text-secondary fw-normal">
                  Whatever your interest, from hiking and reading to networking
                  and skill sharing, there are thousands of people who share it
                  on Meetup. Events are happening every day—sign up to join the
                  fun.
                </p>
                <p className="card-text">
                  <Link className="btn btn-success my-3" to={"/events"}>
                    View Events
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://secure.meetupstatic.com/next/images/indexPage/irl_event.svg?w=384"
                className="img-fluid rounded-start"
                alt="People on cycle"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
