import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Blacklist from './pages/admin/dashboard/blacklist/Blacklist';
import BoardManagement from './pages/admin/dashboard/board-management/BoardManagement';
import CurrentStatus from './pages/admin/dashboard/current-status/CurrentStatus';
import Dashboard from './pages/admin/dashboard/Dashboard';
import KeywordManagement from './pages/admin/dashboard/keyword-management/KeywordManagement';
import UserManagement from './pages/admin/dashboard/user-management/UserManagement';
import Join from './pages/admin/join/Join';
import Login from './pages/admin/login/Login';
import Home from './pages/home/Home';
import Introduce from './pages/introduce/Introduce';
import NotFound from './pages/not-found/NotFound';
import Preorder from './pages/preorder/Preorder';
import QnaBoard from './pages/qna/QnaBoard';
import Support from './pages/support/Support';
import TrendKeyword from './pages/trend-keyword/TrendKeyword';

function App() {
  return (
    <Routes>
      {/* 일반 사용자 및 관리자 */}
      <Route path="/" element={<Layout />}>
        {/* 메인페이지 */}
        <Route index element={<Home />} />
        {/* 소개 */}
        <Route path="/introduce" element={<Introduce />} />
        {/* 트렌드 키워드 */}
        <Route path="/trend-keyword" element={<TrendKeyword />} />
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
        일단은 임시로 바로 대시보드가 보여지게 구현함.
      */}
      <Route path="/admin" element={<Dashboard />}>
        <Route index element={<CurrentStatus />} />
        <Route path="/admin/user" element={<UserManagement />} />
        <Route path="/admin/keyword" element={<KeywordManagement />} />
        <Route path="/admin/board" element={<BoardManagement />} />
        <Route path="/admin/blacklist" element={<Blacklist />} />
      </Route>
      {/* 404 페이지 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
