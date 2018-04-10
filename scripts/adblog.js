// Description:
//  ブログの過去記事をつぶやくbot
//
// Notes:
//   一定時間ごとにadblogから取得したアドレスをつぶやくbot
// 
'use strict';
const adblog = require('adblog');
// 定期処理するオブジェクトを宣言
var CronJob = require('cron').CronJob;

module.exports = (robot) => {
// 定期実行時に呼ばれるメソッド
var job = new CronJob('0 0 0,3,6,9,12,15,18,21 * * *', function() {
    robot.send('ocknamo_tw_bot', 'BOTちゃん' + adblog.url());
  }, null, true, 'Asia/Tokyo');
  job.start();
};
