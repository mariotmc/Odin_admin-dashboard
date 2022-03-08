import Project from "./Project";
import Announcement from "./Announcement";
import Trend from "./Trend";
import userIcon from "../media/user.png";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <section className="projects-container">
        <h2 className="dashboard-heading">Your Projects</h2>
        <Project heading="Super Cool Project" />
        <Project heading="Less Cool Project" />
        <Project heading="Impossible App" />
        <Project heading="Easy Peasy App" />
        <Project heading="Ad Blocker" />
        <Project heading="Money Maker" />
      </section>

      <div className="announcements-trends-container">
        <section className="announcements-container">
          <h2 className="dashboard-heading">Announcements</h2>
          <div className="items-container">
            <Announcement heading="Site Maintenance" />
            <Announcement heading="Community Share Day" />
            <Announcement heading="Updated Privacy Policy" />
          </div>
        </section>

        <section className="trending-container">
          <h2 className="dashboard-heading">Trending</h2>
          <div className="items-container">
            <Trend username="@tegan" fullName="World Peace Builder" img={userIcon} />
            <Trend username="@morgan" fullName="Super Cool Project" img={userIcon} />
            <Trend username="@kendall" fullName="Life Changing App" img={userIcon} />
            <Trend username="@alex" fullName="No Traffic Maker" img={userIcon} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
