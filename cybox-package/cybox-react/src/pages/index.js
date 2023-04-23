import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import AboutOne from "./AboutOne";
import AboutTwo from "./AboutTwo";
import ComingSoon from "./ComingSoon";
import Community from "./Community";
import FAQ from "./FAQ";
import Page404 from "./404";
import RoadMapOne from "./RoadMapOne";
import RoadMapTwo from "./RoadMapTwo";

import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import TeamDetail from "./TeamDetail";
import Service from "./Service";
import Testimonials from "./Testimonials";
import "./service.css";
import "./testimonials.css";
import PitchDeck from "./PitchDeck";
import "./pitchDeck.css";
import Connectbackeend from "./Connectbackeend";


const routes = [
  { path: "/", component: <HomeOne /> },
  { path: "/home-v2", component: <HomeTwo /> },
  { path: "/home-v3", component: <HomeThree /> },
  { path: "/about-v1", component: <AboutOne /> },
  { path: "/about-v2", component: <AboutTwo /> },
  { path: "/coming-soon", component: <ComingSoon /> },
  { path: "/community", component: <Community /> },
  { path: "/faq", component: <FAQ /> },
  { path: "/404", component: <Page404 /> },
  { path: "/road-map-v1", component: <RoadMapOne /> },
  { path: "/road-map-v2", component: <RoadMapTwo /> },
  
  { path: "/blog", component: <Blog /> },
  { path: "/blog-details", component: <BlogDetails /> },
  { path: "/contact", component: <Contact /> },
  { path: "/team-details", component: <TeamDetail /> },
  { path: "/service", component: <Service /> },
  { path: "/testimonials", component: <Testimonials /> },
  {path: "/PitchDeck" , component: <PitchDeck />},
  { path: "/backend", component: <Connectbackeend /> },4
];

export default routes;
