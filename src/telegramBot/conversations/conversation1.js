export async function conversation1(conversation, ctx) {
  const test = await conversation.form.text();
  await ctx.reply(`Test: ${test}`);
}
