import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
import PageLayout from "../../components/PageLayout";
import TextEditor from "../../components/TextEditor";
import { FlexColCentered, H1 } from "@/components/styled-global-components";
const DynamicModal = dynamic(
  () => import("../../components/Modals/BaseModal"),
  {
    ssr: false,
  }
);

export default function EditorPage() {
  return (
    <>
      <Head>
        <title>Dev Playground - EditorTest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <FlexColCentered className="h-[100vh]">
          <H1>Text Editor</H1>
          <DynamicModal>
            <TextEditor />
          </DynamicModal>
        </FlexColCentered>
      </PageLayout>
    </>
  );
}