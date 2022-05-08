import type { NextPage } from "next";
import {
  Header,
  CreateStunning,
  SectionVideo,
  Section3,
  Section4,
  Section5,
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
    </>
  );
};

export default Home;
