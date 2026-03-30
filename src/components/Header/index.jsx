export default function Header() {
  return (
    <>
      <style>{`
        .hero-container {
          height: 100vh;
          background-image: url("https://i.pinimg.com/1200x/8c/61/ec/8c61ec725db7342a3f0926b1401140e8.jpg");
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.55);
        }

        .hero-content {
          position: relative;
          max-width: 800px;
          padding: 20px;
        }

        .hero-title {
          font-size: 48px;
          color: #da6e27;
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .hero-text {
          font-size: 18px;
          color: #ffb486;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .btn-primary-custom {
          background: #edd9cc;
          color: black;
          padding: 12px 28px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          transition: 0.3s;
        }

        .btn-primary-custom:hover {
          background: #ffb486;
        }

        .btn-outline-custom {
          border: 1px solid white;
          color: white;
          padding: 12px 28px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          transition: 0.3s;
        }

        .btn-outline-custom:hover {
          background: white;
          color: black;
        }
      `}</style>

      <div className="hero-container">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            MANAGE TASKS. TRACK PROGRESS.
          </h1>

          <p className="hero-text">
            A simple workspace to create tasks, assign work, and monitor
            team productivity in one centralized dashboard.
          </p>

          <div className="hero-buttons">
            <a href="/login" className="btn-primary-custom">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}