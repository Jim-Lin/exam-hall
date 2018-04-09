FROM mhart/alpine-node AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM mhart/alpine-node
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/dist .
CMD ["serve", "-s", "."]
