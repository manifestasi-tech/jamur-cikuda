// Google Analytics Event Tracking Utilities

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

/**
 * Track custom events to Google Analytics
 */
export const trackEvent = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Track CTA button clicks
 * @param buttonName - Name/label of the button (e.g., "Pesan Sekarang", "Hubungi Kami")
 * @param location - Where the button is located (e.g., "hero", "footer", "product-card")
 */
export const trackCTAClick = (buttonName: string, location?: string) => {
  trackEvent({
    action: "cta_click",
    category: "CTA",
    label: location ? `${buttonName} - ${location}` : buttonName,
  });
};

/**
 * Track product-related events
 */
export const trackProductEvent = {
  view: (productName: string, productId?: string) => {
    trackEvent({
      action: "view_item",
      category: "Product",
      label: productId ? `${productName} (${productId})` : productName,
    });
  },
  addToCart: (productName: string, quantity: number = 1) => {
    trackEvent({
      action: "add_to_cart",
      category: "Product",
      label: productName,
      value: quantity,
    });
  },
  removeFromCart: (productName: string) => {
    trackEvent({
      action: "remove_from_cart",
      category: "Product",
      label: productName,
    });
  },
};

/**
 * Track navigation/link clicks
 */
export const trackNavClick = (linkName: string, destination?: string) => {
  trackEvent({
    action: "navigation_click",
    category: "Navigation",
    label: destination ? `${linkName} -> ${destination}` : linkName,
  });
};

/**
 * Track form submissions
 */
export const trackFormSubmit = (formName: string, success: boolean = true) => {
  trackEvent({
    action: success ? "form_submit_success" : "form_submit_error",
    category: "Form",
    label: formName,
  });
};

/**
 * Track outbound link clicks (WhatsApp, social media, etc.)
 */
export const trackOutboundClick = (platform: string, url?: string) => {
  trackEvent({
    action: "outbound_click",
    category: "Outbound",
    label: url ? `${platform}: ${url}` : platform,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent({
    action: "scroll_depth",
    category: "Engagement",
    label: `${percentage}%`,
    value: percentage,
  });
};
