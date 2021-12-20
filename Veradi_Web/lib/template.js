module.exports = {
  HTML: function (title, list, body, control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="./static/${control}" />
    </head>
    <body>
      <h1><a href="/">Veradi</a></h1>
      ${list}

      ${body}
    </body>
    </html>
    `;
  },
  list: function (topics, ul_id) {
    var list = `<ul id="${ul_id}">`;
    var i = 0;
    while (i < topics.length) {
      list =
        list +
        `<li><a href="/about?id=${topics[i].id}">${topics[i].title}</a></li>`;
      i = i + 1;
    }
    list = list + "</ul>";
    return list;
  },
  authorSelect: function (authors, author_id) {
    var tag = ``;
    var i = 0;
    while (i < authors.length) {
      var selected = "";
      if (authors[i].id === author_id) {
        selected = ` selected`;
      }
      tag += `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`;
      i++;
    }
    return `<select name="author">${tag}</select>`;
  },
  authorTable: function (authors) {
    var tag = `<table>`;
    var i = 0;
    while (i < authors.length) {
      tag += `<tr><td>${authors[i].name}</td><td>${authors[i].profile}</td><td><a href="/author/update?id=${authors[i].id}">update</a></td><td> <form action="/author/delete_process" method="post">
      <input type="hidden" name="id" value="${authors[i].id}">
      <input type="submit" value="delete">
    </form></td></tr>`;
      i++;
    }
    tag += `</table><style>table{border-collapse:collapse;}td{border:1px solid black;}</style>`;
    return tag;
  },
  homeTable: function () {
    var tag = `
    
      <table>
      <tr>
      <td><a href="/about">About</a></td>
      <td><a href="/contact">Contact</a></td>
      <td><a href="/login">Login</a></td>
      </tr>
      </table>`;
    tag += `<div id="copyright"><ul>
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
      </ul></div>`;
    return tag;
  },
  contactDescription: function () {
    var tag = `
    <div id="contact_list">
    <h2>Contact List</h2>
    <table>
    <tr>
    <td nowrap><span>Minji-Kim</span><ul><li>Chief Executive Officer</li><li>Mobile : 010-xxxx-xxxx</li><li>Tel : 02-xxxx-xxxx</li><li>Fax : 123-xxxx-xxxx</li><li>Email : xxxx123@gmail.com</li></ul></td>
    <td nowrap><span>Knyeongsik-Choi</span><ul><li>Chief Executive Officer</li><li>Mobile : 010-xxxx-xxxx</li><li>Tel : 02-xxxx-xxxx</li><li>Fax : 123-xxxx-xxxx</li><li>Email : xxxx123@gmail.com</li></ul></td>
    </tr>
    <tr>
    <td nowrap><span>Jangho-Yoon</span><ul><li>Physics Team Leader</li><li>Mobile : 010-xxxx-xxxx</li><li>Tel : 02-xxxx-xxxx</li><li>Fax : 123-xxxx-xxxx</li><li>Email : xxxx123@gmail.com</li></ul></td>
    <td nowrap ><span>Seungjin-Han</span><ul><li>Tech Dev Manager</li><li>Mobile : 010-xxxx-xxxx</li><li>Tel : 02-xxxx-xxxx</li><li>Fax : 123-xxxx-xxxx</li><li>Email : xxxx123@gmail.com</li></ul></td>
    </tr>
    </table>
    </div>
    <div id="location">
    <h2>Location</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.107621324366!2d127.03213351531004!3d37.50537977980939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3fbe6d48243%3A0x7a6e120e7bd2ab9!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITroZwgNTUz!5e0!3m2!1sko!2skr!4v1639538631898!5m2!1sko!2skr" width="600" height="450" style="border:0; border-radius: 10%;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div id="copyright">
    <h2>Copyright</h2>
    <ul style="list-style:none">
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
      </ul>
    </div>
    `;
    return tag;
  },
  loginForm: function () {
    var tag = `
    <div id="login_form">
    <form action="/" method="post">
    <p class="logininput"><input type="text" name="id" placeholder="ID"></p>
    <p class="logininput"><input type="password" name="password" placeholder="PW"></p>
    <p class="logininput"><input id="login_button" type="submit" value="Login"></p>
  </form>
    </div>`;
    return tag;
  },
};
