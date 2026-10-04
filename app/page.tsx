'use client'
import {useState} from 'react'
export default function Page(){
  const [url,setUrl]=useState('https://example.com')
  const [sel,setSel]=useState('{"title":"h1"}')
  const [res,setRes]=useState<any>(null)
  const [loading,setLoading]=useState(false)
  async function create(){
    setLoading(true)
    const r=await fetch('/api/create',{method:'POST',body:JSON.stringify({url,selectors:JSON.parse(sel)})})
    const j=await r.json()
    setRes(j); setLoading(false)
  }
  return <div style={{maxWidth:600,margin:'40px auto',fontFamily:'sans-serif'}}>
    <h1>URL to API v2</h1>
    <p>API地址: {typeof window!=='undefined'?window.location.origin:''}/api/v2/[id]</p>
    <input value={url} onChange={e=>setUrl(e.target.value)} style={{width:'100%',padding:8,marginBottom:8}} placeholder="URL"/>
    <textarea value={sel} onChange={e=>setSel(e.target.value)} style={{width:'100%',height:100,padding:8}}/>
    <button onClick={create} disabled={loading} style={{padding:'10px 20px',background:'black',color:'white',border:0}}>{loading?'生成中...':'生成API'}</button>
    {res&&<pre style={{background:'#f4f4f4',padding:12,marginTop:12,overflow:'auto'}}>{JSON.stringify(res,null,2)}</pre>}
    {res?.id&&<div style={{marginTop:12}}>你的永久API: <a href={`/api/v2/${res.id}`} target="_blank">/api/v2/{res.id}</a></div>}
  </div>
}
