// import { Header } from "./Header";

function CustomPage() {
  return (
    <div>
      <Header />

      <MainContent />

      <Footer />
    </div>
  );
}

const root = document.getElementById("root");

ReactDOM.render(<CustomPage />, root);
