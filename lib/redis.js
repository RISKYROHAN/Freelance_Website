import Redis from 'ioredis';

let redis = null;

if (process.env.REDIS_URL) {
  if (process.env.NODE_ENV === 'production') {
    redis = new Redis(process.env.REDIS_URL);
  } else {
    // In development mode, use a global variable to preserve the value
    // across module reloads caused by HMR (Hot Module Replacement).
    if (!global.redis) {
      global.redis = new Redis(process.env.REDIS_URL);
    }
    redis = global.redis;
  }
} else {
  console.warn("No REDIS_URL found in environment block. Redis features will be bypassed safely.");
}

export default redis;
