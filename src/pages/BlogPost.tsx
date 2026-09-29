import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogPosts, getPost } from '../data/blogPosts'

export default function BlogPost(){
  const {slug=''}=useParams()
  const post=getPost(slug)
  const [progress,setProgress]=useState(0)
  const [active,setActive]=useState('')

  useEffect(()=>{
    if(!post) return
    document.title=`${post.title} — Phong Tran`
    const onScroll=()=>{
      const doc=document.documentElement
      const max=doc.scrollHeight-window.innerHeight
      setProgress(max>0?(window.scrollY/max)*100:0)
      let current=post.sections[0]?.id || ''
      post.sections.forEach(s=>{
        const el=document.getElementById(s.id)
        if(el && el.getBoundingClientRect().top<180) current=s.id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll',onScroll,{passive:true})
    return()=>window.removeEventListener('scroll',onScroll)
  },[post])

  const related=useMemo(()=>blogPosts.filter(p=>p.slug!==slug).slice(0,2),[slug])
  if(!post) return <main className="article-page"><div className="article-missing"><h1>404</h1><p>Bài này chưa tồn tại.</p><Link to="/blog">← Back to blog</Link></div></main>

  return <main className="article-page">
    <div className="reading-progress" style={{transform:`scaleX(${progress/100})`}}/>
    <header className="nav article-nav">
      <Link className="brand" to="/">PHONG TRAN</Link>
      <nav><Link to="/">Home</Link><Link to="/blog">Blog</Link><span className="nav-current">{Math.round(progress)}%</span></nav>
      <Link className="tiny-cta" to="/blog">All notes ↖</Link>
    </header>

    <header className="article-hero">
      <div className="article-meta"><span>{post.category}</span><span>{post.date}</span><span>{post.readTime}</span></div>
      <h1>{post.title}</h1>
      <p className="article-dek">{post.dek}</p>
    </header>

    <div className="article-shell">
      <aside className="toc">
        <span>TABLE OF CONTENTS</span>
        <nav>{post.sections.map((s,i)=><a key={s.id} href={`#${s.id}`} className={active===s.id?'active':''}><b>{String(i+1).padStart(2,'0')}</b>{s.title}</a>)}</nav>
      </aside>

      <article className="article-content">
        <p className="article-lead">{post.intro}</p>
        {post.sections.map((s,i)=><section id={s.id} key={s.id}>
          <div className="section-index">{String(i+1).padStart(2,'0')}</div>
          <h2>{s.title}</h2>
          {s.subheading&&<h3>{s.subheading}</h3>}
          {s.body.map((p,j)=><p key={j}>{p}</p>)}
          {s.quote&&<blockquote>{s.quote}</blockquote>}
          {s.bullets&&<ul>{s.bullets.map(x=><li key={x}>{x}</li>)}</ul>}
        </section>)}
      </article>

      <aside className="article-rail">
        <span>PHONG TRAN / NOTEBOOK</span>
        <p>Design, building, automation and whatever helps make the next problem a little simpler.</p>
      </aside>
    </div>

    <section className="related-posts">
      <span className="story-kicker">KEEP READING</span>
      <div>{related.map(p=><Link key={p.slug} to={`/blog/${p.slug}`}><small>{p.category}</small><h3>{p.title}</h3><span>Read next →</span></Link>)}</div>
    </section>

    <footer className="mega-footer"><div className="footer-meta"><span>End of note.</span><Link to="/blog">Back to notebook ↑</Link></div><div className="mega-name">PHONG TRAN</div></footer>
  </main>
}
