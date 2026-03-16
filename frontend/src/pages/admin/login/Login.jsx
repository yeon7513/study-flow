import { Navigate, useParams } from 'react-router-dom';

function Login() {
  const { pw } = useParams();

  const SECRET_KEY = import.meta.env.VITE_ADMIN_ACCESS_KEY;

  if (pw !== SECRET_KEY) {
    return <Navigate to="/" replace />;
  }

  return <div>로그인</div>;
}

export default Login;
