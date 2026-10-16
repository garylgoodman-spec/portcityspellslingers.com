PORT CITY SPELL FEST WEBSITE v1.4 — VENDOR AVAILABILITY / GALLERY / NEWSLETTER

UPLOAD to GitHub Pages repository root:
REPLACE: index.html, vendors.html, events.html, style.css
ADD: gallery.html, gallery.js, availability.js
UNCHANGED: events.js, script.js, logo.png, favicon.png, other images

FEATURES:
1) Vendor availability on vendors.html. To publish a verified count, edit availability.js:
   const confirmedBookedTables = null;
   Change null to the number of confirmed allocated tables, e.g. 12. The site will then show 28 of 40 remaining.
   Leave null until you have a reliable count. This is NOT a live booking system.
   Vendor requests still go to Formspree https://formspree.io/f/xrperldy.
2) Photo gallery at gallery.html. Initially shows a Coming Soon message.
   Upload approved .jpg/.png images to the repository root, then edit gallery.js and add entries:
   {src: 'my-photo.jpg', alt: 'Description of photo', caption: 'Photo caption'},
   Ensure you have permission to publish photographs, especially of minors.
3) Newsletter subscription forms on Home, Events, Vendor, and Gallery pages.
   Endpoint: https://formspree.io/f/xkjokvgj
   Collects email + required explicit consent. Submissions go to Formspree; it does NOT send mass emails automatically.
   For actual newsletters, use an opt-in email marketing platform and provide an unsubscribe method.

After publishing, hard refresh with Ctrl+F5. Test newsletter with your own email and verify it reaches Formspree.
