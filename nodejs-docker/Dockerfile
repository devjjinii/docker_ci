FROM node:12

# working directory 명시해줘야 한다. 
# 명시해주지 않으면 root의 라이브러리 까지 보인다.
WORKDIR /usr/src/app

# 모듈 종속성 관련
COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["node", "index.js"]