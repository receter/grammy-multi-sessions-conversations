import { Bot, lazySession, MemorySessionStorage } from 'grammy';
import { setCommands } from './telegramBot/setCommands.js';
import { createCommandListeners } from './telegramBot/createCommandListeners.js';
import { conversations, createConversation } from '@grammyjs/conversations';
import { conversation1 } from './telegramBot/conversations/conversation1.js';

export async function configureTelegramBot() {
  // Create an instance of the `Bot` class and pass your authentication token to it.
  const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);

  bot.use(lazySession({
    type: "multi",
    test: {},
    conversation: {}
  }));

  bot.use(conversations());
  bot.use(createConversation(conversation1));

  await setCommands(bot);
  createCommandListeners(bot);
  bot.catch(console.log);
  return bot;
}