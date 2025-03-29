marketing-email/
├── app/
│   ├── (dashboard)/
│   │   ├── campaigns/
│   │   │   ├── [id]/
│   │   │   │   ├── ai-assistant/       # New AI directory
│   │   │   │   │   ├── suggestions/
│   │   │   │   │   │   └── page.tsx    # AI-powered suggestions
│   │   │   │   │   └── layout.tsx
│   │   │   │   └── editor/
│   │   │   │       ├── AIContentBlock.tsx  # TinyML integration
│   │   │   │       └── AISidebar.tsx
│   ├── api/
│   │   ├── ai/                         # New AI API routes
│   │   │   ├── optimize/
│   │   │   │   └── route.ts            # Content optimization
│   │   │   ├── generate/
│   │   │   │   └── route.ts            # Text generation
│   │   │   └── analyze/
│   │   │       └── route.ts            # Sentiment analysis
├── components/
│   ├── ai/                             # New AI components
│   │   ├── EmailOptimizer.tsx          # Uses TinyML models
│   │   ├── PredictiveAnalytics.tsx     # ML-powered forecasts
│   │   └── AltTextGenerator.tsx        # Image analysis
├── lib/
│   ├── ai/                             # AI core logic
│   │   ├── client/                     # Browser-side ML
│   │   │   ├── tfjs.ts                 # TensorFlow.js setup
│   │   │   └── onnx.ts                 # ONNX runtime config
│   │   ├── server/                     # Cloudflare AI workers
│   │   │   └── huggingface.ts          # Proxy to HF API
│   │   └── models/                     # Model management
│   │       ├── loader.ts               # Dynamic model loading
│   │       └── quantize.ts             # Model optimization
└── public/
    └── assets/
        ├── ml-models/                  # TinyML models
        │   ├── spam-detector.tflite
        │   └── engagement-predictor.onnx
        └── ai-assets/                  # ML-related assets
            └── word-vectors.bin