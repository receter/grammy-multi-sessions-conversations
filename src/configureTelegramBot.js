import { Bot, lazySession, MemorySessionStorage } from 'grammy';
import { setCommands } from './telegramBot/setCommands.js';
import { createCommandListeners } from './telegramBot/createCommandListeners.js';
import { conversations, createConversation } from '@grammyjs/conversations';
import { conversation1 } from './telegramBot/conversations/conversation1.js';

export async function configureTelegramBot() {
  // Create an instance of the `Bot` class and pass your authentication token to it.
  const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);

  // Creates a new object that will be used as initial session data.
  function createInitialSessionDataUser() {
    return {};
  }

  bot.use(lazySession({
  type: "multi",
    user: {
      storage: new MemorySessionStorage(),
      initial: createInitialSessionDataUser,
      getSessionKey: (ctx) => ctx.from?.id.toString(), // Per user
    }
  }));

  /*bot.use(session({
    initial() {
      // return empty object for now
      return {};
    },
  }));*/

  bot.use(conversations());
  bot.use(createConversation(conversation1));

  await setCommands(bot);
  createCommandListeners(bot);
  bot.catch(console.log);
  return bot;
}

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Create a simple menu.
// import { Menu } from "@grammyjs/menu";
/*const menu = new Menu("my-menu-identifier")
  .text("A", (ctx) => ctx.reply("You pressed A!")).row()
  .text("B", (ctx) => ctx.reply("You pressed B!"));

// Make it interactive.
bot.use(menu);

bot.command("start", async (ctx) => {
  // Send the menu.
  await ctx.reply("Check out this menu:", { reply_markup: menu });
});*/

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.