import {useState, useEffect, useRef, useCallback} from "react";

// values mirror brand-assets/tokens.json (v4); tokens.css is canonical
var T="#414BF5", ION_H="#2F38D6", CY="#19D3E0", MG="#E63DCB", I3="#8E97F8", I7="#232BAA", SL="#5A6275", WN="#FFB020";
var BG="#0B0D14", B2="#181C28", B3="#272D3B", TX="#E7EAF1", MT="#5A6275", DM="#3C4354", BD="rgba(140,160,200,0.07)", N3="#AEB5C6";
var MW=1280; // page container max-width
var hd={fontFamily:"'IBM Plex Sans',system-ui,sans-serif",letterSpacing:"-.03em"};
var bn={display:"inline-flex",alignItems:"center",gap:6,padding:"12px 24px",background:T,color:"#fff",fontWeight:600,fontSize:14,border:"none",borderRadius:6,cursor:"pointer",fontFamily:"inherit"};
var b2={display:"inline-flex",alignItems:"center",gap:6,padding:"12px 24px",background:"transparent",color:TX,fontWeight:500,fontSize:14,border:"1px solid rgba(140,160,200,.15)",borderRadius:6,cursor:"pointer",fontFamily:"inherit"};
function Sc(p){return <section style={{borderTop:p.bt?"1px solid "+BD:"none",background:p.bg||"transparent"}}><div style={{maxWidth:MW,margin:"0 auto",padding:"96px 40px"}}>{p.children}</div></section>}
function Tg(p){return <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:p.c||T,marginBottom:12,fontWeight:500,fontFamily:"'IBM Plex Mono',monospace"}}>{p.children}</div>}
function Brand(p){var s=p.size;return <div style={{display:"flex",alignItems:"center",gap:10}}><img src={p.animated?"/sevyn8-mark-animated.svg":"/sevyn8-mark.svg"} alt="" style={{height:s,width:"auto",display:"block"}} /><span style={{fontFamily:"'IBM Plex Sans',system-ui,sans-serif",fontWeight:600,color:TX,letterSpacing:"-.01em",fontSize:s*.6}}>Sevyn8</span></div>}
function Rv(p){var r=useRef(null),v=useState(false);useEffect(function(){var el=r.current;if(!el)return;var o=new IntersectionObserver(function(e){if(e[0].isIntersecting){v[1](true);o.disconnect()}},{threshold:0.08});o.observe(el);return function(){o.disconnect()}},[]);return <div ref={r} style={{opacity:v[0]?1:0,transform:v[0]?"none":"translateY(24px)",transition:"all .7s cubic-bezier(.22,1,.36,1) "+(p.d||0)+"s"}}>{p.children}</div>}

var SOL=[
{id:"home",n:"Smart Home",ic:"□",ln:"Security · Senior care · Privacy-first",h:"Your cameras, doorbells, and sensors alert you 90 times a day. How many actually matter?",d:"You bought smart cameras, a video doorbell, motion sensors, maybe a smoke detector. None of them talk to each other. You get 90 notifications a day — 60% of owners mute everything within 90 days. The Sevyn8 Hub connects your existing devices into one intelligence layer. Or deploy new Sevyn8-powered smart devices with AI built in. Either way — decisions, not alerts.",wf:"Ring, Arlo, and TP-Link Tapo treat each device as an island. Camera alerts. Doorbell alerts. Sensor alerts. No correlation. When your WiFi drops, your security drops. They detect motion — not meaning. A delivery driver and a stranger at 3 AM trigger the exact same alert. No system fuses cameras, door sensors, and IoT into one intelligence.",
cs:["Knows your family — Recognises faces on-device. Family, friends, and regular delivery people never trigger an alert","Knows the difference — A person at 3 AM gets flagged. The same person at 3 PM with a package gets logged silently","Watches over elders — Fall detection, gait changes, and irregular routine alerts for elderly family members at home","Never uploads — All AI runs on the Hub device in your home. No footage goes to any cloud. No server. No one else sees it","Works without WiFi — Full intelligence runs offline. Your security does not depend on your internet connection"],
st:[{v:"97%",l:"Noise eliminated"},{v:"3-5",l:"Decisions per day"},{v:"0",l:"Data to cloud"},{v:"₹499",l:"Monthly option"}],
dp:["Connect the Sevyn8 Hub to your existing cameras, doorbells, and sensors — or deploy new Sevyn8-powered smart devices with AI built in.","The Hub learns your household — who comes and goes, what\u2019s normal, what isn\u2019t. Intelligence starts within hours.","90 daily alerts become 3-5 that genuinely matter. Open the app only when something real happens."],
dpl:["Your cameras, sensors, doorbell","Sevyn8 Hub","Your phone"],
scn:[{t:"8:47 AM",b:"Camera alert: motion detected at front door. It is the postman. You already left for work.",w:"Face recognised as regular delivery. Package logged. No alert sent."},{t:"2:15 PM",b:"Door sensor triggers. Cat pushed the back door. Alert #43 today.",w:"Pet movement pattern recognised. Door sensor + camera fused. Logged silently."},{t:"11:30 PM",b:"Motion alert #87. Neighbourhood cat on driveway. You muted alerts last week.",w:"Unknown person at side gate. Unusual hour. Single alert sent with face capture."}],
sens:["IP Cameras","Video Doorbell","Motion Sensors","Door/Window Sensors","Smoke Detectors","BLE Beacons"]},
{id:"retail",n:"Retail",ic:"◆",ln:"Shrinkage · Shelf compliance · Footfall",h:"200 cameras, ESL tags, and RFID readers across 40 stores. What are they actually doing for you?",d:"Your CCTV system cost crores to install. It records everything and understands nothing. Your LP team reviews maybe 5% of footage — after the fact. Shrinkage shows up in quarterly reports, not in real-time alerts. Sevyn8 deploys two ways: connect to your existing cameras and sensors, or deploy new intelligent cameras with AI built in. Either way, every device becomes an active loss prevention system.",wf:"Your current cameras are recording devices, not intelligence systems. Cloud analytics providers require constant connectivity and send your store footage to external servers. They cannot learn that Store #12 has a different pilferage pattern than Store #35 — each store starts from zero.",
cs:["Catches theft as it happens — Behavioural analysis detects concealment patterns in real time, not after quarterly stock-takes","Monitors every shelf — Planogram compliance verified every 15 minutes with instant deviation alerts to floor staff","Counts what matters — Zone-level footfall with 98%+ accuracy, dwell time, and conversion rate — not just door counts","Manages queues — Automatic alerts to open new counters when wait times exceed your defined thresholds","Learns across stores — What Store #1 catches, Store #40 already knows. Intelligence compounds across your entire network"],
st:[{v:"40-60%",l:"Shrinkage reduction"},{v:"98%+",l:"Footfall accuracy"},{v:"60 days",l:"Measurable results"},{v:"3-6×",l:"ROI in 6 months"}],
dp:["Connect to your existing cameras, ESL, and RFID — or deploy new intelligent cameras with AI on-board. We start with one floor, 10-20 devices.","Within 60 days, you see measurable shrinkage reduction, shelf compliance data, and zone-level footfall — on a dashboard your team actually uses.","Roll out to more stores. Store #50 inherits intelligence from stores #1 through #49. Every deployment makes the next one smarter."],
dpl:["Your CCTV + ESL + RFID","One Sevyn8 box per store","Your LP dashboard"],
scn:[{t:"10:23 AM",b:"Customer lingers at cosmetics shelf for 6 minutes. CCTV records it. Nobody sees it.",w:"Dwell time anomaly + repeated reach + no basket. Concealment alert to floor staff in real time."},{t:"2:45 PM",b:"Shelf gap in aisle 7 since morning. Discovered during evening walk.",w:"ESL + camera fusion detects planogram deviation at 10:15 AM. Auto-alert to merchandising team."},{t:"5:10 PM",b:"Long queue at counter 3. Customers walk out. You see it in tomorrow's conversion report.",w:"Queue length exceeds threshold. Alert to open counter 5. Footfall + dwell data updated live."}],
sens:["CCTV Cameras","Dome Cameras","ESL Tags","RFID Readers","Shelf-Edge Cameras","BLE Beacons"]},
{id:"fleet",n:"Fleet & Logistics",ic:"▲",ln:"Driver safety · Warehouse ops · Compliance",h:"GPS, dashcams, and facility sensors — four systems, four dashboards, zero intelligence.",d:"You track 500 vehicles by GPS. You know where they are but not whether the driver is awake, the cargo is secure, or your warehouse crew is wearing PPE. Compliance means audit day. Sevyn8 deploys two ways: add a box to your existing dashcams and facility cameras, or deploy new AI-enabled dashcams and sensors with on-board inference. Either way — safety becomes continuous, not periodic.",wf:"Your fleet telematics system tracks location and engine data. It cannot see inside the cabin, cannot verify PPE on the warehouse floor, and cannot predict equipment failure. Compliance happens during audits. Between audits, nobody is watching.",
cs:["Keeps drivers alert — Fatigue and distraction detected in real time with immediate in-cab audio intervention, before an incident occurs","Watches the road — Lane departure, tailgating, and forward collision warnings running on the dashcam itself, not a remote server","Verifies safety gear — Hard hats, vests, and gloves checked continuously on every person on the facility floor, every minute","Protects the floor — Forklift proximity warnings, restricted zone enforcement, loading dock monitoring, and near-miss tracking","Predicts breakdowns — Vibration and thermal patterns on fleet vehicles and warehouse equipment flag failures before they happen"],
st:[{v:"60%",l:"Fewer incidents"},{v:"100%",l:"Continuous compliance"},{v:"60 days",l:"POC results"},{v:"₹68-171L",l:"Annual contract"}],
dp:["Sevyn8 connects to your existing dashcams and facility cameras. Single facility or 50-vehicle fleet. No new hardware required.","Within 60 days — incident rates, compliance scores, near-miss tracking, and driver behaviour scores visible on one dashboard.","Expand across sites. Multi-facility patterns emerge that no single location can detect. Compliance becomes automated and auditable."],
dpl:["Dashcams + sensors + facility cameras","One Sevyn8 box per site","Your ops dashboard"],
scn:[{t:"2:17 AM",b:"Driver has been driving 7 hours. GPS shows he is on the highway. Nobody knows his eyes are closing.",w:"In-cab IR detects drowsiness at 3 seconds. Audio alert fires. Fleet manager notified. Near-miss logged."},{t:"9:40 AM",b:"Warehouse crew enters loading zone. Two without hard hats. Next audit is in 3 weeks.",w:"Camera + PPE model verifies every person entering the zone. Violation flagged instantly. Logged for compliance."},{t:"4:55 PM",b:"Forklift enters pedestrian zone. Near-miss. Nobody reports it.",w:"BLE proximity sensor + camera detect forklift in Zone C with pedestrians. Alert + incident log + fleet-wide pattern update."}],
sens:["Dashcams","In-Cab IR Cameras","Facility Cameras","Vibration Sensors","BLE Proximity Sensors","GPS/OBD Telematics"]},
{id:"coldchain",n:"Food & Cold Storage",ic:"○",ln:"Temperature AI · Contamination · FSSAI",h:"Thermal cameras, temperature loggers, humidity sensors — all recording separately. None predicting.",d:"Your cold storage facility runs temperature loggers that beep after the threshold is crossed — by then, the product is already compromised. FSSAI compliance is a clipboard exercise. Sevyn8 deploys two ways: connect to your existing thermal cameras and IoT sensors, or deploy new intelligent sensors with on-board AI. Either way — thermal, humidity, door, and vision data fuse into one platform that predicts breaches 15-30 minutes before they happen.",wf:"Your temperature loggers are reactive — they tell you what went wrong, not what\u2019s about to go wrong. CCTV is only reviewed after a contamination incident. FSSAI audit preparation takes weeks of assembling manual records. No existing system connects temperature, vision, and compliance on one platform.",
cs:["Predicts breaches — Thermal camera + IoT sensor fusion spots cold chain deviations 15-30 minutes before your threshold is crossed","Catches contamination — Vision AI identifies foreign objects on processing lines, pest intrusion, and hygiene violations in real time","Automates FSSAI — Worker hygiene, PPE compliance (hairnets, gloves, aprons), and sanitation protocols monitored continuously, not during audits","Enforces door discipline — Cold room door open-time tracked with immediate alerts when duration exceeds safe thresholds","Tracks inventory — FIFO compliance monitoring, expiry risk scoring, and stock rotation verification through camera analytics"],
st:[{v:"15-30min",l:"Early breach warning"},{v:"40-60%",l:"Loss reduction"},{v:"100%",l:"Automated FSSAI"},{v:"60 days",l:"Validated results"}],
dp:["Thermal cameras and IoT sensors deploy on your existing cold storage infrastructure. One facility. No structural changes required.","Within 60 days — breach prediction accuracy validated, contamination events tracked, FSSAI compliance dashboard generating automated reports.","Expand across facilities. Facility #10 benefits from temperature patterns learned across facilities #1-9. Audit prep drops from weeks to hours."],
dpl:["Thermal cameras + IoT sensors","One Sevyn8 box","Your compliance dashboard"],
scn:[{t:"6:12 AM",b:"Cold room door left open during shift change. Temperature logger beeps at 6:45 AM. Product already at risk.",w:"Door sensor + thermal camera + temperature probe fused. Deviation predicted at 6:14 AM. Alert sent. Door closed by 6:16 AM."},{t:"11:30 AM",b:"Worker enters processing area without hairnet. CCTV records it. Discovered during monthly FSSAI audit.",w:"Vision AI detects missing PPE in real time. Entry flagged. Compliance log updated automatically."},{t:"3:00 PM",b:"Humidity spike in Zone B. Nobody correlates it with the condenser issue logged separately.",w:"Humidity sensor + thermal camera + maintenance log fused. Condenser anomaly flagged. Predictive maintenance triggered."}],
sens:["Thermal LWIR Cameras","Temperature Probes","Humidity Sensors","Door Sensors","Processing Line Cameras","IoT Gateways"]},
];

function HeroAnim(){
  var cv=useRef(null);
  useEffect(function(){
    var c=cv.current;if(!c)return;
    var x=c.getContext("2d"),W,H,af,pts=[];
    var rs=function(){var d=Math.min(window.devicePixelRatio||1,2);W=c.offsetWidth;H=c.offsetHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0)};
    var sp=function(sx,sy,ex,ey,cl){pts.push({sx:sx,sy:sy,ex:ex,ey:ey,t:-Math.random()*.3,c:cl,s:.005+Math.random()*.004})};
    var rgb=function(c2){return c2===T?"65,75,245":c2===MG?"230,61,203":c2===I3?"142,151,248":"35,43,170"};
    var rr=function(a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.lineTo(a+w-r,b);x.quadraticCurveTo(a+w,b,a+w,b+r);x.lineTo(a+w,b+h-r);x.quadraticCurveTo(a+w,b+h,a+w-r,b+h);x.lineTo(a+r,b+h);x.quadraticCurveTo(a,b+h,a,b+h-r);x.lineTo(a,b+r);x.quadraticCurveTo(a,b,a+r,b);x.closePath()};
    var oc=[T,MG,I3,I7];
    var draw=function(t){
      x.clearRect(0,0,W,H);var s=t*.001;
      var bx=W*.5,by=H*.5,bw=130,bh=170;
      var gp=.5+Math.sin(s*1.3)*.2;
      x.shadowColor="rgba(65,75,245,"+(0.15*gp)+")";x.shadowBlur=50;
      rr(bx-bw/2,by-bh/2,bw,bh,14);x.fillStyle=B2;x.fill();x.shadowBlur=0;
      x.strokeStyle="rgba(65,75,245,"+(0.3+gp*.15)+")";x.lineWidth=1.2;x.stroke();
      x.setLineDash([3,5]);x.lineWidth=.5;
      for(var i=0;i<4;i++){var ly=H*(.15+i*.23);x.beginPath();x.moveTo(10,ly);var mx=(10+bx-bw/2)/2;x.bezierCurveTo(mx,ly,mx,by+(i-1.5)*20,bx-bw/2,by+(i-1.5)*20);x.strokeStyle="rgba(65,75,245,.08)";x.stroke();if(Math.random()<.03)sp(10,ly,bx-bw/2,by+(i-1.5)*20,T)}
      for(var i=0;i<4;i++){var ry=H*(.15+i*.23);x.beginPath();x.moveTo(bx+bw/2,by+(i-1.5)*20);var mx2=(bx+bw/2+W-10)/2;x.bezierCurveTo(mx2,by+(i-1.5)*20,mx2,ry,W-10,ry);x.strokeStyle="rgba("+rgb(oc[i])+",.06)";x.stroke();if(Math.random()<.02)sp(bx+bw/2,by+(i-1.5)*20,W-10,ry,oc[i])}
      x.setLineDash([]);
      for(var i=pts.length-1;i>=0;i--){var p=pts[i];p.t+=p.s;if(p.t>1){pts.splice(i,1);continue}if(p.t<0)continue;var e=p.t<.5?2*p.t*p.t:1-Math.pow(-2*p.t+2,2)/2;var px=p.sx+(p.ex-p.sx)*e,py=p.sy+(p.ey-p.sy)*e+Math.sin(e*Math.PI*3)*6;var al=Math.sin(p.t*Math.PI),r2=rgb(p.c);x.shadowColor="rgba("+r2+",.5)";x.shadowBlur=8;x.beginPath();x.arc(px,py,2.5,0,Math.PI*2);x.fillStyle="rgba("+r2+","+al*.85+")";x.fill();x.shadowBlur=0;for(var j=1;j<=3;j++){var tr=Math.max(0,p.t-j*.02),te=tr<.5?2*tr*tr:1-Math.pow(-2*tr+2,2)/2;x.beginPath();x.arc(p.sx+(p.ex-p.sx)*te,p.sy+(p.ey-p.sy)*te+Math.sin(te*Math.PI*3)*6,1.8-j*.35,0,Math.PI*2);x.fillStyle="rgba("+r2+","+al*.12*(1-j/3)+")";x.fill()}}
      af=requestAnimationFrame(draw)};
    rs();af=requestAnimationFrame(draw);window.addEventListener("resize",rs);
    return function(){cancelAnimationFrame(af);window.removeEventListener("resize",rs)};
  },[]);
  var devs=["IP Camera","Thermal","IoT Sensor","PTZ Camera"];
  var outs=[{l:"Dashboard",c:T},{l:"Smart Alert",c:MG},{l:"OTA Update",c:I3},{l:"Partner API",c:I7}];
  var lb={position:"absolute",padding:"8px 14px",borderRadius:7,background:B3,fontSize:13,fontWeight:600,color:"#94A3B8",whiteSpace:"nowrap",border:"1px solid rgba(65,75,245,.18)",zIndex:3};
  return (<div style={{position:"relative",width:"100%",height:"100%"}}>
    <canvas ref={cv} style={{position:"absolute",inset:0,width:"100%",height:"100%"}} />
    {devs.map(function(d,i){return <div key={"d"+i} style={{...lb,left:0,top:(11+i*23)+"%",transform:"translateY(-50%)"}}>{d}</div>})}
    <div style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:130,height:170,borderRadius:14,border:"1.5px solid "+T+"40",background:B2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:7,zIndex:3,boxShadow:"0 0 50px "+T+"10"}}>
      <div style={{fontSize:14,fontWeight:700,color:T,letterSpacing:1}}>EDGE AI BOX</div>
      <div style={{fontSize:10,color:DM}}>100 TOPS &middot; &lt;100ms</div>
      {[{l:"HAL",c:T},{l:"AI Engine",c:I3},{l:"Decisioning",c:I7}].map(function(la,i){return <div key={i} style={{padding:"4px 12px",borderRadius:5,border:"1px solid "+la.c+"35",background:la.c+"10",fontSize:11,fontWeight:600,color:la.c}}>{la.l}</div>})}
    </div>
    {outs.map(function(o,i){return <div key={"o"+i} style={{...lb,right:0,top:(11+i*23)+"%",transform:"translateY(-50%)",color:o.c,border:"1px solid "+o.c+"25"}}>{o.l}</div>})}
  </div>);
}

function BoxSchematic(){
  var layers=[{n:"System-Wide Learning",sub:"The moat — observes all outcomes, compounds fleet-wide, OTA to every device",c:MG},{n:"Integrations",sub:"B2B dashboards · B2C app · OEM white-label · Partner APIs",c:SL},{n:"Contextual Decisioning",sub:"Learns routines · Baselines · 3 AM person ≠ 3 PM person",c:I7},{n:"Edge AI Engine",sub:"YOLOv8 · EfficientNet · INT8 quantised · <100ms · <2W",c:I3},{n:"HAL",sub:"Single API across multiple ARM and x86 SoC families. New hardware becomes a supply decision, not an engineering rewrite.",c:T}];
  var al=useState(null),a=al[0],pp=useState(0);
  useEffect(function(){var id=setInterval(function(){pp[1](function(v){return(v+1)%5})},900);return function(){clearInterval(id)}},[]);
  return (<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"start"}}>
    <div><div style={{background:B2,border:"2px solid "+T+"35",borderRadius:20,overflow:"hidden",boxShadow:"0 0 80px "+T+"0C,0 20px 60px rgba(0,0,0,.4)"}}>
      <div style={{background:"linear-gradient(180deg,"+T+"12,transparent)",padding:"24px 24px 16px",borderBottom:"1px solid "+BD}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><div style={{fontSize:18,fontWeight:700,color:T,letterSpacing:1.5}}>EDGE AI BOX</div><div style={{fontSize:12,color:DM,marginTop:2}}>Sevyn8 Platform Device</div></div><div style={{display:"flex",gap:4}}>{[T,I3,I7].map(function(c,i){return <div key={i} style={{width:8,height:8,borderRadius:"50%",background:c,opacity:pp[0]===i?1:.25,transition:"opacity .4s",boxShadow:pp[0]===i?"0 0 8px "+c:"none"}} />})}</div></div></div>
      <div style={{padding:"16px 20px"}}>{layers.map(function(la,i){var isA=pp[0]===i;return <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",marginBottom:4,borderRadius:8,background:isA?la.c+"12":"transparent",borderLeft:"3px solid "+(isA?la.c:la.c+"30"),transition:"all .4s"}}><div style={{width:6,height:6,borderRadius:"50%",background:la.c,boxShadow:isA?"0 0 8px "+la.c:"none"}} /><span style={{fontSize:13,fontWeight:isA?600:500,color:isA?la.c:DM}}>{la.n}</span>{isA&&<div style={{marginLeft:"auto",fontSize:10,color:la.c,fontWeight:600}}>ACTIVE</div>}</div>})}</div>
      <div style={{padding:"12px 20px 16px",borderTop:"1px solid "+BD,display:"flex",gap:20,justifyContent:"center"}}>{[{l:"100 TOPS",s:"AI Compute"},{l:"<100ms",s:"Latency"},{l:"~15W",s:"AI load"},{l:"Offline",s:"Mode"}].map(function(s,i){return <div key={i} style={{textAlign:"center"}}><div style={{fontSize:14,fontWeight:700,color:[T,I3,I7,MG][i]}}>{s.l}</div><div style={{fontSize:9,color:DM,marginTop:1}}>{s.s}</div></div>})}</div>
      <div style={{padding:"0 20px 16px",display:"flex",gap:6,justifyContent:"center"}}>{["WiFi 6","LTE","BLE 5.4","Thread"].map(function(c){return <span key={c} style={{fontSize:10,padding:"3px 10px",borderRadius:4,border:"1px solid "+BD,color:DM}}>{c}</span>})}</div>
    </div><div style={{display:"flex",justifyContent:"center",gap:28,marginTop:16}}>{[{l:"PoE In",c:T},{l:"USB 3.0",c:I3},{l:"HDMI",c:I7}].map(function(port,i){return <div key={i} style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:10,height:10,borderRadius:2,border:"1.5px solid "+port.c,background:port.c+"15"}} /><span style={{fontSize:11,color:DM}}>{port.l}</span></div>})}</div></div>
    <div style={{display:"flex",flexDirection:"column",gap:8}}><div style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:DM,marginBottom:4,fontWeight:500}}>Platform layers</div>{layers.map(function(la,i){var active=a===i;return <div key={i} onClick={function(){al[1](active?null:i)}} style={{padding:"14px 18px",borderRadius:10,background:active?BG:B3,border:"1.5px solid "+(active?la.c+"55":BD),borderLeft:"4px solid "+la.c,cursor:"pointer",transition:"all .3s"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:15,fontWeight:600,color:active?TX:MT}}>{la.n}</span><span style={{fontSize:18,color:la.c,transition:"transform .3s",transform:active?"rotate(45deg)":"none",lineHeight:1}}>+</span></div>{active&&<p style={{fontSize:14,color:MT,lineHeight:1.7,marginTop:10}}>{la.sub}</p>}</div>})}</div>
  </div>);
}

