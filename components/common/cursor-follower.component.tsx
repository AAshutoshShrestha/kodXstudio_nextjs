"use client"
import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e:any) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div
			className="fixed w-5 h-5 -m-4 bg-green-800 rounded-full pointer-events-none z-50"
			style={{
				transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
			}}
		/>
	);
};

export default CursorFollower;


