"use client";

import React, { JSX, useState } from 'react';
import ChessSquare from './ChessSquare';
import { BOARD_BREADTH, BOARD_LENGTH, SQUARE_SIZE } from '@/app/constants';

const initialBoardState = [
    ["bRook", "bKnight", "bBishop", "bKing", "bQueen", "bBishop", "bKnight", "bRook"],
    ["bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn"],
    // Empty rows
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    ["wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn"],
    ["wRook", "wKnight", "wBishop", "wQueen", "wKing", "wBishop", "wKnight", "wRook"],
];


// Component to create the chess board
const Chessboard = () => {
    const [selectedSquare, setSelectedSquare] = useState<{ row: number; col: number } | null>(null);
    const [boardState, setBoardState] = useState(initialBoardState);

    const handleSquareClick = (row: number, col: number) => {
        setSelectedSquare({ row, col });
    };

    const renderBoard = () => {
        const board: JSX.Element[] = [];

        for (let row = 0; row < BOARD_LENGTH; row++) {
            const boardRow: JSX.Element[] = [];
            for (let col = 0; col < BOARD_BREADTH; col++) {
                const piece = boardState[col][row];
                boardRow.push(
                    <ChessSquare
                        key={`${row}-${col}`}
                        isDark={(row + col) % 2 === 0}
                        row={row}
                        col={col}
                        squareSize={SQUARE_SIZE}
                        piece={piece}
                        isSelected={selectedSquare?.row === row && selectedSquare?.col === col}
                        onSquareClick={handleSquareClick}
                    />
                );
            }
            board.push(
                <div key={row} className="board-row">
                    {boardRow}
                </div>
            );
        }

        return board;
    };

    return (
        <div className="flex border-8 rounded-sm w-fit border-black-square-highlight">
            {renderBoard()}
        </div>
    );
};

export default Chessboard;
