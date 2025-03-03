const Experience = () => {
  const rolesInFCU = [
    {
      role: "Teaching programming languages: HTML, CSS, Bootstrap 5, PHP, Python, C#, JavaScript.",
    },
    {
      role: "Instructing on PHP frameworks (CodeIgniter 4, Laravel) and Python (Django).",
    },
    {
      role: "Teaching MySQL for database management.",
    },
    {
      role: "Guiding students in developing web applications with Laravel, CodeIgniter 4, Django, and desktop applications using C# .NET Framework WinForms, all with MySQL database.",
    },
    {
      role: "Served as adviser of 4th-year-level students of the College of Computer Studies for the academic year of 2023-2024.",
    },
  ];

  return (
    <>
      <h1>Work Experience</h1>
      <h4 className="mb-1">
        Filamer Christian University | Full-Time Faculty | February 2023 -
        Present
      </h4>
      <ol className="list-group list-group-flush">
        {rolesInFCU.map((roleInFCU) => (
          <li className="list-group-item">{roleInFCU.role}</li>
        ))}
      </ol>
    </>
  );
};

export default Experience;
