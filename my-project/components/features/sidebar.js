import React from 'react';
import { MdQueryStats} from 'react-icons/md';
import { HiX} from 'react-icons/hi';
import { FaUserFriends} from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { links } from '../../utils/data.js';
import { useGlobalContext } from '../../utils/context';
import ALink from './alink.js';

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();

	return (
		<div
			className={`transition-all  duration-500  fixed top-0 ${
				isSidebarOpen ? 'left-0' : '-left-64'
			}`}
		>
			<div className="flex h-screen overflow-y-auto flex-col bg-gray-50  w-64 px-4 py-8 border-r min-h-screen relative">
				<button
					onClick={closeSidebar}
					className="absolute top-1 right-1  text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800"
				>
					<HiX className="w-5 h-5" />
				</button>
				<h2 className="text-3xl font-semibold text-gray-800">
					Client <span className="text-indigo-500 ml-1">1</span>
				</h2>
				<div className="flex flex-col mt-6  justify-between flex-1">
					<nav className="text">
						{links.map((link, index) => {
							const { id, url, text, icon } = link;
							return (
								<ALink
									key={id}
									href={url}
									className={`capitalize flex items-center px-4 py-2 ${
										index === 0
											? 'bg-gray-200 text-gray-700'
											: null
									} ${
										index > 0
											? 'mt-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200 transform'
											: null
									} rounded-md`}
								>
									{icon}
									<span className="mx-4 font-normal">
										{text}
									</span>
								</ALink>
							);
						})}
						<hr className="my-6" />
						<ALink
							href="/utilisateurs"
							className="flex items-center px-4 py-2 mt-5 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform"
						>
							<FaUserFriends className="w-5 h-5" />
							<span className="mx-4 font-normal">Gestion utilisateurs</span>
						</ALink>
						<ALink
							href="/"
							className="flex items-center px-4 py-2 mt-5 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform"
						>
							<MdQueryStats className="w-5 h-5" />
							<span className="mx-4 font-normal">Statistiques</span>
						</ALink>
					</nav>
					
				</div>
			</div>
		</div>
	);
};

export default Sidebar;