
# Ko-Fi Discord Webhook Worker

A lightweight, serverless middleware designed for [Cloudflare Workers](https://workers.cloudflare.com) that forwards Ko-Fi donation alerts to a Discord channel via Webhooks.

## Setup Guide

### 1. Configuration
1. Click the green Code button at the top of this repository and select Download ZIP.
2. Extract the files to your machine.
3. Open `worker.js` in your preferred text editor.
4. Locate the line: `const DISCORD_WEBHOOK = "INSERT_WEBHOOK_HERE";`
5. Replace `INSERT_WEBHOOK_HERE` with your actual Discord Webhook URL.
6. Save the file.

### 2. Deployment (Cloudflare Workers)
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Navigate to Compute > Workers & Pages.
3. Click Create application.
4. Click the Start With Hello World.
5. Give your worker a name (e.g., `kofi-discord-webhook`) and click Deploy.
    * *Note: This deploys a default "Hello World" script. We will replace it in the next step.*
6. On the success screen, click Edit Code.
7. In the online editor, delete all the existing code.
8. Copy and Paste the entire contents of your modified `worker.js` into the editor.
9. Click Save and Deploy in the top right.
10. Click the back arrow or "Worker" name at the top left to return to the summary. Copy the URL (e.g., `[https://worker-name.subdomain.workers.dev](https://worker-name.subdomain.workers.dev)`) for the final step.

### 3. Connecting to Ko-Fi
1. Go to your [Ko-Fi Dashboard](https://ko-fi.com/manage).
2. On the sidebar, Select More > API.
3. In the Webhooks section, paste your Cloudflare Worker URL.
[![img5](https://m.samidy.com/img5.png)]
4. Click Update or Save.