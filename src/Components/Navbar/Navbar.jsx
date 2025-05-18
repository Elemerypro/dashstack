import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ms-64 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-self-auto mx-auto p-2">
                <div className='me-1'>

                    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900  rounded-lg hover:bg-white focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                    </button>


                    <div id="dropdownDots" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                            <li>
                                <NavLink href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</NavLink>
                            </li>
                            <li>
                                <NavLink href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</NavLink>
                            </li>
                        </ul>
                        <div className="py-2">
                            <NavLink href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</NavLink>
                        </div>
                    </div>

                </div>
                <div className="flex ">
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type='search' className='rounded-2xl py-1 px-9 bg-slate-200 w-80 border-0 outline-none' placeholder='search' />


                    </div>
                    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>

                    </div>

                </div>

                <div className="notification flex-1">


                    <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" type="button">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                            <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                        </svg>

                        <div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"></div>
                    </button>


                    <div id="dropdownNotification" className="z-20 hidden w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-800 dark:divide-gray-700" aria-labelledby="dropdownNotificationButton">
                        <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                            Notifications
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                            <NavLink href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="shrink-0">
                                    <img className="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                                    <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                                        <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                            <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                                            <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New message from <span className="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                                </div>
                            </NavLink>
                            <NavLink href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="shrink-0">
                                    <img className="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-2.jpg" alt="Joseph image" />
                                    <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
                                        <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span className="font-medium text-gray-900 dark:text-white">5 others</span> started following you.</div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
                                </div>
                            </NavLink>
                            <NavLink href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="shrink-0">
                                    <img className="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                                    <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
                                        <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> and <span className="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.</div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">44 minutes ago</div>
                                </div>
                            </NavLink>
                            <NavLink href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="shrink-0">
                                    <img className="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-4.jpg" alt="Leslie image" />
                                    <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-800">
                                        <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> mentioned you in a comment: <span className="font-medium text-blue-500" href="#">@bonnie.green</span> what do you say?</div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">1 hour ago</div>
                                </div>
                            </NavLink>
                            <NavLink href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="shrink-0">
                                    <img className="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-5.jpg" alt="Robert image" />
                                    <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-800">
                                        <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                            <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.</div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">3 hours ago</div>
                                </div>
                            </NavLink>
                        </div>
                        <NavLink href="#" className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                            <div className="inline-flex items-center ">
                                <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                </svg>
                                View all
                            </div>
                        </NavLink>
                    </div>

                </div>
                <div className="profile">

                    <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" class="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 me-2 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
                            Bonnie Green
                            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                    </button>

                   
                    <div id="dropdownAvatarName" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div class="font-medium ">Pro User</div>
                            <div class="truncate">name@flowbite.com</div>
                        </div>
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                            <li>
                                <NavLink href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</NavLink>
                            </li>
                            <li>
                                <NavLink href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</NavLink>
                            </li>
                        </ul>
                        <div class="py-2">
                            <NavLink href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</NavLink>
                        </div>
                    </div>

                </div>
            </div>


        </nav>
    )
}

export default Navbar