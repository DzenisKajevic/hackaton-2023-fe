import React from 'react'

const removePassword = () => {
    localStorage.removeItem("profilePassword");
    window.location.replace('/dashboard');
}

const AdminPassword = () => {
    return (
        <div className='min-h-[100vh] px-[50px] smd:px-[100px] bg-primary flex items-center justify-center flex-col'>
            <div className='bg-grey3 flex flex-col items-center justify-center p-[40px] rounded-[10px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66">
                    <g id="Group_47" data-name="Group 47" transform="translate(-798 -477)">
                        <circle id="Ellipse_7" data-name="Ellipse 7" cx="33" cy="33" r="33" transform="translate(798 477)" fill="#eaff5f" />
                        <path id="interface-alert-warning-triangle" d="M13.89,1.235a2.824,2.824,0,0,0-1.031.308A2.9,2.9,0,0,0,11.705,2.58c-.061.093-1.419,2.8-5.613,11.187C3.049,19.853.538,24.887.511,24.955a2.987,2.987,0,0,0,2.336,4.023L2.992,29l11.132,0c8.116,0,11.166,0,11.26-.009a2.932,2.932,0,0,0,.963-.251,2.99,2.99,0,0,0,1.661-1.967,2.921,2.921,0,0,0,.09-.6.162.162,0,0,1,.011-.076.134.134,0,0,0,.011-.068c0-.038,0-.058-.011-.054s-.011-.026-.011-.083a2.873,2.873,0,0,0-.194-.94c-.026-.067-2.538-5.1-5.581-11.187-4.045-8.09-5.554-11.1-5.612-11.185a2.906,2.906,0,0,0-1.155-1.04,2.776,2.776,0,0,0-.8-.276,3.306,3.306,0,0,0-.862-.032m.128,1.991a1.006,1.006,0,0,0-.592.365c-.044.054-1.2,2.348-5.553,11.065C4.848,20.7,2.362,25.688,2.348,25.732A1.113,1.113,0,0,0,2.3,26.1a1,1,0,0,0,.8.9c.124.024,22.093.024,22.207,0a1,1,0,0,0,.476-.243.985.985,0,0,0,.316-.833,1.171,1.171,0,0,0-.039-.192c-.015-.045-2.5-5.023-5.52-11.068-4.336-8.671-5.505-11-5.552-11.063a.994.994,0,0,0-.626-.382,1.218,1.218,0,0,0-.351.005M14.1,10.15a1,1,0,0,0-.864.779c-.016.077-.018.4-.017,3.18,0,2.086,0,3.118.012,3.166a1.012,1.012,0,0,0,.611.743.86.86,0,0,0,.367.065.887.887,0,0,0,.539-.156,1.283,1.283,0,0,0,.267-.25,1,1,0,0,0,.171-.4c.008-.048.012-1.08.012-3.166,0-3.411.005-3.166-.068-3.349a1.039,1.039,0,0,0-.572-.556,1.018,1.018,0,0,0-.458-.055m-.184,10.936a1.989,1.989,0,0,0-1.687,2.1,1.768,1.768,0,0,0,.111.538,2,2,0,0,0,1.176,1.191,2.061,2.061,0,0,0,1.385,0,1.985,1.985,0,0,0,.28-3.592,2.085,2.085,0,0,0-.692-.234,2.6,2.6,0,0,0-.572,0M.31,26.044c0,.037,0,.05,0,.03a.3.3,0,0,0,0-.067c0-.017,0,0,0,.036" transform="translate(816.786 494.887)" fill="#142214" fill-rule="evenodd" />
                    </g>
                </svg>
                <p className='w-2/3 smd:w-1/2 mt-[30px] text-grey4 text-center'>This is the password for your <span className='font-bold'>Admin</span> account. Make sure to memorize it in any way you like.</p>
                <div className='bg-white mt-[30px] rounded-[10px] p-[16px]'>
                    <p className='text-[24px] font-semibold'>73SDKNjsmnas</p>
                </div>
            </div>
            <a href="#" onClick={ removePassword } className='border-[1px] border-grey4 text-white tertiary-button p-[16px] rounded-[6px] mt-[50px] mb-[20px]'>
                Continue to dashboard
            </a>
        </div>
    )
}

export default AdminPassword