import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const posts=[
  {date:'Sep 2026',type:'Design × Automation',title:'Để máy làm phần máy giỏi, giữ phần người cho con người.',excerpt:'Một ghi chú về việc tôi bắt đầu nhìn automation như một phần của nghề thiết kế, không phải thứ đứng ngoài nó.'},
  {date:'Sep 2026',type:'Building in public',title:'Từ designer tới người tự build thứ mình muốn dùng.',excerpt:'Không phải đổi nghề. Chỉ là khoảng cách từ “giá mà có cái này” tới “để tui thử làm” đang ngắn lại.'},
  {date:'Soon',type:'Life / Notes',title:'Đời lắm Phong Trần.',excerpt:'Một chỗ để viết về công việc, những thứ đang học, những lần làm sai và những ý tưởng chưa biết sẽ đi đâu.'}
]

export default function Blog(){
  return <main className="blog-page">
    <header className="nav">
      <Link className="brand" to="/">PHONG TRAN</Link>
      <nav><Link to="/">Home</Link><Link to="/#work">Work</Link><span className="nav-current">Blog</span></nav>
      <Link className="tiny-cta" to="/">Back home ↖</Link>
    </header>
    <motion.section className="blog-hero" initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.8,ease:[.16,1,.3,1]}}>
      <span className="story-kicker">BLOG / NOTEBOOK</span>
      <h1>Things I learn.<br/>Things I build.<br/><em>Things I think about.</em></h1>
      <p>Không phải publication. Chỉ là một notebook mở — design, code, automation, công việc và đôi lúc là mấy chuyện rất đời.</p>
    </motion.section>
    <section className="blog-list">
      {posts.map((post,i)=><motion.article key={post.title} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.65,ease:[.16,1,.3,1]}}>
        <span className="blog-no">{String(i+1).padStart(2,'0')}</span>
        <div><small>{post.date} · {post.type}</small><h2>{post.title}</h2><p>{post.excerpt}</p></div>
        <button type="button">Read when published ↗</button>
      </motion.article>)}
    </section>
    <footer className="mega-footer"><div className="footer-meta"><span>Notebook in progress.</span><span>© 2026</span></div><div className="mega-name">PHONG TRAN</div></footer>
  </main>
}
