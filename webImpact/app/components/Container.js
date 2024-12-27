export default function Container({ children }) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        {/* Square container: height and width are the same */}
        <div className="bg-blue-900 p-12 rounded-lg shadow-lg w-[50vw] h-[50vw] max-w-full flex justify-center items-center">
          <div className="text-white">
            {children}
          </div>
        </div>
      </div>
    );
  }
  