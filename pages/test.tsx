import { useState } from 'react';
import { SideNavbar } from '../components/navbar/side-navbar/side-navbar';
function Test() {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <button
        className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5'
        type='button'
        data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasRight'
        aria-controls='offcanvasRight'
        onClick={() => setShow(!show)}
      >
        Toggle right offcanvas
      </button>

      <div
        className={`${
          show ? 'visible w-80' : 'w-0 invisible'
        } offcanvas offcanvas-end fixed bottom-0 flex flex-col  bg-red-200 bg-clip-padding shadow-sm outline-none transition-all duration-300 ease-in-out text-gray-700 top-0 right-0 border-none`}
        id='offcanvasRight'
        aria-labelledby='offcanvasRightLabel'
      >
        <div className='offcanvas-header flex items-center justify-between p-4'>
          <h5 className='offcanvas-title mb-0 leading-normal font-semibold' id='offcanvasRightLabel'>
            Offcanvas right
          </h5>
          <button
            type='button'
            className='btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
            onClick={() => setShow(false)}
          >
            ❌
          </button>
        </div>
        <div className='offcanvas-body flex-grow p-4 overflow-y-auto'>...</div>
      </div> */}
    </>
  );
}

export default Test;
