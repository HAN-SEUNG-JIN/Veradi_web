var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === "/") {
    //querystring 부분이 내용이 틀린 경우
    if (queryData.id === undefined) {
      queryData.id = "index.html";
    }
    fs.readdir("./template/", function (error, templatelist) {
      if (templatelist.includes(queryData.id)) {
        if (queryData.id === "about.html") {
          fs.readFile("static/" + queryData.name, "utf8", function (err, data) {
            description = data;
            template = `
            <!DOCTYPE html>
<html lang="ko">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./?id=about.css" />
    <title>Veradi_index</title>
  </head>
  <body> 
    <section>
    <div style="text-align:center;margin-top:40px">
    <a id="link" href="./?id=index.html" style="text-decoration: none">Veradi</a>
    <a id="link" href="./?id=about.html&name=contents" style="text-decoration: none">Contents</a>
    <a id="link" href="./?id=about.html&name=physics" style="text-decoration: none">Physics</a>
    <a id="link" href="./?id=about.html&name=chemistry" style="text-decoration: none">Chemistry</a>
    <a id="link" href="./?id=about.html&name=earthscience" style="text-decoration: none">Earthscience</a>
    <a id="link" href="./?id=about.html&name=biology" style="text-decoration: none">Biology</a>
    </div>        
    ${description}
    </section>
            <footer><ul style="list-style: none;">
            <li>
              주소: 서울시 강남구 도곡로 460, 2층<br>
              <span style="margin-left:28px;">서울시 강남구 도곡로 442, 401호</span>
            </li>
            <li>㈜하이컨시 대표이사: 박근수</li>
      
            <li>사업자등록번호: 488-88-00381</li>
                    <li>통신판매업신고: 제 2019-서울강남-03031호 <a href="javascript:window.open('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=4888800381', 'bizCommPop', 'width=750, height=700;');" class="txt-link">정보확인</a></span></li>
            
            <li>학원설립, 운영 등록번호: 제 10662호 /제 10556호</li>
            <li>신고기관명: 서울시 강남서초교육지원청</li>
            <li>COPYRIGHT (주)하이컨시. All Rights Reserved.</li>
            </ul></footer>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>
            `;
            response.writeHead(200);
            response.end(template);
          });
        } else {
          response.writeHead(200);
          response.end(
            fs.readFileSync(__dirname + "/template/" + queryData.id)
          );
        }
      }
    });
    fs.readdir("./static/", function (error, staticlist) {
      if (staticlist.includes(queryData.id)) {
        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + "/static/" + queryData.id));
      }
    });
    //(querystring.id에 해당하는 파일이 template와 static폴더내에 존재하지 않을 경우도 에러 핸들링 해야함!)
  } else {
    //querystring 부분이 형식이 틀린 경우
    response.writeHead(404);
    response.end("Not found");
  }
});
app.listen(3000);
