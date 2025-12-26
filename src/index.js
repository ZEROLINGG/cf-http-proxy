export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 收集调试信息
    const debugInfo = {
      message: "✅ Worker 路由配置成功！(Worker Route Success)",
      request_url: request.url,
      hostname: url.hostname, // 这里应该显示 github.com.proxy.808050.xyz
      pathname: url.pathname, // 这里显示 / 及其后面的路径
      method: request.method,
      cf_location: request.cf ? request.cf.colo : "Unknown", // Cloudflare 节点位置
      timestamp: new Date().toISOString()
    };

    // 返回格式化的 JSON 文本
    return new Response(JSON.stringify(debugInfo, null, 2), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  },
};
