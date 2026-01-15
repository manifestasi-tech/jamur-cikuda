"use client";

import { useCallback } from "react";
import {
  trackCTAClick,
  trackProductEvent,
  trackNavClick,
  trackFormSubmit,
  trackOutboundClick,
  trackEvent,
} from "./gtag";

/**
 * Hook for easy analytics tracking in components
 *
 * @example
 * const { trackCTA, trackProduct } = useAnalytics();
 *
 * <Button onClick={() => {
 *   trackCTA('Pesan Sekarang', 'hero-section');
 *   // ... rest of click handler
 * }}>
 *   Pesan Sekarang
 * </Button>
 */
export function useAnalytics() {
  const trackCTA = useCallback((buttonName: string, location?: string) => {
    trackCTAClick(buttonName, location);
  }, []);

  const trackProduct = {
    view: useCallback((productName: string, productId?: string) => {
      trackProductEvent.view(productName, productId);
    }, []),
    addToCart: useCallback((productName: string, quantity?: number) => {
      trackProductEvent.addToCart(productName, quantity);
    }, []),
    removeFromCart: useCallback((productName: string) => {
      trackProductEvent.removeFromCart(productName);
    }, []),
  };

  const trackNav = useCallback((linkName: string, destination?: string) => {
    trackNavClick(linkName, destination);
  }, []);

  const trackForm = useCallback((formName: string, success?: boolean) => {
    trackFormSubmit(formName, success);
  }, []);

  const trackOutbound = useCallback((platform: string, url?: string) => {
    trackOutboundClick(platform, url);
  }, []);

  const trackCustom = useCallback(
    (action: string, category: string, label?: string, value?: number) => {
      trackEvent({ action, category, label, value });
    },
    []
  );

  return {
    trackCTA,
    trackProduct,
    trackNav,
    trackForm,
    trackOutbound,
    trackCustom,
  };
}
