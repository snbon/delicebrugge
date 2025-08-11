// Language configuration
export const SUPPORTED_LANGUAGES = ['en', 'nl', 'fr', 'de', 'es'];
export const DEFAULT_LANGUAGE = 'en';

// Helper function to get language from URL path
export function getLanguageFromPath(pathname) {
  const pathSegments = pathname.split('/').filter(Boolean);
  if (pathSegments.length > 0 && SUPPORTED_LANGUAGES.includes(pathSegments[0])) {
    return pathSegments[0];
  }
  return DEFAULT_LANGUAGE;
}

// Helper function to get path without language prefix
export function getPathWithoutLanguage(pathname) {
  const pathSegments = pathname.split('/').filter(Boolean);
  if (pathSegments.length > 0 && SUPPORTED_LANGUAGES.includes(pathSegments[0])) {
    return '/' + pathSegments.slice(1).join('/');
  }
  return pathname;
}

// Helper function to build localized URL
export function buildLocalizedUrl(path, language) {
  if (language === DEFAULT_LANGUAGE) {
    return path;
  }
  return `/${language}${path}`;
}

// Helper function to check if a path is a localized route
export function isLocalizedRoute(pathname) {
  const pathSegments = pathname.split('/').filter(Boolean);
  return pathSegments.length > 0 && SUPPORTED_LANGUAGES.includes(pathSegments[0]);
}
