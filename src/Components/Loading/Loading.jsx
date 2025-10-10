import { useNavigation } from 'react-router-dom';

const Loading = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-red-600 z-50">
        <p className="text-20xl font-bold">Loading...</p>
        <span className="loading loading-spinner loading-20xl"></span>
      </div>
    );
  }

  return null;
};

export default Loading;
