const TRAIL_STORAGE_KEY='sensoryTrailState';
const TRAIL_EXPIRY_MS=7*24*60*60*1000;
const defaultState = {screen:'welcome', stop:0, season:'', notes:{}, photos:{}, drawings:{}, largeText:false, contrast:false, date:new Date().toISOString().slice(0,10), returnToSummary:false, extraReflection:'', updatedAt:Date.now()};
let state = loadState();
const app = document.getElementById('app');

function loadState(){
 try{
   const raw=localStorage.getItem(TRAIL_STORAGE_KEY);
   if(!raw)return {...defaultState,updatedAt:Date.now()};
   const saved=JSON.parse(raw);
   if(saved.updatedAt && Date.now()-saved.updatedAt>TRAIL_EXPIRY_MS){localStorage.removeItem(TRAIL_STORAGE_KEY);return {...defaultState,updatedAt:Date.now()};}
   return {...defaultState,...saved};
 }catch{return {...defaultState,updatedAt:Date.now()}}
}
function save(){state.updatedAt=Date.now();localStorage.setItem(TRAIL_STORAGE_KEY,JSON.stringify(state));}
function showPrivacy(){alert("Your privacy\n\nYou do not need to provide your name, email address or create an account to use the Sensory Trail.\n\nAny notes, photos and drawings you add are stored in your browser on your device. They are not sent to or stored by Scotswood Garden.\n\nYour Sensory Trail PDF is created on your device for you to download and keep.\n\nYour saved trail information is automatically removed after 7 days of inactivity, and you can clear it at any time using Start a New Trail.\n\nPlease avoid including personal information in your notes or taking photographs of other visitors without their permission.\n\nThis website is hosted using GitHub Pages.');}
function setScreen(screen){stopSpeaking();state.screen=screen;save();render();window.scrollTo(0,0)}
function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function applyAccess(){document.documentElement.style.setProperty('--font-scale',state.largeText?'1.15':'1');document.body.classList.toggle('high-contrast',state.contrast)}
function topbar(){return `<div class="topbar"><button class="iconbtn" onclick="goBack()" aria-label="Go back">←</button><div class="brand-mini"><img src="scotswood-logo.png" alt=""><span>Scotswood Garden</span></div><div class="progress">Stop ${state.stop+1} of ${stops.length}</div><button class="iconbtn" onclick="setScreen('summary')" aria-label="Open my trail">☰</button></div>`}
function accessBar(){return `<div class="access"><button class="secondary" onclick="toggleLarge()">A+ Text</button><button class="secondary" onclick="toggleContrast()">◐ Contrast</button><button class="secondary listen-btn" onclick="toggleSpeech()" aria-pressed="false">🔊 Listen</button></div>`}

function render(){
 applyAccess();
 if(state.screen==='welcome') return renderWelcome();
 if(state.screen==='stop') return renderStop();
 if(state.screen==='mindful') return renderMindful();
 if(state.screen==='entry') return renderEntry();
 if(state.screen==='summary') return renderSummary();
}

function renderWelcome(){
 app.innerHTML=`<section class="screen"><div class="hero"><div class="welcome-brand"><img src="scotswood-logo.png" alt="Scotswood Garden"><div class="welcome-brand-name">Scotswood Garden</div></div><h1>Sensory Trail</h1><p>Take a little time to notice</p></div>
 <div class="card soft"><p>Follow the trail and use the prompts to explore the garden through your senses.</p><p>At each stop, you’ll find a few suggested activities. There is no need to do them all. They are simply invitations to <strong>slow down, look a little closer, listen, smell, touch and notice what is around you.</strong></p><p>You can make notes, take photos or draw as you go — or simply enjoy the experience. You can come back and add your thoughts at the end.</p><p>Slowing down and paying attention to our senses can help us feel more present and connected to the world around us.</p><button class="privacy-link" onclick="showPrivacy()">Privacy & your trail data</button></div>
 <div class="card"><h3>Activity key</h3><div class="key-grid"><span>👁️ <strong>LOOK</strong></span><span>👂 <strong>LISTEN</strong></span><span>👃 <strong>SMELL</strong></span><span>🤚 <strong>TOUCH & FEEL</strong></span><span>🧠 <strong>THINK & REMEMBER</strong></span></div></div>
 <div class="card"><label>Today's date</label><input type="text" value="${esc(state.date)}" onchange="state.date=this.value;save()"><p><strong>What season does it feel like today?</strong></p><div class="choices">${['Spring','Summer','Autumn','Winter'].map(x=>`<button class="choice ${state.season===x?'selected':''}" onclick="state.season='${x}';save();render()">${x}</button>`).join('')}</div></div>
 <button class="primary" onclick="state.stop=0;state.returnToSummary=false;setScreen('stop')">Start the trail →</button>${accessBar()}</section>`;
}

function renderSections(s){return s.sections.map(sec=>`<div class="activity-block"><h3>${sec.label}</h3><p>${sec.text}</p>${sec.chips?`<p class="chips">${sec.chips}</p>`:''}${sec.bullets?`<ul>${sec.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`:''}</div>`).join('')}

function renderStop(){const s=stops[state.stop];
 app.innerHTML=`<section class="screen">${topbar()}<div><div class="leafmark">${s.icon}</div><h2>${state.stop+1} · ${s.title}</h2><div class="kicker">${s.kicker}</div><p class="stop-intro">${s.intro}</p></div>
 <div class="card activity-card">${renderSections(s)}</div>
 <div class="card"><h3>Add to your journal</h3><div class="journal-prompts">${s.journal.map(j=>`<p>• ${j}</p>`).join('')}</div><div class="actions"><button class="action-btn" onclick="setScreen('entry')">✏️<span>Add a note</span></button><button class="action-btn" onclick="openPhotoPicker()">📷<span>Add a photo</span></button><button class="action-btn" onclick="setScreen('entry');setTimeout(setupCanvas,50)">🎨<span>Draw something</span></button></div><p class="small">You don't have to add anything — noticing is enough.</p></div>
 ${s.mindful?`<button class="secondary pause-btn" onclick="setScreen('mindful')">Take a one-minute pause</button>`:''}
 <div class="navrow"><button class="secondary" onclick="goBack()">← Back</button><button class="primary" onclick="nextStop()">${state.returnToSummary?'Return to My Trail':state.stop===stops.length-1?'Finish trail':'Next stop'} →</button></div>${accessBar()}<input id="photoPicker" class="hidden" type="file" accept="image/*" capture="environment" onchange="handlePhoto(event)"></section>`}

function renderMindful(){app.innerHTML=`<section class="screen mindful"><div class="card"><div class="leafmark">🍃</div><h2>Take a moment</h2><p>Put your phone down for one minute.</p><p><strong>Look around. Listen. See what you notice.</strong></p></div><button class="primary" onclick="setScreen('stop')">I've noticed something →</button></section>`}

function renderEntry(){const s=stops[state.stop], note=state.notes[state.stop]||'', photo=state.photos[state.stop]||'';
 app.innerHTML=`<section class="screen">${topbar()}<h2>${state.stop+1} · My journal</h2><div class="card"><div class="journal-prompts">${s.journal.map(j=>`<p>• ${j}</p>`).join('')}</div><label for="note">My note (optional)</label><textarea id="note" placeholder="${esc(s.noteHint)}" oninput="state.notes[state.stop]=this.value;save()">${esc(note)}</textarea></div>
 <div class="card"><label>My photo (optional)</label><p class="small">🔒 Your photo stays in this browser and is used only for your trail journal. Please avoid photographing other visitors without their permission.</p>${photo?`<img class="photo-preview" src="${photo}" alt="Your uploaded trail photo"><button class="secondary" onclick="deletePhoto()">Remove photo</button>`:`<button class="secondary" onclick="openPhotoPicker()">📷 Add a photo</button>`}<input id="photoPicker" class="hidden" type="file" accept="image/*" capture="environment" onchange="handlePhoto(event)"></div>
 <div class="card"><label>My drawing (optional)</label><div class="canvas-wrap"><canvas id="drawCanvas" width="760" height="480" aria-label="Drawing canvas"></canvas><div class="canvas-tools"><button class="secondary" onclick="setupCanvas('pen')">Pen</button><button class="secondary" onclick="setupCanvas('erase')">Erase</button><button class="secondary" onclick="clearCanvas()">Clear</button></div></div></div>
 <div class="navrow"><button class="secondary" onclick="setScreen('stop')">← Back</button><button class="primary" onclick="nextStop()">${state.returnToSummary?'Return to My Trail':state.stop===stops.length-1?'Finish trail':'Next stop'} →</button></div></section>`; setTimeout(setupCanvas,20)}

function renderSummary(){
 const items=stops.map((s,i)=>{const p=state.photos[i], n=state.notes[i], d=state.drawings[i]; return `<div class="summary-item"><div>${p?`<img src="${p}" alt="Trail photo for ${s.title}">`:`<div class="placeholder">${s.icon}</div>`}</div><div class="summary-copy"><strong>${i+1} · ${s.title}</strong><p>${n?esc(n):'<span class="small">Nothing recorded yet — that’s completely fine.</span>'}</p>${d?'<span class="small">🎨 Drawing added</span>':''}<button class="edit-btn" onclick="editStop(${i})">${n||p||d?'Edit / add to this stop':'＋ Add something'}</button></div></div>`}).join('');
 app.innerHTML=`<section class="screen"><div class="topbar"><button class="iconbtn" onclick="state.returnToSummary=false;setScreen('stop')" aria-label="Back to trail">←</button><div class="progress">My Sensory Trail</div><button class="iconbtn" onclick="resetTrail()" aria-label="Start a new trail">↻</button></div>
 <div class="hero summary-hero"><div class="welcome-brand summary-brand"><img src="scotswood-logo.png" alt="Scotswood Garden"><div class="welcome-brand-name">Scotswood Garden</div></div><h1>My Sensory Trail</h1><p>${esc(state.date)} ${state.season?'· '+state.season:''}</p></div>
 <div class="card"><p><strong>Take a look back at what you noticed.</strong> You can return to any stop to add or change a note, photo or drawing before downloading your journal.</p>${items}</div>
 <div class="card"><h3>Anything else you want to remember?</h3><textarea placeholder="A final thought, feeling or memory from your visit…" oninput="state.extraReflection=this.value;save()">${esc(state.extraReflection||'')}</textarea></div>
 <div class="card soft"><h2 class="small-heading">Come Back & Notice Again</h2><p>The garden is always changing. Spring blossom becomes summer fruit. Flowers appear and disappear. Leaves change colour and fall. Birds and insects come and go.</p><p>Even the <strong>light, temperature, sounds and smells</strong> change.</p><p>Come back in another season — or even at another time of day — and try the trail again.</p><p><strong>What will you notice next time?</strong></p><p>Keep your Sensory Trail PDFs and, over time, they can become your own mini nature journal of the garden through the seasons.</p></div>
 <button class="primary" onclick="downloadPDF()">⬇ Download my trail as PDF</button><button class="secondary" onclick="resetTrail()">Start a new trail</button>${accessBar()}</section>`
}

function editStop(i){stopSpeaking();saveCanvas();state.stop=i;state.returnToSummary=true;state.screen='stop';save();render();window.scrollTo(0,0)}
function nextStop(){stopSpeaking();saveCanvas(); if(state.returnToSummary){state.returnToSummary=false;return setScreen('summary')} if(state.stop<stops.length-1){state.stop++;state.screen='stop';save();render();window.scrollTo(0,0)}else setScreen('summary')}
function goBack(){stopSpeaking();if(state.screen==='entry'||state.screen==='mindful')return setScreen('stop');if(state.screen==='stop'&&state.returnToSummary){state.returnToSummary=false;return setScreen('summary')}if(state.screen==='stop'&&state.stop>0){state.stop--;save();render();window.scrollTo(0,0)}else setScreen('welcome')}
function toggleLarge(){state.largeText=!state.largeText;save();render()}
function toggleContrast(){state.contrast=!state.contrast;save();render()}
let currentUtterance=null;
function updateSpeechButtons(speaking){document.querySelectorAll('.listen-btn').forEach(btn=>{btn.textContent=speaking?'■ Stop reading':'🔊 Listen';btn.classList.toggle('speaking',speaking);btn.setAttribute('aria-pressed',speaking?'true':'false');btn.setAttribute('aria-label',speaking?'Stop reading aloud':'Read this page aloud')})}
function stopSpeaking(){if('speechSynthesis' in window){speechSynthesis.cancel()}currentUtterance=null;updateSpeechButtons(false)}
function toggleSpeech(){
 if(!('speechSynthesis' in window))return alert('Read aloud is not supported in this browser.');
 if(speechSynthesis.speaking || currentUtterance){stopSpeaking();return}
 const clone=app.cloneNode(true);
 clone.querySelectorAll('.access,.iconbtn,.navrow,.actions,.edit-btn,.privacy-link,input,textarea,canvas,.canvas-tools,button').forEach(el=>el.remove());
 const text=clone.innerText.replace(/\s+/g,' ').trim();
 if(!text)return;
 currentUtterance=new SpeechSynthesisUtterance(text);
 currentUtterance.onstart=()=>updateSpeechButtons(true);
 currentUtterance.onend=()=>{currentUtterance=null;updateSpeechButtons(false)};
 currentUtterance.onerror=()=>{currentUtterance=null;updateSpeechButtons(false)};
 speechSynthesis.cancel();
 speechSynthesis.speak(currentUtterance);
 updateSpeechButtons(true);
}
function speakCurrent(){toggleSpeech()}
function openPhotoPicker(){document.getElementById('photoPicker')?.click()}
function handlePhoto(e){const file=e.target.files[0];if(!file)return; const img=new Image(), r=new FileReader(); r.onload=ev=>img.src=ev.target.result; img.onload=()=>{const max=1200, scale=Math.min(1,max/Math.max(img.width,img.height)); const c=document.createElement('canvas');c.width=Math.max(1,Math.round(img.width*scale));c.height=Math.max(1,Math.round(img.height*scale));c.getContext('2d').drawImage(img,0,0,c.width,c.height);state.photos[state.stop]=c.toDataURL('image/jpeg',.76);save();setScreen('entry')};r.readAsDataURL(file)}
function deletePhoto(){delete state.photos[state.stop];save();renderEntry()}
let drawMode='pen', drawing=false, ctx=null, canvas=null;
function setupCanvas(mode){if(mode)drawMode=mode; canvas=document.getElementById('drawCanvas');if(!canvas)return;ctx=canvas.getContext('2d');ctx.lineWidth=5;ctx.lineCap='round';ctx.strokeStyle='#47664b'; const saved=state.drawings[state.stop];if(saved){const img=new Image();img.onload=()=>ctx.drawImage(img,0,0,canvas.width,canvas.height);img.src=saved} canvas.onpointerdown=e=>{drawing=true;canvas.setPointerCapture(e.pointerId);ctx.beginPath();let p=pos(e);ctx.moveTo(p.x,p.y)};canvas.onpointermove=e=>{if(!drawing)return;let p=pos(e);ctx.globalCompositeOperation=drawMode==='erase'?'destination-out':'source-over';ctx.strokeStyle='#47664b';ctx.lineTo(p.x,p.y);ctx.stroke()};canvas.onpointerup=()=>{drawing=false;saveCanvas()};}
function pos(e){const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*canvas.width/r.width,y:(e.clientY-r.top)*canvas.height/r.height}}
function clearCanvas(){if(!ctx)return;ctx.clearRect(0,0,canvas.width,canvas.height);delete state.drawings[state.stop];save()}
function saveCanvas(){const c=document.getElementById('drawCanvas');if(c){state.drawings[state.stop]=c.toDataURL('image/png');save()}}
function resetTrail(){stopSpeaking();if(confirm('Clear this trail and start again? This removes your notes, photos and drawings from this browser. Download your PDF first if you want to keep them.')){localStorage.removeItem(TRAIL_STORAGE_KEY);state={...defaultState,notes:{},photos:{},drawings:{},date:new Date().toISOString().slice(0,10),returnToSummary:false,extraReflection:'',updatedAt:Date.now()};render();window.scrollTo(0,0)}}

async function downloadPDF(){
 const {jsPDF}=window.jspdf; const doc=new jsPDF({unit:'mm',format:'a4'}); let y=18;
 function ensure(space=20){if(y+space>280){doc.addPage();y=18}}
 doc.setFont('helvetica','bold');doc.setFontSize(20);doc.text('My Sensory Trail',15,y);y+=9;doc.setFont('helvetica','normal');doc.setFontSize(11);doc.text(`Scotswood Garden · ${state.date}${state.season?' · '+state.season:''}`,15,y);y+=10;
 for(let i=0;i<stops.length;i++){
   ensure(25); doc.setFont('helvetica','bold');doc.setFontSize(13);doc.text(`${i+1}. ${stops[i].title}`,15,y);y+=7;
   const note=state.notes[i]; if(note){doc.setFont('helvetica','normal');doc.setFontSize(10.5); const lines=doc.splitTextToSize(note,175);ensure(lines.length*5+5);doc.text(lines,15,y);y+=lines.length*5+3}else{doc.setFont('helvetica','italic');doc.setFontSize(9.5);doc.text('No written note added.',15,y);y+=6}
   const photo=state.photos[i], drawing=state.drawings[i];
   if(photo||drawing){ensure(48); let x=15; if(photo){try{doc.addImage(photo,'JPEG',x,y,72,45);x=93}catch(e){}} if(drawing){try{doc.addImage(drawing,'PNG',x,y,72,45)}catch(e){}} y+=50}
   y+=3;
 }
 if(state.extraReflection){ensure(30);doc.setFont('helvetica','bold');doc.setFontSize(13);doc.text('Anything else I want to remember',15,y);y+=7;doc.setFont('helvetica','normal');doc.setFontSize(10.5);const lines=doc.splitTextToSize(state.extraReflection,175);doc.text(lines,15,y);y+=lines.length*5+5}
 ensure(35);doc.setFont('helvetica','bold');doc.setFontSize(14);doc.text('Come Back & Notice Again',15,y);y+=8;doc.setFont('helvetica','normal');doc.setFontSize(10);const ending='The garden is always changing. Come back in another season — or even at another time of day — and see what you notice next time.';const lines=doc.splitTextToSize(ending,175);doc.text(lines,15,y);
 doc.save(`sensory-trail-${state.date}.pdf`);
}

render();
