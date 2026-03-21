import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import AssignedCampaigns from "../components/AssignedCampaigns";
import PublicRunningCampaigns from "../components/PublicRunningCampaigns";
import Footer from "../components/Footer";

function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession({ user: "Demo User" });
  }, []);

  return (
    <>
      <Header />
      <HeroBanner session={session} />

      {session && <AssignedCampaigns />}

      <h2 style={{ textAlign: "center" }}>
        Public Running Campaigns
      </h2>

      <PublicRunningCampaigns />
      <Footer />
    </>
  );
}

export default Home;