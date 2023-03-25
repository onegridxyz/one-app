FROM node:18 as build
WORKDIR /one-app
COPY . .
RUN npm install
RUN npm run build
RUN cd dist/apps/one-app; npm install

FROM node:18-alpine as runner
WORKDIR /one-app
ENV NODE_ENV production
COPY --from=build /one-app/dist/apps/one-app ./

EXPOSE 3000
CMD ["npm", "start"]
