import { useState, useEffect } from 'react';

// Import local assets
import logoBlack from './assets/2 - Logo/Main logo/SVG/LevelSet Bio - Logo - Black.svg';
import logoWhite from './assets/2 - Logo/Main logo/SVG/LevelSet Bio - Logo - White.svg';
import arrowSvg from './assets/svgs/arrow.svg';
import chevronSvg from './assets/svgs/chevron.svg';
import linkedinSvg from './assets/svgs/linkedin-official.svg';
import cornerSvg from './assets/svgs/corner.svg';
import watermarkSvg from './assets/svgs/watermark.svg';

import benefitPortfolio from './assets/svgs/benefit-portfolio.svg';
import benefitPharma from './assets/svgs/benefit-pharma.svg';
import benefitCapital from './assets/svgs/benefit-capital.svg';
import benefitExecution from './assets/svgs/benefit-execution.svg';
import benefitRisk from './assets/svgs/benefit-risk.svg';
import benefitData from './assets/svgs/benefit-data.svg';

import heroBg from './assets/images/hero-bg.png';
import cellsPillar from './assets/images/cells-pillar.png';
import labResearch from './assets/images/lab-research.png';
import news1 from './assets/images/news-1.png';
import news2 from './assets/images/news-2.png';
import news3 from './assets/images/news-3.png';
import amiPhoto from './assets/images/ami.png';
import martaPhoto from './assets/images/marta.png';
import advisor1 from './assets/images/advisor-1.png';
import advisor2 from './assets/images/advisor-2.png';
import advisor3 from './assets/images/advisor-3.png';
import advisor4 from './assets/images/advisor-4.png';
import tempusLogo from './assets/images/tempus.png';
import radyusLogo from './assets/images/radyus.png';
import pipeImmunology from './assets/images/pipeline/immunology.png';
import pipeOncology from './assets/images/pipeline/oncology.png';
import pipeNeuro from './assets/images/pipeline/neuro.png';
import pipeMetabolic from './assets/images/pipeline/metabolic.png';
import pipeUnderserved from './assets/images/pipeline/underserved.png';

// EXACT SVGs FROM THE SCRIPT
const LogoSVG = ({ color = "black" }) => (
  <img 
    src={color === 'white' ? logoWhite : logoBlack} 
    alt="LevelSet Bio" 
    style={{ width: '280px' }} 
  />
);

const WatermarkSVG = () => (
  <div className="background-watermark" style={{ backgroundImage: `url(${watermarkSvg})` }}></div>
);

const BenefitIcon = ({ title }) => {
  const iconMap = {
    'Portfolio Engine': benefitPortfolio,
    'Pharma Alignment': benefitPharma,
    'Capital Efficiency': benefitCapital,
    'Unified Execution': benefitExecution,
    'Risk Discipline': benefitRisk,
    'Clean Data Packages': benefitData
  };
  return <img src={iconMap[title]} alt={title} style={{ width: '48px', height: '48px', marginBottom: '24px' }} />;
};

const CornerSymbolSVG = () => (
  <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0.0208558C1.89976 -0.0448533 4.89446 0.0676891 6.81627 0.0457861L7 0.0457861V0.228312C6.97428 2.14483 6.97428 5.10539 6.90813 7H6.72441C5.55589 4.91921 5.19211 2.56829 5.16271 0.228312L6.81627 1.87104C4.46086 1.84549 2.09084 1.3722 0 0.204036L0 0.0208558Z" fill="#55BEC6"></path>
  </svg>
);

