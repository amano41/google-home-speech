# Google Home Speech

## npm

Install `nodejs` and `npm`.

```
$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
$ sudo apt install -y nodejs
```


## firebase

Install `firebase`.

```
$ npm install firebase
```


## google-home-notifier

Install `google-home-notifier`.

```
$ npm install google-home-notifier
```

Fix `package.json`.

```
$ vi node_modules/google-home-notifier/package.json
$ diff
google-tts-api: "^0.0.4"
```

Update `google-tts-api`.

```
$ npm install google-tts-api
```

Modify `google-home-notifier.js` not to use mDNS.
You don't have to install `libnss-mdns` and `libavahi-compat-libdnssd-dev` packages.

```
$ vi node_modules/google-home-notifier/google-home-notifier.js
$ diff
// var mdns = require('mdns');
// var browser = mdns.createBrowser(mdns.tcp('googlecast'));
```


## config.json

```
{
  "firebase": {
    "apiKey": "xxxxxx",
    "authDomain": "xxxxxx.firebaseapp.com",
    "databaseURL": "https://xxxxxx.firebaseio.com"
  },
  "path": "xxxxxx",
  "key": "xxxxxx",
  "ip": "192.168.xx.xx",
  "device": "Google Home",
  "language": "ja",
  "email": "xxxxxx@xxxxxx",
  "password": "xxxxxx"
}
```
