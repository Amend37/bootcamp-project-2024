import React from "react";

async function fetchProjects() {
  const res = await fetch("http://localhost:3000/api/Projects", {
    cache: "no-store",
  }); 
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

export default async function PortfolioPage() {
  let projects = [];

  try {
    
    projects = await fetchProjects();
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  if (!projects || projects.length === 0) {
    return (
      <div>
        <h1>Portfolio</h1>
        <p>No projects found. Please check back later!</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Portfolio</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {projects.map((project: any) => (
          <div
            key={project.title}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "left",
              backgroundColor: "#f9f9f9",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "12px",
              }}
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginRight: "10px",
                    color: "#0070f3",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Live Demo
                </a>
              )}
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0070f3",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Code Repository
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
