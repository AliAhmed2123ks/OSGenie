import * as fs from 'fs';
let handler = async (m, { conn, text, args }) => {
    if (m.sender === "966530740094@s.whatsapp.net") {
        let txt = args[0].trim()
        let cause = text.replace(args[0], "")
        if (!txt) throw '✳️ Enter the amount of *XP* you want to add'
        if (isNaN(txt)) throw ' 🔢 only numbers'
        let xp = parseInt(txt)
        let exp = xp
        function processNumbersFromFile(inputFilePath, operation) {
            fs.readFile(inputFilePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading file:', err);
                    return;
                }

                // Split the content by lines and convert each line to a number
                const numbers = data.trim().split('\n').map(Number);

                // Execute the provided operation on each number
                numbers.forEach(number => {
                    operation(number);

                });
                // console.log(global.owner)
            });
        }
        let i = 1
        // Define your operation function here
        function myOperationFunction(number) {
            let who = number + "@s.whatsapp.net"
        
        if (exp < 1) throw '✳️ Minimum *1*'
        let users = global.db.data.users
  
  if (users[who] && users[who].exp) {
    users[who].exp += xp
    console.log(i++ + "- " + who)
    if(cause){
        conn.sendMessage(who, {text: `🌟 You got ${xp} XP as a gift from Dr.Osman on the occasion of ${cause}`})
    }else{
        conn.sendMessage(who, {text: `🌟 You got ${xp} XP as a gift from Dr.Osman`})
    }
}
        }

        // Usage example:
        const inputFilePath = 'number.txt';

        processNumbersFromFile(inputFilePath, myOperationFunction);

        await m.reply(`≡ *XP ADDED TO ALL USERS*
  ──────────────
    *Total:* ${xp}
  ──────────────`)
        console.log("Done")
    } else {
        m.reply("Sorry but this command is only available to Dr.Osman ")
    }

}

handler.help = ['addxpall <amount>']
handler.tags = ['economy']
handler.command = ['addxpall']
handler.rowner = true
handler.admin = true

export default handler

