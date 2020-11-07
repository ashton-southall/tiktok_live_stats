//@ts-ignore
const tiktok = require('tiktok-app-api');//@ts-ignore
const chalk = require('chalk');
 
let tiktokApp;
 
function getUserInfo() {
    (async () => {
        tiktokApp = await tiktok();
       
        const user = await tiktokApp.getUserByName('Adsnipers');
        const userInfo = await tiktokApp.getUserInfo(user);
        console.log(chalk.green(`Followers: ${userInfo.followerCount}`))
        console.log(chalk.cyan(`Likes: ${userInfo.likeCount}`))
        
      })().catch(error => console.log(`Check failed, probably being rate limited`));
      setTimeout(getUserInfo, 60000)
}
getUserInfo()
