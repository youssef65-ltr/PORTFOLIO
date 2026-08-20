import React, { useRef, useEffect, useState } from 'react';
import "./pythonGame.css"
export default function PythonGame() {

    const canvasRef = useRef(null);

    const foodX = useRef(0)
    const foodY = useRef(0)

    const unitSize = 25;
    const gameWidth = 500;
    const gameHeight = 500;

    const xVelocity = useRef(unitSize);
    const yVelocity = useRef(0)

    const timerRef = useRef(null);


    const [score, setScore] = useState(0)
    const [isRunning, setIsRunning] = useState(false);


    const snake = useRef([
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize * 1, y: 0 },
        { x: 0, y: 0 }
    ]);



    const createFood = () => {
        foodX.current = Math.round(Math.random() * ((gameWidth - unitSize) / unitSize)) * unitSize
        foodY.current = Math.round(Math.random() * ((gameHeight - unitSize) / unitSize)) * unitSize
    }
    const drawFood = (ctx) => {
        ctx.fillStyle = "red";
        ctx.fillRect(foodX.current, foodY.current, unitSize, unitSize)
    }
    const gameStart = () => {
        xVelocity.current = unitSize
        yVelocity.current = 0
        snake.current = [
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize * 1, y: 0 },
        { x: 0, y: 0 }
    ]
        setIsRunning(true)
        setScore(0)
    }
    const moveSnake = () => {
        const head = {
            x: snake.current[0].x + xVelocity.current,
            y: snake.current[0].y + yVelocity.current
        }
        snake.current.unshift(head)
        // if food is eaten :
        if (snake.current[0].x == foodX.current && snake.current[0].y == foodY.current) {
            setScore(prev => prev + 1)
            createFood()
        } else {
            snake.current.pop()
        }
    }
    const drawSnake = (ctx) => {
        ctx.fillStyle = "blue";
        ctx.strokeStyle = "black";
        snake.current.forEach(segment => {
            ctx.fillRect(segment.x, segment.y, unitSize, unitSize);
            ctx.strokeRect(segment.x, segment.y, unitSize, unitSize);
        });
    }
    const clearBoard = (ctx) => {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, gameWidth, gameHeight)
    }
    const nextTick = (ctx) => {
        if (isRunning) {
            setTimeout(() => {
                clearBoard(ctx);
                drawFood(ctx);
                moveSnake();
                drawSnake(ctx);
                checkGameOver() && nextTick(ctx);
            }, 100);

            timerRef.current
        } else {
            displayGameOver();
        }
    }
    const changeDirection = (event) => {
        const keypressed = event.keyCode;
        // up = 38 , down = 40 , left = 37 , right = 39
        const UP = 38
        const DOWN = 40
        const LEFT = 37
        const RIGHT = 39

        const goingUp = (yVelocity.current == -unitSize);
        const goingDown = (yVelocity.current == unitSize);
        const goingLeft = (xVelocity.current == -unitSize);
        const goingRight = (xVelocity.current == unitSize);

        switch (true) {
            case (keypressed == UP && !goingDown):
                xVelocity.current = 0;
                yVelocity.current = -unitSize;
                break;
            case (keypressed == DOWN && !goingUp):
                xVelocity.current = 0;
                yVelocity.current = unitSize;
                break;
            case (keypressed == LEFT && !goingRight):
                xVelocity.current = -unitSize;
                yVelocity.current = 0;
                break;
            case (keypressed == RIGHT && !goingLeft):
                xVelocity.current = unitSize;
                yVelocity.current = 0;
                break;

        }
    }
    const checkGameOver = () => {
        if (
            snake.current[0].x < 0 ||
            snake.current[0].x >= gameWidth ||
            snake.current[0].y < 0 ||
            snake.current[0].y >= gameHeight 
        ) {
            setIsRunning(false);
            return false
        }
        else {
            return true
        }

    }
    const displayGameOver = () => {
    }
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return null;
        const ctx = canvas.getContext("2d")
        if (!ctx) return null

        if (isRunning) {
            createFood()
            nextTick(ctx)
            window.addEventListener("keydown", changeDirection)
        }



        return () => {
            window.removeEventListener("keydown", changeDirection)
        }


    }, [isRunning])




    return (
        <div className='gameContainer'>
            <div>score : {score}</div>
            <canvas
                className='gameBoard'
                ref={canvasRef}
                width={gameWidth}
                height={gameHeight}
            />
            <button onClick={gameStart} disabled={isRunning}>start</button>

        </div>
    )
}