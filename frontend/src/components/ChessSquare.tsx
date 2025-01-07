import React from 'react';

interface SquareProps {
    isDark: boolean;
    row: number;
    col: number;
    isSelected: boolean;
    squareSize: number;
    onSquareClick: (row: number, col: number) => void;
}

const ChessSquare: React.FC<SquareProps> = ({ isDark, row, col, isSelected, squareSize, onSquareClick }) => {
    const squareClasses = `${isDark ? "bg-black-square dark:bg-dark-black-square hover:bg-dark-black-square-highlight" : "bg-white-square dark:bg-dark-white-square hover:bg-dark-white-square-highlight"} ${isSelected ? "border-4 border-blue-500 scale-105" : ""} flex cursor-pointer w-16 h-16 rounded-sm shadow-sm transition-all ease-in-out duration-200`;

    return (
        <div
            className={squareClasses}
            onClick={() => onSquareClick(row, col)}
        ></div>
    );
};

export default ChessSquare;
