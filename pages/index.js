import react from "react";
import Head from "next/head";

import Card from "../components/layout/utilities/Card";
import PageContainer from "../components/layout/page/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <h1>WIATR OD MORZA</h1>
      <Card>
        <p style={{ padding: "20px" }}>serwus</p>
      </Card>
    </PageContainer>
  );
}
