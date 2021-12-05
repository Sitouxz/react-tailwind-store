import "./App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="flex flex-col h-screen justify-between overflow-x-hidden">
            <Header />
            <CardContainer />
            <Footer />
        </div>
    );
}

export default App;
