FROM node:18-alpine as runner
WORKDIR /one-app
ENV NODE_ENV production
COPY dist/apps/one-app ./

EXPOSE 3000
CMD ["npm", "start"]
