import React from "react";
import "./Skills.css";

export default function Skills () {
    const Skills = [
        {image: '/converted/Skill1.webp', title: "Customer Centric"},
        {image: '/converted/Skill2.webp', title: "Operational Excellence"},
        {image: '/converted/Skill3.webp', title: "Innovation"},
        {image: '/converted/Skill4.webp', title: "Integrity"}
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
