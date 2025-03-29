marketing-email/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   │   └── page.tsx
│   │   ├── sign-up/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── campaigns/
│   │   │   ├── [id]/
│   │   │   │   ├── editor/
│   │   │   │   │   ├── EmailCanvas.tsx
│   │   │   │   │   └── AISidebar.tsx
│   │   │   │   └── analytics/
│   │   │   │       ├── LiveGlobe.tsx
│   │   │   │       └── Funnel3D.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/
│   │   ├── ai/
│   │   │   ├── optimize/
│   │   │   │   └── route.ts
│   │   │   └── generate/
│   │   │       └── route.ts
│   │   ├── stripe/
│   │   │   └── webhooks.ts
│   │   └── realtime/
│   │       └── route.ts
├── components/
│   ├── ai/
│   │   ├── AISuggestions.tsx
│   │   └── PredictiveSend.tsx
│   ├── collaboration/
│   │   ├── PresenceAvatars.tsx
│   │   └── ConflictResolver.tsx
│   ├── graphics/
│   │   ├── 3d/
│   │   │   ├── HeatmapGlobe.tsx
│   │   │   └── FluidFunnel.tsx
│   │   └── hybrid/
│   │       └── NetworkGraph.tsx
│   └── ui/
│       ├── HolographicCard.tsx
│       └── AnimatedTabs.tsx
├── contracts/
│   ├── EmailAudit.sol
│   └── tests/
│       └── AuditTest.js
├── lib/
│   ├── blockchain/
│   │   ├── polygon.ts
│   │   └── verifier.ts
│   ├── ai/
│   │   ├── transformers.ts
│   │   └── onnx/
│   │       └── sendtime.onnx
│   ├── database/
│   │   ├── campaigns.ts
│   │   └── subscribers.ts
│   └── security/
│       ├── encryption.ts
│       └── audit.ts
├── public/
│   ├── assets/
│   │   ├── shaders/
│   │   │   ├── globe.vert
│   │   │   └── globe.frag
│   │   └── templates/
│   │       └── welcome.json
├── workers/
│   ├── email-batcher.js
│   ├── ai-proxy.js
│   └── blockchain-logger.js
├── hardhat.config.js
├── next.config.js
├── tailwind.config.js
├── package.json
└── .env.local