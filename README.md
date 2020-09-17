## Docker Image 와 명령어

* 이미지 빌드 
    * docker build -t "도커아이디/ 저장소/프로젝트이름 : 버전"
    * docker build -t devjjinii/nodejs ./
* docker run -it "도커아이디/ 저장소/프로젝트이름"
    * dockr run devjjinii/nodejs:latest
* docker run -p port(브라우저/로컬호스트) : port(컨테이너접근) 이미지이름
    * docker run -p 5000:8000 devjjinii/nodejs
        * localhost:5000 접속
* docker run -it devjjinii/nodejs sh // shell 접근
    * #ls 
* docker run -d -p 5000:8000 devjjinii/nodejs (-d : detach 모드)
* 이미지 빌드하지 않고 볼륨 이용
    * volume : -v : 공유할 디렉토리 설정. -v "호스트 디렉토리":"컨테이너 디렉토리"
        * docker run -p 5000:8000 -v $(pwd):/workdir "이미지 아이디"
        * docker run -d -p 5000:8000 -v $(pwd):/usr/src/app devjjinii/nodejs
---
## Docker Compose (컨테이너 사이의 통신)

* 레디스 서버 실행 > docker run redis
* docker-compose up // --build (재빌드)
* docker-compose down
* 백그라운드 실행 >  docker-compose up -d --build

--- 
## 개발환경과 운영환경의 도커파일

* npx create-rect-app ./ (현재디렉토리)
* 도커파일을 명시해주어야 한다. > docker build -f Dockerfile.dev -t devjjinii/docker-react ./
    * docker run "-it" -p 3000:3000 devjjinii/docker-react 
        * (-i -t : bash shell 사용 가능(컨테이너 실행되면서 컨테이너 안의 bash shell 실행))
* 테스트 : docker run -it devjjinii/docker-react npm run test
