import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Intro = () => {
    const navigate = useNavigate();
    const text1 = "방문해 주셔서 진심으로 감사합니다.";
    const text2 = "웹 개발자 신동준의 포트폴리오 페이지입니다.";

    const [displayText, setDisplayText] = useState("");
    const [phase, setPhase] = useState(1);

    useEffect(() => {
        let index = 0;
        let currentText = phase === 1 ? text1 : text2;

        const typing = setInterval(() => {
            setDisplayText(currentText.slice(0, index + 1));
            index++;

            if (index === currentText.length) {
                clearInterval(typing);

                if (phase === 1) {
                    setTimeout(() => {
                        setDisplayText("");
                        setPhase(2);
                    }, 3000);
                } else {
                    setTimeout(() => {
                        navigate("/main");
                    }, 3000);
                }
            }
        }, 100);

        return () => clearInterval(typing);
    }, [phase, navigate]);

    return (
        <div className="container">
            <div className="intro-content">
                <h1 className="hello typing">
                    {displayText}
                    <span className="cursor">|</span>
                </h1>
            </div>
        </div>
    );
};

export default Intro;