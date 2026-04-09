import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Row 1, Col 1: About */}
      <section className="grid-item about-section">
        <h2>About</h2>

      </section>

      {/* Row 1, Col 2: My Monthly Favorites */}
      <section className="grid-item about-section">
        <p>
          I am an Industrial Design graduate from Eindhoven University of
          Technology. Here, I have mostly focused on the improving the UI/UX of
          music listening in social settings. Nowadays, I focus on design
          engineering websites. Having knowledge of both the frontend and the
          backend, I am able to craft the experience exactly as desired. Due to
          my background in Industrial Design, I bring a fresh, user-focused
          perspective to web design.
        </p>
        </section>

      {/* Row 2, Col 1: Achievements */}
      <section className="grid-item achievements-section">
        <h2>Achievements</h2>
      </section>

      {/* Row 2, Col 2: Details Context (Experience, Skills, Languages) */}
      <section className="grid-item details-section">
        <div className="details-block">
          <h2>Experience</h2>
          <table className="details-table">
            <thead>
              <tr>
                <th>WHAT</th>
                <th>WHERE</th>
                <th className="align-right">WHEN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Design Engineer</td>
                <td>35®</td>
                <td className="align-right">2024 - Now</td>
              </tr>
              <tr>
                <td>Master of Industrial Design</td>
                <td>Eindhoven University of Technology</td>
                <td className="align-right">2021 - 2024</td>
              </tr>
              <tr>
                <td>Founder Rootnote</td>
                <td>Self</td>
                <td className="align-right">2021 - Now</td>
              </tr>
              <tr>
                <td>Bachelor of Industrial Design</td>
                <td>Eindhoven University of Technology</td>
                <td className="align-right">2018 - 2021</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="details-block">
          <h2>Skills</h2>
          <table className="details-table">
            <thead>
              <tr>
                <th>CATEGORY</th>
                <th className="align-right">TECHNOLOGIES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frontend</td>
                <td className="align-right">Vue, Astro, Javascript, HTML, CSS, Three.js, Pixi.js, WEBGL</td>
              </tr>
              <tr>
                <td>Backend</td>
                <td className="align-right">Python, Django, Postgres, Redis, Laravel, PHP, Typescript</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="details-block">
          <h2>Languages</h2>
          <table className="details-table">
            <thead>
              <tr>
                <th>LANGUAGE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>English</td>
              </tr>
              <tr>
                <td>Dutch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}