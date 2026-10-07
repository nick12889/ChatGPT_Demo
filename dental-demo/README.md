# NC AI Dental Demo

Review build for Aileen, the four service packages, patient booking flows, and the browser-local owner dashboard.

## Deploy as a Cloudflare Worker

Connect the `ChatGPT_Demo` GitHub repository in Cloudflare and select the `ncai-dental-demo` branch. Set the project root to `dental-demo`. Deploy with Wrangler using `wrangler.jsonc`; the Worker serves the app assets and exposes `/health` for a deployment check.

No API keys, paid AI credits, Twilio, Vapi, phone service, live calendar, CRM credentials, or secrets are required.

## Demo boundaries

- Appointment times are illustrative; no live clinic calendar is connected.
- Enquiries, callbacks, settings and bookings stay in the current browser.
- No email, SMS, call, CRM update, or real booking is sent.
- Urgent and after-hours paths are demonstrations and do not contact an on-call clinician.
- Do not enter real patient information.
