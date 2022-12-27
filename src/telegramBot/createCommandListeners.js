export function createCommandListeners(bot) {
  bot.command("test", async (ctx) => {
    await ctx.conversation.enter("test");
  });
}