import { SQUARE_SIZE } from '@/app/constants';
import React from 'react';

interface SquareProps {
    isDark: boolean;
    row: number;
    col: number;
    isSelected: boolean;
    onSquareClick: (row: number, col: number) => void;
}

const ChessSquare: React.FC<SquareProps> = ({ isDark, row, col, isSelected, onSquareClick }) => {
    const squareClasses = `${isDark ? "bg-dark" : "bg-light"} ${isSelected ? "border-4 border-blue-500 scale-105" : ""}
    flex cursor-pointer w-${SQUARE_SIZE} h-${SQUARE_SIZE} rounded-sm shadow-sm transition-all ease-in-out duration-200`;

    return (
        <div
            className={squareClasses}
            onClick={() => onSquareClick(row, col)}
        ></div>
    );
};

export default ChessSquare;
