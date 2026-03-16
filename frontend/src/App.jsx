import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Join from './pages/admin/join/Join';
import Login from './pages/admin/login/Login';
import Home from './pages/home/Home';
import Introduce from './pages/introduce/Introduce';
import NotFound from './pages/NotFound/NotFound';
import Preorder from './pages/preorder/Preorder';
import QnaBoard from './pages/qna/QnaBoard';
import Support from './pages/support/Support';

function App() {
  return (
    <Routes>
      {/* 일반 사용자 및 관리자 */}
      <Route path="/" element={<Layout />}>
        {/* 메인페이지 */}
        <Route index element={<Home />} />
        {/* 소개 */}
        <Route path="/introduce" element={<Introduce />} />
        {/* 사전 예약 */}
        <Route path="/pre-order" element={<Preorder />} />
        {/* Q & A */}
        <Route path="/qna" element={<QnaBoard />} />
        {/* 고객센터 */}
        <Route path="/support" element={<Support />} />
      </Route>
      {/* 관리자 로그인 */}
      <Route path="/admin/login/:pw" element={<Login />} />
      {/* 관리자 회원가입 */}
      <Route path="/admin/join/:pw" element={<Join />} />
      {/* 관리자 전용 */}
      {/* 
        토큰에 따라 화면을 보여줘야 함
        토큰이 있다면? -> AdminHome
        토큰이 없다면? -> 강제 이동
        이 역할을 해주는 컴포넌트가 따로 필요함
      */}
      <Route path="/admin" element={<Dashboard />}></Route>
      {/* 404 페이지 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
