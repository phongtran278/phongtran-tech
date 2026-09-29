import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { blogPosts } from '../data/blogPosts'

export default function Blog(){
  return <main className="blog-page">
    <header className="nav">
      <Link className="brand" to="/">PHONG TRAN</Link>
      <nav><Link to="/">Home</Link><Link to="/#work">Work</Link><span className="nav-current">Blog</span></nav>
      <Link className="tiny-cta" to="/">Back home ↖</Link>
    </header>

    <motion.section className="blog-hero" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,ease:[.16,1,.3,1]}}>
      <span className="story-kicker">BLOG / NOTEBOOK</span>
      <h1>Notes from a<br/>designer who<br/><em>keeps building.</em></h1>
      <p>Design, code, automation, work, life — và những thứ tui chỉ hiểu rõ hơn sau khi viết chúng xuống.</p>
    </motion.section>

    <section className="featured-post">
      <Link to={`/blog/${blogPosts[0].slug}`}>
        <span className="story-kicker">FEATURED / {blogPosts[0].readTime}</span>
        <h2>{blogPosts[0].title}</h2>
        <p>{blogPosts[0].dek}</p>
        <b>Read article →</b>
      </Link>
    </section>

    <section className="blog-list">
      {blogPosts.slice(1).map((post,i)=><motion.article key={post.slug} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.65,ease:[.16,1,.3,1]}}>
        <span className="blog-no">{String(i+2).padStart(2,'0')}</span>
        <div><small>{post.date} · {post.category} · {post.readTime}</small><h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.dek}</p></div>
        <Link className="read-link" to={`/blog/${post.slug}`}>Read ↗</Link>
      </motion.article>)}
    </section>

    <footer className="mega-footer"><div className="footer-meta"><span>Notes, not content marketing.</span><span>© 2026</span></div><div className="mega-name">PHONG TRAN</div></footer>
  </main>
}
