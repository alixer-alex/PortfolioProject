export default {
  async fetch(request, env, ctx) {
    let url = new URL(request.url);

    try {
      // Try to serve the static asset from dist
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // If not found (SPA route), serve index.html
      return await env.ASSETS.fetch("index.html");
    }
  },
};