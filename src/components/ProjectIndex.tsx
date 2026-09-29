import { motion } from 'motion/react'
import { useRef, useState } from 'react'
import { projects } from '../data/projects'

const statusLabel = { live:'Live', building:'Building', experiment:'Experiment', 'coming-soon':'Coming soon' }

function ProjectArtwork({id}:{id:string}){
  if(id==='plotflow') return <div className="work-art art-plotflow"><div className="blueprint"/><span className="art-code">A-12</span><i className="pin one">1</i><i className="pin two">2</i></div>
  if(id==='dictly') return <div className="work-art art-dictly"><div className="wave">{Array.from({length:22}).map((_,i)=><i key={i} style={{height:`${12+(i%6)*9}px`}}/>)}</div><strong>listen.</strong><span>14 / 15</span></div>
  if(id==='metamorph') return <div className="work-art art-meta"><div className="paper"><b>PDF</b><span>Title<br/>Author<br/>Keywords<br/>Created</span></div><div className="meta-chip">metadata.json</div></div>
  if(id==='webgis') return <div className="work-art art-webgis"><div className="map-plane"/><i className="node n1"/><i className="node n2"/><i className="node n3"/><span>SPATIAL / 3D</span></div>
  return <div className="work-art art-feno"><strong>FENO</strong><span>CODENAME / NEXT</span><div className="feno-orbit"/></div>
}

export function ProjectIndex(){
  const scroller=useRef<HTMLDivElement>(null)
  const [index,setIndex]=useState(0)

  const go=(dir:number)=>{
    const next=Math.max(0,Math.min(projects.length-1,index+dir))
    setIndex(next)
    const el=scroller.current?.children[next] as HTMLElement | undefined
    el?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'})
  }

  return <section className="projects" id="work">
    <div className="work-head">
      <div><span className="story-kicker">SELECTED SOLUTIONS</span><h2>Problems first.<br/><em>Products second.</em></h2></div>
      <div className="work-controls"><span>{String(index+1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}</span><button onClick={()=>go(-1)} aria-label="Previous project">←</button><button onClick={()=>go(1)} aria-label="Next project">→</button></div>
    </div>

    <div className="work-scroller" ref={scroller} onScroll={(e)=>{
      const node=e.currentTarget
      const cards=Array.from(node.children) as HTMLElement[]
      let nearest=0, dist=Infinity
      cards.forEach((c,i)=>{const d=Math.abs(c.offsetLeft-node.scrollLeft);if(d<dist){dist=d;nearest=i}})
      setIndex(nearest)
    }}>
      {projects.map((p,i)=><motion.article className={`work-card ${p.id}`} key={p.id} initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.75,delay:i*.05,ease:[.16,1,.3,1]}}>
        <div className="work-card-top"><span>{String(i+1).padStart(2,'0')}</span><span className={`status ${p.status}`}>{statusLabel[p.status]}</span></div>
        <ProjectArtwork id={p.id}/>
        <div className="work-card-copy">
          <div className="work-title"><h3>{p.name}</h3><span>{p.industry}</span></div>
          <div className="work-problem"><small>PROBLEM</small><p>{p.problem}</p></div>
          <div className="work-solution"><small>SOLUTION</small><p>{p.solution}</p></div>
          <button className="ghost-action" type="button">Case details ↗</button>
        </div>
      </motion.article>)}
    </div>
  </section>
}
