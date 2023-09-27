import { Link } from 'react-router-dom';

export default function () {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={'/'}>
        <p>Return to Main page</p>
      </Link>
    </>
  );
}