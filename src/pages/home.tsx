import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Tulunadu</h1>
          <p className="hero-subtitle">Preserving Heritage, Celebrating Culture, Sharing Traditions</p>
          <button className="cta-button">Explore Now</button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="intro-content">
          <h2>Discover the Essence of Tulunadu</h2>
          <p className="intro-text">
            Explore the rich heritage of Tulunadu through our comprehensive collection of resources. 
            From the melodious Tulu language to the vibrant traditions and delicious cuisine, 
            we celebrate everything that makes our culture unique and precious.
          </p>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="features-section">
        <h2 className="section-title">What You'll Discover</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🗣️</div>
            <h3>Language</h3>
            <p>Master the beautiful Tulu language with our comprehensive guides and resources.</p>
            <a href="/language" className="feature-link">Learn More →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎭</div>
            <h3>Culture</h3>
            <p>Dive into the vibrant traditions, festivals, and customs of Tulunadu.</p>
            <a href="/culture" className="feature-link">Explore →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>Cuisine</h3>
            <p>Savor the unique flavors and traditional recipes of Tulu cuisine.</p>
            <a href="/cuisine" className="feature-link">Taste →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Heritage</h3>
            <p>Uncover the rich history and heritage that defines our community.</p>
            <a href="/about" className="feature-link">Discover →</a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join Our Community</h2>
        <p>Be part of the movement to preserve and celebrate Tulunadu heritage</p>
        <button className="cta-button-secondary">Get Involved</button>
      </section>
    </div>
  )
}

export default Home
