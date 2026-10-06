declare namespace Cloudflare {
  interface Env {
    VAPI_API_KEY?: string;
    VAPI_PUBLIC_KEY?: string;
    VAPI_ASSISTANT_ID?: string;
    VAPI_PHONE_NUMBER_ID?: string;
    DEMO_ALLOWED_PHONES?: string;
    DB?: D1Database;
    BUCKET?: R2Bucket;
    TWILIO_ACCOUNT_SID?: string;
    TWILIO_AUTH_TOKEN?: string;
    TWILIO_WHATSAPP_FROM?: string;
  }
}
