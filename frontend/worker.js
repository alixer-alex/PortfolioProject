export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve assets first
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    // Fallback to index.html for SPA routes
    url.pathname = "/index.html";
    return await env.ASSETS.fetch(url.toString());
  },
};