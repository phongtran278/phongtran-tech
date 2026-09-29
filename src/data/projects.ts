export type ProjectStatus = 'live' | 'building' | 'experiment' | 'coming-soon'

export type Project = {
  id:string
  name:string
  industry:string
  problem:string
  solution:string
  status:ProjectStatus
  year:string
}

export const projects: Project[] = [
  {
    id:'plotflow',
    name:'PlotFlow',
    industry:'Real estate / Architecture',
    problem:'Drawing review gets fragmented across files, screenshots and messages.',
    solution:'A visual workspace that keeps drawings, annotations and feedback in one flow.',
    status:'live',
    year:'2026'
  },
  {
    id:'dictly',
    name:'Dictly',
    industry:'Education / Language',
    problem:'Listening practice is easy to quit when the interface adds noise and friction.',
    solution:'A focused dictation loop designed around repetition, feedback and visible progress.',
    status:'building',
    year:'2026'
  },
  {
    id:'metamorph',
    name:'MetaMorph',
    industry:'Document workflow',
    problem:'Editing PDF metadata should not require opening a heavyweight desktop tool.',
    solution:'A small web utility for changing document metadata quickly and cleanly.',
    status:'experiment',
    year:'2026'
  },
  {
    id:'webgis',
    name:'WebGIS',
    industry:'Real estate / Spatial data',
    problem:'Location data is useful but often hard to understand without spatial context.',
    solution:'An experiment in turning maps, property data and 3D context into a clearer interface.',
    status:'experiment',
    year:'2026'
  },
  {
    id:'feno',
    name:'FENO',
    industry:'Experimental / Problem discovery',
    problem:'Sometimes the problem arrives before the product has a name.',
    solution:'A codename for the next useful thing. Shape still intentionally unresolved.',
    status:'coming-soon',
    year:'Next'
  }
]
