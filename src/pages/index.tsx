import type { NextPage } from "next";
import {
  Header,
  CreateStunning,
  SectionVideo,
  Section3,
  Section4,
  Section5,
  SectionGetStarted,
} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <CreateStunning />
      <SectionVideo />
      <Section3 />
      <Section4 />
      <Section5 />
      <SectionGetStarted />
    </>
  );
};

export default Home;
