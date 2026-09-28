export type ProjectStatus = 'live' | 'building' | 'experiment' | 'coming-soon'
export type Project = { id:string; name:string; label:string; description:string; status:ProjectStatus; year:string; href?:string }

export const projects: Project[] = [
  { id:'plotflow', name:'PlotFlow', label:'Drawing workflow', description:'A visual workspace for reviewing, annotating and managing project drawings.', status:'live', year:'2026', href:'https://plotflow.phongtran.tech' },
  { id:'dictly', name:'Dictly', label:'Language learning', description:'A focused dictation practice app built around deliberate listening.', status:'building', year:'2026', href:'https://dictly.phongtran.tech' },
  { id:'metamorph', name:'MetaMorph', label:'PDF utility', description:'A lightweight way to view and edit PDF metadata without the clutter.', status:'experiment', year:'2026', href:'https://metamorph.phongtran.tech' },
  { id:'webgis', name:'WebGIS', label:'Spatial interface', description:'Experiments in interactive mapping, spatial data and 3D interfaces.', status:'experiment', year:'2026' },
  { id:'next', name:'Untitled 005', label:'Next problem', description:'Another small problem waiting for a useful solution.', status:'coming-soon', year:'Soon' }
]
