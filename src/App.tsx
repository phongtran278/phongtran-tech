import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { ProjectIndex } from './components/ProjectIndex'
import './styles/global.css'

function HeroScene(){
  const mx=useMotionValue(0), my=useMotionValue(0)
  const sx=useSpring(mx,{stiffness:80,damping:18}), sy=useSpring(my,{stiffness:80,damping:18})
  const rotateX=useTransform(sy,[-.5,.5],[7,-7])
  const rotateY=useTransform(sx,[-.5,.5],[-9,9])
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
    <motion.div className="scene-chip chip-a" animate={{y:[0,-12,0],rotate:[-5,-2,-5]}} transition={{duration:6,repeat:Infinity,ease:'easeInOut'}}>PLOTFLOW <span>LIVE</span></motion.div>
    <motion.div className="scene-chip chip-b" animate={{y:[0,10,0],rotate:[6,3,6]}} transition={{duration:7,repeat:Infinity,ease:'easeInOut'}}>METAMORPH <span>LAB</span></motion.div>
    <div className="scene-orbit o1"/><div className="scene-orbit o2"/><div className="scene-dot d1"/><div className="scene-dot d2"/>
  </motion.div>
}

export default function App(){
 const {scrollYProgress}=useScroll()
 const heroY=useTransform(scrollYProgress,[0,.28],[0,-110])
 const heroOpacity=useTransform(scrollYProgress,[0,.24],[1,.38])
 return <main>
  <header className="nav"><a className="brand" href="#">PHONG TRAN <span>/ LAB</span></a><nav><a href="#work">Work</a><a href="#lab">Lab</a><a href="#notes">Notes</a><a href="#about">About</a></nav><a className="tiny-cta" href="mailto:hello@phongtran.tech">Say hello ↗</a></header>

  <section className="hero">
    <div className="hero-grid" aria-hidden/>
    <motion.div className="hero-copy" style={{y:heroY,opacity:heroOpacity}}>
      <div className="eyebrow"><span className="live-dot"/> DESIGNER × BUILDER — VIETNAM</div>
      <motion.h1 initial={{opacity:0,y:42}} animate={{opacity:1,y:0}} transition={{duration:1,ease:[.16,1,.3,1]}}>I build <em>useful</em><br/>things for<br/><span>real problems.</span></motion.h1>
      <div className="hero-bottom"><p>A personal lab where everyday friction becomes digital products, experiments and occasionally something worth shipping.</p><div className="scroll-cue">Explore the lab <span>↓</span></div></div>
    </motion.div>
    <HeroScene/>
    <div className="hero-rail"><span>01</span><div/><span>SCROLL</span></div>
  </section>

  <div className="ticker"><div>DESIGN → BUILD → TEST → LEARN → REPEAT → <b>DESIGN → BUILD → TEST → LEARN → REPEAT →</b></div></div>

  <ProjectIndex/>

  <section className="manifesto" id="lab">
    <div className="section-head"><span>THE LAB / 2026</span><p>Not everything needs to become a startup.</p></div>
    <div className="lab-stats"><div><strong>05</strong><span>things in the lab</span></div><div><strong>01</strong><span>live product</span></div><div><strong>02</strong><span>active experiments</span></div><div><strong>∞</strong><span>problems left</span></div></div>
    <h2>Small problems.<br/><em>Real</em> solutions.<br/>Always evolving.</h2>
    <div className="manifesto-grid"><p>Some ideas become products. Some stay experiments. Some fail quickly. The point is to keep making, learning and turning friction into something a little more useful.</p><a href="#work">Browse what exists ↗</a></div>
  </section>

  <section className="building">
    <div className="building-tag"><span className="live-dot"/> CURRENTLY BUILDING</div>
    <div className="building-title"><span>DICTLY</span><small>02 / 05</small></div>
    <div className="building-copy"><p>A focused dictation app I'm building while improving my own English — product and problem evolving together.</p><a href="https://dictly.phongtran.tech">Open project ↗</a></div>
    <div className="building-line"><span/></div>
  </section>

  <section className="notes" id="notes"><div className="section-head"><span>NOTES / FIELD LOG</span><p>Things learned while making things.</p></div><div className="note-list"><article><span>01</span><h3>Why I built PlotFlow</h3><small>Product thinking · 5 min</small></article><article><span>02</span><h3>Building Dictly while learning English</h3><small>Process · 4 min</small></article><article><span>03</span><h3>Designing tools I actually want to use</h3><small>Notes · 6 min</small></article></div></section>

  <footer id="about"><div><strong>PHONG TRAN</strong><p>Designer building useful things with technology.</p></div><div><span>Designed in Figma.</span><span>Built with curiosity.</span></div><div><span>© 2026</span><a href="https://github.com/phongtran278">GitHub ↗</a></div></footer>
 </main>
}
