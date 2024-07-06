document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll('.skills-list li');

    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            alert(`لقد نقرت على ${skill.textContent}`);
        });
    });
});