function Pipe(){var s2=useState(0),st=s2[0];useEffect(function(){var id=setInterval(function(){s2[1](function(s){return(s+1)%5})},2400);return function(){clearInterval(id)}},[]);
  var S=[{l:"Raw feed",c:DM,d:"4K video from IP camera, thermal sensor, or IoT device enters the Edge AI Box."},{l:"HAL",c:T,d:"Hardware Abstraction Layer normalises across multiple ARM and x86 SoC families. SoC-agnostic by design."},{l:"AI Engine",c:CY,d:"YOLOv8 + EfficientNet INT8 on-device. Under 100ms, under 2W. Fully offline."},{l:"Decisioning",c:I7,d:"Context engine applies learned routines. A person at 3 AM differs from 3 PM."},{l:"Action",c:I3,d:"Alert sent. Compliance logged. Dashboard updated. OTA improvement queued fleet-wide."}];
  return (<div><div style={{display:"flex",alignItems:"center",marginBottom:22}}>{S.map(function(s,i){return <div key={i} style={{flex:1,display:"flex",alignItems:"center",cursor:"pointer"}} onClick={function(){s2[1](i)}}><div style={{flex:"0 0 auto",width:80,padding:"12px 0",borderRadius:8,background:st===i?s.c+"15":"transparent",border:"1.5px solid "+(st>=i?s.c+"55":BD),textAlign:"center",transition:"all .4s",boxShadow:st===i?"0 0 16px "+s.c+"22":"none"}}><div style={{width:8,height:8,borderRadius:"50%",margin:"0 auto 6px",background:st>=i?s.c:DM,boxShadow:st===i?"0 0 12px "+s.c:"none"}} /><div style={{fontSize:11,fontWeight:600,color:st>=i?TX:DM}}>{s.l}</div></div>{i<4&&<div style={{flex:1,height:2,position:"relative",margin:"0 -1px"}}><div style={{position:"absolute",inset:0,background:BD}} /><div style={{position:"absolute",top:0,left:0,height:"100%",width:st>i?"100%":st===i?"50%":"0%",background:"linear-gradient(90deg,"+S[i].c+","+S[Math.min(i+1,4)].c+")",transition:"width .5s"}} /></div>}</div>})}</div><div style={{background:B2,border:"1px solid "+S[st].c+"25",borderRadius:10,padding:"20px 24px",borderLeft:"3px solid "+S[st].c}}><div style={{fontSize:16,fontWeight:600,color:S[st].c,marginBottom:6}}>{S[st].l}</div><div style={{fontSize:16,color:MT,lineHeight:1.75}}>{S[st].d}</div></div></div>)}

function Ctx(){var s2=useState(0),sc=s2[0];useEffect(function(){var id=setInterval(function(){s2[1](function(s){return(s+1)%6})},3000);return function(){clearInterval(id)}},[]);
  var S=[{t:"Person at door — 3:17 AM",x:"Unknown face · Unusual hour",dc:"⚠ Alert homeowner",c:WN},{t:"Door open + motion + face match",x:"Known delivery · Package expected · Camera + door + IoT",dc:"✓ Log silently, no alert",c:T},{t:"Person near shelf 4+ min",x:"Repeated reach · No basket",dc:"⚠ Concealment alert",c:WN},{t:"Cold room: temp rising + door open 4 min",x:"Thermal + door sensor + no pick order",dc:"⚠ Breach in 15 min — alert ops",c:WN},{t:"Driver eyes closed 3+ sec",x:"Highway · Night shift · 6 hrs in",dc:"⚠ In-cab alert + fleet",c:WN},{t:"Forklift + BLE beacon + no hard hat",x:"Camera + proximity sensor + PPE check fused",dc:"⚠ Zone violation + PPE alert",c:WN}],s=S[sc];
  return (<div style={{maxWidth:600}}><div style={{display:"flex",gap:4,marginBottom:18}}>{S.map(function(z,i){return <div key={i} onClick={function(){s2[1](i)}} style={{flex:1,height:4,borderRadius:2,cursor:"pointer",background:i===sc?CY:BD}} />})}</div>{[{l:"Detection",v:s.t},{l:"Context",v:s.x},{l:"Decision",v:s.dc}].map(function(r,i){return <div key={sc+"-"+i} style={{display:"flex",gap:18,alignItems:"center",padding:"16px 22px",marginBottom:6,background:i===2?s.c+"0D":B2,border:"1.5px solid "+(i===2?s.c+"44":BD),borderRadius:10}}><div style={{fontSize:11,textTransform:"uppercase",letterSpacing:1.5,color:DM,minWidth:68,fontWeight:600}}>{r.l}</div><div style={{width:1,height:20,background:BD}} /><div style={{fontSize:16,color:i===0?MT:s.c,fontWeight:i===2?600:400}}>{r.v}</div></div>})}</div>)}

function Fleet(){var p2=useState(-1),p=p2[0];useEffect(function(){var id=setInterval(function(){p2[1](function(v){return(v+1)%6})},1000);return function(){clearInterval(id)}},[]);
  var N=[{x:18,y:8,l:"Retail #1"},{x:52,y:3,l:"Retail #2"},{x:84,y:10,l:"Cold Store"},{x:10,y:82,l:"Fleet Hub"},{x:50,y:94,l:"Home"},{x:88,y:80,l:"Warehouse"}];
  return (<div style={{position:"relative",height:300,maxWidth:560}}><div style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:90,height:90,borderRadius:"50%",background:"radial-gradient(circle,"+CY+"1A,transparent)",border:"1.5px solid "+CY+"40",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",zIndex:2,boxShadow:"0 0 40px "+CY+"14"}}><div style={{fontSize:13,fontWeight:700,color:CY}}>OTA</div><div style={{fontSize:10,color:MT}}>Fleet update</div></div>{N.map(function(n,i){return <div key={i}><svg style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}}><line x1={n.x+"%"} y1={n.y+"%"} x2="50%" y2="50%" stroke={i<=p?CY:BD} strokeWidth={i===p?1.5:.5} strokeDasharray={i<=p?"none":"4 7"} style={{transition:"all .5s"}} /></svg><div style={{position:"absolute",left:n.x+"%",top:n.y+"%",transform:"translate(-50%,-50%)",padding:"8px 16px",borderRadius:8,background:i===p?CY+"1A":B3,border:"1.5px solid "+(i<=p?CY+"50":BD),fontSize:14,fontWeight:500,color:i<=p?CY:DM,transition:"all .5s",whiteSpace:"nowrap",zIndex:1}}>{n.l}{i<=p?" ✓":""}</div></div>})}</div>)}

function Outcomes(p){
  var items=[
    {v:"Retail",ic:"◆",c:T,id:"retail",before:"600 cameras, ESL tags, and RFID readers across 40 stores. None of them talk to each other. Shrinkage costs ₹4,200 Cr annually.",after:"40-60% shrinkage reduction",metric:"₹4,200Cr",ml:"saved annually",detail:"Deploy new intelligent cameras or connect your existing CCTV — either way, camera + ESL + RFID fuse on one platform. Concealment detected in real time."},
    {v:"Smart Home",ic:"□",c:I3,id:"home",before:"Camera alerts for motion. Door sensor alerts for opens. Smoke detector alerts. 90 notifications a day. None of them understand context.",after:"3-5 decisions that matter",metric:"97%",ml:"noise eliminated",detail:"The Sevyn8 Hub connects your existing devices. Or deploy new smart sensors with AI built in. Either way — one intelligence layer, no cloud."},
    {v:"Cold Storage",ic:"○",c:I7,id:"coldchain",before:"Temperature loggers beep after the damage. Thermal cameras exist but nobody correlates them with humidity, door sensors, or compliance data.",after:"Predicted 30 min early",metric:"40-60%",ml:"losses prevented",detail:"Deploy new thermal-AI cameras or connect existing sensors — all fused on one device. FSSAI automated end-to-end."},
    {v:"Fleet",ic:"▲",c:MG,id:"fleet",before:"GPS tracks location. Dashcams record but nobody watches. Vibration sensors log data to a separate system. Nothing is connected.",after:"Compliance is continuous",metric:"60%",ml:"fewer incidents",detail:"Deploy AI dashcams with on-board inference or connect existing cameras and sensors via one box. One dashboard. Predictive, not reactive."}
  ];
  var s2=useState(0),active=s2[0],phase=useState("before"),ph=phase[0];
  useEffect(function(){
    var id=setInterval(function(){
      phase[1](function(p2){
        if(p2==="before") return "after";
        s2[1](function(a){return (a+1)%4});
        return "before";
      });
    },4000);
    return function(){clearInterval(id)};
  },[]);
  var it=items[active];
  return (<div>
    <div style={{display:"flex",gap:6,marginBottom:32,justifyContent:"center"}}>{items.map(function(item,i){return (
      <div key={i} onClick={function(){s2[1](i);phase[1]("before")}} style={{display:"flex",alignItems:"center",gap:8,padding:"10px 20px",borderRadius:8,cursor:"pointer",background:active===i?item.c+"12":"transparent",border:"1.5px solid "+(active===i?item.c+"44":BD),transition:"all .4s"}}>
        <span style={{fontSize:14,color:item.c}}>{item.ic}</span>
        <span style={{fontSize:14,fontWeight:active===i?600:500,color:active===i?TX:DM,transition:"color .3s"}}>{item.v}</span>
      </div>
    )})}</div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,minHeight:200}}>
      <div style={{position:"relative",overflow:"hidden"}}>
        <div style={{opacity:ph==="before"?1:.5,transform:ph==="before"?"translateY(0)":"translateY(-8px)",transition:"all .6s cubic-bezier(.22,1,.36,1)",padding:32,borderRadius:14,border:"1.5px solid "+(ph==="before"?"rgba(140,160,200,.15)":BD),background:ph==="before"?B3:BG,height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:2,color:MG,marginBottom:12,fontWeight:600}}>Without Sevyn8</div>
          <p style={{fontSize:19,color:ph==="before"?TX:MT,lineHeight:1.7,transition:"color .4s"}}>{it.before}</p>
        </div>
      </div>
      <div style={{position:"relative",overflow:"hidden"}}>
        <div style={{opacity:ph==="after"?1:.15,transform:ph==="after"?"translateY(0)":"translateY(16px)",transition:"all .6s cubic-bezier(.22,1,.36,1) .15s",padding:32,borderRadius:14,border:"1.5px solid "+(ph==="after"?it.c+"55":BD),background:ph==="after"?it.c+"0A":BG,height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",boxShadow:ph==="after"?"0 0 40px "+it.c+"12":"none"}}>
          <div style={{fontSize:10,textTransform:"uppercase",letterSpacing:2,color:it.c,marginBottom:12,fontWeight:500}}>With Sevyn8</div>
          <div style={{display:"flex",alignItems:"baseline",gap:12,marginBottom:12}}><span style={{...hd,fontSize:36,fontWeight:800,color:TX}}>{it.after}</span></div>
          <p style={{fontSize:15,color:MT,lineHeight:1.7,marginBottom:16}}>{it.detail}</p>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,cursor:"pointer",color:it.c,fontSize:13,fontWeight:600}} onClick={function(){p.go("sol-"+it.id)}}>See {it.v.toLowerCase()} solution <span>{"→"}</span></div>
        </div>
      </div>
    </div>
    <div style={{display:"flex",justifyContent:"center",gap:4,marginTop:24}}>{items.map(function(item,i){return <div key={i} style={{width:active===i?32:8,height:4,borderRadius:2,background:active===i?item.c:BD,transition:"all .4s"}} />})}</div>
  </div>);
}

function Home(p){
  var go=p.go,l2=useState(false),ld=l2[0];
  useEffect(function(){setTimeout(function(){l2[1](true)},150)},[]);
  return (<div>
    <section style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"100px 40px 60px",maxWidth:MW,margin:"0 auto"}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",width:"100%"}}>
        <div style={{opacity:ld?1:0,transform:ld?"none":"translateY(24px)",transition:"all 1s cubic-bezier(.16,1,.3,1) .3s"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:7,padding:"5px 14px",border:"1px solid "+T+"28",borderRadius:16,marginBottom:28}}><div style={{width:7,height:7,borderRadius:"50%",background:T,boxShadow:"0 0 10px "+T}} /><span style={{fontSize:13,color:T,fontWeight:500}}>AI at Edge Platform</span></div>
          <h1 style={{...hd,fontSize:52,lineHeight:1.06,fontWeight:700,marginBottom:18}}>Intelligence at the edge.</h1>
          <p style={{fontSize:18,color:TX,lineHeight:1.8,marginBottom:24,maxWidth:440}}>90 daily alerts become 3 genuine decisions. Shrinkage drops 40-60%. Cold chain breaches predicted 30 minutes early. Fleet incidents cut by 60%.</p>
          <p style={{fontSize:15,color:DM,lineHeight:1.75,marginBottom:32,maxWidth:420}}>Deploy new intelligent devices with AI built in — or make your existing infrastructure smarter with one box. Under 100ms. Fully offline. No cloud.</p>
          <div style={{display:"flex",gap:12}}><button style={bn} onClick={function(){go("contact")}}>Book a 60-day POC</button><button style={b2} onClick={function(){go("platform")}}>Explore Cortex</button></div>
        </div>
        <div style={{position:"relative",height:480,opacity:ld?1:0,transition:"opacity 1.2s ease .6s"}}><HeroAnim /></div>
      </div>
    </section>

    <section style={{borderTop:"1px solid "+BD,background:B2}}><div style={{maxWidth:MW,margin:"0 auto",padding:"56px 40px"}}><Rv><div style={{textAlign:"center",marginBottom:40}}><Tg>What changes</Tg><h2 style={{...hd,fontSize:34,fontWeight:700}}>Before Sevyn8 vs. After</h2></div></Rv>
      <Outcomes go={go} />
    </div></section>

    <Sc bt><Rv><Tg>Two paths. One platform.</Tg><h2 style={{...hd,fontSize:34,fontWeight:700,marginBottom:10}}>New deployment or existing infrastructure. Same intelligence.</h2><p style={{fontSize:17,color:MT,marginBottom:40}}>Deploy purpose-built intelligent devices with AI on-board — or add a Sevyn8 box to the sensors you already have. Both paths run the same platform.</p></Rv>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,marginBottom:32}}>
        <Rv d={0}><div style={{padding:32,borderRadius:14,border:"1.5px solid "+T+"40",background:T+"06",height:"100%"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}><img src="/sevyn8-mark.svg" alt="" style={{height:34,width:"auto",display:"block"}} /><div style={{fontSize:11,textTransform:"uppercase",letterSpacing:2,color:T,fontWeight:600}}>New deployment</div></div>
          <h3 style={{fontSize:20,fontWeight:700,marginBottom:10}}>Intelligent devices with AI built in</h3>
          <p style={{fontSize:15,color:MT,lineHeight:1.75,marginBottom:16}}>Purpose-built cameras, sensors, and gateways with on-board NPU. Sevyn8 platform embedded at factory. AI runs natively on the device — no separate box needed.</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:6}}>{["On-board NPU/CPU","AI at the device","OEM white-label","Factory embedded"].map(function(t){return <span key={t} style={{fontSize:11,padding:"4px 10px",borderRadius:4,border:"1px solid "+T+"25",color:T,background:T+"08"}}>{t}</span>})}</div>
        </div></Rv>
        <Rv d={0.1}><div style={{padding:32,borderRadius:14,border:"1.5px solid "+I3+"40",background:I3+"06",height:"100%"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}><div style={{width:40,height:40,borderRadius:8,background:I3+"18",border:"1.5px solid "+I3+"40",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,color:I3}}>Hub</div><div style={{fontSize:11,textTransform:"uppercase",letterSpacing:2,color:I3,fontWeight:600}}>Existing infrastructure</div></div>
          <h3 style={{fontSize:20,fontWeight:700,marginBottom:10}}>Make your dumb devices intelligent</h3>
          <p style={{fontSize:15,color:MT,lineHeight:1.75,marginBottom:16}}>Already have cameras, thermal sensors, IoT nodes, RFID readers installed? Add one Sevyn8 Hub or Edge AI Box to your network. It ingests feeds from every device and runs AI inference locally.</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:6}}>{["Any existing device","One box per site","No rip-and-replace","60-day results"].map(function(t){return <span key={t} style={{fontSize:11,padding:"4px 10px",borderRadius:4,border:"1px solid "+I3+"25",color:I3,background:I3+"08"}}>{t}</span>})}</div>
        </div></Rv>
      </div>
      <Rv d={0.2}><div style={{textAlign:"center",padding:"24px 0",borderTop:"1px solid "+BD}}><p style={{fontSize:16,color:MT}}>Both paths converge on the same platform. Same AI engine. Same contextual decisioning. Same fleet-wide learning. Same dashboard.</p></div></Rv>
    </Sc>

    <Sc bt><Rv><Tg>Meet Cortex</Tg><h2 style={{...hd,fontSize:34,fontWeight:700,marginBottom:10}}>One platform. Every industry.</h2><p style={{fontSize:17,color:MT,marginBottom:34,maxWidth:720}}>Cortex is the industry-agnostic edge AI platform behind every Sevyn8 deployment. Hardware-agnostic. Privacy by architecture. Every deployment makes every other deployment smarter.</p></Rv>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:26}}>
        {[
          {c:T,t:"Industry-agnostic",h:"Retail, cold chain, logistics, reinsurance, smart home.",b:"Same decisioning substrate. Different verticals, different decisions. One R&D stack behind many markets."},
          {c:I3,t:"Hardware-agnostic",h:"Jetson, Ambarella, Qualcomm, Hailo, Rockchip.",b:"HAL normalises across SoC families. Keep existing cameras or deploy new ones. No BOM lock-in, no rip-and-replace."},
          {c:I7,t:"Compounding learning",h:"Every deployment teaches every other.",b:"System-wide observations feed back into every device via OTA. The 500th deployment is measurably smarter than the 1st."}
        ].map(function(v,i){return <Rv key={i} d={i*.08}><div style={{padding:24,borderRadius:12,border:"1.5px solid "+v.c+"30",background:v.c+"06",height:"100%"}}>
          <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:2,color:v.c,fontWeight:600,marginBottom:10}}>{v.t}</div>
          <h3 style={{fontSize:17,fontWeight:700,marginBottom:8,lineHeight:1.4}}>{v.h}</h3>
          <p style={{fontSize:14,color:MT,lineHeight:1.7}}>{v.b}</p>
        </div></Rv>})}
      </div>
      <Rv d={.24}><div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:16,padding:"18px 22px",borderRadius:10,border:"1px solid "+BD,background:B2}}>
        <div style={{display:"flex",flexWrap:"wrap",gap:20,fontSize:13,color:MT}}>
          <span><span style={{color:T,fontWeight:600}}>MCP-native</span> architecture</span>
          <span><span style={{color:T,fontWeight:600}}>DPDP + GDPR</span> by design</span>
          <span><span style={{color:T,fontWeight:600}}>STQC</span>-aligned</span>
          <span><span style={{color:T,fontWeight:600}}>DPIIT</span>-recognised</span>
        </div>
        <button style={b2} onClick={function(){go("platform")}}>Explore Cortex {"→"}</button>
      </div></Rv>
    </Sc>

    <Sc bg={B2} bt><Rv><Tg>The intelligence</Tg><h2 style={{...hd,fontSize:34,fontWeight:700,marginBottom:10}}>Devices generate data. Sevyn8 creates understanding.</h2><p style={{fontSize:17,color:MT,marginBottom:34}}>Whether AI runs on the device itself or on a Sevyn8 box nearby — camera feeds, thermal readings, IoT signals, and RFID events fuse into one context engine. Same event, different context, different decision.</p></Rv><Rv d={.12}><Ctx /></Rv></Sc>
    <Sc bt><Rv><Tg>Your industry</Tg><h2 style={{...hd,fontSize:34,fontWeight:700,marginBottom:12}}>Find your problem. See the outcome.</h2><p style={{fontSize:17,color:MT,marginBottom:40}}>Click into your industry. Fresh deployment or existing infrastructure — same outcomes.</p></Rv>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
        {[{s:SOL[1],pain:"600 cameras, ESL tags, and RFID across 40 stores — and none of them talk to each other. LP reviews 5% of footage after the fact.",out:"40-60% shrinkage reduction. 98%+ footfall accuracy. 60-day POC.",c:T},
          {s:SOL[2],pain:"GPS, dashcams, vibration sensors, facility cameras — four systems, four dashboards, zero correlation.",out:"60% fewer incidents. Continuous compliance. Auditable from day one.",c:MG},
          {s:SOL[3],pain:"Thermal cameras, temperature probes, humidity sensors, door sensors — all logging separately. FSSAI audit prep takes weeks.",out:"Breaches predicted 30 min early. FSSAI automated. Audit prep: hours.",c:I7},
          {s:SOL[0],pain:"Cameras, doorbells, motion sensors, smoke detectors — 90 alerts a day from devices that do not talk to each other.",out:"3-5 decisions that matter. Zero data to cloud. Works without WiFi.",c:I3}
        ].map(function(v,i){return <Rv key={i} d={i*.06}><div onClick={function(){go("sol-"+v.s.id)}} style={{padding:28,borderRadius:14,border:"1.5px solid "+BD,background:BG,cursor:"pointer",transition:"border-color .3s",borderLeft:"4px solid "+v.c,height:"100%"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}><span style={{fontSize:16,color:v.c}}>{v.s.ic}</span><span style={{fontSize:18,fontWeight:700}}>{v.s.n}</span></div>
          <p style={{fontSize:15,color:MT,lineHeight:1.7,marginBottom:16}}>{v.pain}</p>
          <div style={{padding:"14px 18px",borderRadius:8,background:v.c+"0A",border:"1px solid "+v.c+"22"}}>
            <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:2,color:v.c,fontWeight:600,marginBottom:6}}>With Sevyn8</div>
            <p style={{fontSize:16,fontWeight:600,color:TX,lineHeight:1.5}}>{v.out}</p>
          </div>
          <div style={{marginTop:14,fontSize:13,color:v.c,fontWeight:600}}>See {v.s.n.toLowerCase()} solution {"→"}</div>
        </div></Rv>})}
      </div>
    </Sc>

    <section style={{borderTop:"1px solid "+BD,background:B2}}><div style={{maxWidth:MW,margin:"0 auto",padding:"40px",display:"flex",alignItems:"center",justifyContent:"center",gap:48,flexWrap:"wrap"}}><span style={{fontSize:12,textTransform:"uppercase",letterSpacing:2,color:DM}}>Deployed at</span>{["Global ESL Leader","Premium Fashion Retailer"].map(function(n,i){return <div key={i} style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:8,height:8,borderRadius:"50%",background:CY}} /><span style={{fontSize:14,fontWeight:600,color:MT}}>{n}</span></div>})}</div></section>

    <Sc><Rv><div style={{textAlign:"center"}}><h2 style={{...hd,fontSize:34,fontWeight:700,marginBottom:14}}>New devices or existing infrastructure. See it work in 60 days.</h2><p style={{fontSize:17,color:MT,marginBottom:30,maxWidth:680,margin:"0 auto 30px"}}>Deploy purpose-built intelligent devices or make your existing infrastructure smarter. Same platform, same AI, same results. 60-day POC.</p><div style={{display:"flex",gap:12,justifyContent:"center"}}><button style={bn} onClick={function(){go("contact")}}>Book a 60-day POC</button><button style={b2} onClick={function(){go("platform")}}>Explore Cortex</button></div></div></Rv></Sc>
  </div>)}

