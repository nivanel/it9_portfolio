import Education from "./components/Education";
import Experience from "./components/Experience";
import GovernmentExaminationPassed from "./components/GovernmentExaminationPassed";
import PersonalInfo from "./components/PersonalInfo";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <nav className="navbar">
              <div className="mb-1">
                <ProfilePicture />
              </div>
              <div className="mb-4">
                <PersonalInfo />
              </div>
              <Skills />
            </nav>
          </div>
          <div className="col-md-9">
            <div className="mb-3">
              <Experience />
            </div>
            <div className="mb-3">
              <Education />
            </div>
            <GovernmentExaminationPassed />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
