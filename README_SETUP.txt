SPELLFEST WEBSITE v2.0 — GitHub-authenticated content editor + audience signup

INSTALL
1. Back up your live GitHub repository (download a ZIP from GitHub).
2. Upload ALL files in this ZIP to the repository ROOT, including the hidden .pages.yml file and data/ folder. GitHub web uploader supports folders if you drag them in; otherwise use Upload files and select the directory files, or GitHub Desktop.
3. Preserve your existing logo.png, favicon.png, and any other images. The new media/ directory is for CMS uploads.
4. Verify pages: homepage, vendors.html, events.html, gallery.html. Verify both Formspree endpoints are unchanged.
5. Visit https://app.pagescms.org, sign in using your GitHub account, and install/authorize its GitHub App for ONLY the SpellFest repository. Choose main branch. The .pages.yml config creates editors for event details, table counts, calendar events, and gallery photos. This is a separate authenticated CMS website; it is NOT an unprotected /admin page. No custom OAuth secrets required.
6. In the CMS edit 'Event details and table inventory'. Set confirmed_tables to an integer 0–40 AND availability_verified to true ONLY after checking actual paid/approved reservations. Changes are public after GitHub Pages deploys.
7. In 'Calendar events', edit the array entries (date YYYY-MM-DD). In 'Photo gallery', upload images with descriptive alt text. Avoid uploading photos without publication rights/consent.
8. Submit a test newsletter signup and check the Formspree xkjokvgj dashboard. Email and SMS consents are separate; SMS requires a phone number in the browser. The form stores a timestamp and notice version, but client-provided values alone are not tamper-proof audit records. Formspree is not an SMS service or newsletter distributor.

SECURITY / COMPLIANCE
- CMS sign-in uses Pages CMS GitHub authorization; review the app permissions before granting access. Never put subscriber information in public JSON or GitHub.
- All data/*.json and media/ are PUBLIC website assets; only public event, inventory and gallery information belongs there.
- Do not send marketing texts until you have a compliant SMS provider with opt-out handling, proof of consent, sender identification, privacy policy and appropriate legal review. Do not use a prechecked SMS checkbox.
- The newsletter form does not by itself create a mailing list or handle unsubscribes; use an email marketing platform before campaigns.
- Price, capacity and date text not marked with data-* may remain hardcoded; update the source if you change the site-wide business model.
- Pages CMS hosted service is a third-party service; check its terms/pricing and availability before relying on it.
