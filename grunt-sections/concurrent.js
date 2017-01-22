'use strict';

module.exports = function (grunt, options) {
  return {
    concurrent: {
        ts: ['ts:watchIfEnabled', 'watch']
    }
  };
};
