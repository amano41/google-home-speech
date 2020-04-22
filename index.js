const firebase = require("firebase");
const googlehome = require("google-home-notifier");
const config = require("./config.json");


const watch = () => {

  const db = firebase.database();
  const path = config.path;
  const key = config.key;

  // 更新時に呼ばれる処理
  db.ref(path).on("value", spapshot => {

    var value = spapshot.child(key).val();

    if (value) {
      notify(value);
    }

    db.ref(path).set({[key]: ""});
  }, abort);
}


const notify = message => {

  const ip = config.ip;
  const device = config.device;
  let language = config.language;

  // ASCII のみの場合は英語にする
  if (message.match(/^[\x20-\x7e]+$/)) {
    language = "en"
  }

  googlehome.ip(ip);
  googlehome.device(device, language);
  googlehome.accent(language);

  googlehome.notify(message, response => {
    console.log(response + ": " + message);
  });
}


const abort = error => {
  console.log("Error: " + error.code + ": " + error.message);
  process.exit(1);
}


// 初期化
firebase.initializeApp(config.firebase);

// 認証して監視＆通知を開始
firebase.auth().signInWithEmailAndPassword(config.email, config.password).then(watch).catch(abort);
