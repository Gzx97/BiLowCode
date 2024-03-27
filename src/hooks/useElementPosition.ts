import { useState, useEffect, RefObject } from 'react';

interface Position {
    top: number;
    left: number;
}

const useElementPosition = (ref: RefObject<HTMLElement>): Position => {
    const [position, setPosition] = useState<Position>({ top: 0, left: 0 });

    useEffect(() => {
        const handlePosition = () => {
            if (ref.current) {
                const { top, left } = ref.current.getBoundingClientRect();
                setPosition({ top, left });
            }
        };

        const handleScrollAndResize = () => {
            handlePosition();
        };
        window.addEventListener('scroll', handleScrollAndResize);
        window.addEventListener('resize', handleScrollAndResize);

        handlePosition();

        return () => {
            window.removeEventListener('scroll', handleScrollAndResize);
            window.removeEventListener('resize', handleScrollAndResize);
        };
    }, [ref]);

    return position;
};

export default useElementPosition;
