window.onload = getMemo; // 화면 로딩 시 getMemo를 통해 데이터를 가져옴

async function getMemo() { // 로딩 시 사용자 가져오는 함수
    try {
      const res = await axios.get('/memo');
      const memo = res.data;    
      console.log(memo);
      const list = document.getElementById('list');
      list.innerHTML = '';
      // 모든 key를 순회하여 데이터 표시, 컴포넌트 생성 및 이벤트 리스너 생성
      Object.keys(memo).map(function (key) {
        const memoDiv = document.createElement('div');
        //데이터
        const span = document.createElement('span');
        span.textContent = memo[key];   //key(Date)에 해당하는 value(content)를 표시
        console.log('key', key);
        //수정 버튼
        const btn_update = document.createElement('button');
        btn_update.textContent = '수정';
        btn_update.addEventListener('click', async () => { // 수정 버튼 클릭 이벤트
          const content = prompt('바꿀 내용을 입력하세요');
          if (content.length < 1) {
            return alert('내용은 한 글자 이상 입력하세요');
          }
          try {
            //수정 이후 다시 ajax를 통해 사용자를 가져옴 URL에 memo의 key값을 넘기며, {"content" : "내용"}의 객체 형태를 데이터로 전달
            await axios.put('/memo/' + key, { content });  
            getMemo();
          } catch (err) {
            console.error(err);
          }
        });
        //삭제 버튼
        const btn_delete = document.createElement('button');
        btn_delete.textContent = '삭제';
        btn_delete.addEventListener('click', async () => { // 삭제 버튼 클릭
          try {
            await axios.delete('/memo/' + key); //삭제 이후 다시 ajax를 통해 사용자를 가져옴
            getMemo();
          } catch (err) {
            console.error(err);
          }
        });
        //<div id="memoDiv">에 데이터, 버튼들을 추가
        memoDiv.appendChild(span);
        memoDiv.appendChild(btn_update);
        memoDiv.appendChild(btn_delete);
        //list에 div를 추가
        list.appendChild(memoDiv);
        console.log(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  // 폼 제출(submit) 시 실행
  document.getElementById('form').addEventListener('submit', async (e) => { //submit 이벤트가 발생할 시
    e.preventDefault();
    const content = e.target.content.value;
    if (content.length < 1) { 
      return alert('내용을 한 글자 이상 입력하세요');
    }
    try {
      await axios.post('/memo', { content });  //axios를 이용한 create Ajax 처리
      console.log({ content }); //{"content" : "내용"}의 객체의 형태를 데이터로 넘김
      getMemo();
    } catch (err) {
      console.error(err);
    }
    e.target.content.value = '';
  });