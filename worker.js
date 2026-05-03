export default {
  async fetch(request) {
    if (request.method === "POST") {
      const data = await request.formData();
      const payload = JSON.parse(data.get('data'));

      const DISCORD_WEBHOOK = `INSERT_WEBHOOK_HERE`;

      const discordMessage = {
        embeds: [{
          title: "New Donation Received!",
          description: `**${payload.from_name}** sent **${payload.amount} ${payload.currency}**!`,
          fields: [{ name: "Message", value: payload.message || "No message provided." }],
          color: 0x5865F2 
        }]
      };

      await fetch(DISCORD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordMessage)
      });

      return new Response("OK", { status: 200 });
    }
    return new Response("Method not allowed", { status: 405 });
  }
}