import { Routes, Route, NavLink } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import Courses from "./components/pages/Courses";
import Courses_Details from "./components/pages/Courses_Details";
import Entry from "./components/pages/Entry";
import Binar from "./components/pages/Binar";
import TripDetails from "./components/pages/TripDetails";
import Working_withAi from "./components/pages/Working_withAi";
import Working_withAiJS from "./components/pages/Working_withAi_JS";
import Working_withAi_Trip from "./components/pages/Working_withAi_Trip";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  // Link Data
  // Header
  const links = [
    // Has nothing Yet
    {
      name: "مشاوره",
      to: "/مشاوره",
      hasIcon: true,
      element: <Home />,
    },
    {
      name: "دوره های آموزشی",
      to: "/Courses",
      hasIcon: false,
      element: <Courses />,
    },
    // Doesn't have a page yet
    {
      name: "راه های ارتباطی",
      to: "/راه های ارتباطی",
      hasIcon: true,
      element: <Home />,
    },
  ];

  // The newest in Vabinar
  const vabinarNewest_paths = [
    {
      element: <Working_withAiJS />,
      link: "/وبینار جاوا اسکریپت  وکاربرد آن",
    },
    {
      element: <Home />,
      link: "/وبینار ورود کار فتوشاپ",
    },
    {
      element: <Home />,
      link: "/وبینار کسب درامد دلاری از ایلاستریتور",
    },
    {
      element: <Home />,
      link: "/وبینار ساخت رزومه ui ux در سایت ها..",
    },
  ];

  // The Mentors
  // Software
  const softWare_mentorsPaths = [
    {
      //   The link's not provided yet
      element: <Home />,
      link: "/محمد میرزایی",
    },
    {
      //   The link's not provided yet
      element: <Home />,
      link: "/سهیل صدرایی",
    },
    {
      //   The link's not provided yet
      element: <Home />,
      link: "/سینا بیگی",
    },
    {
      //   The link's not provided yet
      element: <Home />,
      link: "/محمدرضا محمدنژاد",
    },
  ];
  // Calculous

  // Animation

  // Architecture

  // Electricity

  // Industry

  // Art

  // Courses
  const coursesPaths_Data = [
    {
      element: <Working_withAi />,
      link: "/Working_withAi",
    },
    {
      element: <Courses />,
      link: "/دوره اموزش درامد دلاری",
    },
    {
      element: <Courses />,
      link: "/دوره اموزش استارتاپ",
    },
    {
      element: <Courses />,
      link: "/دوره اموزش فریلنسری",
    },
  ];

  // Supporters (The links haven't been provided)
  const supportersPaths = [
    {
      to: "/supporter/1",
      element: <Home />,
    },
    {
      to: "/supporter/2",
      element: <Home />,
    },
    {
      to: "/supporter/3",
      element: <Home />,
    },
    {
      to: "/supporter/4",
      element: <Home />,
    },
    {
      to: "/supporter/4",
      element: <Home />,
    },
  ];

  return (
    <>
      <Header webIcon={"./img/siteIcon.png"} navItems={links} />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        <Route path="/Trip" element={<Working_withAi_Trip />} />

        {/* The (other) Main links in header */}
        {links.map((item, index) => (
          <Route key={index} path={item.to} element={item.element} />
        ))}

        {/* The Paths loading from software mentor boxes */}
        {vabinarNewest_paths.map((item, index) => (
          <Route key={index} path={item.link} element={item.element} />
        ))}

        {/* The paths leading from courses boxes */}
        {coursesPaths_Data.map((item, index) => (
          <Route key={index} path={item.link} element={item.element} />
        ))}

        {/* The Paths loading from supporters icons */}
        {supportersPaths.map((item, index) => (
          <Route key={index} path={item.to} element={item.element} />
        ))}

        {/* The Paths loading from software mentor boxes */}
        {softWare_mentorsPaths.map((item, index) => (
          <Route key={index} path={item.link} element={item.element} />
        ))}
      </Routes>

      <Footer />
    </>
  );
}
