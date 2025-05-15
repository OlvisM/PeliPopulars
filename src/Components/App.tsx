import Index from "./Index";

import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center">
        <Header />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <Index />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center h-50 mt-10">
        <Footer />
      </div>
    </>
  );
}
export default App;
