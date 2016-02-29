'use strict';

// Setando o ambiente default de desenvolvimento.
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  // Registrando require do babel HOOK
  require('babel-core/register');
}

// Expor aplicação
exports = module.exports = require('./app');
