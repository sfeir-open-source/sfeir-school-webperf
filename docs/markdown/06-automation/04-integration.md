# Exemple

```bash
# Installation
npm install -g @lhci/cli

# Exécution locale
lhci autorun --upload.target=temporary-public-storage

# Intégration CI/CD (GitHub Actions)
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - name: Run Lighthouse
        run: |
          npm install -g @lhci/cli
          lhci autorun
```
