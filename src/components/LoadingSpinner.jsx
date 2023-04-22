import Spinner from 'react-bootstrap/Spinner';
import 'assets/scss/loadingSpinner.scss';

const LoadingSpinner = () => (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);

export default LoadingSpinner;
