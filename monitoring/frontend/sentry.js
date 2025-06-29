import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.REACT_APP_ENV || 'development',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

export default Sentry;