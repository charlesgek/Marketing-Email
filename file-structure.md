marketing-email/
├── app/
│   ├── (auth)/                          # Clerk auth
│   │   ├── sign-in/[[...sign-in]]/
│   │   │   └── page.tsx
│   │   ├── sign-up/[[...sign-up]]/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/                     # Protected routes
│   │   ├── campaigns/
│   │   │   ├── [id]/
│   │   │   │   ├── analytics/
│   │   │   │   │   ├── globe-3d/       # 3D opens visualization
│   │   │   │   │   └── funnel/         # Conversion path
│   │   │   │   └── editor/             # Drag-n-drop builder
│   │   │   │       ├── EmailCanvas.tsx
│   │   │   │       └── BlocksPanel.tsx
│   │   │   └── new/
│   │   │       └── page.tsx
│   │   ├── automations/
│   │   │   └── [flowId]/               # Visual workflow builder
│   │   │       └── page.tsx
│   │   ├── audience/
│   │   │   ├── segments/               # D3-powered segmentation
│   │   │   └── subscribers/            # Bulk management
│   │   ├── reports/
│   │   │   ├── custom/                 # Victory charts
│   │   │   │   ├── CompositeChart.tsx
│   │   │   │   └── [reportId].tsx
│   │   │   ├── predictive/             # D3 analytics
│   │   │   └── benchmarks/
│   │   ├── team/                       # Real-time collab
│   │   │   ├── [workspaceId]/
│   │   │   │   ├── presence/           # Live cursors
│   │   │   │   └── history/            # Version control
│   │   │   └── page.tsx
│   │   ├── compliance/                 # Audit trails
│   │   │   ├── logs/
│   │   │   └── exports/
│   │   ├── billing/                    # Stripe integration
│   │   └── layout.tsx
│   ├── api/
│   │   ├── stripe/
│   │   │   ├── webhooks/
│   │   │   └── checkout/
│   │   ├── audit/                      # Compliance logs
│   │   └── realtime/                   # WS endpoint
│   └── public/
│       ├── marketing/
│       │   ├── versus-mailchimp/
│       │   └── pricing/
│       └── assets/
│           ├── shaders/                # Three.js GLSL
│           └── templates/              # Email JSON templates
├── components/
│   ├── collaboration/                  # Team features
│   │   ├── PresenceAvatars.tsx         # Live cursors
│   │   └── ConflictResolver.tsx        # DnD-Kit + Realtime
│   ├── reporting/                      # Data viz
│   │   ├── CompositeChart.tsx          # Victory + D3
│   │   └── ForecastChart.tsx           # Time-series
│   ├── compliance/                     # Audit
│   │   ├── LogViewer.tsx               # Zod-validated
│   │   └── ExportButton.tsx            # CSV/JSON
│   ├── graphics/
│   │   ├── 3d/                        # React Three
│   │   │   ├── HeatmapGlobe.tsx
│   │   │   └── FluidFunnel.tsx
│   │   └── hybrid/                    # D3 + Three
│   │       └── NetworkGraph.tsx
│   └── ui/
│       ├── AnimatedTabs.tsx            # Framer Motion
│       └── HolographicCard.tsx         # CSS shaders
├── lib/
│   ├── collaboration/                  # Real-time
│   │   ├── realtime.ts                 # Supabase WS
│   │   └── presence.ts                 # User tracking
│   ├── compliance/
│   │   ├── validator.ts                # Zod schemas
│   │   └── hashing.ts                  # Data integrity
│   ├── database/                       # Supabase
│   │   ├── campaigns.ts
│   │   └── subscribers.ts
│   ├── stripe/
│   │   ├── client.ts
│   │   └── webhooks.ts
│   └── visualization/                  # D3 + Victory
│       ├── d3-helpers.ts
│       └── victory-themes.ts
├── styles/
│   ├── collaboration.css              # Live cursor styles
│   ├── three.css                      # Canvas overrides
│   └── globals.css                    # Tailwind base
└── types/
    ├── collaboration.d.ts             # Realtime types  
    ├── compliance.d.ts                # Audit log schema
    └── database.ts                    # Supabase types