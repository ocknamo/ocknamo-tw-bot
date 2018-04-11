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
  'https://www.youtube.com/watch?v=llI1rGWLjc8',
  'http://crypt.hatenadiary.jp/entry/2018/03/17/005150',
  'http://crypt.hatenadiary.jp/entry/2018/03/09/232913',
  'http://crypt.hatenadiary.jp/entry/2018/03/09/011831',
  'http://crypt.hatenadiary.jp/entry/2018/02/27/013142',
  'http://crypt.hatenadiary.jp/entry/2018/02/20/000915',
  'http://crypt.hatenadiary.jp/entry/2018/02/16/190000',
  'http://crypt.hatenadiary.jp/entry/2018/04/08/000528',
  'http://crypt.hatenadiary.jp/entry/2018/03/15/000820',
  'http://www.ocknamo.com/entry/2017/05/22/014615',
  'http://www.ocknamo.com/entry/2017/01/09/222255',
  'http://www.ocknamo.com/entry/2016/11/11/040226'
]
// 定期処理するオブジェクトを宣言
var CronJob = require('cron').CronJob;

function url(){
	return urls[Math.floor(Math.random()*urls.length)];
}
module.exports = (robot) => {
// 定期実行時に呼ばれるメソッド
var job = new CronJob('0 0-23/3 * * *', function() {
//  var job = new CronJob('* * * * *', function() {
    robot.send('ocknamo_tw_bot', '定期BOT ' + url());
  }, null, true, 'Asia/Tokyo');
  job.start();
};
