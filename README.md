# rushgun-relay

Gun.js relay server for [rushgun](https://rushgun.vercel.app) — this is what
makes posts sync between users in real time.

## Deploy (Railway)

1. New project → Deploy from GitHub repo → `hectorchanht/rushgun-relay`
2. Settings → Networking → Generate Domain
3. Point the app at it: Vercel project `rushgun-a1x8` → Environment Variables →
   `NEXT_PUBLIC_GUN_PEERS=https://<your-domain>/gun` → redeploy

No env vars needed. The relay keeps no important state (browsers keep their
own copies); it just forwards graph updates between peers.
