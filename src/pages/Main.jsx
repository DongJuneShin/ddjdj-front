import "../App.css";
import { useEffect, useState } from "react";
import profileImg from "../assets/profileImg.png"

const Main = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1100);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="main-container">
            <div className="main-glow main-glow1"></div>
            <div className="main-glow main-glow2"></div>
            {isMobile && (
                <div className="main-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
            )}
            <div className={`main-side-menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li>소개</li>
                    <li>학력</li>
                    <li>기술</li>
                    <li>자격</li>
                    <li>정보</li>
                </ul>
            </div>
            <div className="main-left">
                <div className="main-left-content">
                    <h1>Introduction</h1>

                    <p>안녕하세요</p>
                    <p>저는 풀스택 개발자</p>
                    <p>신동준 입니다</p>
                </div>
            </div>
            <div className={`main-right ${isMobile ? "hide" : ""}`}>
                <div className="main-right-content">
                    <div className="profile-wrap">
                        <img src={profileImg} alt="프로필" className="profile-img"/>
                    </div>
                    <h1 className="profile-name">Shin Dong June</h1>
                    <div className="main-menu-list">
                        <div className="main-menu-item active">인적사항</div>
                        <div className="main-menu-item">학력</div>
                        <div className="main-menu-item">기술</div>
                        <div className="main-menu-item">자격</div>
                        <div className="main-menu-item">정보</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;