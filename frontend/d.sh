#!/bin/bash

# Run build
pnpm run build

# Deploy
# firebase deploy --only hosting:rankchat-373eb

#last correct
# firebase deploy --only hosting:randai




# Restore original vite.config.ts
# mv vite.config.ts.backup vite.config.ts



# #!/bin/bash
# pnpm run build
# firebase deploy --only hosting:rankchat-373eb