const tiktok = require('tiktok-app-api');
const chalk = require('chalk');

let tiktokApp;
async function waitForTiktok() {
  tiktokApp = await tiktok();
}

console.log(chalk.bgRed(`Make sure you have uncommented only one tracking feature, you can locate them at the bottom of the script, if none are uncommented this script wont work`))

async function getUserInfo() {
  console.clear()
  console.log(chalk.inverse(`TikTok Live Updating Stats by @Adsnipers`))
  const user = await tiktokApp.getUserByName('Adsnipers'); // Put your username here
  const userInfo = await tiktokApp.getUserInfo(user);
  console.log(chalk.bggreen(`Followers: ${userInfo.followerCount}`)) // Displays user follower count in green
  console.log(chalk.bgGreen(`Likes: ${userInfo.likeCount}`)) // Displays user follower count in cyan
}

async function getVideoInfo() {
  console.clear()
  console.log(chalk.inverse(`TikTok Live Updating Stats by @Adsnipers`))
  const video = tiktokApp.getVideo('6892220263971179777');
  const videoInfo = await tiktokApp.getVideoInfo(video);
  console.log(chalk.bgCyan(videoInfo.description))
  console.log(chalk.bgCyan(`Views: ${videoInfo.playCount}`))
  console.log(chalk.bgCyan(`Likes: ${videoInfo.likeCount}`))
  console.log(chalk.bgCyan(`Comments: ${videoInfo.commentCount}`))
  console.log(chalk.bgCyan(`Shares: ${videoInfo.shareCount}`))
}

function run() {
  waitForTiktok().catch(error => console.log(chalk.bgRed(error)))
  getUserInfo().catch(error => console.log(chalk.bgRed(`Error while getting info, could be rate limited`)))
  //getVideoInfo().catch(error => console.log(chalk.bgRed(error + ' | Probably being rate limited')))
  setTimeout(run, 50000)
}
run()