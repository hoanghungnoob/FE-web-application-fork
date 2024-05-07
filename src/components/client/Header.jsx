import React, { useState, useEffect } from "react";

const Header = () => {
    const [time, setTime] = useState(60);
    const [timerRunning, setTimerRunning] = useState(false);

    const handleClick = () => {
        // Bắt đầu hoặc dừng thời gian khi nhấn vào nút
        setTimerRunning(!timerRunning);
    };

    useEffect(() => {
        let intervalId;
        if (timerRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        }

        return () => clearInterval(intervalId); // Hủy interval khi component unmount hoặc timerRunning thay đổi
    }, [timerRunning]); // Chạy lại effect khi timerRunning thay đổi

    return (
        <div>
            <p>Time: {time}</p>
            <button onClick={handleClick}>
                {timerRunning ? "Stop" : "Start"} Timer
            </button>
        </div>
    );
};
export default Header;
