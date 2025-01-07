import Image from 'next/image';
import React from 'react';

interface SquareProps {
    isDark: boolean;
    row: number;
    col: number;
    isSelected: boolean;
    squareSize: number;
    piece: string | null;
    onSquareClick: (row: number, col: number) => void;
}

const ChessSquare: React.FC<SquareProps> = ({ isDark, row, col, isSelected, squareSize, onSquareClick, piece }) => {
    const squareClasses = `${isDark ? "bg-black-square hover:bg-black-square-highlight dark:bg-dark-black-square dark:hover:bg-dark-black-square-highlight" : "bg-white-square dark:bg-dark-white-square hover:bg-white-square-highlight dark:hover:bg-dark-white-square-highlight"} ${isSelected ? "border-4 border-blue-500 scale-105" : ""} flex cursor-pointer w-16 h-16 rounded-sm shadow-sm transition-all ease-in-out duration-200`;

    return (
        <div
            className={squareClasses}
            onClick={() => onSquareClick(row, col)}
        >
            {piece && (
                <img
                    // src={`/assets/pieces/${piece}.svg`} // Assuming SVG pieces are in assets/pieces/
                    src={`/assets/pieces/${piece}.svg`}
                    alt={piece}
                    className=" inset-0 w-full h-full object-contain"
                />
            )}
        </div>
    );
};

export default ChessSquare;
