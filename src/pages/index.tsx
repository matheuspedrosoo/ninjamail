import type { NextPage } from "next";
import {
  Header,
  CreateStunning,
  SectionVideo,
  Section3,
  Section4,
} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <CreateStunning />
      <SectionVideo />
      <Section3 />
      <Section4 />
    </>
  );
};

export default Home;