function PlatPg(p){
  var verticals=[
    {c:T,n:"Retail",sig:"CCTV, ESL, RFID, shelf-edge sensors",dec:"Concealment patterns · planogram compliance · queue breach · zone-level footfall",out:"40-60% shrinkage reduction · 98%+ footfall accuracy"},
    {c:I7,n:"Cold chain & food",sig:"Thermal cameras, temperature probes, humidity, door sensors",dec:"Breach prediction · PPE verification · FIFO compliance · contamination detection",out:"Breaches predicted 15-30 min early · FSSAI automated"},
    {c:MG,n:"Fleet & logistics",sig:"Dashcams, in-cab IR, BLE proximity, facility cameras",dec:"Fatigue and distraction · PPE on the floor · near-miss tracking · predictive maintenance",out:"60% fewer incidents · continuous compliance"},
    {c:I3,n:"Smart home",sig:"IP cameras, doorbells, motion + door sensors, smoke detectors",dec:"Household recognition · anomaly vs. routine · fall and gait detection",out:"3-5 decisions a day · zero data to cloud"},
    {c:SL,n:"Reinsurance intelligence",sig:"Bordereaux, SOVs, claim feeds, external accumulation signals",dec:"Canonical mapping · cross-cedant entity resolution · accumulation monitoring",out:"Same asset resolved across multiple cedants and formats — in hours, not weeks"}
  ];
  var arch=[
    {k:"MCP-native",v:"Three Model Context Protocol servers — Cortex Core, Edge, Admin/Ops — expose the platform to agents and external systems without custom glue."},
    {k:"Cloud-agnostic",v:"Deploys on GCP, AWS, or Azure — same platform, same guarantees. Managed SQL, warehouse, object store, and event bus on whichever cloud you standardise on. Multi-tenant and white-label ready."},
    {k:"Bi-temporal data model",v:"PostgreSQL 15+ with bi-temporal columns on every table. Every fact is queryable at any point in time. Row-level security scopes every tenant."},
    {k:"DIS ingestion pipeline",v:"Bronze / Silver / Gold medallion architecture. 7 stages, 10-state machine. Never silently ingest bad data, never silently reject files."},
    {k:"Edge inference",v:"INT8-quantised vision and sensor-fusion models. Under 100ms, under 2W, fully offline. HAL abstracts ARM and x86 SoC families."},
    {k:"Compliance",v:"DPDP + GDPR by architecture. STQC-aligned. Consent-based data flows. Privacy by design, not by policy."}
  ];
  var businessLines=[
    "Plug into what you already have — cameras, sensors, POS, WMS, ESL.",
    "Pick the outcomes your operation cares about. The decisioning layer is the same across verticals.",
    "60-day proof of concept on your real data, at your site.",
    "As your fleet grows, every new site inherits the learning of every previous one."
  ];
  return <div style={{paddingTop:80}}>
    <Sc><Rv>
      <Tg c={T}>Cortex platform</Tg>
      <h1 style={{...hd,fontSize:46,fontWeight:700,lineHeight:1.06,marginBottom:22,maxWidth:680}}>Cortex. The industry-agnostic edge AI platform.</h1>
      <p style={{fontSize:18,color:MT,lineHeight:1.85,maxWidth:640}}>One decisioning substrate across retail, cold chain, logistics, smart home, and reinsurance. Edge inference under 100ms. Cloud intelligence that compounds across every deployment. Hardware-agnostic by construction.</p>
    </Rv></Sc>

    <Sc bg={B2} bt>
      <Rv><Tg>Why industry-agnostic matters</Tg><h2 style={{...hd,fontSize:32,fontWeight:700,marginBottom:12}}>One platform. Different verticals. Same core loop.</h2><p style={{fontSize:16,color:MT,lineHeight:1.8,maxWidth:680,marginBottom:30}}>The signals change. The decisioning substrate does not. Every vertical runs the same ingest, identity, context, decide, act, compound pipeline — with a vertical-specific model pack on top.</p></Rv>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>{verticals.map(function(v,i){return <Rv key={i} d={i*.05}><div style={{display:"grid",gridTemplateColumns:"180px 1fr 1fr 1fr",gap:20,padding:"20px 22px",borderRadius:10,border:"1px solid "+BD,background:BG,borderLeft:"4px solid "+v.c,alignItems:"start"}}>
        <div><div style={{fontSize:11,textTransform:"uppercase",letterSpacing:2,color:v.c,fontWeight:600,marginBottom:4}}>Vertical</div><div style={{fontSize:17,fontWeight:700}}>{v.n}</div></div>
        <div><div style={{fontSize:11,textTransform:"uppercase",letterSpacing:1.5,color:DM,fontWeight:600,marginBottom:4}}>Signals</div><div style={{fontSize:14,color:MT,lineHeight:1.6}}>{v.sig}</div></div>
        <div><div style={{fontSize:11,textTransform:"uppercase",letterSpacing:1.5,color:DM,fontWeight:600,marginBottom:4}}>Decisions</div><div style={{fontSize:14,color:MT,lineHeight:1.6}}>{v.dec}</div></div>
        <div><div style={{fontSize:11,textTransform:"uppercase",letterSpacing:1.5,color:DM,fontWeight:600,marginBottom:4}}>Outcome</div><div style={{fontSize:14,color:TX,fontWeight:500,lineHeight:1.6}}>{v.out}</div></div>
      </div></Rv>})}</div>
    </Sc>

    <Sc bt><Rv><Tg c={T}>The Cortex loop</Tg><h2 style={{...hd,fontSize:32,fontWeight:700,marginBottom:12}}>Ingest. Decide. Act. Compound.</h2><p style={{fontSize:16,color:MT,lineHeight:1.8,maxWidth:640,marginBottom:30}}>Every event follows the same path, from edge capture to fleet-wide learning. Each step is inspectable, each layer is replaceable.</p></Rv><Rv d={.1}><Pipe /></Rv></Sc>

    <Sc bg={B2} bt><Rv><Tg>Contextual decisioning</Tg><h2 style={{...hd,fontSize:32,fontWeight:700,marginBottom:12}}>Same event. Different context. Different decision.</h2><p style={{fontSize:16,color:MT,lineHeight:1.8,maxWidth:640,marginBottom:30}}>Raw detections are cheap. Decisions are the product. Cortex fuses camera, sensor, and system-of-record signals against learned baselines before anything reaches a human.</p></Rv><Rv d={.1}><Ctx /></Rv></Sc>

    <Sc bt><Rv><Tg>Fleet intelligence</Tg><h2 style={{...hd,fontSize:32,fontWeight:700,marginBottom:12}}>Every deployment teaches every other deployment.</h2><p style={{fontSize:16,color:MT,lineHeight:1.8,maxWidth:640,marginBottom:30}}>Observations from every edge node feed a shared learning plane. Improvements are pushed back to every device via encrypted OTA. This is the moat — and it widens every day.</p></Rv><Rv d={.1}><Fleet /></Rv></Sc>

    <Sc bg={B2} bt><Rv><Tg>Architecture</Tg><h2 style={{...hd,fontSize:32,fontWeight:700,marginBottom:12}}>Built for enterprise. Designed for the edge.</h2><p style={{fontSize:16,color:MT,lineHeight:1.8,maxWidth:640,marginBottom:30}}>A cloud-agnostic intelligence plane paired with edge inference that runs offline. Deploys on GCP, AWS, or Azure. Multi-tenant, bi-temporal, and MCP-native from day one.</p></Rv>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:12}}>{arch.map(function(a,i){return <Rv key={i} d={i*.05}><div style={{padding:"20px 22px",borderRadius:10,border:"1px solid "+BD,background:BG,height:"100%"}}>
        <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:2,color:T,fontWeight:600,marginBottom:8}}>{a.k}</div>
        <p style={{fontSize:14,color:MT,lineHeight:1.7}}>{a.v}</p>
      </div></Rv>})}</div>
    </Sc>

    <Sc bt><Rv><Tg>What this means for you</Tg><h2 style={{...hd,fontSize:32,fontWeight:700,marginBottom:12}}>A platform you can run on your own data.</h2><p style={{fontSize:16,color:MT,lineHeight:1.8,maxWidth:640,marginBottom:30}}>Same decisioning substrate, shaped to your operation and your KPIs — not a rebuild.</p></Rv>
      <Rv d={.1}><div style={{padding:28,borderRadius:14,border:"1.5px solid "+T+"35",background:T+"06",maxWidth:720}}>
        <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:14}}>{businessLines.map(function(l,j){return <li key={j} style={{display:"flex",gap:12,fontSize:16,color:TX,lineHeight:1.65}}><span style={{color:T,flexShrink:0,marginTop:7}}>■</span><span>{l}</span></li>})}</ul>
      </div></Rv>
    </Sc>

    <Sc bg={B2} bt><Rv><div style={{textAlign:"center"}}>
      <h2 style={{...hd,fontSize:28,fontWeight:700,marginBottom:14}}>See Cortex run on your data.</h2>
      <p style={{fontSize:16,color:MT,marginBottom:24,maxWidth:680,margin:"0 auto 24px"}}>60-day proof of concept. Your site, your signals, your KPIs. We bring the platform.</p>
      <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
        <button style={bn} onClick={function(){p.go("contact")}}>Book a 60-day POC</button>
        <button style={b2} onClick={function(){p.go("box")}}>See the Edge AI Box {"→"}</button>
      </div>
    </div></Rv></Sc>
  </div>;
}

function BoxPg(p){
  var tiers=[
    {c:T,n:"Nano",tag:"Edge AI Box \u00B7 Nano",tops:"67 TOPS",use:"Mid-density retail, smart home, cold rooms, and edge IoT gateways.",rows:[
      ["Platform","NVIDIA Jetson Orin Nano Super module"],
      ["CPU","6-core Arm Cortex-A78AE v8.2, 64-bit \u00B7 1.5 MB L2 + 4 MB L3"],
      ["GPU","1024-core NVIDIA Ampere, 32 Tensor cores (8 GB) \u00B7 512-core, 16 Tensor cores (4 GB)"],
      ["Memory","4 GB or 8 GB LPDDR5"],
      ["AI compute","Up to 67 TOPS (INT8)"]
    ]},
    {c:I3,n:"Pro",tag:"Edge AI Box \u00B7 Pro",tops:"Up to 100 TOPS",use:"High-density retail fleets, logistics hubs, multi-line cold chain, reinsurance ingestion.",rows:[
      ["Platform","NVIDIA Jetson Orin NX Series module"],
      ["CPU","8-core Arm Cortex-A78AE v8.2, 64-bit"],
      ["GPU","1024-core NVIDIA Ampere, 32 Tensor cores"],
      ["Memory","8 GB or 16 GB LPDDR5"],
      ["AI compute","Up to 100 TOPS (INT8)"]
    ]}
  ];
  var compare=[
    ["AI compute","67 TOPS","Up to 100 TOPS"],
    ["Module","Jetson Orin Nano Super","Jetson Orin NX"],
    ["CPU cores","6 \u00D7 Cortex-A78AE","8 \u00D7 Cortex-A78AE"],
    ["GPU / Tensor cores","1024 / 32 (8 GB) \u00B7 512 / 16 (4 GB)","1024 / 32"],
    ["Memory","4 GB or 8 GB LPDDR5","8 GB or 16 GB LPDDR5"]
  ];
  var shared=[
    {k:"I/O",v:"1\u00D7 GbE \u00B7 3\u00D7 USB 3.2 Gen 2 \u00B7 HDMI 4K@60 \u00B7 OTG Micro USB"},
    {k:"Expansion",v:"M.2 E-key (WiFi + BT) \u00B7 M.2 B-key (LTE/5G) \u00B7 40-pin GPIO \u00B7 CAN \u00B7 dual-HDMI option"},
    {k:"Storage",v:"M.2 2280 NVMe (PCIe x4) + Micro SD"},
    {k:"Power",v:"12 V / 5 A DC \u00B7 ~15 W typical under AI load"},
    {k:"Operating temperature",v:"\u221210 \u00B0C to +60 \u00B0C"},
    {k:"Humidity",v:"95% non-condensing @ 40 \u00B0C"},
    {k:"Vibration / shock",v:"3 Grms @ 5\u2013500 Hz \u00B7 10 G / 11 ms"},
    {k:"Dimensions",v:"120 \u00D7 90 \u00D7 65 mm \u00B7 1.2 kg"},
    {k:"BSP",v:"NVIDIA JetPack 6.2+ on Ubuntu 22.04"},
    {k:"Security & compliance",v:"STQC-aligned \u00B7 BIS CRS \u00B7 DPDP \u00B7 encrypted OTA fleet-wide"}
  ];
  return <div style={{paddingTop:80}}>
    <Sc><Rv>
      <Tg>Product</Tg>
      <h1 style={{...hd,fontSize:46,fontWeight:700,lineHeight:1.06,marginBottom:20}}>Edge AI Box</h1>
      <p style={{fontSize:18,color:MT,lineHeight:1.85,maxWidth:640}}>The Cortex platform in one rugged device. Two configurations, one footprint — so every site runs the same integration regardless of the AI load it needs.</p>
    </Rv></Sc>

    <Sc bg={B2} bt><Rv><BoxSchematic /></Rv></Sc>

    <Sc bt><Rv>
      <Tg c={T}>Two configurations</Tg>
      <h2 style={{...hd,fontSize:32,fontWeight:700,marginBottom:12}}>Nano for most sites. Pro for workloads that need more.</h2>
      <p style={{fontSize:16,color:MT,lineHeight:1.8,maxWidth:640,marginBottom:30}}>Both boxes share the same 120 × 90 × 65 mm chassis, I/O, and environmental envelope. A site that starts on Nano can move to Pro without re-cabling or re-integration.</p>
    </Rv>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>{tiers.map(function(t,i){return <Rv key={i} d={i*.1}><div style={{padding:28,borderRadius:14,border:"1.5px solid "+t.c+"40",background:t.c+"06",borderLeft:"5px solid "+t.c,height:"100%"}}>
        <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:14}}>
          <span style={{fontSize:11,textTransform:"uppercase",letterSpacing:2.5,color:t.c,fontWeight:700}}>{t.n}</span>
          <span style={{fontSize:13,color:t.c,fontWeight:600,...hd}}>{t.tops}</span>
        </div>
        <h3 style={{fontSize:20,fontWeight:700,marginBottom:8}}>{t.tag}</h3>
        <p style={{fontSize:14,color:MT,lineHeight:1.7,marginBottom:18}}>{t.use}</p>
        <div style={{borderTop:"1px solid "+BD,paddingTop:14,display:"flex",flexDirection:"column",gap:10}}>{t.rows.map(function(r,j){return <div key={j} style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:12}}>
          <span style={{fontSize:11,textTransform:"uppercase",letterSpacing:1.5,color:DM,fontWeight:600,paddingTop:2}}>{r[0]}</span>
          <span style={{fontSize:14,color:TX,lineHeight:1.55}}>{r[1]}</span>
        </div>})}</div>
      </div></Rv>})}</div>
    </Sc>

    <Sc bg={B2} bt><Rv>
      <Tg>Specification comparison</Tg>
      <h2 style={{...hd,fontSize:32,fontWeight:700,marginBottom:24}}>Pick the tier that matches the workload.</h2>
    </Rv>
      <div style={{border:"1px solid "+BD,borderRadius:10,overflow:"hidden"}}>
        <div style={{display:"grid",gridTemplateColumns:"1.2fr 1fr 1fr",background:B3,padding:"14px 20px",fontSize:11,textTransform:"uppercase",letterSpacing:2,color:DM,fontWeight:600}}>
          <span>Spec</span><span style={{color:T}}>Nano</span><span style={{color:I3}}>Pro</span>
        </div>
        {compare.map(function(r,i){return <Rv key={i} d={i*.04}><div style={{display:"grid",gridTemplateColumns:"1.2fr 1fr 1fr",padding:"16px 20px",borderTop:"1px solid "+BD,fontSize:14,color:TX,alignItems:"start"}}>
          <span style={{color:MT}}>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span>
        </div></Rv>})}
      </div>
    </Sc>

    <Sc bt><Rv>
      <Tg>Shared across both tiers</Tg>
      <h2 style={{...hd,fontSize:32,fontWeight:700,marginBottom:12}}>The same box, hardened for the field.</h2>
      <p style={{fontSize:16,color:MT,lineHeight:1.8,maxWidth:640,marginBottom:30}}>Everything downstream of compute — I/O, power, thermals, storage, BSP — is identical across Nano and Pro, so your integration playbook is the same on either tier.</p>
    </Rv>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:10}}>{shared.map(function(s,i){return <Rv key={i} d={i*.04}><div style={{padding:"18px 20px",borderRadius:8,border:"1px solid "+BD,background:BG,height:"100%"}}>
        <div style={{fontSize:11,color:DM,textTransform:"uppercase",letterSpacing:1.5,marginBottom:6,fontWeight:600}}>{s.k}</div>
        <div style={{fontSize:14,color:TX,lineHeight:1.6}}>{s.v}</div>
      </div></Rv>})}</div>
    </Sc>

    <Sc bg={B2} bt><Rv>
      <h3 style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:DM,marginBottom:14}}>Connects to</h3>
      <p style={{fontSize:16,color:MT,lineHeight:1.85}}>Fixed Box IP Camera &middot; Dome Camera &middot; Bullet Camera &middot; PTZ Camera &middot; Fisheye Panoramic &middot; Thermal LWIR &middot; ANPR Camera &middot; In-Cab IR Camera &middot; Shelf-Edge Camera &middot; WiFi Consumer Camera &middot; Video Doorbell &middot; IoT Sensor Nodes &middot; BLE Beacons &middot; RFID Readers</p>
    </Rv></Sc>

    <Sc bt><Rv><div style={{textAlign:"center"}}>
      <h2 style={{...hd,fontSize:28,fontWeight:700,marginBottom:14}}>Evaluate on your site.</h2>
      <p style={{fontSize:16,color:MT,marginBottom:24,maxWidth:680,margin:"0 auto 24px"}}>Request a Nano or Pro evaluation unit. 60-day POC. Your cameras, your KPIs.</p>
      <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
        <button style={bn} onClick={function(){p.go("contact")}}>Request evaluation unit</button>
        <button style={b2} onClick={function(){p.go("platform")}}>Explore Cortex {"\u2192"}</button>
      </div>
    </div></Rv></Sc>
  </div>;
}

function SolPg(p){var s=p.s,sc2=useState(0),sci=sc2[0];
  useEffect(function(){if(!s.scn)return;var id=setInterval(function(){sc2[1](function(v){return(v+1)%s.scn.length})},6000);return function(){clearInterval(id)}},[s.scn]);
  return <div style={{paddingTop:80}}>
  <Sc><Rv><div style={{fontSize:14,color:MT,marginBottom:16}}><span style={{color:T,cursor:"pointer"}} onClick={function(){p.go("home")}}>Solutions</span> / {s.n}</div><h1 style={{...hd,fontSize:44,fontWeight:700,lineHeight:1.08,maxWidth:640,marginBottom:22}}>{s.h}</h1><p style={{fontSize:18,color:MT,lineHeight:1.85,maxWidth:580}}>{s.d}</p></Rv></Sc>
  {s.st&&<section style={{borderTop:"1px solid "+BD,background:B2}}><div style={{maxWidth:MW,margin:"0 auto",padding:"40px",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>{s.st.map(function(st,i){return <Rv key={i} d={i*.08}><div style={{padding:20,borderRadius:10,border:"1px solid "+BD,background:BG,textAlign:"center",height:"100%"}}><div style={{fontSize:28,fontWeight:700,...hd,color:T}}>{st.v}</div><div style={{fontSize:13,color:MT,marginTop:5}}>{st.l}</div></div></Rv>})}</div></section>}

  {s.scn&&<Sc bt><Rv><Tg>A day without vs. with</Tg><h2 style={{...hd,fontSize:32,fontWeight:700,marginBottom:28}}>Same moment. Different outcome.</h2></Rv>
    <div style={{display:"flex",gap:6,marginBottom:24}}>{s.scn.map(function(sc,i){return <div key={i} onClick={function(){sc2[1](i)}} style={{padding:"8px 16px",borderRadius:6,cursor:"pointer",background:sci===i?CY+"15":"transparent",border:"1px solid "+(sci===i?CY+"44":BD),fontSize:13,fontWeight:sci===i?600:500,color:sci===i?CY:DM,transition:"all .3s"}}>{sc.t}</div>})}</div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
      <Rv d={0}><div style={{padding:28,borderRadius:14,border:"1.5px solid "+MG+"30",background:"transparent",height:"100%"}}>
        <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:2,color:MG,marginBottom:14,fontWeight:600}}>Without Sevyn8</div>
        <div style={{fontSize:13,color:DM,marginBottom:10,fontFamily:"'IBM Plex Mono',monospace"}}>{s.scn[sci].t}</div>
        <p style={{fontSize:17,color:TX,lineHeight:1.75}}>{s.scn[sci].b}</p>
      </div></Rv>
      <Rv d={0.1}><div style={{padding:28,borderRadius:14,border:"1.5px solid "+T+"40",background:T+"06",height:"100%",boxShadow:"0 0 30px "+T+"08"}}>
        <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:2,color:T,marginBottom:14,fontWeight:600}}>With Sevyn8</div>
        <div style={{fontSize:13,color:DM,marginBottom:10,fontFamily:"'IBM Plex Mono',monospace"}}>{s.scn[sci].t}</div>
        <p style={{fontSize:17,color:TX,lineHeight:1.75}}>{s.scn[sci].w}</p>
      </div></Rv>
    </div>
    <div style={{display:"flex",justifyContent:"center",gap:4,marginTop:20}}>{s.scn.map(function(sc,i){return <div key={i} style={{width:sci===i?28:8,height:4,borderRadius:2,background:sci===i?CY:BD,transition:"all .4s"}} />})}</div>
  </Sc>}

  {s.sens&&<Sc bg={B2} bt><Rv><Tg>Sensor ecosystem</Tg><h2 style={{...hd,fontSize:32,fontWeight:700,marginBottom:12}}>What feeds into the platform</h2><p style={{fontSize:16,color:MT,marginBottom:28}}>Every device below connects to one Sevyn8 box — or runs Sevyn8 AI natively on-board.</p></Rv>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>{s.sens.map(function(sn,i){return <Rv key={i} d={i*.05}><div style={{padding:"16px 20px",borderRadius:10,border:"1px solid "+BD,background:BG,display:"flex",alignItems:"center",gap:12,height:"100%"}}><div style={{width:8,height:8,borderRadius:"50%",background:T,flexShrink:0}} /><span style={{fontSize:15,fontWeight:500}}>{sn}</span></div></Rv>})}</div>
  </Sc>}

  {s.wf&&<Sc bt><Rv><h3 style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:MG,marginBottom:12}}>What you are stuck with today</h3><p style={{fontSize:16,color:MT,lineHeight:1.85,maxWidth:620}}>{s.wf}</p></Rv></Sc>}
  <Sc bg={B2} bt><Rv><h3 style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:T,marginBottom:22}}>What changes with Sevyn8</h3></Rv>{s.cs.map(function(c,i){var pts=c.split(" \u2014 ");return <Rv key={i} d={i*.05}><div style={{display:"flex",gap:16,padding:"18px 0",borderBottom:"1px solid "+BD}}><div style={{width:6,height:6,borderRadius:"50%",background:T,marginTop:9,flexShrink:0}} /><div><span style={{fontSize:16,fontWeight:600,color:TX}}>{pts[0]}</span>{pts[1]&&<span style={{fontSize:16,color:MT}}> &mdash; {pts[1]}</span>}</div></div></Rv>})}</Sc>

  <Sc bt><Rv><Tg>Two deployment paths</Tg><h2 style={{...hd,fontSize:32,fontWeight:700,marginBottom:28}}>New intelligent devices or existing infrastructure.</h2></Rv>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:24}}>
      <Rv d={0}><div style={{padding:24,borderRadius:12,border:"1.5px solid "+T+"35",background:T+"05",height:"100%"}}>
        <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:2,color:T,marginBottom:10,fontWeight:600}}>Greenfield</div>
        <h4 style={{fontSize:17,fontWeight:600,marginBottom:8}}>Deploy new devices with AI built in</h4>
        <p style={{fontSize:14,color:MT,lineHeight:1.7}}>Purpose-built devices with on-board NPU running the Sevyn8 platform natively. No separate box needed. AI inference happens on the device itself.</p>
      </div></Rv>
      <Rv d={0.08}><div style={{padding:24,borderRadius:12,border:"1.5px solid "+I3+"35",background:I3+"05",height:"100%"}}>
        <div style={{fontSize:11,textTransform:"uppercase",letterSpacing:2,color:I3,marginBottom:10,fontWeight:600}}>Brownfield</div>
        <h4 style={{fontSize:17,fontWeight:600,marginBottom:8}}>Add intelligence to what you have</h4>
        <p style={{fontSize:14,color:MT,lineHeight:1.7}}>Connect your existing cameras, sensors, and IoT devices to one Sevyn8 Hub or Edge AI Box. It ingests all feeds and runs AI inference locally.</p>
      </div></Rv>
    </div>
  </Sc>

  <Sc bg={B2} bt><Rv><h3 style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:DM,marginBottom:26}}>Your path to results</h3></Rv><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14}}>{["Start","Scale","Compound"].map(function(l,i){return <Rv key={i} d={i*.1}><div style={{padding:24,borderRadius:12,border:"1px solid "+BD,background:BG,height:"100%"}}><div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}><div style={{width:28,height:28,borderRadius:"50%",background:T+"15",border:"1.5px solid "+T+"40",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:T}}>{i+1}</div><span style={{fontSize:12,textTransform:"uppercase",letterSpacing:2,color:T,fontWeight:600}}>{l}</span></div><p style={{fontSize:15,color:MT,lineHeight:1.75}}>{s.dp[i]}</p></div></Rv>})}</div></Sc>
  <Sc bt><Rv><div style={{textAlign:"center"}}><h2 style={{...hd,fontSize:28,fontWeight:700,marginBottom:14}}>Ready to see it work?</h2><p style={{fontSize:16,color:MT,marginBottom:24}}>60-day POC. New devices or existing infrastructure. Measurable results.</p><button style={bn} onClick={function(){p.go("contact")}}>Start the conversation {"→"}</button></div></Rv></Sc></div>}

