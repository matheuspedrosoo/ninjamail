import type { NextPage } from "next";
import { Header, CreateStunning, SectionVideo } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <CreateStunning />
      <SectionVideo />
    </>
  );
};

export default Home;
