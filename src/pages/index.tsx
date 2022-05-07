import type { NextPage } from "next";
import { Header, CreateStunning, SectionVideo, Section3 } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <CreateStunning />
      <SectionVideo />
      <Section3 />
    </>
  );
};

export default Home;
