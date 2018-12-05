# todayhumor-gif-url-replace

오늘의유머 gif 업로드시 mp4 영상으로 변환되어 gif 파일을 다운로드해 소장하고자 할때 불편함을 해소하기 위해 작성 하였음.


1.적당한 폴더를 생성한 후 manifest.json, replace.js 파일을 다운로드 한다.

2.크롬을 실행한 후 chrome://extensions/ 주소로 이동한다.

3.우측 상단의 개발자 모드 토글 버튼을 클릭하여 개발자 모드로 전환한다.

4.'압축해제된 확장 프로그램을 로드합니다.' 라는 버튼을 클릭한다.

5.앞서 다운로드한 파일이 있는 폴더를 선택한다.

6.확장 프로그램이 추가 되며, 주소창 우측에 버튼이 생긴것을 확인 할 수 있다.


확장 프로그램 적용시, http://www.todayhumor.co.kr 내에서 video 태그중 source src 가 'ANIGIF.mp4' 로 끝나는 경우 img 태그로 대체된다.

License
-
MIT license
