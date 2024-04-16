import { xpRange } from '../lib/levelling.js';
import { Font, RankCardBuilder } from "canvacord";
import moment from "moment-timezone"

let handler = async (m, { conn, text }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;

  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`;

  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Assets/profile.jpg');
  let user = global.db.data.users[who];
  let { exp, level, role } = global.db.data.users[who];
  let { min, xp } = xpRange(user.level, global.multiplier);
  let username = conn.getName(who);
  let roleId
  switch (role) {
    case "Semi Junior":
      roleId = 0
      break;
    case "Junior":
      roleId = 1
      break;
    case "Semi Senior":
      roleId = 2
      break;
    case "Senior":
      roleId = 3
      break;
    case "Trainee Doctor":
      roleId = 4
      break;
    case "General Practitioner":
      roleId = 5
      break;
    case "Resident Doctor":
      roleId = 6
      break;
    case "Assistant Specialist":
      roleId = 7
      break;
    case "Specialist":
      roleId = 8
      break;
    case "Senior Specialist":
      roleId = 9
      break;
    case "Consultant":
      roleId = 10
      break;
    case "Senior Consultant":
      roleId = 11
      break;
    case "Prof":
      roleId = 12
      break;
  }

  let crxp = exp - min
  let customBackground = './Assets/rankbg.jpg'
  let requiredXpToLevelUp = xp
  //.setBackground('IMAGE', customBackground)
  // .setAvatar(pp)
  //     .setRank(roleId, 'Rank')
  //     .setLevel(level, 'Level')
  //     .setCurrentXP(crxp)
  //     .setRequiredXP(requiredXpToLevelUp)
  //     .setProgressBar('#079992', 'COLOR') // Set progress bar color here
  //     .setDiscriminator(who.substring(3, 7))
  //     .setCustomStatusColor('#ffffff')
  //     .setLevelColor('#FFFFFF', '#FFFFFF')
  //     .setOverlay('#3d3d3d')
  //     .setUsername(username)

  //     .renderEmojis(true)
  Font.loadDefault();

  let rankColor = "#1B9CFC";

  // switch (roleId) {
  //   case 0:
  //     rankColor = "#F8EFBA"
  //     break;
  //   case 1:
  //     rankColor = "#58B19F"
  //     break;
  //   case 2:
  //     rankColor = "#82589F"
  //     break;
  //   case 3:
  //     rankColor = "#6D214F"
  //     break;
  //   case 4:
  //     rankColor = "#F97F51"
  //     break;
  //   case 5:
  //     rankColor = "#1B9CFC"
  //     break;
  //   case 6:
  //     rankColor = "#D6A2E8"
  //     break;
  //   case 7:
  //     rankColor = "#1B9CFC"
  //     break;
  //   case 8:
  //     rankColor = "#FD7272"
  //     break;
  //   case 9:
  //     rankColor = ""
  //     break;
  //   case 10:
  //     rankColor = ""
  //     break;
  //   case 11:
  //     rankColor = ""
  //     break;
  //   case 12:
  //     rankColor = ""
  //     break;
  // }

  
  function ucapan() {
    const time = moment.tz("Africa/Cairo").format("HH")
    let res = "Good morning ☀️"
    if (time >= 4) {
     res = "Good Morning"
    }
    if (time >= 18) {
     res = "Good Night"
    }
    return res
   }
   let rankBg = './Assets/rankbg.png'
   if (ucapan() == "Good Morning"){
     rankBg = './Assets/rankbg-m.png'
    } else if (ucapan() == "Good Night") {
     rankBg = './Assets/rankbg.png'
   }


  const card = new RankCardBuilder()
    .setUsername(role)
    .setDisplayName("Dr." + username)
    .setAvatar(pp)
    .setCurrentXP(crxp)
    .setRequiredXP(requiredXpToLevelUp)
    .setRank(roleId, 'Rank')
    .setLevel(level, 'Level')
    .setBackground("./Assets/rankbg.png")
    .setOverlay('#4b4b4b')
    // .setStatus("online")
    .setTextStyles({
      rank: "ROLE:"
    })
    .setStyles({
      overlay:{
        style:{
          background: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 15px 25px rgba(129, 124, 124, 0.2)",
          backdropFilter: "blur(50px)"
        }
      },
      background:{
        style:{
          // background: "radial-gradient(circle, rgba(34,41,45,1) 0%, rgba(13,25,37,1) 100%)",
          // backgroundSize: "contain contain",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "right",
          width: "100%",
          height: "100%"
        }
      },
      avatar: {
        image: {
          style: {
            display: "block",
            margin: "0 auto",
          }
        },
      },
      // avatar: {
      //   container: {
      //     style: {
      //       width: "200px",
      //       height: "200px",
      //       display: "flex",
      //       justifyContent: "center",
      //       alignItems:"center",
      //       alignContent:"center"
      //     }
      //   },
      //   image: {
      //     style: {
      //       display: "block",
      //       margin: "0 auto",
      //       width: "150px",
      //       height:"150px"
      //     }
      //   },
      //   // status: {
      //   //   style: {
      //   //     top: "50%",
      //   //     left: "50%",
      //   //     transform: "translate(-50%, -49%)",
      //   //     width: "220px",
      //   //     height: "220px",
      //   //     // opacity: "0.4",
      //   //     backgroundColor: "none",
      //   //     backgroundImage: "url('https://i.ibb.co/Fqxgp8y/Group-4x.png')",
           
      //   //     backgroundSize: "100% 100%"
      //   //   }
      //   // }
      // },
      progressbar: {
        thumb: {
          style: {
            background: "#fffffff0",
            // maxWidth: "93%",
            height: "35px",
            borderRaduis: "10px",
            boxShadow: "0px 0px 108px 14px rgba(255 ,255, 255, 0.4)"
          },
        },
        track: {
          style: {
            backgroundColor: "#3d3d3d",
            // maxWidth: "93%",
            opacity: "0.5",
            height: "35px",
            borderRaduis: "10px",
            boxShadow: "0px 0px 117px 5px rgba(255,255,255,0.29)"
          }
        },
      },
      statistics: {
        level: {
          text:{
          style:{
            color: "#f7f7f7",
            fontWeight: "900"
          }}
        },
        rank: {
          text:{
          style:{
            color: "#f7f7f7",
            fontWeight: "900"
          }}
        },
        xp: {
          text:{
          style:{
            color: "#f7f7f7",
            fontWeight: "900"
          }}
        }
      },
      username: {
        name: {
          style: {
            fontSize: "30px",
          }
        },
        handle: {
          style:{
            color: "#fff",
          }
        }
      }
    });;

  const image = await card.build({
    format: "png",
  });

  const str = `🏮 *Username:* ${username}\n\n⭐ *Experience:* ${crxp} / ${requiredXpToLevelUp}\n\n🏅 *Role:* *${role}*`
  if (text == "private") {
    try {

      // conn.sendFile(m.chat, image, 'rank.jpg', str, m, false, { mentions: [who] });
      // m.react('✅');
      conn.sendFile(who, image, 'rank.jpg', str, m, false, { mentions: [who] });
      m.react('✅');

      // m.reply('This feature is under maintenance now');
      // m.react('🔨');
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      conn.sendFile(m.chat, image, 'rank.jpg', str, m, false, { mentions: [who] });
      m.react('✅');
      // m.reply('This feature is under maintenance now');
      // m.react('🔨');
    } catch (error) {
      console.error(error);
    }
  }
  // m.reply("This feature is under maintenance")
}

handler.help = ['rank'];
handler.tags = ['economy'];
handler.command = ['rank'];

export default handler;
