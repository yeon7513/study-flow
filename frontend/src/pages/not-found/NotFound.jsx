import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      NotFound 404
      <div>
        <button onClick={() => navigate('/', { replace: true })}>HOME</button>
      </div>
    </div>
  );
}

export default NotFound;