const PipelineGraphicSVG = () => (
  <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 443 413" preserveAspectRatio="none" width="100%" height="100%">
    <path opacity="0.4" d="M0 1.32559C27.3914 0.371164 70.5713 0.318141 98.2806 0H100.93V2.65117C100.559 30.4885 100.559 73.4905 99.6052 101.01H96.9561C80.108 70.7863 74.8628 36.6392 74.439 2.65117L98.2806 26.5117C64.3195 26.1406 30.1465 20.9443 0 3.97676V1.32559Z" fill="#55BEC6" fillOpacity="0.11"></path>
    <path opacity="0.66" d="M170.759 1.32559C198.15 0.371164 241.33 0.318141 269.04 0H271.689V2.65117C271.318 30.4885 271.318 73.4905 270.364 101.01H267.715C250.867 70.7863 245.622 36.6392 245.198 2.65117L269.04 26.5117C235.078 26.1406 200.905 20.9443 170.759 3.97676V1.32559Z" fill="#55BEC6" fillOpacity="0.11"></path>
    <path d="M341.518 1.32559C368.909 0.371164 412.089 0.318141 439.798 0H442.447V2.65117C442.077 30.4885 442.077 73.4905 441.123 101.01H438.474C421.626 70.7863 416.381 36.6392 415.957 2.65117L439.798 26.5117C405.837 26.1406 371.664 20.9443 341.518 3.97676V1.32559Z" fill="#55BEC6" fillOpacity="0.11"></path>
    <path opacity="0.4" d="M170.759 157.321C198.15 156.366 241.33 156.313 269.04 155.995H271.689V158.646C271.318 186.484 271.318 229.486 270.364 257.005H267.715C250.867 226.781 245.622 192.634 245.198 158.646L269.04 182.507C235.078 182.136 200.905 176.939 170.759 159.972V157.321Z" fill="#55BEC6" fillOpacity="0.11"></path>
    <path opacity="0.66" d="M341.518 157.321C368.909 156.366 412.089 156.313 439.798 155.995H442.447V158.646C442.077 186.484 442.077 229.486 441.123 257.005H438.474C421.626 226.781 416.381 192.634 415.957 158.646L439.798 182.507C405.837 182.136 371.664 176.939 341.518 159.972V157.321Z" fill="#55BEC6" fillOpacity="0.11"></path>
    <path opacity="0.4" d="M341.518 313.316C368.909 312.361 412.089 312.308 439.798 311.99H442.447V314.641C442.077 342.479 442.077 385.481 441.123 413H438.474C421.626 382.777 416.381 348.629 415.957 314.641L439.798 338.502C405.837 338.131 371.664 332.935 341.518 315.967V313.316Z" fill="#55BEC6" fillOpacity="0.11"></path>
  </svg>
);

const ArrowSVG = ({ color = "black" }) => (
  <img src={arrowSvg} alt="" style={{ width: '20px', height: '20px', filter: color !== 'black' ? 'hue-rotate(180deg)' : 'none' }} />
);

const ChevronSVG = () => (
  <img src={chevronSvg} alt="" style={{ width: '16px', height: '16px', opacity: 0.3, margin: '0 10px' }} />
);

const LinkedInSVG = () => (
  <img src={linkedinSvg} alt="LinkedIn" style={{ width: '22px', height: '22px' }} />
);

