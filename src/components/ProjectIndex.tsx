import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { projects } from '../data/projects'

const statusLabel = { live:'Live', building:'Building', experiment:'Experiment', 'coming-soon':'Coming soon' }

function PreviewVisual({id}:{id:string}){
  if(id==='plotflow') return <div className="visual plotflow-ui"><div className="pf-top"><span>PLOTFLOW</span><i/></div><div className="pf-canvas"><div className="pf-sheet"/><div className="pf-pin p1">1</div><div className="pf-pin p2">2</div><div className="pf-side"><span/><span/><span/><span/></div></div></div>
  if(id==='dictly') return <div className="visual dictly-ui"><div className="dict-word">listen</div><div className="dict-wave">{Array.from({length:18}).map((_,i)=><i key={i} style={{height:`${18+(i%5)*10}px`}}/>)}</div><div className="dict-input">Type what you hear<span>|</span></div><div className="dict-score"><b>14</b><small>/ 15</small></div></div>
  if(id==='metamorph') return <div className="visual meta-ui"><div className="meta-doc"><span>PDF</span><b>Metadata</b><small>Title<br/>Author<br/>Keywords<br/>Created</small></div><div className="meta-panel"><i/><i/><i/><i/></div></div>
  if(id==='webgis') return <div className="visual map-ui"><div className="map-grid"/><div className="map-road r-a"/><div className="map-road r-b"/><div className="map-node n1"/><div className="map-node n2"/><div className="map-node n3"/><span>WEBGIS / 3D</span></div>
  return <div className="visual next-ui"><span>FENO</span><p>Working title.<br/>The idea comes next.</p></div>
}

export function ProjectIndex(){
  const [active,setActive] = useState(projects[0].id)
  const current = projects.find(p=>p.id===active) ?? projects[0]

  return <section className="projects" id="work">
    <div className="section-head"><span>SELECTED WORK / INDEX</span><p>Products, experiments and unfinished ideas.</p></div>
    <div className="project-layout">
      <div className="project-list">
        {projects.map((p,i)=><a key={p.id} href={p.href || '#lab'} onMouseEnter={()=>setActive(p.id)} onFocus={()=>setActive(p.id)} className={`project-row ${active===p.id?'active':''}`}>
          <span className="index">{String(i+1).padStart(2,'0')}</span>
          <span className="p-name">{p.name}</span>
          <span className="p-label">{p.label}</span>
          <span className={`status ${p.status}`}>{statusLabel[p.status]}</span>
          <span className="arrow">↗</span>
        </a>)}
      </div>
      <div className="preview-wrap">
        <AnimatePresence mode="wait">
          <motion.div key={current.id} className={`preview ${current.id}`} initial={{opacity:0,y:22,scale:.975,filter:'blur(8px)'}} animate={{opacity:1,y:0,scale:1,filter:'blur(0px)'}} exit={{opacity:0,y:-16,scale:.985,filter:'blur(6px)'}} transition={{duration:.5,ease:[.16,1,.3,1]}}>
            <div className="preview-top"><span>{current.name}</span><span>{current.year}</span></div>
            <PreviewVisual id={current.id}/>
            <div className="preview-copy"><p>{current.description}</p><span>{current.href?'Open project ↗':'Still becoming'}</span></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </section>
}
