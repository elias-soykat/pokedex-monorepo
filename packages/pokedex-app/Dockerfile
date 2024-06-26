FROM node:18-alpine AS base

# This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update both files!

RUN npm install -g turbo pnpm@9.0.6 husky

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
# Assuming 'turbo' is a global dependency you want to use, installing it globally using npm
COPY . .
RUN turbo prune pokedex-app --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY .env.example .env
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --filter=pokedex-app

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json


RUN pnpm build --filter=pokedex-app

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/packages/pokedex-app/next.config.mjs .
COPY --from=installer /app/packages/pokedex-app/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/packages/pokedex-app/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/packages/pokedex-app/.next/static ./packages/pokedex-app/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/packages/pokedex-app/public ./packages/pokedex-app/public

CMD [ "pnpm", "run", "dev" ]