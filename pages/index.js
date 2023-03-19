import Head from "next/head";
import PageLayout from "../components/PageLayout";
import dynamic from "next/dynamic";
import { FlexColCentered, H1 } from "../components/styled-global-components";

const DynamicModal = dynamic(() => import("../components/Modals/BaseModal"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Playground</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <FlexColCentered className="min-h-[100vh]">
          <H1>Dev Playground</H1>
        </FlexColCentered>
      </PageLayout>
    </>
  );
}
