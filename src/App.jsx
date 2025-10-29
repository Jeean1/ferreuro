import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = `Hola, quiero agendar mi compra del Kit TOTAL 20V.\n\nNombre: ${formData.nombre}\nTeléfono: ${formData.telefono}\nDirección: ${formData.direccion}`;
    const url = `https://wa.me/573168014144?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="landing">
      {/* Header */}
      <nav className="navbar">
        <img
          src="https://scontent.fclo2-2.fna.fbcdn.net/v/t1.6435-9/177345488_100563652187179_7108501711940390842_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ghhjCDy3_JYQ7kNvwFn5oI-&_nc_oc=AdkZpss0vROwPI3o0WA4ZyNo6_iEEt5I5TWkjS2dP5cnvtm3CXgVYQFWr31o6OhG53k&_nc_zt=23&_nc_ht=scontent.fclo2-2.fna&_nc_gid=TXAuchemp6D-w5SqWO2XUA&oh=00_AffBBHaeXYS_usOhBTzOlDUxMs-7XTC_dOhVYoIz4oZ3iA&oe=6929CF16"
          alt="Logo Euroferrelectric"
          className="logo"
        />
        <a
          href="https://www.instagram.com/euroferrelectric/"
          target="_blank"
          rel="noreferrer"
          className="insta-link"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="insta-icon"
          />
        </a>
      </nav>

      {/* Hero */}
      <header className="hero">
        <img
          src="https://carbonestore.com/cdn/shop/files/36_UTHKTHP116521_800x.jpg?v=1742479457"
          alt="Taladro Inalámbrico TOTAL 20V"
          className="hero-img"
        />
        <h1>Kit Profesional TOTAL 20V – Taladro Inalámbrico + 165 Piezas</h1>
        <p className="subtitle">
          Potencia, precisión y durabilidad en un solo kit. Diseñado para
          profesionales que exigen resultados.
        </p>
        <button className="cta-btn" onClick={() => window.scrollTo(0, 800)}>
          Agendar ahora
        </button>
      </header>

      {/* Beneficios */}
      <section className="benefits">
        <h2>💪 Lo que hace único este kit</h2>
        <ul>
          <li>
            ⚙️ Potencia real de 66 Nm para perforar acero, concreto y madera.
          </li>
          <li>🔋 Batería 20V de larga duración + cargador inteligente.</li>
          <li>🧰 165 accesorios: brocas, puntas, llaves, y más.</li>
          <li>💡 Luz LED integrada para máxima visibilidad.</li>
          <li>🧠 Control de velocidad variable y función reversa.</li>
          <li>🏗️ Ideal para profesionales, técnicos y proyectos exigentes.</li>
          <li>
            💰 Oferta limitada: <b>$475.875</b> (antes <s>$634.500</s>)
          </li>
        </ul>
      </section>

      {/* Formulario */}
      <section className="form-section" id="agenda">
        <h2>Agendar compra o llamada</h2>
        <p>Déjanos tus datos y uno de nuestros asesores te contactará.</p>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            required
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            required
            value={formData.telefono}
            onChange={handleChange}
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            required
            value={formData.direccion}
            onChange={handleChange}
          />
          <button type="submit" className="cta-btn">
            Pide ahora por WhatsApp 📦{" "}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          📍 Cra. 40# 34-37 B/quilla – Euro Ferrelectric | Tel: 316 8014144 |
          L-S 8 am - 6 pm
        </p>
        <small>© 2025 Euroferrelectric. Todos los derechos reservados.</small>
      </footer>
    </div>
  );
}

export default App;
