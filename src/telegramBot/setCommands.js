export async function setCommands(bot) {
  await bot.api.setMyCommands([
    { command: "test", description: "Test conversations" },
  ]);
}