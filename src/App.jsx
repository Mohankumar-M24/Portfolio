import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Mohan Kumar M</h1>
        <p className="text-lg">Full Stack Developer | MERN Stack</p>
      </header>

      {/* About Me */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p>
          Passionate MERN stack developer with hands-on experience in building responsive web
          applications using React, Node.js, MongoDB, and MySQL. Trained at GUVI and actively
          developing real-world projects.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Frontend: HTML5, CSS3, JavaScript, React.js, Tailwind CSS</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB, MySQL</li>
          <li>Tools: Git, GitHub, Postman, VS Code</li>
          <li>Soft Skills: Problem-solving, Teamwork, Communication</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Projects</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold"> E-Commerce Website</h3>
            <p>Tech Stack: MERN, Razorpay, JWT</p>
            <p>
              Feature-rich app with user/seller roles, cart, order history, secure payments, and
              dashboards.
            </p>
            <a href="https://github.com/Mohankumar-M24" target="_blank" className="text-blue-600 underline">View on GitHub</a>
          </div>

          <div>
            <h3 className="text-xl font-bold"> Invoice Builder</h3>
            <p>Tech Stack: React.js, jsPDF</p>
            <p>
              Dynamic invoice generator with client/product inputs, tax & discount logic, and PDF
              export.
            </p>
            <a href="https://github.com/Mohankumar-M24" target="_blank" className="text-blue-600 underline">View on GitHub</a>
          </div>

          <div>
            <h3 className="text-xl font-bold"> Movie Review App</h3>
            <p>Tech Stack: React, TMDB API</p>
            <p>
              Search, view, and rate movies. Includes live search, modal view, and user reviews.
            </p>
            <a href="https://github.com/Mohankumar-M24" target="_blank" className="text-blue-600 underline">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        <p>B.Sc. Computer Technology – SNMV College of Arts and Science</p>
        <p>Year of Passing: 2020</p>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Professional Experience</h2>
        <div>
          <h3 className="text-lg font-bold">Cognizant – Business Support Executive (May 2022 – May 2024)</h3>
          <ul className="list-disc list-inside">
            <li>Managed backend recruitment data using Excel and Outlook</li>
            <li>Ensured accuracy and timeliness in structured reporting</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">Quintessence – AR Analyst (Jul 2021 – May 2022)</h3>
          <ul className="list-disc list-inside">
            <li>Reviewed insurance claims and managed appeals</li>
            <li>Specialized in denial management and resolution coordination</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Certifications</h2>
        <p>
          Full Stack Web Development – GUVI (IIT-M & IIM-C Incubated):
          <a href="https://drive.google.com/file/d/1nkIetFbBh5TcGmPEWC56mcEGW-6Tp670/view" className="text-blue-600 underline" target="_blank"> View Certificate</a>
        </p>
      </section>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <p>Email: 1726k0146@gmail.com</p>
        <p>
          GitHub:
          <a href="https://github.com/Mohankumar-M24" className="text-blue-600 underline" target="_blank">
            github.com/Mohankumar-M24
          </a>
        </p>
        <p>
          LinkedIn:
          <a href="https://www.linkedin.com/in/mohan-kumar-8b9026194/" className="text-blue-600 underline" target="_blank">
            linkedin.com/in/mohan-kumar-8b9026194
          </a>
        </p>
      </section>
    </div>
  );
}
