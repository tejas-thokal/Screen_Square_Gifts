import React from "react";
import "./Skills.css";
import Skill1 from "./converted/skill1.webp";
import Skill2 from "./converted/skill2.webp";
import Skill3 from "./converted/skill3.webp";
import Skill4 from "./converted/skill4.webp";

export default function Skills () {
    const Skills = [
        {image: Skill1, title: "Customer Centric"},
        {image: Skill2, title: "Operational Excellence"},
        {image: Skill3, title: "Innovation"},
        {image: Skill4, title: "Integrity"}
    ];
    return (
        <div className="box">
            <h1>We Offer Seamless Experience</h1>
            <div className="skills-container">
            {Skills.map((Skill, index) => (
                <div key={index} className="skill-item">
                    <img src={Skill.image} alt={`Skill ${index + 1}`} />
                    <h3>{Skill.title}</h3>
                </div>
            ))}
        </div>
        </div>
    );
}
