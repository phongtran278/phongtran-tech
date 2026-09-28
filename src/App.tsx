import { motion, useScroll, useTransform } from 'motion/react'
import { ProjectIndex } from './components/ProjectIndex'
import './styles/global.css'

export default function App(){
 const {scrollYProgress}=useScroll(); const y=useTransform(scrollYProgress,[0,.35],[0,-80])
 return <main>
  <header className="nav"><a className="brand" href="#">PHONG TRAN <span>/ LAB</span></a><nav><a href="#work">Work</a><a href="#lab">Lab</a><a href="#notes">Notes</a><a href="#about">About</a></nav><a className="tiny-cta" href="mailto:hello@phongtran.tech">Say hello ↗</a></header>
  <section className="hero">
    <div className="eyebrow">Independent designer × builder — Vietnam</div>
    <motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.16,1,.3,1]}}>I turn everyday<br/>friction into <em>useful</em><br/>digital things.</motion.h1>
    <div className="hero-bottom"><p>A personal lab for products, experiments and notes — somewhere between design, code and curiosity.</p><div className="scroll-cue">Scroll to explore <span>↓</span></div></div>
    <motion.div className="orb" style={{y}} aria-hidden><div className="orb-core"/><div className="ring r1"/><div className="ring r2"/><div className="ring r3"/><span className="orb-label l1">DESIGN</span><span className="orb-label l2">BUILD</span><span className="orb-label l3">REPEAT</span></motion.div>
  </section>
  <ProjectIndex/>
  <section className="manifesto" id="lab"><div className="section-head"><span>The lab</span><p>Not everything needs to become a startup.</p></div><h2>Small problems.<br/><em>Real</em> solutions.<br/>Always evolving.</h2><div className="manifesto-grid"><p>Some ideas become products. Some stay experiments. Some fail quickly and teach me something useful.</p><a href="#work">Explore the archive ↗</a></div></section>
  <section className="notes" id="notes"><div className="section-head"><span>Notes</span><p>Things learned while making things.</p></div><div className="note-list"><article><span>01</span><h3>Why I built PlotFlow</h3><small>Product thinking · 5 min</small></article><article><span>02</span><h3>Building Dictly while learning English</h3><small>Process · 4 min</small></article><article><span>03</span><h3>Designing tools I actually want to use</h3><small>Notes · 6 min</small></article></div></section>
  <footer id="about"><div><strong>PHONG TRAN</strong><p>Designer building useful things with technology.</p></div><div><span>Designed in Figma.</span><span>Built with curiosity.</span></div><div><span>© 2026</span><a href="https://github.com/phongtran278">GitHub ↗</a></div></footer>
 </main>
}
