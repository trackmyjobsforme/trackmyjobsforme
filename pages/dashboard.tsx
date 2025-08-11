<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TrackMyJobsForMe.com - AI-Powered Job Search & Tracking Platform</title>
    <meta name="description" content="Find jobs, create tailored resumes, and manage applications with AI-powered tools. Track your job search progress all in one place.">
    
    <style>
        /* Reset and base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f8fafc;
        }
        
        /* Skip to content link for accessibility */
        .skip-to-content {
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            font-weight: bold;
        }
        
        .skip-to-content:focus {
            top: 6px;
        }
        
        /* Header */
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        nav {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            text-decoration: none;
            color: white;
        }
        
        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
            flex-wrap: wrap;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.3s;
            padding: 0.5rem;
            border-radius: 4px;
        }
        
        .nav-links a:hover,
        .nav-links a:focus {
            opacity: 0.8;
            background: rgba(255,255,255,0.1);
            outline: 2px solid #fff;
            outline-offset: 2px;
        }
        
        .auth-buttons {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            text-align: center;
            transition: all 0.3s;
            min-height: 44px;
            min-width: 44px;
        }
        
        .btn:focus {
            outline: 3px solid #ffd700;
            outline-offset: 2px;
        }
        
        .btn-primary {
            background: #4f46e5;
            color: white;
        }
        
        .btn-primary:hover {
            background: #3730a3;
            transform: translateY(-2px);
        }
        
        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }
        
        .btn-secondary:hover {
            background: white;
            color: #4f46e5;
        }
        
        /* Main content */
        main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .hero {
            text-align: center;
            padding: 4rem 0;
            background: white;
            border-radius: 12px;
            margin-bottom: 3rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .hero h1 {
            font-size: clamp(2rem, 5vw, 3.5rem);
            margin-bottom: 1.5rem;
            color: #1e293b;
            line-height: 1.2;
        }
        
        .hero p {
            font-size: 1.25rem;
            color: #64748b;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        /* Features grid */
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 4rem 0;
        }
        
        .feature-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
        }
        
        .feature-card h3 {
            color: #4f46e5;
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }
        
        .feature-card p {
            color: #64748b;
            line-height: 1.7;
        }
        
        /* Demo section */
        .demo-section {
            background: white;
            padding: 3rem;
            border-radius: 12px;
            margin: 3rem 0;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .demo-section h2 {
            text-align: center;
            color: #1e293b;
            margin-bottom: 2rem;
            font-size: 2.5rem;
        }
        
        .job-search-demo {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .search-container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .search-input {
            padding: 1rem;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 1rem;
            width: 100%;
        }
        
        .search-input:focus {
            outline: none;
            border-color: #4f46e5;
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
        
        .search-filters {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        .filter-btn {
            padding: 0.5rem 1rem;
            border: 2px solid #e2e8f0;
            background: white;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s;
            min-height: 44px;
        }
        
        .filter-btn:hover,
        .filter-btn:focus {
            border-color: #4f46e5;
            background: #f8fafc;
            outline: 2px solid #4f46e5;
            outline-offset: 2px;
        }
        
        .filter-btn.active {
            background: #4f46e5;
            color: white;
            border-color: #4f46e5;
        }
        
        /* Job results */
        .job-results {
            display: grid;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .job-card {
            background: #f8fafc;
            padding: 1.5rem;
            border-radius: 8px;
            border-left: 4px solid #4f46e5;
            transition: all 0.3s;
        }
        
        .job-card:hover {
            background: #f1f5f9;
            transform: translateX(5px);
        }
        
        .job-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.5rem;
        }
        
        .job-company {
            color: #4f46e5;
            font-weight: 500;
            margin-bottom: 0.5rem;
        }
        
        .job-location {
            color: #64748b;
            font-size: 0.9rem;
        }
        
        /* Pricing section */
        .pricing {
            text-align: center;
            padding: 4rem 0;
        }
        
        .pricing h2 {
            font-size: 2.5rem;
            color: #1e293b;
            margin-bottom: 3rem;
        }
        
        .pricing-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .pricing-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            position: relative;
        }
        
        .pricing-card.featured {
            border: 3px solid #4f46e5;
            transform: scale(1.05);
        }
        
        .pricing-card h3 {
            font-size: 1.5rem;
            color: #1e293b;
            margin-bottom: 1rem;
        }
        
        .price {
            font-size: 3rem;
            font-weight: bold;
            color: #4f46e5;
            margin-bottom: 1rem;
        }
        
        .price-period {
            color: #64748b;
            font-size: 1rem;
            font-weight: normal;
        }
        
        .features-list {
            list-style: none;
            margin: 2rem 0;
            text-align: left;
        }
        
        .features-list li {
            padding: 0.5rem 0;
            color: #64748b;
            position: relative;
            padding-left: 2rem;
        }
        
        .features-list li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
        }
        
        /* Footer */
        footer {
            background: #1e293b;
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 1rem;
            flex-wrap: wrap;
        }
        
        .footer-links a {
            color: #94a3b8;
            text-decoration: none;
            padding: 0.5rem;
            border-radius: 4px;
        }
        
        .footer-links a:hover,
        .footer-links a:focus {
            color: white;
            outline: 2px solid #94a3b8;
            outline-offset: 2px;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            nav {
                flex-direction: column;
                gap: 1rem;
            }
            
            .nav-links {
                gap: 1rem;
            }
            
            .auth-buttons {
                width: 100%;
                justify-content: center;
            }
            
            main {
                padding: 1rem;
            }
            
            .hero {
                padding: 2rem 1rem;
            }
            
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .search-filters {
                justify-content: flex-start;
            }
            
            .pricing-card.featured {
                transform: none;
            }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
            .btn-primary {
                border: 2px solid #000;
            }
            
            .feature-card,
            .demo-section,
            .pricing-card {
                border: 2px solid #000;
            }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
        
        /* Focus indicators */
        *:focus {
            outline: 3px solid #ffd700;
            outline-offset: 2px;
        }
        
        button:focus,
        input:focus,
        select:focus,
        textarea:focus {
            outline: 3px solid #4f46e5;
            outline-offset: 2px;
        }
    </style>
</head>
<body>
    <a href="#main-content" class="skip-to-content">Skip to main content</a>
    
    <header>
        <nav role="navigation" aria-label="Main navigation">
            <a href="#" class="logo" aria-label="TrackMyJobsForMe.com home">TrackMyJobsForMe</a>
            
            <ul class="nav-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
            <div class="auth-buttons">
                <a href="#login" class="btn btn-secondary">Log In</a>
                <a href="#signup" class="btn btn-primary">Sign Up Free</a>
            </div>
        </nav>
    </header>
    
    <main id="main-content">
        <section class="hero" aria-labelledby="hero-title">
            <h1 id="hero-title">AI-Powered Job Search & Tracking Platform</h1>
            <p>Find jobs, create tailored resumes, and manage applications with intelligent AI tools. Track your job search progress all in one organized place.</p>
            
            <div class="cta-buttons">
                <a href="#signup" class="btn btn-primary">Start Free Trial</a>
                <a href="#demo" class="btn btn-secondary">Watch Demo</a>
            </div>
        </section>
        
        <section id="features" class="features" aria-labelledby="features-title">
            <h2 id="features-title" class="sr-only">Platform Features</h2>
            
            <div class="feature-card">
                <h3>Smart Job Search</h3>
                <p>Search across multiple job boards including ZipRecruiter, Adzuna, and CareerJet. Filter for remote work and global opportunities with our intelligent search algorithms.</p>
            </div>
            
            <div class="feature-card">
                <h3>AI Resume Optimization</h3>
                <p>Upload your resume and job description to get AI-powered suggestions that help you beat Applicant Tracking Systems (ATS) and land more interviews.</p>
            </div>
            
            <div class="feature-card">
                <h3>Personalized Cover Letters</h3>
                <p>Generate tailored cover letters for each application using AI that analyzes job requirements and matches them to your experience.</p>
            </div>
            
            <div class="feature-card">
                <h3>Application Tracking</h3>
                <p>Keep track of all your job applications, interview dates, follow-ups, and recruiter contacts in one organized dashboard.</p>
            </div>
            
            <div class="feature-card">
                <h3>Smart Reminders</h3>
                <p>Never miss a follow-up again. Get automated reminders for applications, thank you notes, and weekly motivation to keep your job search active.</p>
            </div>
            
            <div class="feature-card">
                <h3>Export & Share</h3>
                <p>Export your job tracking data to Excel, PDF, or Word formats. Share your progress with career counselors or networking contacts.</p>
            </div>
        </section>
        
        <section class="demo-section" aria-labelledby="demo-title">
            <h2 id="demo-title">Try Our Job Search Tool</h2>
            
            <div class="job-search-demo">
                <div class="search-container">
                    <label for="job-search" class="sr-only">Search for jobs</label>
                    <input 
                        type="search" 
                        id="job-search" 
                        class="search-input" 
                        placeholder="Enter job title, keywords, or company name..."
                        aria-describedby="search-help"
                    >
                    <div id="search-help" class="sr-only">Enter keywords to search for relevant job opportunities</div>
                    
                    <div class="search-filters" role="group" aria-label="Job search filters">
                        <button class="filter-btn" type="button" aria-pressed="false">Remote Only</button>
                        <button class="filter-btn" type="button" aria-pressed="false">Full Time</button>
                        <button class="filter-btn" type="button" aria-pressed="false">Part Time</button>
                        <button class="filter-btn" type="button" aria-pressed="false">Contract</button>
                        <button class="filter-btn active" type="button" aria-pressed="true">All Locations</button>
                    </div>
                    
                    <button class="btn btn-primary" type="button">Search Jobs</button>
                </div>
                
                <div class="job-results" role="region" aria-label="Job search results">
                    <div class="job-card" tabindex="0" role="button" aria-label="Software Engineer position at TechCorp">
                        <div class="job-title">Senior Software Engineer</div>
                        <div class="job-company">TechCorp Solutions</div>
                        <div class="job-location">San Francisco, CA (Remote Available)</div>
                    </div>
                    
                    <div class="job-card" tabindex="0" role="button" aria-label="Product Manager position at InnovateLabs">
                        <div class="job-title">Product Manager</div>
                        <div class="job-company">InnovateLabs</div>
                        <div class="job-location">New York, NY</div>
                    </div>
                    
                    <div class="job-card" tabindex="0" role="button" aria-label="UX Designer position at Creative Studio">
                        <div class="job-title">UX Designer</div>
                        <div class="job-company">Creative Studio Inc.</div>
                        <div class="job-location">Austin, TX (Hybrid)</div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="pricing" class="pricing" aria-labelledby="pricing-title">
            <h2 id="pricing-title">Choose Your Plan</h2>
            
            <div class="pricing-cards">
                <div class="pricing-card">
                    <h3>Starter</h3>
                    <div class="price">Free</div>
                    <ul class="features-list">
                        <li>20 AI-generated resumes & cover letters</li>
                        <li>Basic job search across 3 platforms</li>
                        <li>Application tracking for up to 50 jobs</li>
                        <li>Email reminders</li>
                        <li>Export to PDF</li>
                    </ul>
                    <a href="#signup-free" class="btn btn-secondary">Get Started Free</a>
                </div>
                
                <div class="pricing-card featured">
                    <h3>Professional</h3>
                    <div class="price">$20<span class="price-period">/month</span></div>
                    <ul class="features-list">
                        <li>100 AI credits per month</li>
                        <li>Advanced job search across 5+ platforms</li>
                        <li>Unlimited application tracking</li>
                        <li>Smart ATS optimization</li>
                        <li>LinkedIn integration</li>
                        <li>Priority email support</li>
                        <li>Export to all formats</li>
                    </ul>
                    <a href="#signup-pro" class="btn btn-primary">Start Pro Trial</a>
                </div>
                
                <div class="pricing-card">
                    <h3>Enterprise</h3>
                    <div class="price">$40<span class="price-period">/month</span></div>
                    <ul class="features-list">
                        <li>200 AI credits per month</li>
                        <li>All job search platforms</li>
                        <li>Advanced analytics & insights</li>
                        <li>Custom resume templates</li>
                        <li>Phone support</li>
                        <li>Team collaboration tools</li>
                        <li>API access</li>
                    </ul>
                    <a href="#signup-enterprise" class="btn btn-primary">Contact Sales</a>
                </div>
            </div>
        </section>
    </main>
    
    <footer role="contentinfo">
        <div class="footer-content">
            <nav class="footer-links" aria-label="Footer navigation">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#accessibility">Accessibility</a>
                <a href="#support">Support</a>
                <a href="#blog">Blog</a>
            </nav>
            <p>&copy; 2025 TrackMyJobsForMe.com. All rights reserved. | Making job searching accessible for everyone.</p>
        </div>
    </footer>
    
    <script>
        // Accessible filter button functionality
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const searchInput = document.getElementById('job-search');
            const jobCards = document.querySelectorAll('.job-card');
            
            // Filter button interactions
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Toggle active state
                    const isPressed = this.getAttribute('aria-pressed') === 'true';
                    this.setAttribute('aria-pressed', !isPressed);
                    this.classList.toggle('active');
                    
                    // Announce filter change to screen readers
                    const announcement = document.createElement('div');
                    announcement.setAttribute('aria-live', 'polite');
                    announcement.setAttribute('aria-atomic', 'true');
                    announcement.className = 'sr-only';
                    announcement.textContent = `Filter ${this.textContent} ${!isPressed ? 'applied' : 'removed'}`;
                    document.body.appendChild(announcement);
                    
                    setTimeout(() => {
                        document.body.removeChild(announcement);
                    }, 1000);
                });
            });
            
            // Job card keyboard navigation
            jobCards.forEach(card => {
                card.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        // Simulate job selection
                        this.style.backgroundColor = '#e0e7ff';
                        this.style.borderLeftColor = '#10b981';
                        
                        // Announce selection to screen readers
                        const announcement = document.createElement('div');
                        announcement.setAttribute('aria-live', 'polite');
                        announcement.className = 'sr-only';
                        announcement.textContent = `Selected job: ${this.querySelector('.job-title').textContent} at ${this.querySelector('.job-company').textContent}`;
                        document.body.appendChild(announcement);
                        
                        setTimeout(() => {
                            document.body.removeChild(announcement);
                        }, 2000);
                    }
                });
            });
            
            // Search input enhancement
            searchInput.addEventListener('input', function() {
                if (this.value.length > 2) {
                    // Simulate search suggestions
                    const existingSuggestions = document.getElementById('search-suggestions');
                    if (existingSuggestions) {
                        existingSuggestions.remove();
                    }
                    
                    const suggestions = document.createElement('div');
                    suggestions.id = 'search-suggestions';
                    suggestions.setAttribute('role', 'listbox');
                    suggestions.setAttribute('aria-label', 'Search suggestions');
                    suggestions.style.cssText = `
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: white;
                        border: 2px solid #e2e8f0;
                        border-top: none;
                        border-radius: 0 0 8px 8px;
                        z-index: 10;
                        max-height: 200px;
                        overflow-y: auto;
                    `;
                    
                    const suggestionItems = [
                        'Software Engineer',
                        'Product Manager',
                        'UX Designer',
                        'Data Scientist'
                    ];
                    
                    suggestionItems.forEach((item, index) => {
                        if (item.toLowerCase().includes(this.value.toLowerCase())) {
                            const suggestion = document.createElement('div');
                            suggestion.setAttribute('role', 'option');
                            suggestion.setAttribute('tabindex', '0');
                            suggestion.textContent = item;
                            suggestion.style.cssText = 'padding: 0.75rem; border-bottom: 1px solid #f1f5f9; cursor: pointer;';
                            
                            suggestion.addEventListener('click', () => {
                                searchInput.value = item;
                                suggestions.remove();
                                searchInput.focus();
                            });
                            
                            suggestion.addEventListener('keydown', (e) => {
                                if (e.key === 'Enter') {
                                    searchInput.value = item;
                                    suggestions.remove();
                                    searchInput.focus();
                                }
                            });
                            
                            suggestions.appendChild(suggestion);
                        }
                    });
                    
                    if (suggestions.children.length > 0) {
                        this.parentNode.style.position = 'relative';
                        this.parentNode.appendChild(suggestions);
                    }
                }
            });
            
            // Close suggestions when clicking outside
            document.addEventListener('click', function(e) {
                const suggestions = document.getElementById('search-suggestions');
                if (suggestions && !e.target.closest('.search-container')) {
                    suggestions.remove();
                }
            });
        });
        
        // Screen reader only class
        const srOnlyStyle = document.createElement('style');
        srOnlyStyle.textContent = `
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
        `;
        document.head.appendChild(srOnlyStyle);
    </script>
</body>
</html>