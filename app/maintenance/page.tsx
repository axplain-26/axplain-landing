export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <div className="mb-8">
        <img src="/logo.png" alt="AXPlain" className="h-10 mx-auto" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-3">
        사이트 점검 중입니다
      </h1>
      <p className="text-gray-500 text-base max-w-sm leading-relaxed">
        더 나은 서비스 제공을 위해 잠시 점검 중입니다.
        <br />
        불편을 드려 죄송합니다.
      </p>
      <p className="mt-8 text-sm text-gray-400">
        문의:{" "}
        <a href="mailto:service@axplain.ai" className="underline">
          service@axplain.ai
        </a>
      </p>
    </div>
  );
}
