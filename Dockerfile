FROM node:9.3.0
MAINTAINER Oliver Steele <steele@osteele.com>

ADD package.json yarn.lock /tmp/
RUN cd /tmp && yarn install
RUN yarn install

WORKDIR /app
COPY . /app
RUN ln -s /tmp/node_modules .
ENV PATH="/app/node_modules/.bin:${PATH}"
ENV VIPS_WARNING=1

ENTRYPOINT ["gatsby"]
CMD ["develop"]
