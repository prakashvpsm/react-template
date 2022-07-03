import React from 'react';
import Search from './search';
import { Link } from 'react-router-dom';

const sideBarMenu = [{id: 1, name: 'Dashboard', path: ''},{id: 2, name: 'User', path: 'users'}];

export default function SideBar() {
    return (
        <div className='w-72 border-r border-gray-200 h-screen bg-white flex flex-col'>
            <div className='p-5 flex items-center'>
                <div>
                    <h6 className='font-bold text-3xl text-primary'>Logo</h6>
                </div>
            
            </div>
            <div className='p-5'>
                <div className='bg-gray-100'>
                    <Search />
                </div>
            </div>
            <div className='p-5'>
                {sideBarMenu.map( (sideMenu) => (
                    <div className='flx'>
                        <div className='p-1'>
                        
                        </div>
                        <div className='p-4'>
                            <Link to={`/${sideMenu.path}`}>{sideMenu.name}</Link>
                        </div>
                    </div>
                ) )}
            </div>
            <div className='h-16 border-t border-gray-200 mt-auto'>
            
            </div>
        </div>
    )
}
