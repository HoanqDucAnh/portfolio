import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "w99ronz0em";
const VISITOR_ID_KEY = "clarity_visitor_id";

function generateVisitorId(): string {
  return "v_" + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

function getVisitorId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = generateVisitorId();
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

export function initClarity(): void {
  Clarity.init(CLARITY_PROJECT_ID);
  const visitorId = getVisitorId();
  if (visitorId) {
    Clarity.identify(visitorId);
  }
  if (typeof document !== "undefined" && document.referrer) {
    Clarity.setTag("referrer", document.referrer);
  }
}

export function trackPageView(pageName: string): void {
  Clarity.setTag("page", pageName);
}

export function trackEvent(name: string): void {
  Clarity.event(name);
}

export function setTag(key: string, value: string | string[]): void {
  Clarity.setTag(key, value);
}

export function upgradeSession(reason: string): void {
  Clarity.upgrade(reason);
}
