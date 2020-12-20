
export default function Hero() {
  return (
    <div class="bg-gray-50">
      <div class="relative overflow-hidden">
        <div class="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div class="relative h-full">
            <svg class="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full" width="404" height="784" fill="none" viewBox="0 0 404 784">
              <defs>
                <pattern id="e229dbec-10e9-49ee-8ec3-0286ca089edf" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
            </svg>
            <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
              <defs>
                <pattern id="d2a68204-c383-44b1-b99f-42ccff4e5365" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
            </svg>
          </div>
        </div>

        <div class="relative pt-6 pb-16 sm:pb-24">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#" class="flex items-center justify-between w-full md:w-auto space-x-2">
                    <span class="sr-only">Workflow</span>
                    <img class="h-6 w-auto sm:h-8" src="/logo.svg" alt="" />
                    <h1 class="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-2xl">Replay</h1>
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button type="button" class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true">
                      <span class="sr-only">Open main menu</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:flex md:space-x-10">
                <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Product</a>

                <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Features</a>
    
                <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>

                <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Company</a>
              </div>
              <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span class="inline-flex rounded-md shadow">
                  <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500">
                    Log in
                  </a>
                </span>
              </div>
            </nav>
          </div>

          <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                </div>
                <div class="-mr-2">
                  <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close main menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                <div class="px-2 pt-2 pb-3 space-y-1" role="none">
                  <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Product</a>
    
                  <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Features</a>

                  <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Marketplace</a>

                  <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Company</a>
                </div>
                <div role="none">
                  <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700" role="menuitem">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div class="text-center">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block">
                  <span class="text-blue-500">Play</span>
                  <span> it like a video.</span>
                </span>
                <span class="block">
                  <span class="text-blue-500">Inspect</span>
                  <span> it like a website.</span>
                </span>
              </h1>
              <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">
              Sharing the perfect bug report is as simple as opening Replay, recording, and sharing the url.
              </p>
              <a href="#" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 sm:w-auto">
                Join the waitlist
              </a>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="absolute inset-0 flex flex-col" aria-hidden="true">
            <div class="flex-1"></div>
            <div class="flex-1 w-full bg-gray-800"></div>
          </div>
          <div class="max-w-5xl mx-auto px-4 sm:px-6">
            <img class="relative rounded-lg shadow-2xl" src="/screenshot.png" alt="App screenshot" />
          </div>
        </div>
      </div>
      <div class="bg-gray-800">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 class="text-center text-gray-200 text-lg font-regular tracking-wide md:max-w-4xl max-w-md mx-auto">
          Replay is a screen recorder for creating recordings <span class="font-bold">that developers can debug</span>. It includes comments, DOM elements, JavaScript sources and some mind-bendingly useful debugging tools.
          </h2>
          <a href="/">
            <h2 class="text-center text-gray-100 text-lg font-bold tracking-wide md:max-w-4xl max-w-md mx-auto underline mt-8">
            Watch the 30 second demo
            </h2>
          </a>
          {/* <h2 class="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">Replay is a browser recorder</h2> */}
        </div>
      </div>
    </div>
  );
}
