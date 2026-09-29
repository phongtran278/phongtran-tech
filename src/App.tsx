import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { ProjectIndex } from './components/ProjectIndex'
import Blog from './pages/Blog'
import './styles/global.css'

const ease=[.16,1,.3,1] as const

function CosmicCore(){
  const mx=useMotionValue(0), my=useMotionValue(0)
  const sx=useSpring(mx,{stiffness:70,damping:17}), sy=useSpring(my,{stiffness:70,damping:17})
  const rx=useTransform(sy,[-.5,.5],[9,-9]); const ry=useTransform(sx,[-.5,.5],[-12,12])

  return <motion.div className="cosmos" onPointerMove={(e)=>{const r=e.currentTarget.getBoundingClientRect();mx.set((e.clientX-r.left)/r.width-.5);my.set((e.clientY-r.top)/r.height-.5)}} onPointerLeave={()=>{mx.set(0);my.set(0)}}>
    <motion.div className="cosmos-stage" style={{rotateX:rx,rotateY:ry}}>
      <motion.div className="planet" animate={{rotate:[0,360]}} transition={{duration:26,repeat:Infinity,ease:'linear'}}><div className="planet-core"/><div className="planet-light"/></motion.div>
      <motion.div className="orbit orbit-a" animate={{rotateZ:[18,378]}} transition={{duration:22,repeat:Infinity,ease:'linear'}}><i/></motion.div>
      <motion.div className="orbit orbit-b" animate={{rotateZ:[-32,-392]}} transition={{duration:31,repeat:Infinity,ease:'linear'}}><i/></motion.div>
      <motion.div className="orbit orbit-c" animate={{rotateZ:[72,432]}} transition={{duration:18,repeat:Infinity,ease:'linear'}}><i/></motion.div>
      <motion.div className="data-card data-a" animate={{y:[0,-12,0]}} transition={{duration:5.5,repeat:Infinity,ease:'easeInOut'}}><span>DESIGN</span><b>01</b></motion.div>
      <motion.div className="data-card data-b" animate={{y:[0,10,0]}} transition={{duration:6.5,repeat:Infinity,ease:'easeInOut'}}><span>AUTOMATE</span><b>03</b></motion.div>
      <div className="coordinate x"/><div className="coordinate y"/>
    </motion.div>
  </motion.div>
}

function ProcessLoop(){
  const steps=['Design','Build','Automate','Learn','Repeat']
  return <section className="process-loop">
    <div className="process-caption"><span>MY WORKING LOOP</span><p>Not a straight line. More like an orbit.</p></div>
    <div className="process-track">
      <motion.div className="process-pulse" animate={{left:['0%','100%']}} transition={{duration:7,repeat:Infinity,ease:'linear'}}/>
      {steps.map((s,i)=><div className="process-step" key={s}><span>{String(i+1).padStart(2,'0')}</span><strong>{s}</strong></div>)}
    </div>
  </section>
}

function Home(){
  const {scrollYProgress}=useScroll()
  const heroY=useTransform(scrollYProgress,[0,.28],[0,-80])
  return <main>
    <header className="nav">
      <a className="brand" href="#top">PHONG TRAN</a>
      <nav><a href="#work">Work</a><a href="#story">Story</a><Link to="/blog">Blog</Link><a href="#contact">Contact</a></nav>
      <button className="tiny-cta" type="button">Let’s work together ↘</button>
    </header>

    <section className="hero" id="top">
      <div className="hero-grid"/><div className="hero-glow g1"/><div className="hero-glow g2"/>
      <motion.div className="hero-copy" style={{y:heroY}}>
        <div className="eyebrow"><span className="live-dot"/> GRAPHIC DESIGNER → BUILDER</div>
        <motion.h1 initial={{opacity:0,y:42}} animate={{opacity:1,y:0}} transition={{duration:1,ease}}>Curious by<br/>nature. <em>Useful</em><br/>by design.</motion.h1>
        <div className="hero-bottom"><p>A curious designer learning to code, automating the boring parts, and keeping the human parts human.</p><span className="scroll-cue">Scroll / explore ↓</span></div>
      </motion.div>
      <CosmicCore/>
    </section>

    <ProcessLoop/>
    <ProjectIndex/>

    <section className="story" id="story">
      <div className="story-intro">
        <div><span className="story-kicker">PAST / NOW / NEXT</span><h2>The past, present<br/>and future of a<br/><em>curious maker.</em></h2></div>
        <div className="story-note"><span>ĐỜI LẮM PHONG TRẦN.</span><p>I like craft. I like details that feel made by a person. But if a machine can do repetitive work better, faster and without getting bored — I would rather let it.</p></div>
      </div>
      <div className="story-grid">
        <article><span>01 / PAST</span><h3>Design is the root.</h3><p>Composition, hierarchy, visual taste and storytelling are still how I enter every problem.</p></article>
        <article><span>02 / NOW</span><h3>Code shortens the distance.</h3><p>From “this should exist” to a working prototype, automation and code let ideas leave the canvas.</p></article>
        <article><span>03 / NEXT</span><h3>Build systems, not just screens.</h3><p>I want design to shape how a product thinks, behaves and saves people time.</p></article>
      </div>
    </section>

    <section className="manifesto">
      <div className="section-head"><span>VERY SERIOUS METRICS</span><p>Some numbers are useful. Some are just more fun.</p></div>
      <div className="fun-stats">
        <div><strong>∞</strong><span>Problems left to simplify</span></div>
        <div><strong>0%</strong><span>Love for repetitive manual work</span></div>
        <div><strong>404</strong><span>Comfort zone not found</span></div>
        <div><strong>1%</strong><span>Better, ideally, every day</span></div>
      </div>
    </section>

    <section className="blog-tease">
      <span className="story-kicker">BLOG / NOTEBOOK</span>
      <div><h2>Not everything needs<br/>to become a <em>case study.</em></h2><p>Some things are better as notes: what I learned, what went wrong, what I am thinking about and the occasional life story.</p><Link to="/blog">Enter the blog →</Link></div>
    </section>

    <section className="contact" id="contact">
      <span className="story-kicker">CONTACT / LINKS COMING LATER</span>
      <h2>If the problem is<br/>interesting, <em>say hi.</em></h2>
      <p>I’m keeping the actual links blank for now. The structure is here; the final destinations can wait until they feel right.</p>
      <div className="contact-links"><button type="button">Behance ↗</button><button type="button">GitHub ↗</button><button type="button">Email ↗</button></div>
    </section>

    <footer className="mega-footer">
      <div className="footer-meta"><span>Designer × Builder × Curious human.</span><span>© 2026 · phongtran.tech</span></div>
      <div className="mega-name">PHONG TRAN</div>
    </footer>
  </main>
}

function PageShell(){
  const location=useLocation()
  return <AnimatePresence mode="wait" initial={false}>
    <motion.div key={location.pathname} initial={{opacity:0,y:18,filter:'blur(8px)'}} animate={{opacity:1,y:0,filter:'blur(0px)'}} exit={{opacity:0,y:-12,filter:'blur(6px)'}} transition={{duration:.65,ease}}>
      <Routes location={location}><Route path="/" element={<Home/>}/><Route path="/blog" element={<Blog/>}/></Routes>
    </motion.div>
  </AnimatePresence>
}

export default function App(){ return <PageShell/> }
