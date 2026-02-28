import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#E7E7E3] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1
          className="text-[120px] md:text-[180px] font-black text-[#111] leading-none mb-0"
          style={{ fontFamily: "'Rubik', sans-serif" }}
        >
          404
        </h1>

        <h2
          className="text-2xl md:text-3xl font-bold text-[#111] mb-3 -mt-2"
          style={{ fontFamily: "'Rubik', sans-serif" }}
        >
          Page Not Found
        </h2>

        <p className="text-gray-500 text-base mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-[#4A69E2] hover:bg-[#3a56c7] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 text-center"
          >
            Back to Home
          </Link>
          <Link
            href="/cart"
            className="bg-[#111] hover:bg-[#333] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 text-center"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
