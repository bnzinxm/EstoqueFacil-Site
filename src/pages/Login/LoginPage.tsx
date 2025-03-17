import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function LoginPage() {
  return (
    <div className="flex h-screen bg-white">
      {/* Expanded Left Blue Section (40% width) */}
      <div className="hidden md:block relative w-2/5 bg-blue-600 overflow-hidden">
        {/* 3D Elements Container */}
        <div className="absolute inset-0 opacity-90">
          {/* Rotating Cube */}
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-400 transform rotate-45deg animate-pulse shadow-2xl">
            <div className="absolute inset-0 border-4 border-white/20 rounded-xl" />
          </div>

          {/* Floating Pyramid */}
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500 transform skew-y-12deg shadow-xl animate-float">
            <div className="absolute inset-0 border-4 border-white/20 rounded-lg" />
          </div>

          {/* Sphere */}
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-xl transform rotate-12deg animate-spin-slow">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
          </div>

          {/* Prism */}
          <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-blue-300 transform -skew-x-12deg shadow-lg">
            <div className="absolute inset-0 border-4 border-white/20 rounded-md" />
          </div>

          {/* Diagonal Grid Pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="w-full h-px bg-white transform rotate-45deg absolute top-20 -left-20" />
            <div className="w-full h-px bg-white transform -rotate-45deg absolute top-40 -right-20" />
            <div className="w-full h-px bg-white transform rotate-45deg absolute bottom-20 -right-20" />
          </div>
        </div>
      </div>

      {/* Right Login Form Section */}
      <div className="w-full md:w-3/5 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo with Original Colors */}
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Bem-Vindo!
            </h1>
            <p className="mt-4 text-gray-800">Welcome back to your professional community</p>
          </div>

          <form className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Email address
              </label>
              <input
                type="email"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-800"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">
                Password
              </label>
              <input
                type="password"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-800"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-800">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Sign in
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-800">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center items-center gap-2 py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors duration-200"
            >
              <FaGoogle className="h-5 w-5 text-blue-600" />
              Google
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center items-center gap-2 py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors duration-200"
            >
              <FaFacebook className="h-5 w-5 text-blue-600" />
              Facebook
            </button>
          </div>

          <div className="text-center">
            <h1 className="text-gray-800">Não tem uma conta? <a href="/register" className="text-blue-500 underline cursor-pointer">Registre-se!</a></h1>
          </div>
        </div>
      </div>
    </div>
  );
}