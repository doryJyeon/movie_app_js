# Movie app
OMDb API 사이트를 이용한 영화 검색 사이트
> (OMDb)[https://www.omdbapi.com/]


## npm install
// npm 시작
npm init -y

// parcel 
npm i -g parcel -D

// node 환경에서 fetch 사용 가능함. fetch 사용하면 2버전 이하로 설치해야함
npm i node-fetch@2
> TS는 npm i -D @types/node-fetch 로 설치

// API key등 노출되면 안되는 정보 환경 변수 사용
npm i -D dotenv