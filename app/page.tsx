export default function Page(){
  return (
    <div style={{padding:40,fontFamily:'sans-serif'}}>
      <h1>URL to API is Running</h1>
      <p>POST to /api/create to create API</p>
      <pre>{`curl -X POST https://url-to-api-rjtv1.vercel.app/api/create -H "Content-Type: application/json" -d '{"url":"https://example.com","selectors":{"title":"h1"}}'`}</pre>
      <p>Check cron: <a href="/api/cron">/api/cron</a></p>
    </div>
  )
}
