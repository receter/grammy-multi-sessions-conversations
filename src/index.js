import * as dotenv from 'dotenv';
import { configureTelegramBot } from './configureTelegramBot.js';

dotenv.config();

const telegramBot = await configureTelegramBot();

// Start the bot.
await telegramBot.start();
