const Skills = () => {
  const skills = [
    {
      skill: "Laravel Framework",
    },
    {
      skill: "CodeIgniter 4 Framework",
    },
    {
      skill: "Django Framework",
    },
    {
      skill: "React",
    },
    {
      skill: "PHP",
    },
    {
      skill: "MySQL",
    },
    {
      skill: "C#",
    },
    {
      skill: "TypeScript",
    },
    {
      skill: "JavaScript",
    },
    {
      skill: "Python",
    },
  ];

  return (
    <>
      <h1>Skills</h1>

      <ul className="list-group list-group-flush w-100">
        {skills.map((skill) => (
          <li className="list-group-item">{skill.skill}</li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
