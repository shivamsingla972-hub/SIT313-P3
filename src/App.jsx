import Header from "./components/Header";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <section className="welcome">
          <div className="welcome-content">
            <h2>Welcome to DEV@Deakin</h2>

            <p>
              Explore articles, tutorials and useful resources
              to help you learn and improve your development skills.
            </p>

            <div className="welcome-buttons">
              <a href="#articles">Explore Articles</a>
              <a href="#tutorials">Explore Tutorials</a>
            </div>
          </div>
        </section>

        <FeaturedArticles />
        <FeaturedTutorials />
      </main>

      <Footer />
    </div>
  );
}

export default App;