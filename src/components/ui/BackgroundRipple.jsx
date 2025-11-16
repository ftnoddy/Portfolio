import { useState, useEffect, useRef } from 'react'

const BackgroundRipple = ({ 
  rows = 8, 
  cols = 27, 
  cellSize = 56,
  className = ''
}) => {
  const [clickedCell, setClickedCell] = useState(null)
  const gridRef = useRef(null)

  const handleCellClick = (row, col) => {
    setClickedCell({ row, col })
    setTimeout(() => setClickedCell(null), 200)
  }

  return (
    <div 
      ref={gridRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      <DivGrid
        rows={rows}
        cols={cols}
        cellSize={cellSize}
        borderColor="rgba(6, 182, 212, 0.15)"
        fillColor="rgba(6, 182, 212, 0.03)"
        clickedCell={clickedCell}
        onCellClick={handleCellClick}
        interactive={true}
      />
    </div>
  )
}

const DivGrid = ({
  rows,
  cols,
  cellSize,
  borderColor,
  fillColor,
  clickedCell,
  onCellClick,
  interactive = false,
  className = ''
}) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!interactive || !containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const col = Math.floor(x / cellSize)
      const row = Math.floor(y / cellSize)
      
      if (col >= 0 && col < cols && row >= 0 && row < rows) {
        if (onCellClick) {
          onCellClick(row, col)
        }
      }
    }

    if (interactive) {
      const container = containerRef.current
      if (container) {
        container.addEventListener('mousemove', handleMouseMove)
        return () => container.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [interactive, rows, cols, cellSize, onCellClick])

  return (
    <div
      ref={containerRef}
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        width: '100%',
        height: '100%',
        pointerEvents: interactive ? 'auto' : 'none',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      {Array.from({ length: rows * cols }).map((_, index) => {
        const row = Math.floor(index / cols)
        const col = index % cols
        const isClicked = clickedCell?.row === row && clickedCell?.col === col

        return (
          <div
            key={index}
            className="cell-ripple"
            style={{
              width: cellSize,
              height: cellSize,
              border: `1px solid ${borderColor}`,
              backgroundColor: fillColor,
              animation: isClicked ? 'cell-ripple 200ms ease-out' : 'none',
            }}
          />
        )
      })}
    </div>
  )
}

export default BackgroundRipple

