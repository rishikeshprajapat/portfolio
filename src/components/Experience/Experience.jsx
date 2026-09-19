
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "AWS Cloud Intern",
      org: "Trantor Software Pvt. Ltd.",
      date: "Jun 2026 – Jul 2026",
      location: "Chandigarh, India",
      points: [
        "Built and managed cloud infrastructure using AWS IAM, EC2, S3, VPC, Elastic Load Balancing, Auto Scaling, and CloudWatch.",
        "Deployed secure, scalable, and highly available cloud solutions following AWS best practices for infrastructure management and monitoring.",
        "Worked on hands-on practical tasks involving cloud networking, storage, compute, and monitoring.",
      ],
      tech: [
        "AWS",
        "IAM",
        "EC2",
        "S3",
        "VPC",
        "ELB",
        "Auto Scaling",
        "CloudWatch",
      ],
    },

    {
      role: "E-commerce Website Project",
      org: "Online Shopify General Store",
      date: "2025",
      points: [
        "Developed an online general store using Shopify to showcase and sell a variety of products.",
        "Designed a user-friendly storefront with organized product categories, images, descriptions, and pricing.",
        "Customized the storefront layout to provide a responsive and convenient online shopping experience.",
      ],
      tech: [
        "Shopify",
        "E-commerce",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },

    {
      role: "RAG-Based Chat Application Intern",
      org: "Oil and Natural Gas Corporation Limited (ONGC)",
      date: "Jun 2025 – Jul 2025",
      location: "Vadodara, India",
      points: [
        "Developed a Retrieval-Augmented Generation (RAG) chat application using Python, FastAPI, FAISS, LLaMA3, and Docling.",
        "Built a PDF ingestion pipeline using Docling to extract text, tables, and headings from scanned and digital reports.",
        "Designed a hierarchical chunking system based on headings, subheadings, and table contexts for accurate question answering.",
        "Generated embeddings using SentenceTransformer (all-MiniLM-L6-v2) and stored them in FAISS for fast semantic retrieval.",
        "Integrated Ollama LLaMA3 to provide context-aware question answering using retrieved document information.",
      ],
      tech: [
        "Python",
        "FastAPI",
        "FAISS",
        "LLaMA3",
        "Docling",
        "SentenceTransformer",
        "Ollama",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="exp-title">Experience & Projects</h2>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot"></div>

            <div className="exp-card">
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <span>{exp.date}</span>
              </div>

              <h4>{exp.org}</h4>

              {exp.location && <p>{exp.location}</p>}

              <ul>
                {exp.points.map((p, index) => (
                  <li key={index}>{p}</li>
                ))}
              </ul>

              <div className="tech-stack">
                <h5>Tech Stack</h5>

                <div className="tech-tags">
                  {exp.tech.map((t, index) => (
                    <span key={index} key={index}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;