function PartPg(p){var cats=[{t:"Silicon Partners (ARM & x86)",i:[["Tier-1 Mobile SoC Provider","Leading ARM-based application processor with dedicated NPU delivering up to 8 TOPS. WiFi 6E integrated. Primary SoC for the Edge AI Box. Design Partnership Agreement signed.","ARM SoC"],["Vision-Grade SoC Provider","4 TOPS dedicated vision processor with 4K ISP. Camera-optimised silicon. STQC ER-5 certified, US-origin. Ideal for surveillance and smart city deployments.","ARM SoC"],["Low-Power IoT SoC Provider","LTE-M/NB-IoT cellular SoC for IoT gateways and BLE 5.4 SoC for ESL and sensor mesh networks. Ultra-low power for battery-operated edge nodes.","IoT SoC"]]},{t:"Security Silicon",i:[["Hardware Security Partner","TPM 2.0 for hardware root of trust. Dedicated secure element for device identity provisioning at scale. Secure MCU for isolated cryptographic operations. DPA signed.","Security"]]},{t:"Sensor & Module Partners",i:[["Global Image Sensor Leader","Industry-leading image sensor family for camera modules. High dynamic range and low-light performance optimised specifically for on-device edge AI inference.","Sensor"],["Pre-Certified Module Provider","Pre-certified LTE Cat1bis, WiFi 6, and secure MCU modules with WPC ETA certification. Saves each OEM partner significant per-SKU compliance cost and time.","Module"],["WiFi 6E Module Specialist","Pre-certified WiFi 6E modules for camera and gateway integration. Regulatory approvals included, accelerating OEM time-to-market.","Module"]]},{t:"Design Partners",i:[["Concept-to-product design","Industrial design, mechanical engineering, thermal management, and design-for-manufacturing for Edge AI Box and Hub hardware.","Design"],["System integration","Full AI-at-Edge stack deployment combining vision, IoT sensors, and edge compute into unified customer solutions.","Integration"]]}];
  return <div style={{paddingTop:80}}><Sc><Rv><Tg>Partners</Tg><h1 style={{...hd,fontSize:44,fontWeight:700,marginBottom:18,maxWidth:500}}>Technology partners. Intelligence infrastructure.</h1><p style={{fontSize:18,color:MT,lineHeight:1.8,maxWidth:540}}>Sevyn8 partners with world-class silicon, sensor, and design firms to build the most capable edge AI platform on the market. We work with the largest ARM and x86 SoC providers, leading global and niche sensor companies, and specialist design houses.</p></Rv></Sc>
    <Sc bg={B2} bt><Rv><h3 style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:DM,marginBottom:22}}>OEM licensing model</h3></Rv><div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>{[["01","Embed","Sevyn8 platform — HAL, firmware, AI models, decisioning — integrates into your hardware at factory level"],["02","Ship","Your brand, your distribution, your customers. The intelligence inside is Sevyn8 — invisible platform, visible value"],["03","Monetise","One-time hardware sale becomes recurring SaaS revenue. Cloud AI upsell converts device buyers into subscribers"],["04","Compound","Fleet learning improves every device you ship. Your 100,000th unit outperforms your competitor's latest launch"]].map(function(s,i){return <Rv key={i} d={i*.08}><div style={{padding:22,borderRadius:10,border:"1px solid "+BD,background:BG,height:"100%"}}><span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:13,color:T}}>{s[0]}</span><h4 style={{fontSize:17,fontWeight:600,margin:"8px 0 5px"}}>{s[1]}</h4><p style={{fontSize:14,color:MT,lineHeight:1.7}}>{s[2]}</p></div></Rv>})}</div></Sc>
    {cats.map(function(cat,ci){return <Sc key={ci} bg={ci%2===0?undefined:B2} bt><Rv><h3 style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:DM,marginBottom:22}}>{cat.t}</h3></Rv><div style={{display:"grid",gridTemplateColumns:cat.i.length>1?"1fr 1fr":"1fr",gap:12}}>{cat.i.map(function(q,j){return <Rv key={j} d={j*.06}><div style={{padding:22,borderRadius:10,border:"1px solid "+BD,background:ci%2===0?B2:BG,height:"100%"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}><span style={{fontSize:17,fontWeight:700}}>{q[0]}</span><span style={{fontSize:11,color:T,padding:"4px 12px",border:"1px solid "+T+"25",borderRadius:5}}>{q[2]}</span></div><p style={{fontSize:15,color:MT,lineHeight:1.7}}>{q[1]}</p></div></Rv>})}</div></Sc>})}
    <Sc bg={B2} bt><Rv><h3 style={{fontSize:11,textTransform:"uppercase",letterSpacing:3,color:DM,marginBottom:22}}>Current customers</h3><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}><Rv d={0}><div style={{padding:24,borderRadius:12,border:"1px solid "+BD,background:BG,height:"100%"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}><span style={{fontSize:18,fontWeight:700}}>Global ESL Leader</span><span style={{fontSize:10,color:I3,padding:"3px 10px",border:"1px solid "+I3+"25",borderRadius:4,fontWeight:500}}>Enterprise</span></div><p style={{fontSize:15,color:MT,lineHeight:1.75}}>One of the world's largest Electronic Shelf Label companies. Sevyn8 platform deployed across their AI-at-Edge retail infrastructure combining ESL, RFID, and camera intelligence into a unified solution.</p></div></Rv><Rv d={0.08}><div style={{padding:24,borderRadius:12,border:"1px solid "+BD,background:BG,height:"100%"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}><span style={{fontSize:18,fontWeight:700}}>Premium Fashion Retailer</span><span style={{fontSize:10,color:I3,padding:"3px 10px",border:"1px solid "+I3+"25",borderRadius:4,fontWeight:500}}>Enterprise</span></div><p style={{fontSize:15,color:MT,lineHeight:1.75}}>A global-scale premium fashion retail brand. Sevyn8 powers in-store analytics including footfall, conversion tracking, and loss prevention across their retail network.</p></div></Rv></div></Rv></Sc>
    <Sc bt><Rv><div style={{textAlign:"center"}}><button style={bn} onClick={function(){p.go("contact")}}>Become a partner {"→"}</button></div></Rv></Sc></div>}

function AboutPg(){return <div style={{paddingTop:80}}>
  <Sc><Rv><Tg>Our Story</Tg><h1 style={{...hd,fontSize:46,fontWeight:700,lineHeight:1.06,marginBottom:22,maxWidth:560}}>Seven layers of intelligence. The eighth is infinity.</h1><p style={{fontSize:18,color:MT,lineHeight:1.85,maxWidth:560}}>The name encodes the thesis. Seven capabilities no single competitor holds. An eighth element &mdash; system-wide learning &mdash; that ensures the gap only widens.</p></Rv></Sc>

  <Sc bg={B2} bt><Rv><Tg c={T}>The sevyn</Tg><h2 style={{...hd,fontSize:34,fontWeight:700,marginBottom:20}}>The full stack. All seven.</h2></Rv>
    <Rv d={0.1}><p style={{fontSize:17,color:MT,lineHeight:1.85,marginBottom:20,maxWidth:640}}>Edge AI requires seven capabilities simultaneously: SoC access, firmware and HAL, AI/ML models, manufacturing, supply chain, go-to-market, and ecosystem. Chip companies own silicon but can't build products. ODMs manufacture but can't write AI. Software startups have models but no hardware DNA. No other company in Indian edge AI holds all seven. Sevyn8 does.</p></Rv>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(125px,1fr))",gap:8}}>{["SoC access","Firmware + HAL","AI/ML models","Manufacturing","Supply chain","Go-to-market","Ecosystem"].map(function(f,i){return <Rv key={i} d={.05+i*.04}><div style={{padding:14,borderRadius:7,border:"1px solid "+T+"25",background:T+"08",textAlign:"center",fontSize:14,fontWeight:500,color:T,height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>{f}</div></Rv>})}</div>
  </Sc>

  <Sc bt><Rv><Tg>The origin</Tg><h2 style={{...hd,fontSize:34,fontWeight:700,marginBottom:20}}>Forged at Motorola.</h2></Rv>
    <Rv d={0.1}><p style={{fontSize:17,color:MT,lineHeight:1.85,marginBottom:18,maxWidth:640}}>The conviction that you need all seven didn't come from a whiteboard. It came from scars. The founding team met in the Motorola trenches &mdash; building Motorola India into the number two mobile brand. That era was a masterclass in full-stack ownership: hardware, software, supply chain, GTM, and ecosystem held together.</p></Rv>
    <Rv d={0.15}><p style={{fontSize:17,color:MT,lineHeight:1.85,maxWidth:640}}>They also watched what happened when the stack fragmented. When brilliant technology died in the gap between "it works in the lab" and "it ships at scale." That experience became the founding DNA. You cannot half-build an edge platform. You either hold all seven, or you're building on someone else's foundation.</p></Rv>
  </Sc>

  <Sc bg={B2} bt><Rv><Tg>The eight</Tg><h2 style={{...hd,fontSize:34,fontWeight:700,marginBottom:20}}>The compounding layer.</h2></Rv>
    <Rv d={0.1}><p style={{fontSize:17,color:MT,lineHeight:1.85,marginBottom:18,maxWidth:640}}>Six layers in the platform. Seven capabilities across the company. The eighth is what transforms Sevyn8 from a product into a platform: System-Wide Learning. It observes outcomes across every device, every customer, every vertical. The 500th device deployed is genuinely smarter than the 1st. Not better hardware &mdash; more knowledge.</p></Rv>
    <Rv d={0.15}><p style={{fontSize:17,color:MT,lineHeight:1.85,maxWidth:640}}>The "8" is also, visually, an infinity loop turned upright &mdash; &#8734;. Competitors improve per device. Sevyn8 improves per system. The gap widens with every deployment. It never stops.</p></Rv>
  </Sc>

  <Sc bt><Rv><Tg>The team</Tg><h2 style={{...hd,fontSize:34,fontWeight:700,marginBottom:20}}>Built across two decades. Not assembled.</h2></Rv>
    <Rv d={0.1}><p style={{fontSize:17,color:MT,lineHeight:1.85,marginBottom:20,maxWidth:640}}>The founding team brings combined experience from Intel, Motorola, Qualcomm, OnePlus, Sony, Honeywell, ABB, IBM, and Micron. Over &#8377;500 Cr in hardware categories built, launched, and scaled. The leadership spans SoC architecture, firmware engineering, AI/ML research, vision science, go-to-market, and ecosystem partnerships &mdash; each person mapped to a layer of the stack.</p></Rv>
    <Rv d={0.15}><p style={{fontSize:17,color:TX,fontWeight:500}}>Skills can be hired. Years of scars and playbooks can only be earned.</p></Rv>
  </Sc>

  <Sc bg={B2} bt><Rv><div style={{textAlign:"center",padding:"20px 0"}}><div style={{fontSize:12,textTransform:"uppercase",letterSpacing:3,color:T,fontWeight:600,marginBottom:14}}>The brand truth</div><p style={{...hd,fontSize:28,fontWeight:800}}>Sevyn is the full stack. <span style={{color:T}}>8 is what makes it compound.</span></p></div></Rv></Sc>

  <Sc bt><div style={{display:"flex",gap:48,flexWrap:"wrap",fontSize:16}}>{[{k:"Entity",v:"Sevyn8 Private Limited"},{k:"HQ",v:"New Delhi, India"},{k:"Status",v:"DPIIT Recognised Startup"}].map(function(i){return <div key={i.k}><div style={{fontSize:11,color:DM,textTransform:"uppercase",letterSpacing:1,marginBottom:4}}>{i.k}</div><div style={{fontWeight:500}}>{i.v}</div></div>})}</div></Sc>
</div>}

function ContactPg(){var t2=useState("enterprise"),ty=t2[0],is2={fontFamily:"inherit",fontSize:16,padding:"14px 18px",background:B2,border:"1px solid "+BD,borderRadius:7,color:TX,outline:"none",width:"100%"};
  var ph=ty==="enterprise"?"Tell us about your deployment needs, store/site count, and current camera infrastructure...":ty==="oem"?"Tell us about your product line, annual shipment volume, and target AI features...":"How can we help?";
  return <div style={{paddingTop:80}}><Sc><Rv><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"start"}}><div><Tg>Contact</Tg><h1 style={{...hd,fontSize:44,fontWeight:700,marginBottom:18}}>Start the conversation.</h1><p style={{fontSize:17,color:MT,lineHeight:1.8,marginBottom:36}}>Enterprise deployment. OEM integration. Platform evaluation.</p><div style={{fontSize:16,color:MT,lineHeight:1.8}}><div style={{fontSize:11,color:DM,textTransform:"uppercase",letterSpacing:1,marginBottom:5}}>Email</div><div style={{color:TX,fontWeight:500}}>hello@sevyn8.com</div><div style={{marginTop:18,fontSize:11,color:DM,textTransform:"uppercase",letterSpacing:1,marginBottom:5}}>Location</div><div>New Delhi, India</div></div></div><div><div style={{display:"flex",gap:6,marginBottom:18}}>{[["enterprise","Enterprise"],["oem","OEM Partner"],["general","General"]].map(function(x){return <button key={x[0]} onClick={function(){t2[1](x[0])}} style={{padding:"8px 18px",borderRadius:6,fontSize:14,fontWeight:500,fontFamily:"inherit",border:"1px solid "+(ty===x[0]?T:BD),background:ty===x[0]?T+"12":"transparent",color:ty===x[0]?T:MT,cursor:"pointer"}}>{x[1]}</button>})}</div><div style={{display:"flex",flexDirection:"column",gap:10}}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}><input placeholder="Name" style={is2} /><input placeholder="Email" style={is2} /></div><input placeholder="Company" style={is2} />{ty==="enterprise"&&<input placeholder="Industry (Smart Home, Retail, Fleet, Food & Cold Storage)" style={is2} />}{ty==="oem"&&<input placeholder="Annual device volume" style={is2} />}<textarea placeholder={ph} rows={4} style={{...is2,resize:"vertical"}} /><button style={{...bn,alignSelf:"flex-start"}}>Send message {"→"}</button></div></div></div></Rv></Sc></div>}

var mono={fontFamily:"'IBM Plex Mono',monospace"};
var cR={ion:"65,75,245",cy:"25,211,224",mg:"230,61,203",neu:"90,98,117"}; // canvas rgb forms
var RMQ="(prefers-reduced-motion: reduce)";
function HeroDevice(){
  var ref=useRef(null);
  useEffect(function(){
    var c=ref.current;if(!c)return;var ctx=c.getContext("2d");
    var reduced=window.matchMedia(RMQ).matches;
    var W,H,dpr,raf,dev={x:0,y:0,w:96,h:120},inputs=[],outs=[],started=performance.now(),lastOut=-1e9;
    var srcLabels=["cam","esl","iot","thermal"];
    function roundRect(g,a,b,w,h,r){g.beginPath();g.moveTo(a+r,b);g.arcTo(a+w,b,a+w,b+h,r);g.arcTo(a+w,b+h,a,b+h,r);g.arcTo(a,b+h,a,b,r);g.arcTo(a,b,a+w,b,r);g.closePath()}
    function layout(){dpr=Math.min(window.devicePixelRatio||1,2);W=c.offsetWidth;H=c.offsetHeight;c.width=W*dpr;c.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);dev.x=W*0.46;dev.y=H*0.5}
    layout();var onR=function(){layout()};window.addEventListener("resize",onR);
    var srcY=function(i){return H*(0.24+i*0.17)};
    function frame(now){
      var t=now-started;ctx.clearRect(0,0,W,H);
      for(var i=0;i<4;i++){var sy=srcY(i),sx=W*0.06;
        ctx.strokeStyle="rgba("+cR.neu+",0.12)";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(dev.x-dev.w/2,dev.y);ctx.stroke();
        ctx.fillStyle=MT;ctx.font="10px 'IBM Plex Mono',monospace";ctx.fillText(srcLabels[i],sx-4,sy-8);
        ctx.beginPath();ctx.arc(sx,sy,3,0,7);ctx.fillStyle="rgba("+cR.neu+",.7)";ctx.fill();
        if(!reduced&&Math.random()<0.04)inputs.push({i:i,p:0});
      }
      inputs=inputs.filter(function(d){return d.p<1});
      inputs.forEach(function(d){d.p+=0.018;var sy=srcY(d.i),sx=W*0.06;var x=sx+(dev.x-dev.w/2-sx)*d.p,y=sy+(dev.y-sy)*d.p;ctx.beginPath();ctx.arc(x,y,2.4,0,7);ctx.fillStyle="rgba("+cR.cy+","+(0.85*(1-d.p*0.4))+")";ctx.fill()});
      var pulse=(Math.sin(now*0.0023)+1)/2;
      ctx.shadowColor="rgba("+cR.ion+",.35)";ctx.shadowBlur=30;roundRect(ctx,dev.x-dev.w/2,dev.y-dev.h/2,dev.w,dev.h,12);ctx.fillStyle=B2;ctx.fill();ctx.shadowBlur=0;
      ctx.strokeStyle="rgba("+cR.cy+","+(0.4+pulse*0.3)+")";ctx.lineWidth=1.4;ctx.stroke();
      ctx.fillStyle=TX;ctx.font="600 11px 'IBM Plex Sans',sans-serif";ctx.textAlign="center";ctx.fillText("CORTEX",dev.x,dev.y-dev.h/2+20);
      ["HAL","AI","Decide"].forEach(function(l,k){var ly=dev.y-14+k*22;ctx.strokeStyle="rgba("+cR.ion+","+(k===2?.6:.3)+")";roundRect(ctx,dev.x-32,ly-8,64,16,4);ctx.stroke();ctx.fillStyle=k===2?T:MT;ctx.font="9px 'IBM Plex Mono',monospace";ctx.fillText(l,dev.x,ly+3)});
      ctx.textAlign="left";
      ctx.beginPath();ctx.arc(dev.x,dev.y,dev.h/2+10+pulse*6,0,7);ctx.strokeStyle="rgba("+cR.cy+","+(0.3*(1-pulse))+")";ctx.lineWidth=1.2;ctx.stroke();
      if(!reduced&&t-lastOut>1900){lastOut=t;outs.push({p:0})}
      outs=outs.filter(function(o){return o.p<1});
      outs.forEach(function(o){o.p+=0.02;var x=dev.x+dev.w/2+(W*0.92-(dev.x+dev.w/2))*o.p;ctx.beginPath();ctx.arc(x,dev.y,3,0,7);ctx.fillStyle="rgba("+cR.ion+","+(0.9*(1-o.p*0.3))+")";ctx.fill()});
      ctx.strokeStyle="rgba("+cR.neu+",.12)";ctx.beginPath();ctx.moveTo(dev.x+dev.w/2,dev.y);ctx.lineTo(W*0.92,dev.y);ctx.stroke();
      ctx.fillStyle=T;ctx.font="10px 'IBM Plex Mono',monospace";ctx.fillText("decision",W*0.84,dev.y-8);
      raf=requestAnimationFrame(frame);
    }
    if(reduced){layout();frame(performance.now());cancelAnimationFrame(raf)}else raf=requestAnimationFrame(frame);
    return function(){cancelAnimationFrame(raf);window.removeEventListener("resize",onR)};
  },[]);
  return (<div style={{position:"relative",width:"100%",height:"100%"}}>
    <canvas ref={ref} style={{width:"100%",height:"100%",display:"block"}} />
    <div style={{position:"absolute",left:0,top:12,...mono,fontSize:11,letterSpacing:".12em",textTransform:"uppercase",color:MT}}><span style={{color:CY}}>●</span> on-device · &lt; 100ms</div>
  </div>);
}
var TIERS=[
{y:372,foundation:true,a:{name:"HAL",tag:"one API"},b:{name:"SoC-agnostic",tag:"ARM · x86"}},
{y:296,name:"Universal data ingestion",tag:"any sensor, fused"},
{y:220,name:"Quantised AI on endpoints",tag:"< 100ms · offline"},
{y:144,name:"Industry vocabulary",tag:"speaks each domain"},
{y:68,name:"Fleet learning",tag:"every device, OTA",fleet:true}
];
var CAPTIONS=[
"Runs on any hardware — HAL abstracts the board, so ARM or x86 is a supply decision, not a rewrite.",
"Every sensor in — cameras, thermal, IoT, RFID, ESL — fused on the device into one situation.",
"Quantised models decide on the endpoint itself. Under 100ms, fully offline, no cloud round-trip.",
"Industry vocabulary turns raw detections into domain meaning — shrinkage, cold-chain breach, PPE.",
"Fleet learning sends every outcome back to every device over the air.",
"Privacy and auth wrap all of it — nothing leaves the device. And the loop compounds: every deployment makes every other one smarter."
];
function SevenCapSection(){
  var s2=useState(0),step=s2[0];
  useEffect(function(){
    if(window.matchMedia(RMQ).matches){s2[1](5);return}
    var id=setInterval(function(){s2[1](function(s){return (s+1)%6})},950);return function(){clearInterval(id)};
  },[]);
  var rm=window.matchMedia&&window.matchMedia(RMQ).matches;
  var loop=step===5,litThru=loop?4:step,pulseY=TIERS[Math.min(step,4)].y;
  return (<section style={{borderTop:"1px solid "+BD,background:B2}}>
    <div style={{maxWidth:MW,margin:"0 auto",padding:"88px 40px"}}>
      <div className="cx-grid2">
        <div>
          <Tg>Seven capabilities · one system</Tg>
          <h2 style={{...hd,fontSize:38,fontWeight:600,lineHeight:1.1,margin:"0 0 16px"}}>Seven capabilities.<br/>No competitor holds<br/>all of them.</h2>
          <p style={{fontSize:16.5,lineHeight:1.7,color:N3,maxWidth:440,margin:"0 0 26px"}}>Edge AI needs every one of these at once, wired together. Chip firms own silicon, ODMs own manufacturing, software shops own models — Cortex holds the whole stack, and an eighth that makes it compound.</p>
          <div style={{borderLeft:"2px solid "+(loop?MG:CY),paddingLeft:16,minHeight:82,transition:"border-color .4s"}}>
            <div style={{...mono,fontSize:11,textTransform:"uppercase",letterSpacing:".14em",color:loop?MG:CY,marginBottom:7}}>{loop?"The envelope + the loop":("0"+(step+1)+" · "+(TIERS[step].foundation?"Foundation":TIERS[step].name))}</div>
            <p style={{fontSize:15,lineHeight:1.6,color:TX,margin:0}}>{CAPTIONS[step]}</p>
          </div>
        </div>
        <svg viewBox="0 0 440 440" style={{width:"100%",height:"auto",display:"block"}}>
          <rect x="18" y="26" width="404" height="392" rx="16" fill="none" stroke={"rgba("+cR.ion+","+(loop?0.55:0.28)+")"} strokeWidth="1.3" strokeDasharray="2 5" style={{transition:"stroke .4s"}} />
          <g transform="translate(34,26)"><rect x="0" y="-9" width="190" height="18" rx="9" fill={B2} /><text x="8" y="4" fill={loop?T:MT} style={{...mono,transition:"fill .4s"}} fontSize="10" letterSpacing="1.5">PRIVACY &amp; AUTH · EMBEDDED</text></g>
          <line x1="220" y1="372" x2="220" y2="68" stroke={B3} strokeWidth="1.4" />
          <line x1="220" y1="372" x2="220" y2={pulseY} stroke={"rgba("+cR.cy+",.5)"} strokeWidth="1.6" style={{transition:"all .6s"}} />
          <path d="M220,68 C402,96 402,344 220,372" fill="none" stroke={MG} strokeWidth="1.6" strokeDasharray="520" strokeDashoffset={loop?0:520} opacity={loop?0.9:0} style={{transition:loop?"stroke-dashoffset 1.6s ease, opacity .3s":"opacity .4s"}} />
          <text x="392" y="226" fill={MG} fontSize="22" textAnchor="middle" opacity={loop?1:0.18} style={{transition:"opacity .4s",animation:(loop&&!rm)?"scdinf 1.6s ease-in-out infinite":"none"}}>∞</text>
          {TIERS.map(function(t,i){
            var lit=i<=litThru,col=t.fleet&&loop?MG:CY;
            var stroke=lit?("rgba("+(t.fleet&&loop?cR.mg:cR.cy)+",.55)"):BD;
            var glow=lit?(loop?("0 0 18px rgba("+cR.ion+",.18)"):("0 0 16px rgba("+cR.cy+",.12)")):"none";
            if(t.foundation)return (<g key={i} style={{transition:"all .5s"}}>
              {[t.a,t.b].map(function(nd,k){return <g key={k} transform={"translate("+(k===0?86:232)+", "+(t.y-18)+")"}>
                <rect width="122" height="36" rx="8" fill={B2} stroke={stroke} strokeWidth="1.3" style={{filter:glow!=="none"?("drop-shadow("+glow+")"):"none",transition:"stroke .4s"}} />
                <text x="12" y="16" fill={lit?TX:N3} fontSize="12.5" fontWeight="600" style={{transition:"fill .4s"}}>{nd.name}</text>
                <text x="12" y="29" fill={MT} style={{...mono}} fontSize="9">{nd.tag}</text>
              </g>})}
            </g>);
            return (<g key={i} transform={"translate(80, "+(t.y-19)+")"} style={{transition:"all .5s"}}>
              <rect width="280" height="38" rx="9" fill={B2} stroke={stroke} strokeWidth="1.3" style={{filter:glow!=="none"?("drop-shadow("+glow+")"):"none",transition:"stroke .4s"}} />
              <circle cx="20" cy="19" r="4" fill={lit?col:B3} style={{transition:"fill .4s"}} />
              <text x="38" y="17" fill={lit?TX:N3} fontSize="13.5" fontWeight="600" style={{transition:"fill .4s"}}>{t.name}</text>
              <text x="38" y="30" fill={MT} style={{...mono}} fontSize="9.5">{t.tag}</text>
            </g>);
          })}
          {!loop&&<g style={{transform:"translateY("+pulseY+"px)",transition:"transform .6s cubic-bezier(.4,0,.2,1)"}}>
            <circle cx="220" cy="0" r="5" fill={CY} />
            <circle cx="220" cy="0" r="5" fill="none" stroke={CY}><animate attributeName="r" from="5" to="13" dur="1.2s" repeatCount="indefinite" /><animate attributeName="opacity" from=".7" to="0" dur="1.2s" repeatCount="indefinite" /></circle>
          </g>}
        </svg>
      </div>
    </div>
  </section>);
}
var STORES=["STORE 04","STORE 09","STORE 12","STORE 18","STORE 23","STORE 27"];
var EVENTS=[
{k:"known",c:CY,label:"known · regular",figs:[96],box:0},
{k:"footfall",c:CY,label:"footfall +1",figs:[70],box:0},
{k:"staff",c:CY,label:"staff",figs:[110],box:0},
{k:"dwell",c:MG,label:"dwell 4m+ · flag",figs:[92],box:0},
{k:"conceal",c:MG,label:"concealment",figs:[88],box:0},
{k:"queue",c:T,label:"queue>4 · open ctr 5",figs:[60,84,108,132],box:-2},
{k:"shelf",c:T,label:"shelf gap",shelf:true}
];
var ecrgb=function(c){return c===CY?cR.cy:c===MG?cR.mg:cR.ion};
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function pad2(n){return n<10?"0"+n:""+n}
function Person(p){var col=p.bright?"#9AA3B5":MT;return <g><circle cx={p.x} cy={p.by-30} r="5" fill={col} /><path d={"M"+(p.x-6)+","+p.by+" L"+(p.x-5)+","+(p.by-20)+" Q"+p.x+","+(p.by-26)+" "+(p.x+5)+","+(p.by-20)+" L"+(p.x+6)+","+p.by} fill={col} /></g>}
function Bracket(p){var x=p.x,y=p.y,w=p.w,h=p.h,c=p.c,L=7;
  var pts=["M"+x+","+(y+L)+" L"+x+","+y+" L"+(x+L)+","+y,"M"+(x+w-L)+","+y+" L"+(x+w)+","+y+" L"+(x+w)+","+(y+L),"M"+(x+w)+","+(y+h-L)+" L"+(x+w)+","+(y+h)+" L"+(x+w-L)+","+(y+h),"M"+(x+L)+","+(y+h)+" L"+x+","+(y+h)+" L"+x+","+(y+h-L)];
  return <g>{pts.map(function(d,i){return <path key={i} d={d} fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="square" />})}</g>}
