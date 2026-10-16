// Add confirmed events to this list. Dates use YYYY-MM-DD.
const spellFestEvents = [
  {date:'2027-01-10', title:'Port City Spell Fest', time:'9:00 AM – 5:00 PM', location:'Wilmington, North Carolina', description:'Trading card games, vendors, collecting, and community. Check the event listing for current venue and participation details.', links:[{label:'Discord event',url:'https://discord.com/events/1560103188777140286/1560104508724482068'},{label:'TopDeck listing',url:'https://topdeck.gg/convention/sellfest-of-wilmington-nc'}]}
];
(() => {
 const grid=document.getElementById('calendar-grid');if(!grid)return;
 const title=document.getElementById('cal-month'),detail=document.getElementById('event-content');
 let year=2027,month=0;
 const pad=n=>String(n).padStart(2,'0');
 function showEvent(e){detail.replaceChildren();const h=document.createElement('h3');h.textContent=e.title;detail.append(h);for(const line of [e.date,e.time,e.location,e.description]){const p=document.createElement('p');p.textContent=line;detail.append(p)}const wrap=document.createElement('div');wrap.className='event-actions';for(const l of e.links||[]){const a=document.createElement('a');a.className='btn btn-outline';a.href=l.url;a.textContent=l.label+' ↗';a.target='_blank';a.rel='noopener noreferrer';wrap.append(a)}detail.append(wrap)}
 function render(){title.textContent=new Intl.DateTimeFormat('en-US',{month:'long',year:'numeric'}).format(new Date(year,month,1));grid.replaceChildren();const first=new Date(year,month,1).getDay(),days=new Date(year,month+1,0).getDate();for(let i=0;i<first;i++){const b=document.createElement('span');b.className='cal-empty';b.setAttribute('aria-hidden','true');grid.append(b)}for(let day=1;day<=days;day++){const date=`${year}-${pad(month+1)}-${pad(day)}`;const ev=spellFestEvents.find(e=>e.date===date);const el=document.createElement(ev?'button':'span');el.className='cal-day'+(ev?' has-event':'');const num=document.createElement('strong');num.textContent=day;el.append(num);if(ev){el.type='button';el.setAttribute('aria-label',`${date}: ${ev.title}`);const label=document.createElement('small');label.textContent=ev.title;el.append(label);el.addEventListener('click',()=>showEvent(ev))}grid.append(el)}}
 document.getElementById('cal-prev').addEventListener('click',()=>{month--;if(month<0){month=11;year--}render()});document.getElementById('cal-next').addEventListener('click',()=>{month++;if(month>11){month=0;year++}render()});render();showEvent(spellFestEvents[0]);
})();
