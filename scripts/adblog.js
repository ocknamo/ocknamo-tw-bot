// Description:
//  ブログの過去記事をつぶやくbot
//
// Notes:
//   一定時間ごとにadblogから取得したアドレスをつぶやくbot
// 
'use strict';
const urls = [
	'おっぱい',
  'おっぱお',
  'https://www.youtube.com/watch?v=llI1rGWLjc8'
]
// 定期処理するオブジェクトを宣言
var CronJob = require('cron').CronJob;

function url(){
	return urls[Math.floor(Math.random()*urls.length)];
}
module.exports = (robot) => {
// 定期実行時に呼ばれるメソッド
var job = new CronJob('0 0 0,3,6,9,12,15,18,21 * * *', function() {
    robot.send('ocknamo_tw_bot', 'BOTちゃん「 ' + url() + '」');
  }, null, true, 'Asia/Tokyo');
  job.start();
};
