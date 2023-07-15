import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import "../sass/pages/_content.scss";

const Content = () => {
  const repost = [
    {
      image: "/src/assets/car.png",
      title: "How to Drive a Car Safely",
      subtitle:
        "Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them. ",
    },
    {
      image: "/src/assets/girl.png",
      title: "How to Make Dance Music",
      subtitle:
        "Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users. ",
    },
    {
      image: "/src/assets/pc.png",
      title: "Why I Stopped Using Multiple Monitor",
      subtitle:
        "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like ",
    },
  ];
  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="menu">
            <nav>
              <div className="first">
                <div className="first_img"></div>
                <div className="text">
                  <NavLink to="/business">#Business</NavLink>
                </div>
              </div>
              <div className="second">
                <div className="second_img"></div>
                <div className="text">
                  <NavLink to="/entertainment">#Entertainment</NavLink>
                </div>
              </div>
              <div className="third">
                <div className="third_img"></div>
                <div className="text">
                  <NavLink to="/general">#General</NavLink>
                </div>
              </div>
              <div className="four">
                <div className="four_img"></div>
                <div className="text">
                  <NavLink to="/health">#Health</NavLink>
                </div>
              </div>
              <div className="five">
                <div className="five_img"></div>
                <div className="text">
                  <NavLink to="/science">#Science</NavLink>
                </div>
              </div>
              <div className="six">
                <div className="six_img"></div>
                <div className="text">
                  <NavLink to="/sport">#Sports</NavLink>
                </div>
              </div>
              <div className="seven">
                <div className="seven_img"></div>
                <div className="text">
                  <NavLink to="/technology">#Technology</NavLink>
                </div>
              </div>
              <ul></ul>
            </nav>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="single_content">
            <div className="content">
              {repost.map((el, index) => {
                return (
                  <div className="content_items" key={index}>
                    <img src={el.image} alt="Car" />
                    <div className="content_text">
                      <h1>{el.title}</h1>
                      <p>{el.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Content;
