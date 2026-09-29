import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { ProjectIndex } from './components/ProjectIndex'
import './styles/global.css'

function HeroScene(){
  const mx=useMotionValue(0), my=useMotionValue(0)
  const sx=useSpring(mx,{stiffness:80,damping:18}), sy=useSpring(my,{stiffness:80,damping:18})
  const rotateX=useTransform(sy,[-.5,.5],[6,-6])
  const rotateY=useTransform(sx,[-.5,.5],[-8,8])
  return <motion.div className="hero-scene" onPointerMove={(e)=>{const r=e.currentTarget.getBoundingClientRect();mx.set((e.clientX-r.left)/r.width-.5);my.set((e.clientY-r.top)/r.height-.5)}} onPointerLeave={()=>{mx.set(0);my.set(0)}}>
    <motion.div className="scene-card scene-main" style={{rotateX,rotateY}}>
      <div className="scene-toolbar"><i/><i/><i/><span>phongtran.tech / lab</span></div>
      <div className="scene-grid">
        <div className="scene-kicker">CURRENTLY BUILDING</div>
        <strong>DICTLY</strong>
        <p>Listening practice,<br/>without the clutter.</p>
        <div className="scene-meter"><span/></div>
      </div>
    </motion.div>
    <motion.div className="scene-chip chip-a" animate={{y:[0,-10,0],rotate:[-5,-2,-5]}} transition={{duration:6,repeat:Infinity,ease:'easeInOut'}}>PLOTFLOW <span>LIVE</span></motion.div>
    <motion.div className="scene-chip chip-b" animate={{y:[0,9,0],rotate:[6,3,6]}} transition={{duration:7,repeat:Infinity,ease:'easeInOut'}}>METAMORPH <span>LAB</span></motion.div>
    <div className="scene-orbit o1"/><div className="scene-orbit o2"/><div className="scene-dot d1"/><div className="scene-dot d2"/>
  </motion.div>
}

export default function App(){
 const {scrollYProgress}=useScroll()
 const heroY=useTransform(scrollYProgress,[0,.28],[0,-95])
 const heroOpacity=useTransform(scrollYProgress,[0,.24],[1,.48])

 return <main>
  <header className="nav">
    <a className="brand" href="#">PHONG TRAN <span>/ LAB</span></a>
    <nav><a href="#work">Work</a><a href="#story">Story</a><a href="#notes">Notes</a><a href="#contact">Contact</a></nav>
    <a className="tiny-cta" href="#contact">Let’s work together ↘</a>
  </header>

  <section className="hero">
    <div className="hero-grid" aria-hidden/>
    <div className="hero-glow g1" aria-hidden/><div className="hero-glow g2" aria-hidden/>
    <motion.div className="hero-copy" style={{y:heroY,opacity:heroOpacity}}>
      <div className="eyebrow"><span className="live-dot"/> GRAPHIC DESIGNER → BUILDER</div>
      <motion.h1 initial={{opacity:0,y:42}} animate={{opacity:1,y:0}} transition={{duration:1,ease:[.16,1,.3,1]}}>Curious by<br/>nature. <em>Useful</em><br/>by design.</motion.h1>
      <div className="hero-bottom">
        <p>A curious designer learning to code, automating the boring parts, and keeping the human parts human.</p>
        <div className="scroll-cue">Explore the lab <span>↓</span></div>
      </div>
    </motion.div>
    <HeroScene/>
    <div className="hero-rail"><span>01</span><div/><span>SCROLL</span></div>
  </section>

  <div className="ticker"><div>DESIGN → BUILD → AUTOMATE → LEARN → REPEAT → <b>DESIGN → BUILD → AUTOMATE → LEARN → REPEAT →</b></div></div>

  <ProjectIndex/>

  <section className="story" id="story">
    <div className="story-intro">
      <div><span className="story-kicker">PAST / NOW / NEXT</span><h2>The past, present<br/>and future of a<br/><em>curious maker.</em></h2></div>
      <div className="story-note"><span>ĐỜI LẮM PHONG TRẦN.</span><p>I still care about craft, taste and the feeling of something made by hand. I just don’t think humans should spend their best hours doing repetitive work a machine can do better.</p></div>
    </div>
    <div className="story-grid">
      <article><span>01 / PAST</span><h3>Design first.</h3><p>Visual thinking is still the root: composition, hierarchy, taste, storytelling and the instinct to make things feel right.</p></article>
      <article><span>02 / NOW</span><h3>Learning to build.</h3><p>Code, automation and small tools let me move from “this should exist” to something people can actually use.</p></article>
      <article><span>03 / NEXT</span><h3>Design systems that work.</h3><p>I want to make products where design is not decoration — it is how the system thinks, behaves and saves people time.</p></article>
    </div>
  </section>

  <section className="manifesto" id="lab">
    <div className="section-head"><span>THE LAB / OPEN ENDED</span><p>Not everything needs to become a startup.</p></div>
    <div className="infinite-problem"><strong>∞</strong><div><span>Problems left to make simpler.</span><p>That is enough reason to keep the lab open.</p></div></div>
    <h2>Small problems.<br/><em>Real</em> solutions.<br/>Always evolving.</h2>
    <div className="manifesto-grid"><p>Some ideas become products. Some stay experiments. Some fail quickly. The useful part is learning where design, technology and everyday friction meet.</p><a href="#work">Browse what exists ↗</a></div>
  </section>

  <section className="building">
    <div className="building-tag"><span className="live-dot"/> CURRENTLY BUILDING</div>
    <div className="building-title"><span>DICTLY</span><small>LEARNING × BUILDING</small></div>
    <div className="building-copy"><p>A focused dictation app I’m building while improving my own English — the product and the problem evolving together.</p><a href="https://dictly.phongtran.tech">Open project ↗</a></div>
    <div className="building-line"><span/></div>
  </section>

  <section className="notes" id="notes">
    <div className="section-head"><span>NOTES / FIELD LOG</span><p>Things learned while making things.</p></div>
    <div className="note-list"><article><span>01</span><h3>Why I built PlotFlow</h3><small>Product thinking · 5 min</small></article><article><span>02</span><h3>Building Dictly while learning English</h3><small>Process · 4 min</small></article><article><span>03</span><h3>Designing tools I actually want to use</h3><small>Notes · 6 min</small></article></div>
  </section>

  <section className="contact" id="contact">
    <span className="story-kicker">OPEN TO GOOD PROBLEMS</span>
    <h2>If the problem is<br/>interesting, <em>say hi.</em></h2>
    <p>Design, product experiments, automation, real-estate ideas — or anything that sits awkwardly between them.</p>
    <div className="contact-links"><a href="https://www.behance.net/tranphongdesigner">Behance ↗</a><a href="https://github.com/phongtran278">GitHub ↗</a><a href="#work">Selected work ↑</a></div>
  </section>

  <footer><div><strong>PHONG TRAN</strong><p>Designer building useful things with technology.</p></div><div><span>Made with taste.</span><span>Automated when it should be.</span></div><div><span>© 2026</span><span>phongtran.tech</span></div></footer>
 </main>
}