function Feed(p){
  var store=p.store,ev=p.ev,ver=p.ver,live=p.live,clock=p.clock;
  var rm=window.matchMedia&&window.matchMedia(RMQ).matches;
  var W=200,H=140,by=122;
  return (<div style={{position:"relative",borderRadius:10,overflow:"hidden",border:"1px solid "+(live?("rgba("+cR.cy+",.3)"):BD),background:"#0E1119",transition:"border-color .5s"}}>
    <svg viewBox={"0 0 "+W+" "+H} style={{width:"100%",height:"auto",display:"block"}}>
      {[40,60,80,100].map(function(y){return <line key={y} x1="0" x2={W} y1={y} y2={y} stroke="rgba(255,255,255,0.012)" strokeWidth="2" />})}
      <line x1="0" y1={by} x2={W} y2={by} stroke={B3} strokeWidth="1" />
      <g key={ver} style={{animation:"feedin .5s ease"}}>
        {ev.shelf?(<>
          <rect x="50" y="58" width="100" height="40" rx="3" fill="none" stroke={DM} strokeWidth="1" />
          {[58,74,106,122,138].map(function(sx){return <rect key={sx} x={sx} y="64" width="10" height="28" rx="2" fill={MT} opacity="0.6" />})}
          <Bracket x={86} y={60} w={18} h={36} c={ev.c} />
        </>):(<>
          {ev.figs.map(function(fx,i){return <Person key={i} x={fx} by={by} bright={i===(ev.box<0?-1:ev.box)} />})}
          {ev.box===-2?<Bracket x={ev.figs[0]-12} y={by-42} w={ev.figs[ev.figs.length-1]-ev.figs[0]+24} h={46} c={ev.c} />:<Bracket x={ev.figs[ev.box]-12} y={by-42} w={24} h={46} c={ev.c} />}
        </>)}
        <g transform={"translate("+(ev.shelf?60:Math.min(ev.figs[0]-12,116))+", "+(by-56)+")"}>
          <rect width={ev.label.length*5.4+12} height="15" rx="3" fill="rgba(8,10,16,.85)" stroke={"rgba("+ecrgb(ev.c)+",.6)"} />
          <text x="6" y="11" fill={ev.c} style={{...mono}} fontSize="9">{ev.label}</text>
        </g>
      </g>
      <text x="8" y="16" fill={MT} style={{...mono}} fontSize="8.5" letterSpacing="1">{store}</text>
      <text x={W-8} y="16" textAnchor="end" fill={MT} style={{...mono}} fontSize="8.5">{clock}</text>
    </svg>
    <div style={{position:"absolute",left:8,bottom:8,display:"flex",alignItems:"center",gap:5}}>
      <span style={{width:6,height:6,borderRadius:"50%",background:live?CY:DM,animation:(live&&!rm)?"livedot 1.3s ease-in-out infinite":"none"}} />
      <span style={{...mono,fontSize:8.5,letterSpacing:"1.5px",color:live?CY:MT}}>{live?"LIVE":"IDLE"}</span>
    </div>
  </div>);
}
function RetailWall(){
  var init=STORES.map(function(s,i){return {store:s,ev:EVENTS[i%EVENTS.length],ver:i,live:i<3}});
  var t2=useState(init),tiles=t2[0],l2=useState([{s:"STORE 12",e:EVENTS[4]}]),log=l2[0],c2=useState(1284),count=c2[0];
  var verRef=useRef(STORES.length);
  useEffect(function(){
    if(window.matchMedia(RMQ).matches)return;
    var id=setInterval(function(){
      t2[1](function(prev){
        var next=prev.map(function(t){return {...t,live:false}});
        var idxs=[];while(idxs.length<2){var r=Math.floor(Math.random()*next.length);if(idxs.indexOf(r)<0)idxs.push(r)}
        idxs.forEach(function(r){var ev=pick(EVENTS);next[r]={...next[r],ev:ev,ver:++verRef.current,live:true};l2[1](function(L){return [{s:next[r].store,e:ev}].concat(L).slice(0,6)})});
        return next;
      });
      c2[1](function(c){return c+Math.floor(2+Math.random()*5)});
    },1700);
    return function(){clearInterval(id)};
  },[]);
  var sec=new Date().getSeconds();var clock=function(s){return "09:"+pad2((sec+s)%60)};
  return (<section id="how" style={{borderTop:"1px solid "+BD,background:BG}}>
    <div style={{maxWidth:MW,margin:"0 auto",padding:"88px 40px"}}>
      <Rv><Tg c={CY}>Cortex in the wild · Retail</Tg><h2 style={{...hd,fontSize:38,fontWeight:600,lineHeight:1.1,margin:"0 0 14px"}}>Every camera, seeing.<br/>Every store, deciding.</h2><p style={{fontSize:17,lineHeight:1.7,color:N3,maxWidth:640,margin:"0 0 26px"}}>Cortex runs on the device in every store at once — recognising footfall, flagging concealment, catching shelf gaps, opening counters. Detections become decisions in under 100ms, and every store inherits what the others learn.</p></Rv>
      <Rv d={0.08}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,flexWrap:"wrap",gap:12}}>
          <div style={{...mono,fontSize:11,letterSpacing:".14em",textTransform:"uppercase",color:MT}}><span style={{color:CY}}>●</span> 6 stores live · 1 fleet</div>
          <div style={{...mono,fontSize:11,color:MT}}>decisions today <span style={{...hd,fontSize:18,color:TX,marginLeft:6}}>{count.toLocaleString()}</span> <span style={{color:MG}}>↑</span></div>
        </div>
        <div className="rw-grid">
          {tiles.map(function(t,i){return <Feed key={i} store={t.store} ev={t.ev} ver={t.ver} live={t.live} clock={clock(i*7)} />})}
        </div>
        <div style={{marginTop:22,paddingTop:18,borderTop:"1px solid "+BD}}>
          <div style={{...mono,fontSize:10.5,textTransform:"uppercase",letterSpacing:".14em",color:MT,marginBottom:12}}>Decisions across the fleet</div>
          <div style={{display:"flex",gap:22,flexWrap:"wrap"}}>
            {log.map(function(e,i){return <div key={i} style={{display:"flex",alignItems:"center",gap:8,opacity:i===0?1:Math.max(0.2,0.45-i*0.05),transition:"opacity .5s"}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:e.e.c,flexShrink:0}} />
              <span style={{...mono,fontSize:12,color:MT}}>{e.s}</span>
              <span style={{fontSize:13,color:i===0?TX:MT}}>{e.e.label}</span>
            </div>})}
          </div>
        </div>
      </Rv>
    </div>
  </section>);
}
function CompoundCanvas(){
  var ref=useRef(null),c2=useState(1),count=c2[0];
  useEffect(function(){
    var c=ref.current;if(!c)return;var ctx=c.getContext("2d");
    var reduced=window.matchMedia(RMQ).matches;
    var W,H,dpr,raf,origin={x:0,y:0},fleet=[],waves=[],last=-1e9,started=performance.now();
    function layout(){dpr=Math.min(window.devicePixelRatio||1,2);W=c.offsetWidth;H=c.offsetHeight;c.width=W*dpr;c.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);origin={x:W*0.5,y:H*0.5};fleet=[];
      var base=Math.min(W,H),rings=[{r:base*0.26,n:6,ph:0.2},{r:base*0.4,n:9,ph:0.55}];
      rings.forEach(function(rd){for(var i=0;i<rd.n;i++){var a=(i/rd.n)*Math.PI*2+rd.ph,sx=W>H?1.35:1;fleet.push({x:origin.x+Math.cos(a)*rd.r*sx,y:origin.y+Math.sin(a)*rd.r,dist:0,bright:0})}});
      fleet.forEach(function(f){f.dist=Math.hypot(f.x-origin.x,f.y-origin.y)});
    }
    layout();var onR=function(){layout()};window.addEventListener("resize",onR);
    function node(x,y,r,rgb,a){ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fillStyle="rgba("+rgb+","+a+")";ctx.fill()}
    function frame(now){var t=now-started;ctx.clearRect(0,0,W,H);
      fleet.forEach(function(f){ctx.strokeStyle="rgba("+cR.neu+",0.10)";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(origin.x,origin.y);ctx.lineTo(f.x,f.y);ctx.stroke()});
      if(t-last>2700){last=t;waves.push({t0:now,dur:1700});c2[1](function(k){return k+7})}
      var maxD=Math.max.apply(null,fleet.map(function(f){return f.dist}));
      waves=waves.filter(function(w){return now-w.t0<w.dur+400});
      waves.forEach(function(w){var p=(now-w.t0)/w.dur,rad=p*(maxD+30);if(p<=1){ctx.beginPath();ctx.arc(origin.x,origin.y,rad,0,7);ctx.strokeStyle="rgba("+cR.mg+","+((1-p)*0.5)+")";ctx.lineWidth=1.4;ctx.stroke()}fleet.forEach(function(f){if(rad>=f.dist&&rad<f.dist+24)f.bright=Math.min(1,f.bright+0.14)})});
      fleet.forEach(function(f){f.bright*=0.965;var lit=f.bright;if(lit>0.02)node(f.x,f.y,9+lit*5,cR.ion,0.1+lit*0.18);node(f.x,f.y,3.4,cR.neu,0.5);node(f.x,f.y,3.4,cR.ion,lit*0.95)});
      var pulse=(Math.sin(now*0.0022)+1)/2;
      ctx.beginPath();ctx.arc(origin.x,origin.y,30+pulse*9,0,7);ctx.strokeStyle="rgba("+cR.cy+","+(0.35+pulse*0.3)+")";ctx.lineWidth=1.4;ctx.stroke();
      ctx.shadowColor="rgba("+cR.ion+",0.5)";ctx.shadowBlur=26;node(origin.x,origin.y,15,cR.ion,1);ctx.shadowBlur=0;
      var oa=now*0.0016;node(origin.x+Math.cos(oa)*30,origin.y+Math.sin(oa)*30,2.4,cR.cy,0.9);
      raf=requestAnimationFrame(frame);
    }
    if(reduced){ctx.clearRect(0,0,W,H);fleet.forEach(function(f){ctx.strokeStyle="rgba("+cR.neu+",0.10)";ctx.beginPath();ctx.moveTo(origin.x,origin.y);ctx.lineTo(f.x,f.y);ctx.stroke();node(f.x,f.y,3.4,cR.ion,0.6)});node(origin.x,origin.y,15,cR.ion,1)}
    else raf=requestAnimationFrame(frame);
    return function(){cancelAnimationFrame(raf);window.removeEventListener("resize",onR)};
  },[]);
  return (<div style={{position:"relative",width:"100%",height:"100%"}}>
    <canvas ref={ref} style={{width:"100%",height:"100%",display:"block"}} />
    <div style={{position:"absolute",left:0,top:12,...mono,fontSize:11,letterSpacing:".12em",textTransform:"uppercase",color:MT}}><span style={{color:CY}}>●</span> one device · live</div>
    <div style={{position:"absolute",right:0,bottom:10,textAlign:"right"}}>
      <div style={{...mono,fontSize:11,letterSpacing:".12em",textTransform:"uppercase",color:MT}}>fleet intelligence</div>
      <div style={{...hd,fontSize:28,fontWeight:600,color:TX}}>{count.toLocaleString()}<span style={{fontSize:14,color:MG,marginLeft:6}}>↑</span></div>
    </div>
  </div>);
}
function CompoundCurve(){
  var n2=useState(40),n=n2[0],h2=useState(false),hover=h2[0];var W=640,H=210,pad=8;
  useEffect(function(){
    if(hover)return;
    if(window.matchMedia(RMQ).matches){n2[1](500);return}
    var id=setInterval(function(){n2[1](function(v){return v>=500?1:v+4})},40);return function(){clearInterval(id)};
  },[hover]);
  var acc=function(d){return 84+14*(1-Math.exp(-d/150))+Math.log10(d+1)*0.4};
  var x=function(d){return pad+(d/500)*(W-pad*2)};
  var y=function(v){return H-pad-((v-83)/(100-83))*(H-pad*2-18)};
  var path="";for(var d=1;d<=n;d+=4)path+=(d===1?"M":"L")+x(d).toFixed(1)+" "+y(acc(d)).toFixed(1)+" ";
  var cx=x(n),cyv=y(acc(n)),val=acc(n);
  var onMove=function(e){var r=e.currentTarget.getBoundingClientRect();var px=(e.clientX-r.left)/r.width*W;n2[1](Math.max(1,Math.min(500,Math.round((px-pad)/(W-pad*2)*500))))};
  return (<div style={{width:"100%"}}>
    <svg viewBox={"0 0 "+W+" "+H} style={{width:"100%",height:"auto",display:"block",cursor:"crosshair"}} onMouseEnter={function(){h2[1](true)}} onMouseLeave={function(){h2[1](false)}} onMouseMove={function(e){if(hover)onMove(e)}}>
      {[88,92,96,100].map(function(g){return <g key={g}><line x1={pad} x2={W-pad} y1={y(g)} y2={y(g)} stroke={BD} strokeWidth="1" /><text x={pad} y={y(g)-4} fill={MT} style={{...mono}} fontSize="9">{g}%</text></g>})}
      <path d={path} fill="none" stroke={MG} strokeWidth="2" strokeLinecap="round" />
      <line x1={cx} x2={cx} y1={y(val)} y2={H-pad} stroke={"rgba("+cR.mg+",0.25)"} strokeWidth="1" />
      <circle cx={cx} cy={cyv} r="5" fill={MG} /><circle cx={cx} cy={cyv} r="10" fill="none" stroke={"rgba("+cR.mg+",0.4)"} strokeWidth="1" />
    </svg>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:10}}>
      <span style={{...mono,fontSize:12,color:MT}}>deployment <span style={{color:TX}}>#{n}</span></span>
      <span style={{...mono,fontSize:12,color:MT}}>fleet accuracy <span style={{color:MG,fontWeight:500}}>{val.toFixed(1)}%</span></span>
    </div>
  </div>);
}
function CortexPage(p){
  var go=p.go;
  var scrollTo=function(id){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth"})};
  useEffect(function(){document.title="Sevyn8 | Cortex — intelligence on every device, on any hardware";var m=document.querySelector('meta[name="description"]');if(m)m.setAttribute("content","Cortex is the edge-AI platform behind every Sevyn8 deployment — on-device inference under 100ms, fully offline, on any silicon. One platform across retail, cold chain, logistics, and smart home; every deployment makes the fleet smarter.")},[]);
  return (<div style={{paddingTop:80}}>
    <section style={{maxWidth:MW,margin:"0 auto",padding:"56px 40px 92px"}}>
      <div className="cx-grid2">
        <div>
          <Tg>The edge-AI platform</Tg>
          <h1 style={{...hd,fontSize:56,fontWeight:600,lineHeight:1.05,margin:"0 0 24px"}}>Intelligence on<br/>every device.<br/><span style={{color:T}}>On any hardware.</span></h1>
          <p style={{fontSize:19,lineHeight:1.6,color:N3,maxWidth:480,margin:"0 0 18px"}}>Cortex is the edge-AI platform behind every Sevyn8 deployment. It turns cameras, sensors, and devices into on-device intelligence — deciding in under 100ms, fully offline, on whatever silicon you already run.</p>
          <p style={{fontSize:16,lineHeight:1.65,color:MT,maxWidth:480,margin:"0 0 34px"}}>One platform across retail, cold chain, logistics, and smart home. Privacy by architecture — nothing leaves the device.</p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <button style={bn} onClick={function(){go("contact")}}>Book a 60-day POC</button>
            <button style={b2} onClick={function(){scrollTo("how")}}>See it in action</button>
          </div>
        </div>
        <div className="cx-hero-anim" style={{height:420,position:"relative"}}><HeroDevice /></div>
      </div>
    </section>
    <SevenCapSection />
    <RetailWall />
    <section style={{borderTop:"1px solid "+BD,background:B2}}>
      <div style={{maxWidth:MW,margin:"0 auto",padding:"92px 40px"}}>
        <div className="cx-grid2">
          <div><Rv><Tg c={MG}>The compounding effect</Tg><h2 style={{...hd,fontSize:40,fontWeight:600,margin:"0 0 18px",lineHeight:1.08}}>Every deployment makes<br/>the next one smarter.</h2><p style={{fontSize:17,lineHeight:1.7,color:N3,maxWidth:460,margin:"0 0 16px"}}>What one device learns, the whole fleet inherits over the air. Intelligence compounds with scale instead of plateauing.</p><p style={{fontSize:16,lineHeight:1.7,color:MT,maxWidth:460,margin:0}}>The 1st deployment ships smart. The 500th ships smarter — and improves the 1st too. The part a competitor can't copy by shipping faster hardware.</p></Rv></div>
          <Rv d={0.1}><div className="cx-hero-anim" style={{height:360,position:"relative"}}><CompoundCanvas /></div></Rv>
        </div>
        <Rv d={0.15}><div style={{marginTop:40,padding:24,borderRadius:14,background:BG,border:"1px solid "+BD}}><CompoundCurve /></div></Rv>
      </div>
    </section>
    <section style={{maxWidth:MW,margin:"0 auto",padding:"88px 40px"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:40}}>
        {[["< 100ms","On-device inference","Decisions happen where the data is — no latency, no cloud round-trip."],["0","Frames to the cloud","Fully offline by architecture. Privacy isn't a setting; it's the design."],["1 API","Across all silicon","HAL abstracts the hardware. Switch SoC without rewriting the platform."]].map(function(row,i){return <Rv key={row[1]} d={i*0.08}>
          <div style={{...hd,fontSize:46,fontWeight:600,color:TX,marginBottom:6}}>{row[0]}</div>
          <div style={{...mono,fontSize:12,textTransform:"uppercase",letterSpacing:".12em",color:T,marginBottom:12}}>{row[1]}</div>
          <p style={{fontSize:15,lineHeight:1.7,color:MT,margin:0,maxWidth:300}}>{row[2]}</p>
        </Rv>})}
      </div>
    </section>
    <section id="cta" style={{borderTop:"1px solid "+BD,background:B2}}>
      <div style={{maxWidth:MW,margin:"0 auto",padding:"100px 40px",textAlign:"center"}}>
        <Rv><h2 style={{...hd,fontSize:46,fontWeight:600,lineHeight:1.05,margin:"0 0 18px"}}>See Cortex run on your hardware.</h2><p style={{fontSize:18,lineHeight:1.6,color:N3,maxWidth:560,margin:"0 auto 36px"}}>New devices or existing infrastructure — same platform, same AI. Measurable results in 60 days.</p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}><button style={bn} onClick={function(){go("contact")}}>Book a 60-day POC</button><button style={b2} onClick={function(){go("contact")}}>Talk to the team</button></div></Rv>
      </div>
    </section>
  </div>);
}
/* ════════ Phase 1 ported pages (Home2 / Hardware / Solutions) ════════ */
/* shared edge-AI page kit */
function useMotion(){var m2=useState(true);useEffect(function(){m2[1](!window.matchMedia(RMQ).matches)},[]);return m2[0]}
var crgb=function(c){return c===CY?cR.cy:c===MG?cR.mg:cR.ion};
var HOUS="#232A3A", EDGE="#3A4256", DET="#5A6275", GLASS="#0B0D14";
var ACC={cam:CY,thermal:MG,box:T,esl:CY,env:CY,airq:CY,mmwave:CY,acoustic:CY,tag:CY};
function DevicePaths(p){var a=ACC[p.type];switch(p.type){
  case "cam": return (<g><rect x="42" y="68" width="14" height="10" rx="2" fill={HOUS} stroke={EDGE} /><rect x="47" y="56" width="4" height="13" fill={HOUS} stroke={EDGE} /><rect x="12" y="32" width="60" height="28" rx="14" fill={HOUS} stroke={EDGE} strokeWidth="1.5" /><rect x="16" y="35" width="48" height="8" rx="4" fill="#fff" opacity="0.05" /><circle cx="64" cy="46" r="16" fill={a} opacity="0.13" /><circle cx="64" cy="46" r="13" fill={GLASS} stroke={a} strokeWidth="2.4" /><circle cx="64" cy="46" r="6.5" fill={a} opacity="0.28" /><circle cx="64" cy="46" r="2.6" fill={a} /><circle cx="23" cy="39" r="2.2" fill={a} /></g>);
  case "thermal": return (<g><rect x="42" y="68" width="14" height="10" rx="2" fill={HOUS} stroke={EDGE} /><rect x="47" y="56" width="4" height="13" fill={HOUS} stroke={EDGE} /><rect x="12" y="32" width="60" height="28" rx="8" fill={HOUS} stroke={EDGE} strokeWidth="1.5" /><rect x="16" y="35" width="40" height="8" rx="4" fill="#fff" opacity="0.05" /><rect x="50" y="35" width="22" height="22" rx="3" fill={GLASS} stroke={MG} strokeWidth="2" /><rect x="52.5" y="37.5" width="8" height="8" fill={MG} opacity="0.75" /><rect x="61.5" y="37.5" width="8" height="8" fill={T} opacity="0.6" /><rect x="52.5" y="46.5" width="8" height="8" fill={T} opacity="0.5" /><rect x="61.5" y="46.5" width="8" height="8" fill={MG} opacity="0.5" /><circle cx="23" cy="39" r="2.2" fill={MG} /></g>);
  case "box": return (<g><rect x="20" y="22" width="56" height="52" rx="7" fill={HOUS} stroke={EDGE} strokeWidth="1.5" /><rect x="24" y="26" width="48" height="9" rx="3" fill="#fff" opacity="0.05" /><rect x="34" y="40" width="22" height="17" rx="2" fill="none" stroke={a} strokeWidth="1.4" opacity="0.7" /><path d="M40 40v-3M48 40v-3M40 57v3M48 57v3" stroke={a} strokeWidth="1.2" opacity="0.6" /><circle cx="66" cy="45" r="3.6" fill={a} opacity="0.22" /><circle cx="66" cy="45" r="2" fill={a} /><rect x="27" y="61" width="12" height="8" rx="1.5" fill={GLASS} stroke={DET} /><rect x="42" y="61" width="8" height="8" rx="1.5" fill={GLASS} stroke={DET} /><rect x="53" y="61" width="8" height="8" rx="1.5" fill={GLASS} stroke={DET} /></g>);
  case "esl": return (<g><rect x="13" y="40" width="9" height="16" rx="2" fill={HOUS} stroke={EDGE} /><rect x="20" y="29" width="60" height="38" rx="4" fill={HOUS} stroke={EDGE} strokeWidth="1.5" /><rect x="25" y="34" width="50" height="28" rx="2" fill="#E7EAF1" opacity="0.92" /><text x="30" y="52" fill="#0B0D14" style={{...mono}} fontSize="15" fontWeight="600">₹149</text><g stroke="#0B0D14" strokeWidth="1">{[30,33,37,40,44,48,52,56,60,64,68].map(function(bx){return <line key={bx} x1={bx} y1="56" x2={bx} y2="60" opacity={bx%3?0.8:0.4} />})}</g><circle cx="73" cy="38" r="2" fill={a} /></g>);
  case "env": return (<g><rect x="26" y="20" width="44" height="56" rx="13" fill={HOUS} stroke={EDGE} strokeWidth="1.5" /><rect x="30" y="24" width="36" height="9" rx="4" fill="#fff" opacity="0.05" /><path d="M40 64h16M40 68h16" stroke={DET} strokeWidth="2" strokeLinecap="round" /><path d="M42 38v9" stroke={a} strokeWidth="2.4" strokeLinecap="round" /><circle cx="42" cy="49" r="3.4" fill={a} /><path d="M56 40c-3 4-4 5.5-4 7.5a4 4 0 008 0c0-2-1-3.5-4-7.5z" fill="none" stroke={a} strokeWidth="1.8" /></g>);
  case "airq": return (<g><rect x="26" y="20" width="44" height="56" rx="13" fill={HOUS} stroke={EDGE} strokeWidth="1.5" /><rect x="30" y="24" width="36" height="9" rx="4" fill="#fff" opacity="0.05" /><g fill={DET}>{[0,1,2,3,4,5,6,7].map(function(i){var an=(i/8)*6.283;return <circle key={i} cx={48+Math.cos(an)*11} cy={42+Math.sin(an)*11} r="1.6" />})}<circle cx="48" cy="42" r="1.6" /></g><g stroke={a} strokeWidth="1.6" fill="none"><circle cx="42" cy="64" r="3" /><circle cx="54" cy="64" r="3" /><line x1="45" y1="64" x2="51" y2="64" /></g></g>);
  case "mmwave": return (<g><rect x="30" y="18" width="36" height="18" rx="5" fill={HOUS} stroke={EDGE} strokeWidth="1.5" /><rect x="33" y="21" width="30" height="6" rx="3" fill="#fff" opacity="0.05" /><circle cx="48" cy="27" r="2.6" fill={a} /><path d="M40 44 A 13 13 0 0 0 56 44" fill="none" stroke={a} strokeWidth="1.8" opacity="0.85" /><path d="M34 53 A 22 22 0 0 0 62 53" fill="none" stroke={a} strokeWidth="1.6" opacity="0.55" /><path d="M28 62 A 31 31 0 0 0 68 62" fill="none" stroke={a} strokeWidth="1.5" opacity="0.32" /><circle cx="53" cy="66" r="2.6" fill={MG} /></g>);
  case "acoustic": return (<g><rect x="28" y="24" width="32" height="48" rx="15" fill={HOUS} stroke={EDGE} strokeWidth="1.5" /><g fill={DET}>{[0,1,2].map(function(r){return [0,1,2].map(function(c2){return <circle key={r+""+c2} cx={38+c2*6} cy={34+r*6} r="1.4" />})})}</g><circle cx="44" cy="52" r="6" fill="none" stroke={a} strokeWidth="2" /><circle cx="44" cy="52" r="2" fill={a} /><path d="M68 40 a 9 9 0 0 1 0 18" fill="none" stroke={a} strokeWidth="1.8" /><path d="M74 34 a 15 15 0 0 1 0 30" fill="none" stroke={a} strokeWidth="1.6" opacity="0.5" /></g>);
  case "tag": return (<g><path d="M30 28 h26 l18 20 -18 20 H30 a5 5 0 0 1 -5 -5 V33 a5 5 0 0 1 5 -5z" fill={HOUS} stroke={EDGE} strokeWidth="1.5" /><circle cx="37" cy="40" r="3.4" fill="none" stroke={DET} strokeWidth="1.6" /><circle cx="50" cy="50" r="3" fill={a} /><path d="M70 40 a 9 9 0 0 1 0 18" fill="none" stroke={a} strokeWidth="1.8" /><path d="M76 34 a 15 15 0 0 1 0 30" fill="none" stroke={a} strokeWidth="1.6" opacity="0.5" /></g>);
  default: return null;
}}
function Device(p){var size=p.size||80;return <svg viewBox="0 0 96 96" width={size} height={size} style={{display:"block"}}><DevicePaths type={p.type} /></svg>}
var epStroke=function(id){return id==="box"?T:id==="thermal"?MG:"rgba("+cR.cy+",.5)"};

