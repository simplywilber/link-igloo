import Header from "./components/Header";
import Footer from "./components/Footer";
import Links from "./components/Links";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <main className="bg-sky-100 flex flex-col items-center w-screen h-auto min-[1400px]:h-screen dark:bg-gray-800">
      <Header />
      <ProfileCard />
      <Links />
      <Footer />
    </main>
  );
}

export default App;
