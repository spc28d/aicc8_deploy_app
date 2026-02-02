const express = require('express');
const cors = require('cors'); // 불러오기 완료
require('dotenv').config();

const app = express();

// 1. CORS 미들웨어 등록 (반드시 다른 라우터와 app.use(express.json())보다 위에 작성하세요)
app.use(
  cors({
    origin: 'http://localhost:5173', // 리액트 앱의 주소 명시
    credentials: true,
  })
);

// 2. JSON 파싱 설정
app.use(express.json());

// 3. root 설정
app.get('/', (request, response) => {
  response.send('This is the Main App for Deployment');
});

// 4. 라우터 연결
app.use(require('./routes/getRoutes'));
app.use(require('./routes/postRoutes'));

// 5. listen 설정
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
