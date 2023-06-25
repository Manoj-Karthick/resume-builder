import NavBar from "@/components/navbar";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 bg-gray-100">
        <div className="columns-2 px-2">
          <div className="w-full px-2 py-2">Resume Display</div>
          <div className="w-full px-2 py-2">Resume Editor</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
