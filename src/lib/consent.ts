/**
 * Google Consent Mode v2 + GA4 helpers.
 *
 * AR/LATAM-first: default `granted` everywhere except EEA/UK (GDPR), where it
 * defaults to `denied` until the visitor accepts. The choice is persisted in
 * localStorage and re-applied before GA loads on the next visit.
 *
 * Analytics is fully OFF when NEXT_PUBLIC_GA_ID is empty (the local-dev default).
 */

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | undefined {
  if (typeof window === 'undefined') return undefined;
  return (window as unknown as { gtag?: GtagFn }).gtag;
}

/** GA4 Measurement ID (G-XXXXXXXXXX). Empty string disables analytics entirely. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

export const CONSENT_STORAGE_KEY = 'transordo-cookie-consent';

export type ConsentValue = 'granted' | 'denied';

// EEA + UK ISO codes where analytics/ads storage must default to denied.
const RESTRICTED_REGIONS = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU',
  'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES',
  'SE', 'IS', 'LI', 'NO', 'GB',
];

/**
 * Inline <head> script. Runs before GA loads to set Consent Mode defaults and
 * re-apply a stored choice. Dependency-free vanilla JS.
 */
export const CONSENT_DEFAULT_SCRIPT = `
(function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = window.gtag || gtag;
  gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',region:${JSON.stringify(
    RESTRICTED_REGIONS,
  )}});
  gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});
  gtag('set','ads_data_redaction',true);
  gtag('set','url_passthrough',true);
  try{
    var c = localStorage.getItem('${CONSENT_STORAGE_KEY}');
    if(c==='granted'||c==='denied'){
      gtag('consent','update',{ad_storage:c,ad_user_data:c,ad_personalization:c,analytics_storage:c});
    }
  }catch(e){}
})();
`;

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null;
  try {
    const c = localStorage.getItem(CONSENT_STORAGE_KEY);
    return c === 'granted' || c === 'denied' ? c : null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // ignore storage failures
  }
  getGtag()?.('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}

/** Fire a GA4 event. No-ops when analytics is disabled. */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  getGtag()?.('event', name, params);
}
