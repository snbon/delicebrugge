import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { getLanguageFromPath, buildLocalizedUrl } from '../utils/languageUtils';

export default function NotFoundPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLanguageFromPath(location.pathname);
  const homeUrl = buildLocalizedUrl('/', lang);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-cream">
      <h1 className="text-6xl font-bold text-brand mb-4">404</h1>
      <p className="text-2xl font-semibold text-burgundy mb-2">
        {t('common.notFound.heading')}
      </p>
      <p className="text-neutral-600 mb-8">{t('common.notFound.body')}</p>
      <Link to={homeUrl} className="btn-primary">
        {t('common.notFound.cta')}
      </Link>
    </div>
  );
}
