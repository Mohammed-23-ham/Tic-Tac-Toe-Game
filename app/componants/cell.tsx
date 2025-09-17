import { Dispatch, SetStateAction } from "react";

type CellProps = {
    id: number;
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell: string;
    winning: string;
};

const Cell = ({ go, setGo, id, cells, setCells, cell, winning }: CellProps) => {
    const handleClick = () => {
        if (winning || cells[id]) return;
        handleCellChange(go);
        setGo(go === "circle" ? "cross" : "circle");
    };

    const handleCellChange = (cellToChange: string) => {
    if (!cells || id < 0 || id >= cells.length) return; 
    let copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
};

    return (
        <div className="square" onClick={handleClick}>
            <div className={cell}>{cell ? (cell === "circle" ? "O" : "X") : ""}</div>
        </div>
    );
};

export default Cell;