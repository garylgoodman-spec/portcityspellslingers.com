(() => {
  const read = async (path) => {const r=await fetch(path,{cache:'no-store'});if(!r.ok)throw Error('Unable to load '+path);return r.json()};
  window.SpellFestData={read};
  document.addEventListener('DOMContentLoaded',async()=>{
    try {const d=await read('data/site.json');
      const text=(selector,value)=>document.querySelectorAll(selector).forEach(el=>{el.textContent=value});
      const prettyDate=(()=>{const [y,m,day]=(d.event_date||'').split('-').map(Number);return y&&m&&day?new Date(y,m-1,day).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}):''})();
      if(prettyDate)text('[data-date]',prettyDate);
      if(d.event_time)text('[data-time]',d.event_time);
      if(d.venue)text('[data-venue]',d.venue);
      if(d.address)text('[data-address]',d.address);
      if(Number.isFinite(d.vendor_price))text('[data-vendor-price]','$'+d.vendor_price);
      if(Number.isInteger(d.total_tables))text('[data-table-capacity]',String(d.total_tables));
      if(Number.isFinite(d.admission_price))text('[data-admission-price]','$'+d.admission_price);
    }catch(err){console.warn('Site details could not be refreshed:',err)}
  });
  document.addEventListener('submit',e=>{
    const form=e.target;if(!form.matches('[data-newsletter-v2]'))return;
    const email=form.querySelector('[name="email_consent"]')?.checked;
    const sms=form.querySelector('[name="sms_consent"]')?.checked;
    const phone=form.querySelector('[name="phone"]')?.value.trim();
    if(!email&&!sms){e.preventDefault();alert('Please select email or text updates to continue.');return}
    if(sms&&!phone){e.preventDefault();alert('Enter a mobile phone number to request text updates.');return}
    // Consent timestamp and exact notice version retained in submission.
    for(const [name,value] of Object.entries({consent_timestamp:new Date().toISOString(),consent_notice_version:'v2.0-2026-10'})){
      let hidden=form.querySelector('[name="'+name+'"]');if(!hidden){hidden=document.createElement('input');hidden.type='hidden';hidden.name=name;form.append(hidden)}hidden.value=value;
    }
  });
})();
