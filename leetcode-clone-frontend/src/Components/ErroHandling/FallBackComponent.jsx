const FallBackComponent = ({ error, componentStack, resetErrorBoundary }) => {
  return (
    <div>
      <h1>
        An error occurred: {error.message} {componentStack}
      </h1>
    </div>
  );
};

export default FallBackComponent;
