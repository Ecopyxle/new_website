// Service Worker for Ecopyxle Website - Updated Version
const CACHE_NAME = 'ecopyxle-v3.0.0-' + Date.now()
const STATIC_CACHE = 'ecopyxle-static-v3.0.0-' + Date.now()
const DYNAMIC_CACHE = 'ecopyxle-dynamic-v3.0.0-' + Date.now()

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/company',
  '/contact',
  '/careers',
  '/portal',
  '/ecopyxle-qr-code.png',
  '/manifest.json'
]

// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] Caching static files')
      return cache.addAll(STATIC_FILES)
    }).catch((error) => {
      console.error('[SW] Failed to cache static files:', error)
    })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip external requests
  if (!url.origin.includes(self.location.origin)) return

  // Handle different types of requests
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request))
  } else if (request.url.includes('/_next/static/')) {
    event.respondWith(handleStaticAssets(request))
  } else if (request.mode === 'navigate') {
    event.respondWith(handlePageRequest(request))
  } else {
    event.respondWith(handleOtherRequests(request))
  }
})

// Handle image requests with cache-first strategy
async function handleImageRequest(request) {
  try {
    const cache = await caches.open(STATIC_CACHE)
    const cachedResponse = await cache.match(request)
    
    if (cachedResponse) {
      return cachedResponse
    }

    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.error('[SW] Image request failed:', error)
    // Return a placeholder image or fallback
    return new Response('Image not available', { 
      status: 404, 
      statusText: 'Not Found' 
    })
  }
}

// Handle static assets with cache-first strategy
async function handleStaticAssets(request) {
  try {
    const cache = await caches.open(STATIC_CACHE)
    const cachedResponse = await cache.match(request)
    
    if (cachedResponse) {
      return cachedResponse
    }

    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.error('[SW] Static asset request failed:', error)
    return caches.match('/') // Fallback to homepage
  }
}

// Handle page requests with network-first strategy
async function handlePageRequest(request) {
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.log('[SW] Network failed, serving from cache:', request.url)
    const cache = await caches.open(DYNAMIC_CACHE)
    const cachedResponse = await cache.match(request)
    
    if (cachedResponse) {
      return cachedResponse
    }

    // Fallback to homepage for navigation requests
    return caches.match('/') || new Response('Offline', {
      status: 503,
      statusText: 'Service Unavailable'
    })
  }
}

// Handle other requests with network-first strategy
async function handleOtherRequests(request) {
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.log('[SW] Network failed for other request:', request.url)
    const cache = await caches.open(DYNAMIC_CACHE)
    return cache.match(request) || new Response('Resource not available offline', {
      status: 503,
      statusText: 'Service Unavailable'
    })
  }
}

// Background sync for failed requests
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync logic here
      console.log('[SW] Background sync triggered')
    )
  }
})

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: '/brand/ecopyxle-symbol.svg',
      badge: '/brand/ecopyxle-symbol.svg',
      data: data.url
    }
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )
  }
})

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  if (event.notification.data) {
    event.waitUntil(
      clients.openWindow(event.notification.data)
    )
  }
})
