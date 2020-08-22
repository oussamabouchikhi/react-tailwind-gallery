import React from 'react';
import SwitchThemeButton from './SwitchThemeButton';
const Navbar = ({ toggleTheme }) => {

  return (
    <header className='bg-gray-100'>
        <div class="container mx-auto py-3">
            <div class="flex items-center justify-between">
                <div class="text-purple-500 md:text-center text-2xl font-semibold">
                    Gallery.jpg
                </div>
                <div class="flex items-center justify-end w-full">
                    <button
                      onClick={toggleTheme}
                      class='text-gray-600 focus:outline-none mx-4 sm:mx-0'
                    >
                        <SwitchThemeButton />
                    </button>

                    <div class="flex sm:hidden">
                        <button type="button" class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    </header>
  )
}

export default Navbar;
