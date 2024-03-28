import * as mumaker from "mumaker";
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    // m.reply(
    //     "Hello, this is an experimental script that will be developed by Dr.Osman later !"
    // );
    // if (!text) {
    //     m.reply(
    //         `📜 To use this command: \n\n ${usedPrefix}${command} type Your_Text \n\n 📌 *Example:* ${usedPrefix}${command} batman One_Two \n\n ❗ *Note:* Use "_" to separate words`
    //     );
    //     m.react("❎");
    // }
    if (!text || typeof text !== 'string') {
        m.reply(
            `📜 To use this command: \n\n ${usedPrefix}${command} type Your_Text \n\n 📌 *Example:* ${usedPrefix}${command} batman One_Two \n\n ❗ *Note:* Use "_" to separate words`
        );
        m.react("❎");
        return; // Return early to prevent further execution
    }
    let types = [
        "flowers",
        "wet_glass",
        "hacker",
        "3d_castle",
        "naruto",
    ];
    let newArray = types.map((element) => `» ${element}`);
    let message = `${newArray.join("\n")}`;
    if (text.toLowerCase() == "list") {
        m.reply(`
*Logo Types List*:

${message}

⟪ There are other templates that will be added in the future ⟫`);
        m.react("📃");
    }
    if (args.length > 1) {
        let type = args[0].toLowerCase();
        let logoText = args[1].replace("_", " ");
        m.react("🕛");
        if (types.includes(type)) {
            let libLink;
            let library;
            switch (type) {
                case "flowers":
                    library = "photooxy";
                    libLink =
                        "https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html";
                    break;
                case "wet_glass":
                    library = "ephoto";
                    libLink =
                        "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
                    break;
                case "hacker":
                    library = "ephoto";
                    libLink =
                        "https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html";
                    break;
                case "3d_castle":
                    library = "ephoto";
                    libLink =
                        "https://en.ephoto360.com/create-a-3d-castle-pop-out-mobile-photo-effect-786.html";
                    break;
                case "naruto":
                    library = "ephoto";
                    libLink =
                        "https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html";
                    break;
            }
            switch (library) {
                case "photooxy":
                    await mumaker
                        .photooxy(libLink, [`${logoText}`])
                        .then((data) =>
                            conn.sendMessage(m.chat, {
                                image: { url: `${data.image}` },
                                caption: "✅ Done",
                            })
                        )
                        .catch((err) => console.log(err));
                    m.react("✅");

                    break;
                case "ephoto":
                    await mumaker
                        .ephoto(libLink, [`${logoText}`])
                        .then((data) =>
                            conn.sendMessage(m.chat, {
                                image: { url: `${data.image}` },
                                caption: "✅ Done",
                            })
                        )
                        .catch((err) => console.log(err));
                    m.react("✅");
                    break;
            }
            // let res = await mumaker
            //     .textpro(libLink, [`${logoText}`])
            //     .then((data) =>
            //         conn.sendMessage(m.chat, {
            //             image: { url: `${data.image}` },
            //             caption: "✅ Done this is your logo",
            //         })
            //     )
            //     .catch((err) => m.reply(err));
            // m.react("✅");
        }
    }
};

handler.help = ["logo"];
handler.tags = ["logo"];
handler.command = /^(logo)$/i;
handler.level = 10

export default handler;
/* 

https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html
sliced

https://textpro.me/make-a-batman-logo-online-free-1066.html
batman

https://textpro.me/create-thunder-text-effect-online-881.html
thunder

https://textpro.me/create-a-magma-hot-text-effect-online-1030.html
magma

https://textpro.me/create-impressive-glitch-text-effects-online-1027.html
glitch

https://textpro.me/create-green-horror-style-text-effect-online-1036.html
demon

https://textpro.me/create-realistic-3d-text-effect-frozen-winter-1099.html
frozen

https://textpro.me/ice-cold-text-effect-862.html
ice

https://textpro.me/create-artistic-typography-online-1086.html
typography

https://textpro.me/write-text-on-foggy-window-online-free-1015.html
foggy

https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html
stone

https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
bear

https://textpro.me/double-exposure-text-effect-black-white-976.html
forest

https://textpro.me/create-burger-3d-text-effect-1111.html
burger

https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html
dragon

https://textpro.me/create-pokemon-logo-style-text-effect-online-1134.html
pokemon

https://textpro.me/natural-leaves-text-effect-931.html
natural

https://textpro.me/create-a-gradient-text-shadow-effect-online-1141.html
shadow

*/
