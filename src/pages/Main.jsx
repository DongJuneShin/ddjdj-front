import "../App.css";
import {useEffect, useState} from "react";

const Main = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    return (
        <div className="container">
            <div className="glow glow1"></div>
            <div className="glow glow2"></div>
            {isMobile && (
                <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
            )}

            <div className={`side-menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li>Introduction</li>
                    <li>Skill</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* 왼쪽 */}
            <div className="left">
                <div className="left-content">
                    <h1>Introduction</h1>
                    <br/>
                    <p>안녕하세요</p>
                    <p>저는 풀스택 개발자</p>
                    <p>신동준 입니다</p>
                </div>
            </div>

            {/* 오른쪽 */}
            <div className={`right ${isMobile ? "hide" : ""}`}>
                <div className="main-content">
                    <h1>메인 화면입니다</h1>
                </div>
            </div>

        </div>
    );
};

export default Main;