/* ── Home (home2) ── */
function HmFigure(p){var c=p.c||"#9AA3B5",x=p.x||0,y=p.y||0;if(p.down)return <g transform={"translate("+x+","+y+")"} fill={c}><circle cx="20" cy="-6" r="7" /><rect x="-12" y="-11" width="32" height="10" rx="5" /></g>;return <g transform={"translate("+x+","+y+")"} fill={c}><circle cx="0" cy="-44" r="7" /><path d="M-9,0 L-7,-30 Q0,-38 7,-30 L9,0 Z" /></g>}
function HmBracket(p){var X=+p.x,Y=+p.y,W=+p.w,H=+p.h,c=p.c,L=11;var d=["M"+X+","+(Y+L)+" L"+X+","+Y+" L"+(X+L)+","+Y,"M"+(X+W-L)+","+Y+" L"+(X+W)+","+Y+" L"+(X+W)+","+(Y+L),"M"+(X+W)+","+(Y+H-L)+" L"+(X+W)+","+(Y+H)+" L"+(X+W-L)+","+(Y+H),"M"+(X+L)+","+(Y+H)+" L"+X+","+(Y+H)+" L"+X+","+(Y+H-L)];return <g>{d.map(function(pp,i){return <path key={i} d={pp} fill="none" stroke={c} strokeWidth="2" strokeLinecap="square" />})}</g>}
function HmChip(p){var x=p.x,y=p.y,label=p.label,c=p.c,sub=p.sub;return <g transform={"translate("+x+","+y+")"}><rect width={Math.max(label.length,(sub||"").length)*6.6+26} height={sub?40:24} rx="6" fill="rgba(8,10,16,.94)" stroke={"rgba("+crgb(c)+",.5)"} strokeWidth="1.2" /><circle cx="13" cy={sub?15:12} r="3" fill={c} /><text x="24" y={sub?19:16} fill={c} style={{...mono}} fontSize="12">{label}</text>{sub&&<text x="24" y="33" fill={N3} style={{...mono}} fontSize="10">{sub}</text>}</g>}
function HmRetailScene(p){var step=p.step;return (<><line x1="0" y1="312" x2="560" y2="312" stroke={B3} strokeWidth="1.5" /><rect x="120" y="118" width="138" height="100" rx="8" fill={HOUS} stroke={EDGE} strokeWidth="1.5" /><rect x="174" y="218" width="30" height="94" fill={HOUS} stroke={EDGE} /><rect x="108" y="252" width="162" height="16" rx="4" fill={HOUS} stroke={EDGE} />{step<2?<text x="189" y="172" textAnchor="middle" fill={MT} style={{...mono}} fontSize="12">SELF-CHECKOUT</text>:<g key="scr" style={{animation:"wkfade .4s ease"}}><rect x="130" y="130" width="118" height="76" rx="4" fill="rgba(230,61,203,.1)" stroke={MG} /><text x="189" y="162" textAnchor="middle" fill={MG} style={{...hd}} fontSize="14" fontWeight="600">PLEASE</text><text x="189" y="184" textAnchor="middle" fill={MG} style={{...hd}} fontSize="14" fontWeight="600">SCAN ITEM</text></g>}<line x1="116" y1="245" x2="262" y2="245" stroke={"rgba("+cR.cy+","+(step>=1?0.7:0.25)+")"} strokeWidth="2" strokeDasharray="3 5" style={{transition:"stroke .5s"}} /><path d="M300,312 L295,256 L351,256 L346,312 Z" fill={HOUS} stroke={EDGE} /><rect x="176" y="42" width="30" height="15" rx="3" fill={HOUS} stroke={EDGE} /><circle cx="184" cy="49" r="2.6" fill={CY} />{step>=1&&<polygon points="191,57 256,254 128,254" fill={"rgba("+cR.cy+",0.06)"} className="wkfov" />}<HmFigure x={430} y={312} />{step===0&&<g key="item0"><rect width="24" height="20" rx="2" fill={HOUS} stroke={CY} strokeWidth="1.5"><animateMotion dur="2.4s" fill="freeze" path="M392,210 L360,150 L312,196" /></rect></g>}{step>=1&&<g key={"item"+step} style={{animation:"wkfade .4s ease"}}><rect x="311" y="256" width="24" height="20" rx="2" fill={HOUS} stroke={MG} strokeWidth="1.5" /><HmBracket x={304} y={249} w={38} h={34} c={MG} /></g>}{step===1&&<g key="hud" style={{animation:"wkfade .5s ease"}} transform="translate(360,74)"><rect width="190" height="62" rx="9" fill="rgba(8,10,16,.94)" stroke={"rgba("+cR.cy+",.4)"} /><text x="15" y="26" fill={CY} style={{...mono}} fontSize="12">CAMERA · bagged ✓</text><text x="15" y="47" fill={MG} style={{...mono}} fontSize="12">SCAN · no barcode ✗</text></g>}{step===2&&<g key="out"><HmChip x={372} y={78} label="STAFF ALERTED" c={MG} sub="aisle 4 · discreet nudge" /></g>}</>);}
function HmColdScene(p){var step=p.step;var x0=300,x1=540,yTop=84,yBot=236,thr=132,nowX=392;return (<>{[40,92,144].map(function(x){return <g key={x}>{[0,1,2].map(function(r){return <rect key={r} x={x} y={250-r*30} width="40" height="26" rx="2" fill={HOUS} stroke={EDGE} />})}</g>})}<text x="40" y="300" fill={MT} style={{...mono}} fontSize="11">COLD STORE · 2°C</text>{step===0&&<g key="comp"><circle cx="150" cy="120" r="14" fill="none" stroke={"rgba("+cR.cy+",.5)"} /><circle cx="150" cy="120" r="14" fill="none" stroke={CY}><animate attributeName="r" values="14;22" dur="1.5s" repeatCount="indefinite" /><animate attributeName="opacity" values=".6;0" dur="1.5s" repeatCount="indefinite" /></circle><text x="150" y="148" textAnchor="middle" fill={MT} style={{...mono}} fontSize="9">compressor</text></g>}<rect x={x0-8} y={yTop-12} width={x1-x0+30} height={yBot-yTop+44} rx="10" fill="rgba(8,10,16,.5)" stroke={BD} />{[yTop+16,thr,yBot-14].map(function(gy,i){return <line key={i} x1={x0} y1={gy} x2={x1} y2={gy} stroke={BD} strokeWidth="1" />})}<line x1={x0} y1={thr} x2={x1} y2={thr} stroke={MG} strokeWidth="1.4" strokeDasharray="4 4" /><text x={x1-2} y={thr-6} textAnchor="end" fill={MG} style={{...mono}} fontSize="9">8°C limit</text><path d={"M"+x0+",212 L"+nowX+",206"} fill="none" stroke={CY} strokeWidth="2.4" strokeLinecap="round" /><circle cx={nowX} cy="206" r="4" fill={CY} /><line x1={nowX} y1={yTop} x2={nowX} y2={yBot} stroke={B3} strokeWidth="1" strokeDasharray="2 3" /><text x={nowX} y={yBot+16} textAnchor="middle" fill={MT} style={{...mono}} fontSize="9">now</text>{step>=1&&<g key={"proj"+step}><path d={"M"+nowX+",206 C440,200 470,150 512,120"} fill="none" stroke={MG} strokeWidth="2.2" strokeDasharray="220" strokeDashoffset={step===1?220:0} style={{transition:"stroke-dashoffset 1.5s ease"}} opacity=".9" /><circle cx="500" cy="126" r="4.5" fill={MG} /><circle cx="500" cy="126" r="4.5" fill="none" stroke={MG}><animate attributeName="r" values="4.5;12" dur="1.4s" repeatCount="indefinite" /><animate attributeName="opacity" values=".7;0" dur="1.4s" repeatCount="indefinite" /></circle></g>}{step===1&&<g key="pred"><HmChip x={360} y={40} label="BREACH PREDICTED" c={MG} sub="crosses 8°C in ~25 min" /></g>}{step===2&&<g key="fix"><HmChip x={312} y={40} label="SERVICE + REROUTE" c={T} sub="$800 fix · load saved" /><g transform="translate(470,250)"><circle r="11" fill="rgba(65,75,245,.12)" stroke={T} /><path d="M-5,0 L-1,4 L6,-5" fill="none" stroke={T} strokeWidth="2" /></g><text x="470" y="284" textAnchor="middle" fill={MT} style={{...mono}} fontSize="9">compliance logged</text></g>}</>);}
function HmForklift(p){var x=p.x,y=p.y,c=p.c;return <g transform={"translate("+x+","+y+")"} stroke={c||EDGE} strokeWidth="1.8" fill={HOUS} style={{transition:"transform .6s ease"}}><rect x="-26" y="-38" width="34" height="30" rx="3" /><rect x="-30" y="-8" width="42" height="6" rx="1" /><circle cx="-18" cy="4" r="8" fill={BG} /><circle cx="4" cy="4" r="8" fill={BG} /><line x1="12" y1="-40" x2="12" y2="-4" /><path d="M12,-8 L34,-8 M12,-18 L34,-18" /></g>}
function HmLogiScene(p){var step=p.step;var near=step>=1;return (<><line x1="0" y1="300" x2="560" y2="300" stroke={B3} strokeWidth="1.5" /><rect x="60" y="120" width="180" height="180" fill="none" stroke={"rgba("+cR.cy+",.18)"} strokeWidth="1.4" strokeDasharray="8 6" /><text x="70" y="140" fill={MT} style={{...mono}} fontSize="10">PEDESTRIAN</text>{[420,470,520].map(function(x){return <rect key={x} x={x} y="120" width="34" height="160" rx="2" fill={HOUS} stroke={EDGE} opacity=".7" />})}<rect x="276" y="40" width="30" height="15" rx="3" fill={HOUS} stroke={EDGE} /><circle cx="284" cy="47" r="2.6" fill={CY} />{step>=1&&<text x="312" y="50" fill={MT} style={{...mono}} fontSize="9">on-device · offline-safe</text>}<HmForklift x={320} y={step===2?232:near?250:150} c={step===2?T:near?MG:EDGE} /><HmFigure x={near?250:210} y={300} c="#9AA3B5" />{step===1&&<g key="zone"><ellipse cx="288" cy="270" rx="64" ry="30" fill={"rgba("+cR.mg+",.12)"} stroke={MG} strokeWidth="1.4"><animate attributeName="opacity" values=".5;1;.5" dur="1s" repeatCount="indefinite" /></ellipse><HmChip x={350} y={120} label="PROXIMITY BREACH" c={MG} sub="2.1 m · closing" /></g>}{step===2&&<g key="stop"><g transform="translate(322,196)"><rect x="-26" y="-16" width="52" height="26" rx="5" fill="rgba(65,75,245,.12)" stroke={T} /><text x="0" y="2" textAnchor="middle" fill={T} style={{...mono}} fontSize="12" fontWeight="600">STOP</text></g><HmChip x={350} y={120} label="INCIDENT PREVENTED" c={T} sub="slowdown · 0.3s" /></g>}</>);}
function HmPointCloud(p){var cx=p.cx,cy=p.cy,c=p.c;var pts=p.fallen?[[0,0],[10,-2],[20,1],[30,-1],[40,2],[-10,1],[50,0],[25,-8],[15,6]]:[[0,0],[0,-14],[0,-28],[0,-42],[-8,-20],[8,-20],[-6,-50],[6,-50],[0,8]];return <g>{pts.map(function(pp,i){return <circle key={i} cx={cx+pp[0]} cy={cy+pp[1]} r="2.6" fill={c} style={{transition:"all .6s ease"}}><animate attributeName="opacity" values=".5;1;.5" dur="1.8s" begin={(i*0.12)+"s"} repeatCount="indefinite" /></circle>})}</g>}
function HmHomeScene(p){var step=p.step;var fallen=step>=1;return (<><rect x="0" y="0" width="560" height="360" fill="rgba(8,10,16,0.5)" /><line x1="0" y1="300" x2="560" y2="300" stroke={B3} strokeWidth="1.5" /><rect x="60" y="232" width="70" height="40" rx="4" fill={HOUS} stroke={EDGE} /><ellipse cx="95" cy="244" rx="22" ry="6" fill="none" stroke={EDGE} /><text x="60" y="290" fill={MT} style={{...mono}} fontSize="9">bathroom · 02:14</text><rect x="470" y="150" width="50" height="150" rx="3" fill="none" stroke={EDGE} /><rect x="250" y="40" width="50" height="16" rx="5" fill={HOUS} stroke={EDGE} /><circle cx="275" cy="48" r="3" fill={CY} /><text x="312" y="52" fill={MT} style={{...mono}} fontSize="9">mmWave · no lens</text><path d="M250,72 A 28 28 0 0 0 300,72" fill="none" stroke={CY} strokeWidth="1.5" opacity=".55" /><path d="M232,90 A 48 48 0 0 0 318,90" fill="none" stroke={CY} strokeWidth="1.4" opacity=".3" /><circle cx="275" cy="48" r="10" fill="none" stroke={CY}><animate attributeName="r" values="10;70" dur="2.6s" repeatCount="indefinite" /><animate attributeName="opacity" values=".5;0" dur="2.6s" repeatCount="indefinite" /></circle><HmPointCloud cx={250} cy={fallen?286:256} fallen={fallen} c={fallen?MG:CY} /><g transform="translate(372,300)"><rect x="-10" y="-16" width="24" height="18" rx="3" fill="none" stroke={MT} /><circle cx="2" cy="-7" r="4" fill="none" stroke={MT} /><line x1="-12" y1="2" x2="16" y2="-20" stroke={MG} strokeWidth="1.6" /></g><text x="392" y="296" fill={MT} style={{...mono}} fontSize="9">no image captured</text>{step===1&&<g key="fall"><HmChip x={320} y={120} label="FALL DETECTED" c={MG} sub="posture + impact" /></g>}{step===2&&<g key="care"><HmChip x={320} y={120} label="CAREGIVER ALERTED" c={T} sub="4s · dignity intact" /></g>}</>);}
var hmSCENES=[HmRetailScene,HmColdScene,HmLogiScene,HmHomeScene];
var hmDUR=3600;
var hmBEATS=[
{ind:"Retail",env:"Self-checkout",accent:CY,title:"Shrinkage, caught in the act.",stat:"Retail shrink hit ~$132B globally in 2024 — much of it quiet: non-scans, tag-swaps, the under-ring. Old cameras only record it for later.",steps:[["Situation","An item slips past the scanner into the bag — no beep, no barcode."],["Cortex sees","On the device, camera and scan-data fuse: bagged, never scanned. Flagged in milliseconds."],["Outcome","A discreet nudge reaches staff before the exit. Intervention, not a CCTV review."]]},
{ind:"Cold chain",env:"Cold store · reefer",accent:MG,title:"The breach, predicted before the loss.",stat:"~20% of vaccines and 14% of food are lost to cold-chain failures — and data loggers only tell you after it's spoiled.",steps:[["Situation","A reefer's temperature edges up; the compressor shows the first hint of wear."],["Cortex sees","On-device sensor fusion projects the curve past the safe limit — about 25 minutes early."],["Outcome","Service the part, reroute the load. An $800 fix instead of a $50k write-off. Compliance auto-logged."]]},
{ind:"Logistics",env:"Warehouse · yard",accent:T,title:"The collision that never happens.",stat:"Forklifts cause ~101 deaths and 95,000 injuries a year — and most cameras only capture the aftermath.",steps:[["Situation","A forklift rounds the aisle as a worker steps into its path."],["Cortex sees","On existing cameras — even with the network down — it reads the proximity breach in real time."],["Outcome","Alert and slowdown fire instantly. The near-miss stays a near-miss."]]},
{ind:"Smart home",env:"Aging in place",accent:CY,title:"Safety without the camera.",stat:"Falls are the leading cause of injury death over 65 — but cameras feel invasive and wearables come off.",steps:[["Situation","Late at night, alone, an elderly resident falls in the bathroom."],["Cortex sees","mmWave senses the fall through the dark — on the device, with no image ever captured."],["Outcome","A caregiver is alerted in seconds. Safety kept, dignity intact."]]}
];
function HmWalkthrough(){
  var motion=useMotion();var p2=useState({ind:0,step:0}),pos=p2[0];var s2=useState(0),seed=s2[0];
  useEffect(function(){if(!motion){p2[1]({ind:0,step:2});return}var id=setInterval(function(){p2[1](function(p){return p.step<2?{ind:p.ind,step:p.step+1}:{ind:(p.ind+1)%4,step:0}})},hmDUR);return function(){clearInterval(id)}},[motion,seed]);
  var pick=function(i){p2[1]({ind:i,step:0});s2[1](function(s){return s+1})};
  var B=hmBEATS[pos.ind],Scene=hmSCENES[pos.ind];
  return (<div><div className="wk-tabs">{hmBEATS.map(function(b,i){return <button key={b.ind} onClick={function(){pick(i)}} style={{position:"relative",textAlign:"left",padding:"12px 4px 14px",background:"none",border:"none",borderTop:"2px solid "+(i===pos.ind?b.accent:"rgba(140,160,200,.12)"),cursor:"pointer",fontFamily:"inherit",transition:"border-color .3s",flex:1}}><div style={{...mono,fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:i===pos.ind?b.accent:MT,marginBottom:3}}>{"0"+(i+1)}</div><div style={{fontSize:14,fontWeight:600,color:i===pos.ind?TX:N3,letterSpacing:"-.01em"}}>{b.ind}</div>{i===pos.ind&&motion&&<div key={pos.ind+"-"+pos.step+"-"+seed} style={{position:"absolute",left:0,top:-2,height:2,background:b.accent,animation:"wkgrow "+hmDUR+"ms linear forwards"}} />}</button>})}</div>
    <div className="wk-stage"><div style={{borderRadius:14,overflow:"hidden",border:"1px solid "+BD,background:"#0E1119"}}><div key={pos.ind} style={{animation:"wkscene .5s ease"}}><svg viewBox="0 0 560 360" style={{width:"100%",height:"auto",display:"block"}}>{[60,120,180,240,300].map(function(y){return <line key={y} x1="0" x2="560" y1={y} y2={y} stroke="rgba(255,255,255,0.012)" strokeWidth="2" />})}<Scene step={pos.step} /></svg></div></div>
    <div style={{display:"flex",flexDirection:"column"}}><div style={{...mono,fontSize:11,textTransform:"uppercase",letterSpacing:".16em",color:B.accent,marginBottom:10}}>{B.ind} · {B.env}</div><h3 style={{...hd,fontSize:30,fontWeight:600,lineHeight:1.05,margin:"0 0 14px",letterSpacing:"-.02em"}}>{B.title}</h3><p style={{fontSize:14,lineHeight:1.6,color:MT,margin:"0 0 26px",borderLeft:"2px solid rgba(140,160,200,.18)",paddingLeft:14}}>{B.stat}</p><div style={{display:"flex",flexDirection:"column",gap:4}}>{B.steps.map(function(s,i){var active=i===pos.step,past=i<pos.step;return <div key={i} style={{display:"flex",gap:14,padding:"13px 0",opacity:active?1:past?0.5:0.32,transition:"opacity .4s",borderBottom:i<2?"1px solid "+BD:"none"}}><div style={{width:26,height:26,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",...mono,fontSize:12,fontWeight:600,color:active?"#fff":MT,background:active?B.accent:"transparent",border:"1.5px solid "+(active?B.accent:"rgba(140,160,200,.2)"),transition:"all .4s"}}>{i+1}</div><div><div style={{...mono,fontSize:10.5,textTransform:"uppercase",letterSpacing:".12em",color:active?B.accent:MT,marginBottom:4,transition:"color .4s"}}>{s[0]}</div><div style={{fontSize:15,lineHeight:1.55,color:active?TX:N3,transition:"color .4s"}}>{s[1]}</div></div></div>})}</div></div></div></div>);
}
var hmSPINE=[
{eb:"Platform",c:T,h:"Cortex — the brain.",d:"On-device intelligence with seven capabilities no competitor holds, wired into one system. Decides in under 100ms, fully offline.",cta:"Explore the platform",to:"cortex2"},
{eb:"Hardware",c:CY,h:"Edge endpoints — the bodies.",d:"Cameras, thermal, sensors, presence, tags — nine endpoint classes on any silicon, certified with ODM partners. No lock-in.",cta:"See the endpoints",to:"hardware"},
{eb:"Solutions",c:MG,h:"By industry — the proof.",d:"Retail, cold chain, logistics, and the home. Same platform, shaped to each operation's outcomes and KPIs.",cta:"See solutions",to:"solutions"}
];
function Home2Page(p){
  var go=p.go;var scrollTo=function(id){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth"})};
  useEffect(function(){document.title="Sevyn8 — AI that runs where the world happens";var m=document.querySelector('meta[name="description"]');if(m)m.setAttribute("content","Sevyn8 puts on-device edge AI across retail, cold chain, logistics, and the home — every camera, sensor, and device deciding in real time, fully offline, and getting smarter together.")},[]);
  return (<div style={{paddingTop:80}}>
    <section style={{maxWidth:980,margin:"0 auto",padding:"70px 40px 40px",textAlign:"center"}}>
      <Rv><Tg>Edge AI for the physical world</Tg></Rv>
      <Rv d={0.05}><h1 style={{...hd,fontSize:60,fontWeight:600,lineHeight:1.05,margin:"0 0 24px",letterSpacing:"-.035em"}}>AI that runs where<br/>the world actually <span style={{color:T}}>happens.</span></h1></Rv>
      <Rv d={0.1}><p style={{fontSize:20,lineHeight:1.6,color:N3,maxWidth:640,margin:"0 auto 34px"}}>Sevyn8 puts on-device intelligence across retail, cold chain, logistics, and the home — every camera, sensor, and device deciding in real time, fully offline, and getting smarter together.</p></Rv>
      <Rv d={0.15}><div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}><button style={bn} onClick={function(){go("contact")}}>Book a 60-day POC</button><button style={b2} onClick={function(){scrollTo("work")}}>See how it works</button></div></Rv>
    </section>
    <section id="work" style={{maxWidth:MW,margin:"0 auto",padding:"44px 40px 92px"}}>
      <Rv><Tg c={MG}>See it decide · four industries</Tg></Rv>
      <Rv d={0.05}><h2 style={{...hd,fontSize:40,fontWeight:600,margin:"0 0 14px",lineHeight:1.08}}>One platform. Four worlds.<br/>Watch it work.</h2></Rv>
      <Rv d={0.1}><p style={{fontSize:17,lineHeight:1.7,color:N3,maxWidth:620,margin:"0 0 44px"}}>The same on-device intelligence, in four very different places — each catching the moment that matters and turning it into a decision, in real time.</p></Rv>
      <Rv d={0.15}><HmWalkthrough /></Rv>
    </section>
    <section id="spine" style={{borderTop:"1px solid "+BD,background:B2}}>
      <div style={{maxWidth:MW,margin:"0 auto",padding:"88px 40px"}}>
        <Rv><Tg>One platform · many bodies · proven by industry</Tg><h2 style={{...hd,fontSize:38,fontWeight:600,margin:"0 0 14px",lineHeight:1.1}}>One brain. Every body. Smarter together.</h2><p style={{fontSize:17,lineHeight:1.7,color:N3,maxWidth:620,margin:"0 0 44px"}}>The same intelligence runs on every endpoint, in every environment — and every deployment makes the next one sharper.</p></Rv>
        <div className="hm-spine">{hmSPINE.map(function(s,i){return <Rv key={s.eb} d={i*0.08}><div style={{padding:"30px 26px",borderRadius:14,background:BG,border:"1px solid "+BD,borderTop:"2px solid "+s.c,height:"100%",display:"flex",flexDirection:"column"}}><div style={{...mono,fontSize:11,textTransform:"uppercase",letterSpacing:".16em",color:s.c,marginBottom:14}}>{s.eb}</div><h3 style={{...hd,fontSize:23,fontWeight:600,margin:"0 0 12px",letterSpacing:"-.01em"}}>{s.h}</h3><p style={{fontSize:15,lineHeight:1.7,color:N3,margin:"0 0 24px",flex:1}}>{s.d}</p><span onClick={function(){go(s.to)}} style={{fontSize:14.5,fontWeight:600,color:s.c,cursor:"pointer"}}>{s.cta} →</span></div></Rv>})}</div>
        <Rv d={0.2}><div style={{marginTop:24,padding:"22px 26px",borderRadius:14,background:"rgba("+cR.mg+",.05)",border:"1px solid rgba("+cR.mg+",.2)",display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"}}><span style={{...hd,fontSize:34,color:MG,fontWeight:600}}>∞</span><span style={{fontSize:16.5,color:TX,lineHeight:1.6,flex:1,minWidth:260}}>The eighth capability: every deployment teaches every other. The 500th site ships smarter than the 1st — and improves it too. The part competitors can't copy with faster hardware.</span></div></Rv>
      </div>
    </section>
    <section style={{borderTop:"1px solid "+BD,background:BG}}>
      <div style={{maxWidth:MW,margin:"0 auto",padding:"60px 40px",textAlign:"center"}}>
        <Rv><div style={{...mono,fontSize:11,textTransform:"uppercase",letterSpacing:".18em",color:MT,marginBottom:22}}>Deployed with</div><div style={{display:"flex",justifyContent:"center",gap:40,flexWrap:"wrap",fontSize:15,color:N3}}>{["A global ESL leader","A premium fashion retailer","Cold-chain operators","DPIIT Recognised"].map(function(pp){return <span key={pp} style={{fontWeight:500}}>{pp}</span>})}</div></Rv>
      </div>
    </section>
    <section id="cta" style={{borderTop:"1px solid "+BD,background:B2}}>
      <div style={{maxWidth:MW,margin:"0 auto",padding:"100px 40px",textAlign:"center"}}>
        <Rv><h2 style={{...hd,fontSize:46,fontWeight:600,lineHeight:1.05,margin:"0 0 18px"}}>See it run on your site.</h2><p style={{fontSize:18,lineHeight:1.6,color:N3,maxWidth:560,margin:"0 auto 36px"}}>Tell us your environment and the outcomes you need. Measurable results in 60 days — on your hardware, on your data.</p><div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}><button style={bn} onClick={function(){go("contact")}}>Book a 60-day POC</button><button style={b2} onClick={function(){go("contact")}}>Talk to the team</button></div></Rv>
      </div>
    </section>
  </div>);
}

/* ── Hardware (hardware) ── */
var eeENDPOINTS=[
{id:"cam",name:"NPU-led cameras",senses:"Vision",delivers:["Footfall & identity","Shrinkage & concealment","Planogram compliance","PPE & safety"]},
{id:"thermal",name:"Thermal cameras",senses:"Heat · thermal",delivers:["Cold-chain equipment watch","Fever & heat anomalies","Low-light & smoke vision"]},
{id:"box",name:"Edge Box",senses:"Compute hub",delivers:["Runs Cortex on-site","Aggregates every endpoint","Decides fully offline"]},
{id:"esl",name:"Electronic shelf labels",senses:"Shelf & price",delivers:["Price integrity","Planogram truth","Camera–ESL cross-check"]},
{id:"env",name:"Environmental sensors",senses:"Temp · humidity",delivers:["Cold-chain breach prediction","Compliance logging","Comfort & energy"]},
{id:"airq",name:"Air-quality & gas sensors",senses:"Air · gas",delivers:["Refrigerant-leak detection","CO₂ & air quality","Safety thresholds"]},
{id:"mmwave",name:"mmWave presence",senses:"Presence · motion",delivers:["Occupancy, no camera","Fall detection","Privacy-first zones"]},
{id:"acoustic",name:"Acoustic sensors",senses:"Sound events",delivers:["Glass-break & aggression","Equipment anomalies","Leak signatures"]},
{id:"tag",name:"Channel-Sounding tags",senses:"Location · proximity",delivers:["Asset & tote tracking","Dwell & flow","Loss prevention"]}
];
function HeroHub(){
  var motion=useMotion();var cx=280,cy=240,n=9,rx=215,ry=178;
  var pts=Array.from({length:n},function(_,i){var an=-Math.PI/2+(i/n)*6.283;return [cx+Math.cos(an)*rx,cy+Math.sin(an)*ry]});
  return (<svg viewBox="0 0 560 500" style={{width:"100%",height:"auto",display:"block"}}>{pts.map(function(pp,i){return <g key={i}><line x1={pp[0]} y1={pp[1]} x2={cx} y2={cy} stroke={"rgba("+cR.neu+",.13)"} strokeWidth="1" />{motion&&<circle r="3" fill={CY}><animateMotion dur="2.6s" begin={(i*0.29)+"s"} repeatCount="indefinite" path={"M"+pp[0]+","+pp[1]+" L"+cx+","+cy} /><animate attributeName="opacity" values="0;1;1;0" dur="2.6s" begin={(i*0.29)+"s"} repeatCount="indefinite" /></circle>}</g>})}{motion&&<circle cx={cx} cy={cy} r="52" fill="none" stroke={T}><animate attributeName="r" values="46;64" dur="2.8s" repeatCount="indefinite" /><animate attributeName="opacity" values=".45;0" dur="2.8s" repeatCount="indefinite" /></circle>}<circle cx={cx} cy={cy} r="44" fill={B2} stroke={"rgba("+cR.ion+",.6)"} strokeWidth="1.4" /><text x={cx} y={cy-2} textAnchor="middle" fill={TX} style={{...hd}} fontSize="16" fontWeight="600">CORTEX</text><text x={cx} y={cy+15} textAnchor="middle" fill={T} style={{...mono}} fontSize="9" letterSpacing="2">HAL</text>{pts.map(function(pp,i){return <g key={i}><circle cx={pp[0]} cy={pp[1]} r="30" fill={B2} stroke={BD} strokeWidth="1.2" /><g transform={"translate("+(pp[0]-21)+","+(pp[1]-21)+") scale(0.44)"}><DevicePaths type={eeENDPOINTS[i].id} /></g></g>})}</svg>);
}
function EndpointCards(){
  return (<div className="ee-cards">{eeENDPOINTS.map(function(ep,i){return <Rv key={ep.id} d={(i%3)*0.05}><div style={{padding:"24px",borderRadius:12,background:BG,border:"1px solid "+BD,borderTop:"2px solid "+(ep.id==="box"?T:ep.id==="thermal"?MG:"rgba("+cR.cy+",.5)"),height:"100%"}}><div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}><div style={{width:64,height:64,borderRadius:12,background:B2,border:"1px solid "+BD,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Device type={ep.id} size={56} /></div><div><div style={{fontSize:16.5,fontWeight:600,color:TX,lineHeight:1.2}}>{ep.name}</div><div style={{...mono,fontSize:10.5,textTransform:"uppercase",letterSpacing:".1em",color:ACC[ep.id],marginTop:3}}>{ep.senses}</div></div></div><div style={{...mono,fontSize:10,textTransform:"uppercase",letterSpacing:".12em",color:MT,marginBottom:10}}>Delivers</div><div style={{display:"flex",flexDirection:"column",gap:8}}>{ep.delivers.map(function(d){return <div key={d} style={{display:"flex",alignItems:"center",gap:9}}><span style={{width:5,height:5,borderRadius:"50%",background:ACC[ep.id],flexShrink:0}} /><span style={{fontSize:13.5,color:N3}}>{d}</span></div>})}</div></div></Rv>})}</div>);
}
var eeENVS=[
{k:"Retail",use:["cam","esl","box","acoustic"],line:"Footfall, shrinkage, planogram, and queues — cameras and ESLs decided in the Edge Box, with acoustic watching for break-ins after hours."},
{k:"Cold chain",use:["env","thermal","airq","box"],line:"Temperature, humidity, and refrigerant leaks caught before product is lost; thermal vision confirms equipment health."},
{k:"Home",use:["mmwave","env","airq","acoustic"],line:"Presence and fall detection without a camera in private spaces; comfort, air quality, and safety from quiet sensing."},
{k:"Logistics",use:["cam","tag","thermal","box"],line:"Assets and totes tracked through the yard; dwell, loss, and cold-load integrity flagged the moment they happen."}
];
function EnvComposer(){
  var motion=useMotion();var e2=useState(0),env=e2[0];
  useEffect(function(){if(!motion)return;var id=setInterval(function(){e2[1](function(e){return (e+1)%eeENVS.length})},3400);return function(){clearInterval(id)}},[motion]);
  var E=eeENVS[env];
  return (<div><div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:30}}>{eeENVS.map(function(e,i){return <button key={e.k} onClick={function(){e2[1](i)}} style={{...mono,fontSize:13,letterSpacing:".04em",padding:"9px 18px",borderRadius:999,cursor:"pointer",fontFamily:"inherit",border:"1px solid "+(i===env?T:BD),background:i===env?"rgba("+cR.ion+",.12)":"transparent",color:i===env?TX:MT,transition:"all .3s"}}>{e.k}</button>})}</div><div className="ee-env-row">{eeENDPOINTS.map(function(ep){var on=E.use.indexOf(ep.id)>=0;return <div key={ep.id} style={{textAlign:"center",opacity:on?1:0.26,transition:"opacity .4s"}}><div style={{aspectRatio:"1",borderRadius:12,border:"1px solid "+(on?(ep.id==="box"?"rgba("+cR.ion+",.5)":ep.id==="thermal"?"rgba("+cR.mg+",.5)":"rgba("+cR.cy+",.5)"):BD),background:on?B2:"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .4s"}}><Device type={ep.id} size={52} /></div><div style={{...mono,fontSize:8.5,color:on?N3:MT,marginTop:7,lineHeight:1.3}}>{ep.name.split(" ").slice(-1)[0]}</div></div>})}</div><p style={{fontSize:16,lineHeight:1.65,color:N3,margin:"24px 0 0",maxWidth:720,minHeight:52}}>{E.line}</p></div>);
}
function HardwarePage(p){
  var go=p.go;var scrollTo=function(id){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth"})};
  useEffect(function(){document.title="Sevyn8 — Edge endpoints · every endpoint, any silicon";var m=document.querySelector('meta[name="description"]');if(m)m.setAttribute("content","Nine Sevyn8 edge endpoint classes — cameras, thermal, Edge Box, shelf labels, environmental, air-quality, presence, acoustic, and asset tags — every body running the same Cortex brain on any silicon, certified with ODM partners.")},[]);
  return (<div style={{paddingTop:80}}>
    <section style={{maxWidth:MW,margin:"0 auto",padding:"48px 40px 88px"}}>
      <div className="cx-grid2"><div><Tg>Edge endpoints</Tg><h1 style={{...hd,fontSize:54,fontWeight:600,lineHeight:1.05,margin:"0 0 24px"}}>One platform.<br/>Every endpoint.<br/><span style={{color:T}}>Any silicon.</span></h1><p style={{fontSize:19,lineHeight:1.6,color:N3,maxWidth:480,margin:"0 0 18px"}}>Cameras, thermal, the Edge Box, shelf labels, environmental, air-quality, presence, acoustic, and asset tags — every Sevyn8 endpoint is a different body running the same brain. All speak HAL; all run Cortex.</p><p style={{fontSize:16,lineHeight:1.65,color:MT,maxWidth:480,margin:"0 0 34px"}}>We don't lock you to a chip. We certify the right endpoint for the job with our ODM partners — so hardware is a supply decision, never a rewrite.</p><div style={{display:"flex",gap:12,flexWrap:"wrap"}}><button style={bn} onClick={function(){go("contact")}}>Book a 60-day POC</button><button style={b2} onClick={function(){scrollTo("endpoints")}}>See the endpoints</button></div></div><div className="cx-hero-anim" style={{height:460,position:"relative"}}><HeroHub /></div></div>
    </section>
    <section id="endpoints" style={{borderTop:"1px solid "+BD,background:B2}}>
      <div style={{maxWidth:MW,margin:"0 auto",padding:"88px 40px"}}><Rv><Tg c={CY}>The endpoint family</Tg><h2 style={{...hd,fontSize:38,fontWeight:600,margin:"0 0 14px",lineHeight:1.1}}>Nine endpoint classes.<br/>One intelligence layer.</h2><p style={{fontSize:17,lineHeight:1.7,color:N3,maxWidth:620,margin:"0 0 40px"}}>We don't sell spec sheets — there are many SKUs across our ODM partners. We sell what each endpoint <em>delivers</em>. Pick the bodies your environment needs; Cortex makes them one system.</p></Rv><EndpointCards /></div>
    </section>
    <section style={{borderTop:"1px solid "+BD,background:BG}}>
      <div style={{maxWidth:MW,margin:"0 auto",padding:"88px 40px"}}><Rv><Tg c={MG}>Same endpoints · different environments</Tg><h2 style={{...hd,fontSize:38,fontWeight:600,margin:"0 0 14px",lineHeight:1.1}}>The family flexes to the floor.</h2><p style={{fontSize:17,lineHeight:1.7,color:N3,maxWidth:620,margin:"0 0 40px"}}>The same endpoint classes compose differently for each environment — and the platform underneath never changes.</p></Rv><Rv d={0.1}><EnvComposer /></Rv></div>
    </section>
    <section style={{borderTop:"1px solid "+BD,background:B2}}>
      <div style={{maxWidth:MW,margin:"0 auto",padding:"88px 40px"}}><div className="cx-grid2"><div><Rv><Tg>Any silicon · no lock-in</Tg><h2 style={{...hd,fontSize:38,fontWeight:600,margin:"0 0 18px",lineHeight:1.1}}>We don't make the chip.<br/>We make it not matter.</h2><p style={{fontSize:17,lineHeight:1.7,color:N3,maxWidth:460,margin:"0 0 16px"}}>HAL abstracts the silicon, so the same Cortex runs across NPU vendors and ODM designs. We certify the right endpoint for your job and budget — and you're never tied to one roadmap or price.</p><p style={{fontSize:16,lineHeight:1.7,color:MT,maxWidth:460,margin:0}}>When better silicon ships, you adopt it as a supply decision — not an engineering project.</p></Rv></div><Rv d={0.1}><svg viewBox="0 0 460 270" style={{width:"100%",height:"auto"}}>{["NPU vendor A","NPU vendor B","ARM / x86","ODM design"].map(function(s,i){var y=32+i*56;return <g key={s}><rect x="10" y={y} width="150" height="38" rx="8" fill={BG} stroke={BD} /><text x="26" y={y+23} fill={N3} style={{...mono}} fontSize="11">{s}</text><line x1="160" y1={y+19} x2="250" y2="135" stroke={"rgba("+cR.neu+",.18)"} strokeWidth="1" /></g>})}<rect x="250" y="113" width="96" height="44" rx="10" fill={B3} stroke={"rgba("+cR.ion+",.6)"} strokeWidth="1.4" /><text x="298" y="140" textAnchor="middle" fill={T} style={{...mono}} fontSize="12" letterSpacing="2">HAL</text><line x1="346" y1="135" x2="400" y2="135" stroke={"rgba("+cR.ion+",.5)"} strokeWidth="1.2" /><g transform="translate(398,113)"><Device type="box" size={44} /></g></svg></Rv></div></div>
    </section>
    <section id="cta" style={{borderTop:"1px solid "+BD,background:BG}}>
      <div style={{maxWidth:MW,margin:"0 auto",padding:"100px 40px",textAlign:"center"}}><Rv><h2 style={{...hd,fontSize:46,fontWeight:600,lineHeight:1.05,margin:"0 0 18px"}}>Pick the endpoints. We'll run the intelligence.</h2><p style={{fontSize:18,lineHeight:1.6,color:N3,maxWidth:560,margin:"0 auto 36px"}}>Tell us the environment and the outcomes you need. We'll spec the endpoint mix and prove it on your site in 60 days.</p><div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}><button style={bn} onClick={function(){go("contact")}}>Book a 60-day POC</button><button style={b2} onClick={function(){go("contact")}}>Talk to the team</button></div></Rv></div>
    </section>
  </div>);
}

/* ── Solutions (solutions + soldet-*) ── */
var SOLS={
  retail:{n:"Retail",accent:CY,lead:"Stop shrink in the act.",h:"Stop shrink in the act. Understand every shopper.",d:"Most retail shrink is quiet — non-scans, tag-swaps, the under-ring — and traditional cameras only record it for the nightly review. Cortex turns the cameras and shelf-edge you already have into real-time decisions: catch loss before the exit, keep shelves honest, and move queues before customers walk.",stats:[["$132B","global retail shrink, 2024"],["~40%","shrink cut potential (IDC, by 2028)"],["< 100ms","decisions, on the device"],["0","frames sent to the cloud"]],scenarios:[{t:"Self-checkout · a non-scan",wo:"An item goes into the bag unscanned. Nobody notices until the inventory count doesn't add up weeks later.",w:"Camera and scan-data fuse on the device — bagged, never scanned. A discreet nudge reaches staff before the shopper reaches the door."},{t:"The aisle · a shelf gap",wo:"A planogram gap or a wrong price sits unseen until the evening walk — lost sales the whole day.",w:"ESL and camera disagree on a shelf; the gap and the price mismatch reach staff in minutes, not at close."},{t:"Front-of-store · a queue",wo:"A queue builds at the tills. By the time a manager notices, customers have abandoned baskets and left.",w:"Checkout dwell crosses threshold and Cortex calls a new counter — before anyone walks out."}],endpoints:[{id:"cam",name:"NPU-led cameras",role:"Footfall, concealment, queues, planogram"},{id:"esl",name:"Electronic shelf labels",role:"Price integrity and the camera–ESL cross-check"},{id:"box",name:"Edge Box",role:"Runs Cortex in-store; decides fully offline"},{id:"acoustic",name:"Acoustic sensors",role:"After-hours glass-break and intrusion"}],changes:["Loss prevention shifts from documenting theft to interrupting it — in real time, without confrontation.","Footfall and conversion become exact counts, not estimates from a doorway sensor.","Shelf and price integrity are checked continuously, not on a manual walk.","Every store inherits what the others learn — the 40th store opens knowing what the 1st caught."],ladder:["Start with one store. Connect the cameras and ESLs you already run to a single Edge Box; prove the outcomes on your real floor in 60 days.","Scale across the estate. The same platform rolls to every store — new endpoints are a supply decision, not a re-integration.","Compound. Fleet learning pushes every store's improvements to all the others over the air."]},
  cold:{n:"Cold chain",accent:MG,lead:"Predict the breach before the loss.",h:"Predict the breach before the product is lost.",d:"Traditional cold-chain monitoring is reactive — data loggers and manual checks only tell you after spoilage. Cortex fuses temperature, humidity, and equipment signals on the device to forecast excursions before product crosses the threshold, and uses thermal vision to confirm equipment health.",stats:[["~20%","of vaccines lost to temp control"],["14%","of food lost post-harvest"],["~25 min","early breach warning"],["$50k","load saved by an $800 fix"]],scenarios:[{t:"The reefer · a drift",wo:"A reefer's temperature edges up in transit. The logger records it; the team finds out when the load is rejected at the dock.",w:"On-device sensor fusion projects the curve past the limit about 25 minutes early — reroute or cool before anything spoils."},{t:"The compressor · early wear",wo:"A compressor degrades silently until it fails overnight, and a freezer of product is gone by morning.",w:"Cortex reads the vibration signature and flags the failing part — an $800 fix instead of a $50k write-off."},{t:"The audit · compliance",wo:"Temperature logs are reconstructed by hand for the audit, hoping nothing was missed or mis-keyed.",w:"Every reading is logged continuously and tamper-evident on the device — the audit trail builds itself."}],endpoints:[{id:"env",name:"Environmental sensors",role:"Temperature, humidity, breach prediction"},{id:"thermal",name:"Thermal cameras",role:"Equipment health and cold-load integrity"},{id:"airq",name:"Air-quality & gas sensors",role:"Refrigerant-leak and air-quality detection"},{id:"box",name:"Edge Box",role:"Runs Cortex on-site; decides fully offline"}],changes:["Monitoring shifts from reactive logging to predictive intervention — you act before product is lost.","Equipment failures are forecast from their signatures, not discovered after a breakdown.","Compliance logging is continuous and tamper-evident, not reconstructed for the audit.","Every site inherits the failure patterns the others have already seen."],ladder:["Start with one cold store or fleet. Place environmental and thermal endpoints on a single Edge Box; prove early-warning on your real loads in 60 days.","Scale across sites and reefers. Same platform, same guarantees, wherever the cold chain runs.","Compound. Every breach and failure pattern learned anywhere is pushed to every site over the air."]},
  logistics:{n:"Logistics",accent:T,lead:"The collision that never happens.",h:"The collision that never happens. The asset never lost.",d:"Yards and warehouses are dangerous and opaque — forklifts cause thousands of injuries a year, and assets vanish into the floor. Cortex runs on the cameras you already have, even when the network drops, to prevent incidents in real time — and on Channel-Sounding tags to keep every asset located.",stats:[["~101","forklift deaths a year (US)"],["95,000","forklift injuries a year (US)"],["< 100ms","proximity alerts"],["offline","keeps working, network or not"]],scenarios:[{t:"The aisle · a near-miss",wo:"A forklift rounds a blind corner as a worker steps in. The camera records the collision — for the incident report.",w:"Cortex reads the proximity breach in real time and triggers an alert and slowdown. The near-miss stays a near-miss."},{t:"The dock · a missing tote",wo:"A tote of high-value stock is misplaced in the yard; hours are lost searching, and it's eventually written off.",w:"Channel-Sounding tags keep every asset located, and flag dwell and loss the moment they happen."},{t:"The floor · PPE & zones",wo:"PPE and one-way zones are spot-checked occasionally; violations go unseen until an inspection.",w:"Cortex flags missing PPE and zone breaches continuously on existing cameras — even with the network down."}],endpoints:[{id:"cam",name:"NPU-led cameras",role:"Forklift-pedestrian safety, PPE, zones"},{id:"tag",name:"Channel-Sounding tags",role:"Asset and tote tracking, dwell, loss"},{id:"thermal",name:"Thermal cameras",role:"Cold-load integrity in transit"},{id:"box",name:"Edge Box",role:"Runs Cortex on-site; offline-safe"}],changes:["Safety shifts from incident reports to incident prevention — alerts fire before the collision.","Assets are located continuously instead of searched for and written off.","PPE and zone compliance are enforced in real time, on the cameras you already run.","Detection keeps working when the network doesn't — inference is on the device."],ladder:["Start with one yard or DC. Connect existing cameras to an Edge Box and add tags to high-value assets; prove safety and location in 60 days.","Scale across facilities. The same platform deploys to every site without replacing hardware.","Compound. Every near-miss pattern and loss signature is shared across the network over the air."]},
  home:{n:"Smart home",accent:CY,lead:"Safety without the camera.",h:"Safety without the camera. Dignity by design.",d:"Falls are the leading cause of injury death over 65, but cameras feel invasive and wearables come off. Cortex uses mmWave presence to sense falls and anomalies through the dark — on the device, with no image ever captured — so safety never costs privacy.",stats:[["#1","cause of injury death over 65 (falls)"],["0","images ever captured"],["~4s","to caregiver alert"],["GDPR","& HIPAA-friendly by design"]],scenarios:[{t:"Night · a fall",wo:"An elderly resident falls in the bathroom at 2am, alone. A camera is too invasive to install; the pendant came off hours ago.",w:"mmWave senses the fall through the dark — no image, no wearable — and a caregiver is alerted in seconds."},{t:"Routine · an anomaly",wo:"A gradual change — less movement, more time in bed — goes unnoticed until it becomes a crisis.",w:"Cortex learns the household's normal and flags the drift early, privately, on the device."},{t:"Comfort · the environment",wo:"Air quality and temperature are managed reactively, one room and one complaint at a time.",w:"Environmental sensing keeps comfort and air quality right automatically — quietly, in the background."}],endpoints:[{id:"mmwave",name:"mmWave presence",role:"Presence and fall detection, no camera"},{id:"env",name:"Environmental sensors",role:"Temperature, humidity, comfort"},{id:"airq",name:"Air-quality & gas sensors",role:"Air quality and gas safety"},{id:"acoustic",name:"Acoustic sensors",role:"Distress and anomaly sounds"}],changes:["Safety no longer costs privacy — sensing captures motion, never images.","Care shifts from reacting to crises to noticing the drift that precedes them.","No wearables to charge, forget, or refuse — the room itself is the sensor.","Every home benefits from patterns learned across the fleet, privately."],ladder:["Start with one residence or ward. Place mmWave and environmental endpoints on an Edge Box; prove fall detection and privacy in 60 days.","Scale across units. The same platform fits homes, wards, and assisted-living rooms alike.","Compound. Anonymous motion patterns improve detection everywhere, over the air."]}
};
var soORDER=["retail","cold","logistics","home"];
function SoSc(p){return <section style={{borderTop:p.bt?"1px solid "+BD:"none",background:p.alt?B2:BG}}><div style={{maxWidth:MW,margin:"0 auto",padding:"76px 40px"}}>{p.children}</div></section>}
function SoScenarios(p){
  var sol=p.sol;var motion=useMotion();var i2=useState(0),i=i2[0];
  useEffect(function(){i2[1](0)},[sol]);
  useEffect(function(){if(!motion)return;var id=setInterval(function(){i2[1](function(v){return (v+1)%sol.scenarios.length})},5200);return function(){clearInterval(id)}},[motion,sol]);
  var S=sol.scenarios[i];
  return (<div><div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:26}}>{sol.scenarios.map(function(sc,k){return <button key={k} onClick={function(){i2[1](k)}} style={{...mono,fontSize:12.5,padding:"9px 16px",borderRadius:999,cursor:"pointer",fontFamily:"inherit",border:"1px solid "+(k===i?sol.accent:BD),background:k===i?"rgba("+crgb(sol.accent)+",.1)":"transparent",color:k===i?sol.accent:MT,transition:"all .3s"}}>{sc.t}</button>})}</div><div className="sl-2col"><div style={{padding:26,borderRadius:14,border:"1.5px solid rgba("+cR.mg+",.28)",height:"100%"}}><div style={{...mono,fontSize:11,textTransform:"uppercase",letterSpacing:".14em",color:MG,marginBottom:12}}>Without Sevyn8</div><p style={{fontSize:16.5,lineHeight:1.7,color:TX,margin:0}}>{S.wo}</p></div><div style={{padding:26,borderRadius:14,border:"1.5px solid rgba("+cR.ion+",.4)",background:"rgba("+cR.ion+",.05)",height:"100%"}}><div style={{...mono,fontSize:11,textTransform:"uppercase",letterSpacing:".14em",color:T,marginBottom:12}}>With Sevyn8</div><p style={{fontSize:16.5,lineHeight:1.7,color:TX,margin:0}}>{S.w}</p></div></div><div style={{display:"flex",justifyContent:"center",gap:5,marginTop:20}}>{sol.scenarios.map(function(_,k){return <div key={k} style={{width:k===i?26:8,height:4,borderRadius:2,background:k===i?sol.accent:BD,transition:"all .4s"}} />})}</div></div>);
}
function SoDetail(p){var sol=p.sol,go=p.go;return (<>
  <SoSc><Rv><div style={{...mono,fontSize:13,color:MT,marginBottom:18}}><span style={{color:T,cursor:"pointer"}} onClick={function(){go("solutions")}}>Solutions</span> / {sol.n}</div><Tg c={sol.accent}>Solutions · {sol.n}</Tg><h1 style={{...hd,fontSize:48,fontWeight:600,lineHeight:1.08,maxWidth:720,margin:"0 0 22px"}}>{sol.h}</h1><p style={{fontSize:18.5,lineHeight:1.7,color:N3,maxWidth:660,margin:0}}>{sol.d}</p></Rv></SoSc>
  <SoSc alt bt><div className="sl-stats">{sol.stats.map(function(s,i){return <Rv key={i} d={i*0.06}><div style={{padding:"24px 22px",borderRadius:12,border:"1px solid "+BD,background:BG,height:"100%"}}><div style={{...hd,fontSize:32,fontWeight:600,color:i<2?TX:T}}>{s[0]}</div><div style={{fontSize:13.5,color:MT,marginTop:6,lineHeight:1.45}}>{s[1]}</div></div></Rv>})}</div></SoSc>
  <SoSc bt><Rv><Tg c={MG}>A day without vs. with</Tg><h2 style={{...hd,fontSize:34,fontWeight:600,margin:"0 0 30px"}}>Same moment. Different outcome.</h2></Rv><Rv d={0.1}><SoScenarios sol={sol} /></Rv></SoSc>
  <SoSc alt bt><Rv><Tg>The endpoint mix</Tg><h2 style={{...hd,fontSize:34,fontWeight:600,margin:"0 0 12px"}}>What {sol.n.toLowerCase()} runs on.</h2><p style={{fontSize:16.5,lineHeight:1.7,color:N3,maxWidth:620,margin:"0 0 34px"}}>The endpoints this environment uses — the same family, composed for {sol.n.toLowerCase()}. All speak HAL; all run Cortex.</p></Rv><div className="sl-ep">{sol.endpoints.map(function(ep,i){return <Rv key={ep.id} d={i*0.06}><div style={{padding:"22px",borderRadius:12,border:"1px solid "+BD,borderTop:"2px solid "+epStroke(ep.id),background:BG,height:"100%"}}><div style={{width:56,height:56,borderRadius:11,background:B2,border:"1px solid "+BD,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14}}><Device type={ep.id} size={48} /></div><div style={{fontSize:15.5,fontWeight:600,color:TX,marginBottom:6}}>{ep.name}</div><div style={{fontSize:13.5,lineHeight:1.6,color:MT}}>{ep.role}</div></div></Rv>})}</div></SoSc>
  <SoSc bt><Rv><Tg c={sol.accent}>What changes with Sevyn8</Tg></Rv>{sol.changes.map(function(c,i){var pp=c.split(" — ");return <Rv key={i} d={i*0.05}><div style={{display:"flex",gap:16,padding:"18px 0",borderBottom:"1px solid "+BD}}><div style={{width:7,height:7,borderRadius:"50%",background:T,marginTop:9,flexShrink:0}} /><div style={{fontSize:16.5,lineHeight:1.6}}><span style={{fontWeight:600,color:TX}}>{pp[0]}</span>{pp[1]&&<span style={{color:N3}}> — {pp[1]}</span>}</div></div></Rv>})}</SoSc>
  <SoSc alt bt><Rv><Tg>Two ways in</Tg><h2 style={{...hd,fontSize:34,fontWeight:600,margin:"0 0 30px"}}>New intelligent endpoints, or the ones you have.</h2></Rv><div className="sl-2col"><Rv><div style={{padding:26,borderRadius:14,border:"1.5px solid rgba("+cR.cy+",.32)",background:"rgba("+cR.cy+",.04)",height:"100%"}}><div style={{...mono,fontSize:11,textTransform:"uppercase",letterSpacing:".14em",color:CY,marginBottom:10}}>Greenfield</div><h4 style={{fontSize:18,fontWeight:600,margin:"0 0 8px"}}>Deploy new endpoints with AI built in</h4><p style={{fontSize:14.5,lineHeight:1.7,color:N3,margin:0}}>Purpose-built endpoints with on-board NPU run Cortex natively — inference on the device itself, no separate box required.</p></div></Rv><Rv d={0.08}><div style={{padding:26,borderRadius:14,border:"1.5px solid rgba("+cR.ion+",.32)",background:"rgba("+cR.ion+",.04)",height:"100%"}}><div style={{...mono,fontSize:11,textTransform:"uppercase",letterSpacing:".14em",color:T,marginBottom:10}}>Brownfield</div><h4 style={{fontSize:18,fontWeight:600,margin:"0 0 8px"}}>Add intelligence to what you already run</h4><p style={{fontSize:14.5,lineHeight:1.7,color:N3,margin:0}}>Connect existing cameras and sensors to one Edge Box. It ingests every feed and runs Cortex locally — no rip-and-replace.</p></div></Rv></div></SoSc>
  <SoSc bt><Rv><Tg>Your path to results</Tg></Rv><div className="sl-3">{["Start","Scale","Compound"].map(function(l,i){return <Rv key={l} d={i*0.08}><div style={{padding:26,borderRadius:12,border:"1px solid "+BD,background:BG,height:"100%"}}><div style={{display:"flex",alignItems:"center",gap:11,marginBottom:14}}><div style={{width:28,height:28,borderRadius:"50%",background:"rgba("+cR.ion+",.14)",border:"1.5px solid rgba("+cR.ion+",.4)",display:"flex",alignItems:"center",justifyContent:"center",...mono,fontSize:13,fontWeight:600,color:T}}>{i+1}</div><span style={{...mono,fontSize:12,textTransform:"uppercase",letterSpacing:".14em",color:T,fontWeight:600}}>{l}</span></div><p style={{fontSize:15,lineHeight:1.7,color:N3,margin:0}}>{sol.ladder[i]}</p></div></Rv>})}</div></SoSc>
  <section style={{borderTop:"1px solid "+BD,background:B2}}><div style={{maxWidth:MW,margin:"0 auto",padding:"96px 40px",textAlign:"center"}}><Rv><h2 style={{...hd,fontSize:42,fontWeight:600,margin:"0 0 16px"}}>See it work in your {sol.n.toLowerCase()} operation.</h2><p style={{fontSize:18,lineHeight:1.6,color:N3,maxWidth:560,margin:"0 auto 34px"}}>60-day POC on your real site and your real data. New endpoints or the infrastructure you already run.</p><div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}><button style={bn} onClick={function(){go("contact")}}>Book a 60-day POC</button><button style={b2} onClick={function(){go("solutions")}}>Back to Solutions</button></div></Rv></div></section>
</>);}
function SoLanding(p){var go=p.go;return (<>
  <SoSc><Rv><Tg c={MG}>Solutions · proven by industry</Tg><h1 style={{...hd,fontSize:52,fontWeight:600,lineHeight:1.06,maxWidth:760,margin:"0 0 22px"}}>One platform, shaped to your floor.</h1><p style={{fontSize:18.5,lineHeight:1.7,color:N3,maxWidth:660,margin:0}}>The same Cortex platform and the same endpoint family, composed for the outcomes each operation cares about. Pick your world.</p></Rv></SoSc>
  <SoSc bt><div className="sl-cards">{soORDER.map(function(k,i){var s=SOLS[k];return <Rv key={k} d={i*0.07}><div onClick={function(){go("soldet-"+k)}} style={{padding:"30px 28px",borderRadius:16,border:"1px solid "+BD,borderTop:"2px solid "+s.accent,background:BG,cursor:"pointer",height:"100%",display:"flex",flexDirection:"column",transition:"border-color .25s, transform .25s"}} onMouseEnter={function(e){e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.borderColor="rgba(140,160,200,.28)"}} onMouseLeave={function(e){e.currentTarget.style.transform="none";e.currentTarget.style.borderColor=BD}}><div style={{...mono,fontSize:11,textTransform:"uppercase",letterSpacing:".16em",color:s.accent,marginBottom:12}}>{s.n}</div><h3 style={{...hd,fontSize:25,fontWeight:600,margin:"0 0 18px",letterSpacing:"-.015em"}}>{s.lead}</h3><div style={{display:"flex",gap:8,marginBottom:22}}>{s.endpoints.map(function(ep){return <div key={ep.id} style={{width:40,height:40,borderRadius:9,background:B2,border:"1px solid "+BD,display:"flex",alignItems:"center",justifyContent:"center"}}><Device type={ep.id} size={32} /></div>})}</div><span style={{fontSize:14.5,fontWeight:600,color:s.accent,marginTop:"auto"}}>Explore {s.n} →</span></div></Rv>})}</div></SoSc>
  <section style={{borderTop:"1px solid "+BD,background:B2}}><div style={{maxWidth:MW,margin:"0 auto",padding:"90px 40px",textAlign:"center"}}><Rv><h2 style={{...hd,fontSize:40,fontWeight:600,margin:"0 0 16px"}}>Not sure where you fit?</h2><p style={{fontSize:18,lineHeight:1.6,color:N3,maxWidth:540,margin:"0 auto 32px"}}>Tell us your environment and the outcomes you need. We'll spec the endpoint mix and prove it in 60 days.</p><button style={bn} onClick={function(){go("contact")}}>Talk to the team</button></Rv></div></section>
</>);}
function SolutionsLanding(p){useEffect(function(){document.title="Sevyn8 — Solutions · one platform, shaped to your floor";var m=document.querySelector('meta[name="description"]');if(m)m.setAttribute("content","Sevyn8 Cortex shaped to your industry — retail, cold chain, logistics, and the home. The same platform and endpoint family, composed for the outcomes each operation cares about.")},[]);return <div style={{paddingTop:80}}><SoLanding go={p.go} /></div>}
function SolutionsDetail(p){useEffect(function(){document.title="Sevyn8 — "+p.sol.n+" solutions";var m=document.querySelector('meta[name="description"]');if(m)m.setAttribute("content",p.sol.d)},[p.sol]);return <div style={{paddingTop:80}}><SoDetail sol={p.sol} go={p.go} /></div>}

function Nav(p){
  var pg=p.pg,go=p.go,s2=useState(false),d2=useState(null),mo=useState(false);
  useEffect(function(){var h=function(){s2[1](window.scrollY>40)};window.addEventListener("scroll",h);return function(){window.removeEventListener("scroll",h)}},[]);
  useEffect(function(){document.body.style.overflow=mo[0]?"hidden":"";return function(){document.body.style.overflow=""}},[mo[0]]);
  var goc=function(t){mo[1](false);go(t)};
  var nl=function(l,t){var a=pg===t;return <span onClick={function(){go(t)}} onMouseEnter={function(e){if(!a)e.currentTarget.style.color="#FFFFFF"}} onMouseLeave={function(e){if(!a)e.currentTarget.style.color="#D2D7E2"}} style={{fontSize:16,fontWeight:500,color:a?T:"#D2D7E2",cursor:"pointer"}}>{l}</span>};
  var mrow=function(l,t,sub){var act=pg===t;return <div key={t} onClick={function(){goc(t)}} style={{padding:"16px 22px",borderBottom:"1px solid "+BD,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <div><div style={{fontSize:17,fontWeight:600,color:act?T:TX}}>{l}</div>{sub&&<div style={{fontSize:13,color:DM,marginTop:3,lineHeight:1.4}}>{sub}</div>}</div>
    <span style={{color:act?T:DM,fontSize:18,marginLeft:12}}>{"\u203A"}</span>
  </div>};
  return <><nav style={{position:"fixed",top:0,left:0,right:0,zIndex:999,padding:0,background:s2[0]||mo[0]?"rgba(11,13,20,.96)":"transparent",backdropFilter:s2[0]||mo[0]?"blur(20px)":"none",borderBottom:s2[0]||mo[0]?"1px solid "+BD:"none",transition:"all .3s"}}>
    <div style={{maxWidth:MW,margin:"0 auto",padding:"0 40px",display:"flex",alignItems:"center",justifyContent:"space-between",height:60}}>
      <div onClick={function(){goc("home")}} style={{cursor:"pointer"}}><Brand size={48} animated /></div>
      <div style={{display:"flex",alignItems:"center",gap:26}}>
        {nl("Cortex","platform")}{nl("Cortex ✦","cortex2")}{nl("Home2 ✦","home2")}{nl("Hardware ✦","hardware")}{nl("Solutions ✦","solutions")}{nl("Edge AI Box","box")}
        <div style={{position:"relative"}} onMouseEnter={function(){d2[1]("s")}} onMouseLeave={function(){d2[1](null)}}><span onMouseEnter={function(e){if(!pg.startsWith("sol-"))e.currentTarget.style.color="#FFFFFF"}} onMouseLeave={function(e){if(!pg.startsWith("sol-"))e.currentTarget.style.color="#D2D7E2"}} style={{fontSize:16,fontWeight:500,color:pg.startsWith("sol-")?T:"#D2D7E2",cursor:"pointer",padding:"8px 0"}}>Solutions &#9662;</span>{d2[0]==="s"&&<div style={{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",paddingTop:8,zIndex:100}}><div style={{background:B2,border:"1px solid "+BD,borderRadius:10,padding:6,minWidth:280,boxShadow:"0 16px 48px rgba(0,0,0,.5)"}}>{SOL.map(function(s){return <div key={s.id} onClick={function(){go("sol-"+s.id)}} style={{padding:"10px 16px",borderRadius:7,cursor:"pointer",fontSize:14,color:TX}}>{s.n}<br/><span style={{fontSize:12,color:DM}}>{s.ln}</span></div>})}</div></div>}</div>
        {nl("Partners","partners")}
        <div style={{position:"relative"}} onMouseEnter={function(){d2[1]("c")}} onMouseLeave={function(){d2[1](null)}}><span onMouseEnter={function(e){if(!["about","contact"].includes(pg))e.currentTarget.style.color="#FFFFFF"}} onMouseLeave={function(e){if(!["about","contact"].includes(pg))e.currentTarget.style.color="#D2D7E2"}} style={{fontSize:16,fontWeight:500,color:["about","contact"].includes(pg)?T:"#D2D7E2",cursor:"pointer",padding:"8px 0"}}>Our Story &#9662;</span>{d2[0]==="c"&&<div style={{position:"absolute",top:"100%",right:0,paddingTop:8,zIndex:100}}><div style={{background:B2,border:"1px solid "+BD,borderRadius:10,padding:6,minWidth:150,boxShadow:"0 16px 48px rgba(0,0,0,.5)"}}>{[["Our Story","about"],["Contact","contact"]].map(function(x){return <div key={x[0]} onClick={function(){go(x[1])}} style={{padding:"10px 16px",borderRadius:7,cursor:"pointer",fontSize:14,color:TX}}>{x[0]}</div>})}</div></div>}</div>
        <button style={{...bn,padding:"8px 20px",fontSize:14}} onClick={function(){go("contact")}}>Contact</button>
        <button className="nav-burger" aria-label={mo[0]?"Close menu":"Open menu"} onClick={function(){mo[1](!mo[0])}} style={{display:"none",alignItems:"center",justifyContent:"center",width:40,height:40,background:"transparent",border:"1px solid "+BD,borderRadius:8,cursor:"pointer",color:TX,padding:0}}>
          {mo[0]
            ? <span style={{fontSize:22,lineHeight:1,fontWeight:300}}>{"\u00D7"}</span>
            : <div style={{display:"flex",flexDirection:"column",gap:4}}><div style={{width:18,height:2,background:TX,borderRadius:1}} /><div style={{width:18,height:2,background:TX,borderRadius:1}} /><div style={{width:18,height:2,background:TX,borderRadius:1}} /></div>}
        </button>
      </div>
    </div>
  </nav>
  {mo[0] && <div className="nav-panel" style={{position:"fixed",top:60,left:0,right:0,bottom:0,background:BG,borderTop:"1px solid "+BD,overflowY:"auto",zIndex:998,WebkitOverflowScrolling:"touch"}}>
    {mrow("Home","home")}
    {mrow("Cortex","platform","The industry-agnostic edge AI platform")}
    {mrow("Cortex ✦","cortex2","New Cortex surface (preview)")}
    {mrow("Home2 ✦","home2","New home (preview)")}
    {mrow("Hardware ✦","hardware","Edge endpoints (preview)")}
    {mrow("Solutions ✦","solutions","Solutions landing (preview)")}
    {mrow("Edge AI Box","box","The device")}
    <div style={{padding:"18px 22px 6px",fontSize:11,textTransform:"uppercase",letterSpacing:2.5,color:DM,fontWeight:600}}>Solutions</div>
    {SOL.map(function(s){return mrow(s.n,"sol-"+s.id,s.ln)})}
    {mrow("Partners","partners")}
    {mrow("Our Story","about")}
    {mrow("Contact","contact")}
    <div style={{padding:"30px 22px 60px"}}><button style={{...bn,width:"100%",justifyContent:"center",padding:"14px 20px"}} onClick={function(){goc("contact")}}>Book a 60-day POC {"\u2192"}</button></div>
  </div>}
  </>;
}

function Ft(){return <footer style={{borderTop:"1px solid "+BD,background:B2,padding:"36px 40px"}}><div style={{maxWidth:MW,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:13,color:DM,flexWrap:"wrap",gap:12}}><Brand size={26} /><span>2026 Sevyn8 Private Limited &middot; New Delhi &middot; DPIIT Recognised</span></div></footer>}

export default function App(){
  var p2=useState("home"),pg=p2[0];
  useEffect(function(){var id="G-XXXXXXXXXX";var s=document.createElement("script");s.src="https://www.googletagmanager.com/gtag/js?id="+id;s.async=true;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments)}window.gtag=gtag;gtag("js",new Date());gtag("config",id)},[]);
  useEffect(function(){if(window.gtag)window.gtag("event","page_view",{page_title:pg,page_path:"/"+pg})},[pg]);
  useEffect(function(){document.title="Sevyn8 | Cortex — the industry-agnostic edge AI platform";[{name:"description",content:"Cortex is Sevyn8's industry-agnostic edge AI platform. Hardware-agnostic. Under 100ms edge inference, fully offline. Retail, cold chain, logistics, smart home, reinsurance — one platform, every industry."},{name:"keywords",content:"Cortex, Sevyn8, edge AI, AI platform, edge computing, SoC agnostic, HAL, on-device AI, computer vision, IoT, fleet intelligence, OEM licensing, cold chain, food safety, smart home, retail analytics, reinsurance, MCP"},{property:"og:title",content:"Sevyn8 | Cortex — one edge AI platform, every industry"},{property:"og:description",content:"Cortex: the industry-agnostic edge AI platform. Hardware-agnostic. Compounding across every deployment."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"robots",content:"index, follow"}].forEach(function(m){var el=document.createElement("meta");if(m.name)el.name=m.name;if(m.property)el.setAttribute("property",m.property);el.content=m.content;document.head.appendChild(el)})},[]);
  var go=useCallback(function(p){p2[1](p);window.scrollTo({top:0,behavior:"instant"})},[]);
  var C;if(pg==="home")C=<Home go={go}/>;else if(pg==="platform")C=<PlatPg go={go}/>;else if(pg==="cortex2")C=<CortexPage go={go}/>;else if(pg==="home2")C=<Home2Page go={go}/>;else if(pg==="hardware")C=<HardwarePage go={go}/>;else if(pg==="solutions")C=<SolutionsLanding go={go}/>;else if(pg.indexOf("soldet-")===0){var sd=SOLS[pg.slice(7)];C=sd?<SolutionsDetail sol={sd} go={go}/>:<SolutionsLanding go={go}/>;}else if(pg==="box")C=<BoxPg go={go}/>;else if(pg==="partners")C=<PartPg go={go}/>;else if(pg==="about")C=<AboutPg />;else if(pg==="contact")C=<ContactPg />;else if(pg.indexOf("sol-")===0){var s=SOL.find(function(x){return "sol-"+x.id===pg});C=s?<SolPg s={s} go={go}/>:<Home go={go}/>}else C=<Home go={go}/>;
  return <div style={{minHeight:"100vh",background:BG,fontFamily:"'IBM Plex Sans',system-ui,sans-serif",WebkitFontSmoothing:"antialiased",color:TX,fontSize:16,lineHeight:1.65}}>
    <style dangerouslySetInnerHTML={{__html:"@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');*{margin:0;padding:0;box-sizing:border-box}::selection{background:#414BF5;color:#0B0D14}html{scroll-behavior:smooth}img,canvas,svg{max-width:100%}@media (max-width:768px){[style*=\"1fr 1fr\"]{grid-template-columns:1fr !important}[style*=\"repeat(3,\"],[style*=\"repeat(3, \"]{grid-template-columns:1fr !important}[style*=\"repeat(4,\"],[style*=\"repeat(4, \"]{grid-template-columns:repeat(2,1fr) !important}main section[style*=\"100vh\"]{min-height:auto !important;padding:84px 20px 32px !important}main section[style*=\"100vh\"] > div{gap:32px !important}main section[style*=\"100vh\"] > div > div[style*=\"height:480\"],main section[style*=\"100vh\"] > div > div[style*=\"height: 480\"]{height:320px !important}section > div{padding-left:20px !important;padding-right:20px !important;padding-top:48px !important;padding-bottom:48px !important}h1{font-size:32px !important;line-height:1.1 !important}h2{font-size:24px !important;line-height:1.2 !important}h3{font-size:18px !important}nav > div{padding:0 14px !important}nav > div > div:last-child{gap:8px !important}nav > div > div:last-child > span,nav > div > div:last-child > div{display:none !important}nav > div > div:last-child > button{display:inline-flex !important;padding:7px 14px !important;font-size:12px !important}nav button.nav-burger{display:inline-flex !important;width:40px !important;height:40px !important;padding:0 !important}}@media (max-width:480px){h1{font-size:28px !important}h2{font-size:22px !important}main section[style*=\"100vh\"] > div > div[style*=\"height:480\"],main section[style*=\"100vh\"] > div > div[style*=\"height: 480\"]{height:260px !important}}.cx-grid2{display:grid;grid-template-columns:1.05fr .95fr;gap:52px;align-items:center}.rw-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}@keyframes scdinf{0%,100%{opacity:.5}50%{opacity:1}}@keyframes feedin{from{opacity:0}to{opacity:1}}@keyframes livedot{0%,100%{opacity:.4}50%{opacity:1}}@media (max-width:880px){.cx-grid2{grid-template-columns:1fr;gap:34px}.cx-hero-anim{height:340px !important}.rw-grid{grid-template-columns:repeat(2,1fr)}}@media (max-width:520px){.rw-grid{grid-template-columns:1fr}}.hm-spine{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.wk-tabs{display:flex;gap:14px;margin-bottom:28px}.wk-stage{display:grid;grid-template-columns:1.35fr 1fr;gap:40px;align-items:center}@keyframes wkgrow{from{width:0}to{width:100%}}@keyframes wkscene{from{opacity:0;transform:scale(.99)}to{opacity:1;transform:none}}@keyframes wkfade{from{opacity:0}to{opacity:1}}@keyframes wkfovp{0%,100%{opacity:.3}50%{opacity:.6}}.wkfov{animation:wkfovp 2s ease-in-out infinite}.ee-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.ee-env-row{display:grid;grid-template-columns:repeat(9,1fr);gap:12px}.sl-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.sl-2col{display:grid;grid-template-columns:1fr 1fr;gap:18px}.sl-ep{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.sl-3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.sl-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}@media (max-width:880px){.hm-spine{grid-template-columns:1fr}.wk-stage{grid-template-columns:1fr;gap:28px}.wk-tabs{gap:8px}.ee-cards{grid-template-columns:repeat(2,1fr)}.ee-env-row{grid-template-columns:repeat(5,1fr)}}@media (max-width:820px){.sl-stats{grid-template-columns:repeat(2,1fr)}.sl-2col{grid-template-columns:1fr}.sl-ep{grid-template-columns:repeat(2,1fr)}.sl-3{grid-template-columns:1fr}.sl-cards{grid-template-columns:1fr}}@media (max-width:560px){.ee-cards{grid-template-columns:1fr}.ee-env-row{grid-template-columns:repeat(3,1fr)}}"}} />
    <Nav pg={pg} go={go}/><main key={pg}>{C}</main><Ft />
  </div>;
}
