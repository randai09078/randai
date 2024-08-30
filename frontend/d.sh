#!/bin/bash

# Backup vite.config.ts
# cp vite.config.ts vite.config.ts.backup

# # Replace line in vite.config.ts
# sed -i 's/Terminal({console: 'terminal'})/Terminal()/' vite.config.ts

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