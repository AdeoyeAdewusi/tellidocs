import Head from "next/head";
import Homepage from "./HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Telidoc</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Homepage />
    </>
  );
}
