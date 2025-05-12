import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation on scroll for sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'publications', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-blue-50 min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Marvel Martawidjaja</h1>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {['about', 'education', 'experience', 'publications', 'skills'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize transition-all duration-300 hover:scale-105 ${activeSection === section ? 'font-semibold text-blue-600' : 'text-gray-600'}`}
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg animate-fadeIn">
            <ul className="flex flex-col p-4 space-y-3">
              {['about', 'education', 'experience', 'publications', 'skills'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => {
                      setActiveSection(section);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left capitalize py-2 px-4 rounded hover:bg-blue-100 transition ${activeSection === section ? 'bg-blue-100 font-semibold text-blue-600' : ''}`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 space-y-20">
        {/* About Section */}
        <section id="about" className="animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4 border-b border-blue-200 pb-2 inline-block">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <p className="text-lg leading-relaxed">
                A dedicated Data Science student and practitioner with extensive experience in machine learning, natural language processing, and MLOps.
                Skilled in developing predictive models, custom algorithms, and scalable ETL pipelines using tools like Python, SQL, TensorFlow, and Databricks.
                Proficient in analysing large datasets to drive business strategies, optimize processes, and enhance customer experiences.
                Experienced with Business Intelligence tools like Tableau to deliver actionable insights.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition hover:scale-105">
              <img src="https://picsum.photos/seed/marvel/400/300 " alt="Profile" className="w-full h-48 object-cover" />
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <h3 className="font-bold text-xl">Data Scientist | Researcher</h3>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Email', value: 'marvel.m818@gmail.com' },
              { title: 'Phone', value: '+6285106378743' },
              { title: 'LinkedIn', link: 'https://linkedin.com/in/marvelmartawidjaja/ ', value: 'Profile' },
              { title: 'GitHub', link: 'https://github.com/marvelm69 ', value: 'Profile' },
            ].map(({ title, value, link }) => (
              <div key={title} className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
                <h3 className="font-semibold text-gray-700">{title}</h3>
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{value}</a>
                ) : (
                  <p>{value}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4 border-b border-blue-200 pb-2 inline-block">Education</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="font-bold text-xl">BINUS University – Bachelor of Data Science (S.Kom.)</h3>
              <p className="text-sm text-gray-600">2022 - Present</p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                <li><strong>GPA:</strong> 3.61</li>
                <li><strong>Certifications:</strong> AWS Certified Cloud Practitioner, NVIDIA Fundamentals of Deep Learning Certification</li>
                <li><strong>Relevant Coursework:</strong> Introduction to Data Science, Machine Learning, Deep Learning, Artificial Intelligence, Text Mining, Model Deployment</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="font-bold text-xl">Informal Education</h3>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700">
                <li>ASEAN Data Science Explorer Enablement – ASEAN Foundation & SAP Southeast Asia (2023)</li>
                <li>Wardaya Data Science Class (Data Science and AI) – 2023</li>
                <li>Wardaya Computer Science Class (Algorithm & Data Structure) – 2022</li>
                <li>Wardaya Computer Science Class (Intro to CS) – 2021</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4 border-b border-blue-200 pb-2 inline-block">Work Experience</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="font-bold text-xl">Data Science Internship – Bank Central Asia</h3>
              <p className="text-sm text-gray-600">February 2025 – Present</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Designed prompting techniques using generative AI to summarize complaints.</li>
                <li>Developed ML models for intent classification using NLP techniques.</li>
                <li>Conducted data preprocessing including masking and cleaning.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="font-bold text-xl">Data Science Internship – United Tractors</h3>
              <p className="text-sm text-gray-600">August 2024 – February 2025</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Executed topic modeling on 20k+ comments using LangChain.</li>
                <li>Built an MLOps pipeline in Databricks achieving 91% accuracy.</li>
                <li>Analyzed 2M rows of sales data and created dashboards.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="font-bold text-xl">System Analyst – Bina Nusantara IT Division</h3>
              <p className="text-sm text-gray-600">March 2024 – February 2025</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Handled over 100 user requests and built queries.</li>
                <li>Monitored system development schedules weekly and daily.</li>
                <li>Resolved ~7 issues per day and created user guides.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="font-bold text-xl">Research Assistant – Bina Nusantara</h3>
              <p className="text-sm text-gray-600">March 2024 – February 2025</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Supported research on bipolar disorder detection and water quality prediction.</li>
                <li>Used LSTM and SHAP for model development and validation.</li>
                <li>Leveraged TensorFlow and PyTorch for optimization.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4 border-b border-blue-200 pb-2 inline-block">Publications</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="font-bold text-lg">Detecting Bipolar Disorder Based on Crowdsourced Symptoms Using Machine Learning with Shapley Additive Explanations</h3>
              <p className="text-sm text-gray-600">Procedia Computer Science, Volume 245, Pages 290–298 (2024)</p>
              <p className="mt-2"><strong>Role:</strong> Led the end-to-end project including model development, experimental design, data preprocessing, and publication.</p>
              <a href="https://doi.org/10.1016/j.procs.2024.10.254 " target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI Link</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="font-bold text-lg">Investigating the Capability of Long Short-Term Memory Input Layers for Sliding Windowed Data for Enhancing Water Quality Parameter Prediction in Small Fishponds</h3>
              <p className="text-sm text-gray-600">Communications in Mathematical Biology and Neuroscience (2024)</p>
              <p className="mt-2"><strong>Role:</strong> Participated in data analysis, model development, experiments, and paper creation.</p>
              <a href="https://doi.org/10.28919/cmbn/8841 " target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DOI Link</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="font-bold text-lg">Unravelling Public Opinion on Climate Change: An English-Language Twitter Analysis Using LDA and Advanced Sentiment Classification Techniques</h3>
              <p className="text-sm text-gray-600">Submitted</p>
              <p className="mt-2"><strong>Role:</strong> Spearheaded the project including Twitter data analysis, LDA topic modeling, sentiment classification, and manuscript preparation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="font-bold text-lg">Facial Expression Recognition Using Machine Learning for Evaluating the Friendliness of Public Service Officers</h3>
              <p className="text-sm text-gray-600">Submitted</p>
              <p className="mt-2"><strong>Role:</strong> Supported full development cycle including model building, testing, and documentation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
              <h3 className="font-bold text-lg">Artificial Intelligence-Based System for Word Recognition and Extraction in Indonesian Sign Language Videos</h3>
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="mt-2"><strong>Role:</strong> Leading system design, data architecture, team coordination, and optimization.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4 border-b border-blue-200 pb-2 inline-block">Skills</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg">Languages</h3>
            <p>English (Professional - IELTS Band 7.5), Indonesian, German (A2)</p>

            <h3 className="font-semibold text-lg mt-4">Programming Languages</h3>
            <p>Python, SQL, R, JavaScript, C, HTML, CSS, Scala</p>

            <h3 className="font-semibold text-lg mt-4">Frameworks & Libraries</h3>
            <p>TensorFlow, PyTorch, Keras, Scikit-learn, Apache Spark, MLflow, Pycaret</p>

            <h3 className="font-semibold text-lg mt-4">Tools & Platforms</h3>
            <p>Tableau, Azure Databricks, Docker, Figma, Microsoft SQL Server, Azure Cosmos DB</p>

            <h3 className="font-semibold text-lg mt-4">Techniques</h3>
            <p>Data Analysis, Visualization, Web Scraping, Machine Learning, NLP, Deep Learning, Generative AI, Computer Vision, Recommender Systems, Big Data Processing, Prompt Engineering, Model Deployment & Monitoring</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2025 Marvel Martawidjaja | Built with React & TailwindCSS</p>
      </footer>
    </div>
  );
};

export default App;
