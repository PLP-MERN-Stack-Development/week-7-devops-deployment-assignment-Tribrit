const Sentry = require('@sentry/node');
const Tracing = require("@sentry/tracing");

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV || 'development',
  tracesSampleRate: 1.0,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express(),
  ],
});

module.exports = Sentry;