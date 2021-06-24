import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
      </main>
    </div>
  );
};

export default Home;
