import { useState, useEffect } from 'react'
import { supabase } from './supabase'


function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Internadda is Live 🚀</h1>
      <p>Internship Platform – Coming Alive</p>
    </div>
  );
}

export default App;

function App() {
  const [internships, setInternships] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('All Internships')

  const filters = [
    'All Internships',
    'Web Development',
    'Data Science',
    'Python',
    'Marketing',
    'Design'
  ]

  useEffect(() => {
    fetchInternships()
  }, [])

  async function fetchInternships() {
    try {
      const { data, error } = await supabase
        .from('internships')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setInternships(data || [])
    } catch (error) {
      console.error('Error fetching internships:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredInternships = activeFilter === 'All Internships' 
    ? internships 
    : internships.filter(internship => 
        internship.domain?.toLowerCase().includes(activeFilter.toLowerCase()) ||
        internship.title?.toLowerCase().includes(activeFilter.toLowerCase())
      )

  const handleApply = (internshipTitle) => {
    alert(`Application process for "${internshipTitle}" will start soon!\n\nFor now, this is a demo. In Phase 2, you'll be able to:\n1. Take a skill assessment\n2. Submit your resume\n3. Track your application`)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>Internadda</h1>
          </div>
          <div className="nav-links">
            <a href="#" className="active">Home</a>
            <a href="#">Courses</a>
            <a href="#" className="active">Internships</a>
            <a href="#">Remote Jobs</a>
            <a href="#">About Us</a>
            <a href="#">More</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Internship</h1>
          <p>Explore verified, high-value opportunities to learn, grow, and kickstart your career with our Corporate Partners.</p>
        </div>
      </header>

      {/* Filters */}
      <section className="filters-section">
        <div className="container">
          <h2>Browse Internships</h2>
          <div className="filters">
            {filters.map(filter => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Grid */}
      <main className="container">
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading internships...</p>
          </div>
        ) : filteredInternships.length === 0 ? (
          <div className="no-internships">
            <i className="fas fa-briefcase fa-3x"></i>
            <h3>No internships found</h3>
            <p>Check back soon for new opportunities!</p>
          </div>
        ) : (
          <div className="internships-grid">
            {filteredInternships.map(internship => (
              <div key={internship.id} className="internship-card">
                <div className="card-header">
                  <h3>{internship.title}</h3>
                  <span className={`status ${internship.status === 'active' ? 'active' : 'inactive'}`}>
                    {internship.status === 'active' ? 'ACTIVE' : 'COMING SOON'}
                  </span>
                </div>
                
                <div className="card-body">
                  <div className="company-info">
                    <i className="fas fa-building"></i>
                    <span>{internship.company}</span>
                  </div>
                  
                  <div className="internship-details">
                    <div className="detail">
                      <i className="fas fa-laptop-code"></i>
                      <span>{internship.domain}</span>
                    </div>
                    <div className="detail">
                      <i className="fas fa-indian-rupee-sign"></i>
                      <span>{internship.stipend}</span>
                    </div>
                    {internship.remote && (
                      <div className="detail">
                        <i className="fas fa-house-signal"></i>
                        <span>Remote</span>
                      </div>
                    )}
                  </div>
                  
                  {internship.certified && (
                    <div className="certified-badge">
                      <i className="fas fa-certificate"></i>
                      <span>Certified Opportunity</span>
                    </div>
                  )}
                  
                  <div className="features">
                    {internship.corporate_partner && (
                      <span className="feature">Corporate Partners</span>
                    )}
                    {internship.vetted_experts && (
                      <span className="feature">Vetted by Experts</span>
                    )}
                  </div>
                </div>
                
                <div className="card-footer">
                  <button 
                    className="apply-btn"
                    onClick={() => handleApply(internship.title)}
                  >
                    <i className="fas fa-paper-plane"></i>
                    Apply Now
                  </button>
                  <button className="practice-btn">
                    <i className="fas fa-clipboard-check"></i>
                    Practice Test
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Internadda</h3>
              <p>Transforming careers through learning, interning, and earning opportunities.</p>
              <div className="social-icons">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fas fa-envelope"></i></a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Learn</h4>
              <ul>
                <li><a href="#">Browse Courses</a></li>
                <li><a href="#">Free Courses</a></li>
                <li><a href="#">Paid Courses</a></li>
                <li><a href="#">Offline Academy</a></li>
                <li><a href="#">Become an Instructor</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Intern</h4>
              <ul>
                <li><a href="#">Find Internships</a></li>
                <li><a href="#">For Employees</a></li>
                <li><a href="#">For Companies</a></li>
                <li><a href="#">Success Stories</a></li>
                <li><a href="#">Career Coaching</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Career Tools</h4>
              <ul>
                <li><a href="#">ATS Score Checker</a></li>
                <li><a href="#">Resume Builder</a></li>
                <li><a href="#">Interview Prep</a></li>
                <li><a href="#">Cover Letter Gen</a></li>
                <li><a href="#">AI Playground</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 Internadda. All rights reserved. | Developed by Internadda Team</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
