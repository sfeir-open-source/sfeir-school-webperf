# Exemple

Fichier de config lighthouserc.json

```json
{
  "ci": {
    "collect": {
      "numberOfRuns": 3,
      "startServerCommand": "npm start",
      "url": ["http://localhost:3000/"],
      "settings": {
        "emulatedFormFactor": "mobile",
        "throttling": {
          "rttMs": 50,
          "throughputKbps": 1024,
          "cpuSlowdownMultiplier": 1
        }
      }
    },
    "assert": {
      "assertions": {
        "categories:performance": ["warn", { "minScore": 0.7 }],
        "categories:accessibility": ["error", { "minScore": 0.8 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.9 }],
        "categories:pwa": ["warn", { "minScore": 0.4 }]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```
