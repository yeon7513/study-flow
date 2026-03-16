import { useParams } from 'react-router-dom';

function Join() {
  const { pw } = useParams();

  const SECRET_KEY = import.meta.env.VITE_ADMIN_ACCESS_KEY;

  if (pw !== SECRET_KEY) {
    return <Navigate to="/" replace />;
  }
  return <div>회원가입</div>;
}

export default Join;
