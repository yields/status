
/**
 * dependencies.
 */

var emitter = require('emitter')
  , event = require('event');

/**
 * timeoutid.
 */

var tid;

/**
 * export `status`.
 */

module.exports = status;

/**
 * register `fn` to be invoked on `e`.
 * 
 * example:
 * 
 *      status('active', function(){});
 *      status('idle', function(){});
 * 
 * @param {String} e
 * @param {Function} fn
 */

function status(e, fn){
  status.on(e, fn);
}

/**
 * onchange
 */

status.change = function(){
  status.idle && status.emit('active');
  status.idle = null;
  if (tid) clearTimeout(tid);
  tid = setTimeout(function(){
    status.idle = true;
    status.emit('idle');
  }, status.timeout);
};

/**
 * start watching.
 */

status.watch = function(timeout){
  event.bind(window, 'mousemove', status.change, false);
  event.bind(window, 'keyup', status.change, false);
  status.timeout = timeout || 6e4;
  tid = setTimeout(function(){
    status.idle = true;
    status.emit('idle');
  }, status.timeout);
};

/**
 * stop watching.
 */

status.unwatch = function(){
  event.unbind(window, 'mousemove', status.change);
  event.unbind(window, 'keyup', status.change);
  clearTimeout(tid);
};

/**
 * mixin emitter.
 */

emitter(status);
