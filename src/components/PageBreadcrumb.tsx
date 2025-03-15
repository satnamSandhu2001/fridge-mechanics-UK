import { BREADCRUMB_BG } from '@/lib/assets';
import { ChevronsRight } from 'lucide-react';
import React from 'react';

type Props = {
	title: string;
	breadcrumb: Array<string>;
};

function PageBreadcrumb({ title, breadcrumb }: Props) {
	return (
		<div
			className="bg-cover bg-no-repeat bg-center relative"
			style={{ backgroundImage: `url(${BREADCRUMB_BG.src})` }}
		>
			<div className="absolute top-0 left-0 w-full h-full bg-secondary/70" />
			<div className="container min-h-[30vh] md:min-h-[35vh] flex items-center justify-center flex-col relative z-10 text-white">
				<h3 className="h1">{title}</h3>

				<div className="flex items-center gap-1 mt-4">
					{breadcrumb.map((item, index) => (
						<span key={index} className="flex items-center capitalize gap-1">
							{item}
							{index < breadcrumb.length - 1 && <ChevronsRight size={20} />}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default PageBreadcrumb;
