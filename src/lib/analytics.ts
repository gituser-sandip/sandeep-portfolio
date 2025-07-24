// Analytics tracking system
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;

  // Load Google Analytics script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  window.gtag = window.gtag || function() {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined') return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });

  // Store in localStorage for dashboard
  storeAnalyticsEvent('page_view', { url, timestamp: Date.now() });
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window === 'undefined') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });

  // Store in localStorage for dashboard
  storeAnalyticsEvent('custom_event', {
    action,
    category,
    label,
    value,
    timestamp: Date.now()
  });
};

// Track user interactions
export const trackInteraction = (element: string, action: string) => {
  trackEvent(action, 'user_interaction', element);
};

// Track contact form submissions
export const trackContactForm = (success: boolean) => {
  trackEvent('form_submission', 'contact', success ? 'success' : 'error');
};

// Track section views (for scroll tracking)
export const trackSectionView = (section: string) => {
  trackEvent('section_view', 'navigation', section);
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  trackEvent('button_click', 'engagement', buttonName);
};

// Track download events
export const trackDownload = (fileName: string) => {
  trackEvent('download', 'file', fileName);
};

// Store analytics events locally for admin dashboard
const storeAnalyticsEvent = (type: string, data: any) => {
  if (typeof window === 'undefined') return;

  try {
    const events = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
    events.push({ type, data, timestamp: Date.now() });

    // Keep only last 1000 events
    if (events.length > 1000) {
      events.splice(0, events.length - 1000);
    }

    localStorage.setItem('portfolio_analytics', JSON.stringify(events));
  } catch (error) {
    console.error('Failed to store analytics event:', error);
  }
};

// Get analytics data for dashboard
export const getAnalyticsData = () => {
  if (typeof window === 'undefined') return [];

  try {
    return JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
  } catch (error) {
    console.error('Failed to get analytics data:', error);
    return [];
  }
};

// Get analytics summary
export const getAnalyticsSummary = () => {
  const events = getAnalyticsData();
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;
  const oneMonth = 30 * oneDay;

  const todayEvents = events.filter((e: any) => now - e.timestamp < oneDay);
  const weekEvents = events.filter((e: any) => now - e.timestamp < oneWeek);
  const monthEvents = events.filter((e: any) => now - e.timestamp < oneMonth);

  const pageViews = events.filter((e: any) => e.type === 'page_view');
  const interactions = events.filter((e: any) => e.type === 'custom_event');

  return {
    total: {
      pageViews: pageViews.length,
      interactions: interactions.length,
      events: events.length
    },
    today: {
      pageViews: todayEvents.filter((e: any) => e.type === 'page_view').length,
      interactions: todayEvents.filter((e: any) => e.type === 'custom_event').length,
      events: todayEvents.length
    },
    week: {
      pageViews: weekEvents.filter((e: any) => e.type === 'page_view').length,
      interactions: weekEvents.filter((e: any) => e.type === 'custom_event').length,
      events: weekEvents.length
    },
    month: {
      pageViews: monthEvents.filter((e: any) => e.type === 'page_view').length,
      interactions: monthEvents.filter((e: any) => e.type === 'custom_event').length,
      events: monthEvents.length
    }
  };
};

// Clear analytics data
export const clearAnalyticsData = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('portfolio_analytics');
};
