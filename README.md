## docker 명령어

* docker build -t "도커아이디/ 저장소/프로젝트이름 : 버전"
* docker run -it "도커아이디/ 저장소/프로젝트이름"

* docker build -t devjjinii/nodejs ./
* dockr run devjjinii/nodejs:latest
* docker run -p port(브라우저/로컬호스트) : port(컨테이너접근) 이미지이름
* docker run -p 5000:8000 devjjinii/nodejs
    * localhost:5000 접속