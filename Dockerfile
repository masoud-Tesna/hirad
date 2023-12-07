FROM node:18-alpine AS base
# Working directory
WORKDIR /app
COPY . .
ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3002

ENV PORT 3002
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD [ "serve" , "-s" , "out" , "-l" , "3002" ]
