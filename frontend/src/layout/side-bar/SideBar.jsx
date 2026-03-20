import { Link } from 'react-router-dom';

function SideBar({ menu }) {
  console.log(menu);

  return (
    <div>
      <ul>
        {menu.map((item, idx) => (
          <li key={idx}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
