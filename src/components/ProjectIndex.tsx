import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { projects } from '../data/projects'

const statusLabel = { live:'Live', building:'Building', experiment:'Experiment', 'coming-soon':'Coming soon' }

export function ProjectIndex(){
  const [active,setActive] = useState(projects[0].id)
  const current = projects.find(p=>p.id===active) ?? projects[0]
  return <section className="projects" id="work">
    <div className="section-head"><span>Selected work</span><p>Useful products, experiments and unfinished ideas.</p></div>
    <div className="project-layout">
      <div className="project-list">
        {projects.map((p,i)=><a key={p.id} href={p.href || '#'} onMouseEnter={()=>setActive(p.id)} onFocus={()=>setActive(p.id)} className={`project-row ${active===p.id?'active':''}`}>
          <span className="index">{String(i+1).padStart(2,'0')}</span><span className="p-name">{p.name}</span><span className="p-label">{p.label}</span><span className={`status ${p.status}`}>{statusLabel[p.status]}</span><span className="arrow">↗</span>
        </a>)}
      </div>
      <div className="preview-wrap">
        <AnimatePresence mode="wait">
          <motion.div key={current.id} className={`preview ${current.id}`} initial={{opacity:0,y:18,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-12,scale:.985}} transition={{duration:.42,ease:[.2,.7,.2,1]}}>
            <div className="preview-top"><span>{current.name}</span><span>{current.year}</span></div>
            <div className="preview-art"><span>{current.name.slice(0,1)}</span></div>
            <div className="preview-copy"><p>{current.description}</p><span>Open project ↗</span></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </section>
}