const bios = {
  ami: {
    id: 'ami',
    name: "Ami Patel Shah, JD",
    title: "Managing Partner",
    image: amiPhoto,
    linkedin: "#",
    text: "Ami Patel Shah is a Founder and Managing Partner at LevelSet Bio, leading Capital Structuring and Portfolio Governance across the platform. She is an expert in IP-driven investment strategy, portfolio valuation and innovative financing models for pharma assets. Prior to LevelSet Bio, Ami was a Managing Director at Fortress Investment Group, where she helped build the world's first dedicated IP investment fund, managing over $3 billion in assets. She later founded LevelSet Capital, focused on unlocking value from intellectual property originating in universities and R&D institutions. Her work at LevelSet Bio focuses on structuring capital-efficient portfolios and aligning financing strategies with long-term value creation and exit readiness."
  },
  marta: {
    id: 'marta',
    name: "Marta New, PhD, MBA",
    title: "Founding Partner",
    image: martaPhoto,
    linkedin: "#",
    text: "Marta New is a Founding Partner at LevelSet Bio, leading Portfolio Strategy and R&D Oversight across the platform. With over 15 years of experience across venture capital, pharma, and biotech boards, including roles at Baxter Ventures and Agent Capital, Marta has consistently operated at the intersection of science, capital and execution. Prior to LevelSet Bio, Marta was the Founder and CEO of Radyus Research & Development, where she built a global drug development CRO and program management organization supporting biotech companies from preclinical development through clinical execution. At LevelSet Bio, she leads portfolio strategy and R&D operating execution to advance programs toward clinical value inflection and pharmaceutical partnerships."
  },
  advisor1: {
    id: 'advisor1',
    name: "Alexandre LeBeaut, MD",
    title: "Scientific Advisor",
    image: advisor1,
    linkedin: "#",
    text: "Alexandre LeBeaut, MD, serves as a Scientific Advisor to LevelSet Bio, bringing decades of global clinical development and regulatory leadership. His expertise is instrumental in de-risking clinical strategies and ensuring programs are designed for successful pharmaceutical integration and regulatory approval."
  },
  advisor2: {
    id: 'advisor2',
    name: "Matt Tremblay, PhD",
    title: "Scientific Advisor",
    image: advisor2,
    linkedin: "#",
    text: "Matt Tremblay, PhD, provides strategic scientific guidance to the LevelSet Bio platform. With a deep background in translational science and drug discovery, he helps identify and validate high-potential assets that fit the LevelSet model of disciplined, data-driven execution."
  },
  advisor3: {
    id: 'advisor3',
    name: "Dennis Liotta, PhD",
    title: "Scientific Advisor",
    image: advisor3,
    linkedin: "#",
    text: "Dennis Liotta, PhD, is a world-renowned medicinal chemist and Scientific Advisor to LevelSet Bio. His vast experience in drug development and chemistry is vital in assessing the biological and chemical feasibility of assets entering the LevelSet portfolio."
  },
  advisor4: {
    id: 'advisor4',
    name: "Jeni Fan",
    title: "Industry Advisor",
    image: advisor4,
    linkedin: "#",
    text: "Jeni Fan serves as an Industry Advisor, bridging the gap between drug development execution and pharmaceutical partnering. Her insights into market dynamics and buyer requirements ensure that LevelSet programs are optimized for successful exit and integration."
  }
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [hoveredPipeImage, setHoveredPipeImage] = useState(pipeImmunology);

  const openModal = (id) => {
    setModalData(bios[id]);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalData(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="site-wrapper">
      <div className="app-root">
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-top">
          <div className="logo-wrapper">
            <LogoSVG />
          </div>
        </div>
        <div className="header-bottom">
          <nav className="nav-container">
            <ul className="nav-links">
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#model">MODEL</a></li>
              <li><a href="#team">TEAM</a></li>
              <li><a href="#partners">PARTNERS</a></li>
              <li><a href="#pipeline">PIPELINE</a></li>
              <li><a href="#news">NEWS</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero">
          <div className="container hero-grid">
            <div className="hero-left">
              <div className="eyebrow-container">
                 <CornerSymbolSVG /> 
                 <span className="eyebrow-text">LEVELSET BIO</span>
              </div>
              <h1>Building Pharma-Ready Assets with Disciplined Execution</h1>
              <p>LevelSet Bio is an integrated drug development company designed to turn high-potential science into de-risked, pharma-ready programs through repeatable, portfolio-scale execution.</p>
              <div className="hero-actions">
                <a href="#about" className="btn btn-outline">Learn More <div className="arrow-wrap"><ArrowSVG /></div></a>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-image-container">
                <img src={heroBg} alt="Microscopic cells" />
              </div>
            </div>
            <div className="hero-floating-bar">
               <div className="bar-item">Milestone-Driven Capital <ChevronSVG /></div>
               <div className="bar-item">De-Risked Development <ChevronSVG /></div>
               <div className="bar-item">Pharma-Ready Programs</div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="about-pattern-bg">
            <img src={watermarkSvg} alt="" className="about-watermark-icon" />
          </div>
          
          <div className="container">
            <div className="about-layout-v2">
              <div className="about-content-left">
                <div className="eyebrow-container">
                  <CornerSymbolSVG />
                  <span className="eyebrow-text">WHO WE ARE</span>
                </div>
                <h2>Building the Future of Drug Development</h2>
                <p className="lead-text">Too many promising drug programs stall or fail for reasons that have little to do with biology and everything to do with fragmented development, misaligned capital and reactive decision-making.</p>
                <p>Our mission is to build a capital-efficient drug development platform that systematically advances high-potential assets with institutional-grade execution. We design programs to withstand regulatory, operational and capital constraints from day one, so strong science is translated into credible, pharma-ready programs.</p>
              </div>

              <div className="about-image-right">
                 <img src={cellsPillar} alt="Cells Pillar" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="dark-section">
          <div className="dark-pattern-overlay">
            <div className="corner-grid-pattern white-corners">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-corner-item"><CornerSymbolSVG /></div>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="vision-content">
               <div className="eyebrow-container cyan-text">
                 <CornerSymbolSVG />
                 <span className="eyebrow-text">VISION</span>
              </div>
              <h2 className="vision-text">
                <span className="muted-text">We aim to set a </span>
                <span className="bold-text">new standard for repeatable value creation in drug development,</span>
                <span className="muted-text"> where science, capital and R&D execution are successfully centralized.</span>
              </h2>
            </div>
          </div>
          <div className="vision-image-wrap">
            <img src={labResearch} alt="Lab Research" />
          </div>
        </section>

        {/* Approach Section */}
        <section id="model" className="approach-section">
          <div className="container">
            <div className="approach-layout">
              <div className="approach-left">
                <h2>What our Approach Enables</h2>
                <p>Builds a scalable clinical-stage portfolio combining AI insights, disciplined execution and capital efficiency to consistently develop pharma-ready assets.</p>
                <a href="mailto:info@levelsetbio.com" className="btn-modern">Contact us to Learn More <ArrowSVG /></a>
              </div>
              <div className="approach-right">
                <div className="benefits-grid">
                  {[
                    { title: 'Portfolio Engine', desc: 'Centralized portfolio-scale R&D engine' },
                    { title: 'Pharma Alignment', desc: 'Development design with pharma buyers in mind' },
                    { title: 'Capital Efficiency', desc: 'Capital-efficient milestone gating' },
                    { title: 'Unified Execution', desc: 'Integrated CMC, regulatory and clinical execution' },
                    { title: 'Risk Discipline', desc: 'Structural risk management and early kill criteria' },
                    { title: 'Clean Data Packages', desc: 'Clean, diligence-ready data packages for partnering' }
                  ].map(item => (
                    <div className="benefit-card-v2" key={item.title}>
                      <div className="card-top">
                        <BenefitIcon title={item.title} />
                        <div className="card-divider"></div>
                        <h3>{item.title}</h3>
                      </div>
                      <div className="card-bottom">
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team">
          <div className="container">
             <div className="eyebrow-container">
               <CornerSymbolSVG />
               <span className="eyebrow-text">TEAM</span>
            </div>
            <div className="team-layout">
              <div className="team-sidebar">
                <h2>Our People Dedicated to Scaling your Assets</h2>
                <p className="team-intro">Experienced investors and operators across drug development, IP strategy, investing in and scaling companies, asset transactions, supported by global network of advisors.</p>
              </div>
              <div className="team-grid">
                <div className="member-card-v2" onClick={() => openModal('ami')}>
                  <div className="member-photo">
                    <img src={amiPhoto} alt="Ami Patel Shah" />
                  </div>
                  <div className="member-meta">
                    <h3>Ami Patel Shah, JD</h3>
                    <div className="divider-sm"></div>
                    <p className="title">Managing Partner</p>
                    <div className="member-footer">
                      <span className="read-bio">Read Bio</span>
                      <a href="#" className="linkedin-link"><LinkedInSVG /></a>
                    </div>
                  </div>
                </div>
                <div className="member-card-v2" onClick={() => openModal('marta')}>
                  <div className="member-photo">
                    <img src={martaPhoto} alt="Marta New" />
                  </div>
                  <div className="member-meta">
                    <h3>Marta New, PhD, MBA</h3>
                    <div className="divider-sm"></div>
                    <p className="title">Founding Partner</p>
                    <div className="member-footer">
                      <span className="read-bio">Read Bio</span>
                      <a href="#" className="linkedin-link"><LinkedInSVG /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="advisory-board-section">
              <h3 className="section-label">Advisory Board</h3>
              <div className="full-divider"></div>
              <div className="advisory-grid-v2">
                {[
                  { id: 'advisor1', name: 'Alexandre LeBeaut, MD', title: 'Scientific Advisor', img: advisor1 },
                  { id: 'advisor2', name: 'Matt Tremblay, PhD', title: 'Scientific Advisor', img: advisor2 },
                  { id: 'advisor3', name: 'Dennis Liotta, PhD', title: 'Scientific Advisor', img: advisor3 },
                  { id: 'advisor4', name: 'Jeni Fan', title: 'Industry Advisor', img: advisor4 }
                ].map(advisor => (
                  <div className="advisor-card-v2" key={advisor.name} onClick={() => openModal(advisor.id)}>
                    <div className="advisor-photo">
                      <img src={advisor.img} alt={advisor.name} />
                    </div>
                    <div className="advisor-meta">
                      <h4>{advisor.name}</h4>
                      <div className="divider-sm"></div>
                      <p>{advisor.title}</p>
                      <div className="member-footer">
                        <span className="read-bio">Read Bio</span>
                        <a href="#" className="linkedin-link"><LinkedInSVG /></a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners">
          <div className="corner-grid-pattern">
             {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-corner-item"><CornerSymbolSVG /></div>
              ))}
          </div>
          <div className="container partners-layout-v2">
            <div className="partners-sidebar">
               <div className="eyebrow-container">
                 <CornerSymbolSVG />
                 <span className="eyebrow-text">PARTNERS</span>
              </div>
              <h2>Partners</h2>
              <div className="full-divider"></div>
              <p>LevelSet Bio partners with best-in-class organizations across AI, translational science and global clinical development to build a repeatable, capital-efficient drug development engine.</p>
              <p>This ecosystem enables faster decision-making, smarter biomarker strategy and scalable portfolio execution.</p>
            </div>
            <div className="partners-cards-v2">
              <div className="partner-box dark">
                <div className="partner-header">
                   <img src={tempusLogo} alt="Tempus AI" style={{ height: '40px' }} />
                </div>
                <div className="partner-content">
                  <div className="divider-light"></div>
                  <h3>Tempus AI</h3>
                  <div className="divider-light"></div>
                  <p>Enables AI-driven insights across biomarker strategy, translational science and clinical development, supporting data-informed decision-making and pharma-ready evidence generation.</p>
                </div>
              </div>
              <div className="partner-box dark">
                <div className="partner-header">
                   <img src={radyusLogo} alt="Radyus R&D" style={{ height: '32px' }} />
                </div>
                <div className="partner-content">
                  <div className="divider-light"></div>
                  <h3>Radyus Research & Development</h3>
                  <div className="divider-light"></div>
                  <p>Provides integrated R&D operations, PMO, regulatory strategy and development execution, serving as a core operating partner to ensure disciplined, portfolio-scale delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline Section */}
        <section id="pipeline">
          <div className="corner-grid-pattern">
             {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-corner-item"><CornerSymbolSVG /></div>
              ))}
          </div>
          <div className="container">
            <div className="eyebrow-container">
               <CornerSymbolSVG />
               <span className="eyebrow-text">PIPELINE</span>
            </div>
            <h2>Pipeline</h2>
            
            <div className="pipeline-main-grid">
              <div className="pipeline-visual-col">
                <div className="pipeline-image-frame">
                   <img 
                      key={hoveredPipeImage} 
                      src={hoveredPipeImage} 
                      alt="Pipeline" 
                      className="fade-in"
                   />
                </div>
                <div className="pipeline-mission-wrap">
                  <h3>Have an asset that fits our model?</h3>
                  <div className="full-divider"></div>
                  <p>LevelSet Bio is actively growing its initial portfolio through in-licensing late preclinical to early clinical assets, advancing high-potential programs through disciplined development to value-creating inflection points.</p>
                  <a href="mailto:info@levelsetbio.com" className="btn btn-outline">Contact us to Learn More <div className="arrow-wrap"><ArrowSVG /></div></a>
                </div>
              </div>

              <div className="pipeline-list-col">
                {[
                  { title: 'Immunology & Inflammation', img: pipeImmunology, desc: 'Novel immunomodulatory approaches with biomarker-driven strategies targeting chronic inflammatory diseases, including IBD and autoimmune disorders' },
                  { title: 'Oncology', img: pipeOncology, desc: 'Precision oncology assets with strong biological rationale, biomarker-defined populations, and clear differentiation in solid and hematologic tumors' },
                  { title: 'Neurodegenerative', img: pipeNeuro, desc: 'Programs addressing high-unmet-need neurological diseases, incorporating translational biomarkers to enable patient stratification and development decisions' },
                  { title: 'Metabolic/ Obesity', img: pipeMetabolic, desc: 'Next-generation metabolic therapies with emerging biomarker strategies to improve patient selection, efficacy, and long-term outcomes' },
                  { title: 'Underserved Disease Areas', img: pipeUnderserved, desc: 'High-impact programs in rare and underserved diseases with defined biomarkers and clear paths to differentiation and accelerated development' }
                ].map(item => (
                  <div 
                    className="pipeline-item" 
                    key={item.title}
                    onMouseEnter={() => setHoveredPipeImage(item.img)}
                  >
                    <div className="pipeline-item-content">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                    <ArrowSVG color="#55BEC6" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="dark-section">
           <div className="dark-pattern-overlay">
            <div className="corner-grid-pattern white-corners">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-corner-item"><CornerSymbolSVG /></div>
              ))}
            </div>
          </div>
          <div className="container">
             <div className="eyebrow-container">
               <CornerSymbolSVG />
               <span className="eyebrow-text">IN THE NEWS</span>
            </div>
            <div className="news-grid">
              {[
                { date: 'LevelSet Bio Launches Integrated Drug Development Platform', title: 'Platform debuts with founding partners and initial strategic collaborations.', img: news1 },
                { date: 'LevelSet Bio Adds Industry Leaders to Advisory Boards', title: 'LevelSet Bio Adds Industry Leaders to Advisory Boards', img: news2 }
              ].map(news => (
                <div className="news-card" key={news.date}>
                  <div className="news-card-image">
                    <img src={news.img} alt={news.date} />
                  </div>
                  <div className="news-card-content">
                    <p className="news-headline">{news.date}</p>
                    <h3 className="news-sub">{news.title}</h3>
                    <a href="#" className="read-more">Read Press Release <div className="arrow-wrap"><ArrowSVG color="#55BEC6" /></div></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer id="footer" className="dark-footer">
          <div className="footer-pattern-bg">
             <img src={logoWhite} alt="" className="footer-watermark" />
          </div>
          <div className="container">
            <div className="footer-innovation-grid">
              <div className="partnering-cta">
                <h2>Interested in partnering or out-licensing your drug assets?</h2>
                <p>We are actively acquiring advanced preclinical-stage and early clinical assets across modalities, with strong translational rationale, clear differentiation and well-defined development paths.</p>
                <div className="pharma-stats">
                  <div className="stat-item">
                    <span className="stat-label">Acquisition Status</span>
                    <span className="stat-value active">Active</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Preferred Stage</span>
                    <span className="stat-value">Preclinical - Phase I</span>
                  </div>
                </div>
              </div>
              
              <div className="contact-form-container">
                <form className="pharma-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                      <label>Organization</label>
                      <input type="text" placeholder="Biotech Inc." />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@organization.com" />
                  </div>
                  <div className="form-group">
                    <label>Asset Stage / Therapeutic Area</label>
                    <select>
                      <option>Select Asset Stage</option>
                      <option>Early Preclinical</option>
                      <option>IND-Enabling</option>
                      <option>Clinical Phase I</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Brief Asset Description</label>
                    <textarea placeholder="Describe the mechanism of action and translational rationale..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-full">
                    Submit Asset for Review <ArrowSVG color="white" />
                  </button>
                </form>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-brand">
                <LogoSVG color="white" />
              </div>
              <div className="footer-cols">
                <div className="footer-col">
                  <h4>Address</h4>
                  <p>Biotech+ Hub at Pegasus Park<br />3000 Pegasus Park Drive<br />Dallas, TX 75247, US</p>
                </div>
                <div className="footer-col">
                  <h4>Contact</h4>
                  <p><a href="mailto:info@levelset.bio">info@levelset.bio</a></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
      </div>

      {modalData && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <div className="modal-grid">
              <div className="modal-left">
                <div className="modal-photo">
                  <img src={modalData.image} alt={modalData.name} />
                </div>
                <div className="modal-socials">
                  <a href={modalData.linkedin} className="btn-social">
                    <LinkedInSVG /> Connect on LinkedIn
                  </a>
                </div>
              </div>
              <div className="modal-right">
                <div className="modal-header">
                  <div className="eyebrow-container">
                    <CornerSymbolSVG />
                    <span className="eyebrow-text">TEAM BIO</span>
                  </div>
                  <h2>{modalData.name}</h2>
                  <p className="modal-title">{modalData.title}</p>
                </div>
                <div className="modal-body">
                  <div className="modal-text">{modalData.text}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
