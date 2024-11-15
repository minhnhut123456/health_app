import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError() as Error;

  if (error) {
    console.error(error);
  }

  return <div>Error</div>;
};

export default ErrorBoundary;
