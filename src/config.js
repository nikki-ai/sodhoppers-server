'use strict';

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL:
    process.env.DATABASE_URL || 'postgresql://sodhoppers_admin@localhost/shony',
  JWT_SECRET: process.env.JWT_SECRET || 'fake secret',
  JWT_EXPIRY: '1h'
};
