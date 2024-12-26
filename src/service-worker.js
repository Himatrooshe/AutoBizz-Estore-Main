import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';

// Precache files during the build process
precacheAndRoute(self.__WB_MANIFEST || []);

// Cache static assets (JS, CSS, images, etc.)
registerRoute(
  ({ request }) => request.destination === 'style' || request.destination === 'script' || request.destination === 'image',
  new CacheFirst({
    cacheName: 'static-assets',
    plugins: [
      {
        cacheWillUpdate: async ({ request, response }) => response,
      },
    ],
  })
);

// Cache API responses
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new NetworkFirst({
    cacheName: 'api-cache',
    networkTimeoutSeconds: 5, // Fallback to cache after 5 seconds
    plugins: [
      {
        cacheWillUpdate: async ({ request, response }) => response,
      },
    ],
  })
);
