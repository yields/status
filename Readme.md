
# status

  User &quot;active&quot; / &quot;idle&quot; event emitter.

## Example

```js
var status = require('status');
status.watch();

status('idle', function(){
  console.log('idle!');
});

status('active', function(){
  console.log('active!');
});
```

## Installation

    $ component install yields/status

## API

### status.watch([timeout])

Start watching on `mousemove` and `keyup` the default `timeout` is 1 minute.

### status.unwatch()

Stop watching `mousemove` and `keyup`.

### status(event, fn)

Invoke `fn` on `event`.

## Todo

  * add tests.

## License

  MIT
