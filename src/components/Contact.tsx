import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const subjectLabels: Record<string, string> = {
    commande: "Commande spéciale",
    mariage: "Gâteau de mariage",
    evenement: "Événement",
    info: "Renseignement",
    autre: "Autre",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Bonjour Wɛ̀li - Pâtisserie sans gluten afro-healthy 🥐,`,
      ``,
      `👤 Nom : ${formData.name}`,
      formData.phone ? `📞 Téléphone : ${formData.phone}` : null,
      formData.subject
        ? `📌 Sujet : ${subjectLabels[formData.subject] ?? formData.subject}`
        : null,
      ``,
      `💬 Message :`,
      formData.message,
      ``,
      `Merci !`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.open(
      `https://wa.me/2290151928187?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", phone: "", subject: "", message: "" });
  };

  const info = [
    {
      icon: MapPin,
      title: "Adresse",
      lines: ["Wɛ̀li - Pâtisserie sans gluten afro-healthy", "Cotonou, Bénin"],
    },
    {
      icon: Phone,
      title: "Téléphone",
      lines: ["+229 01 51 92 81 87"],
    },
    {
      icon: Clock,
      title: "Horaires",
      lines: ["Lun - Sam : 7h00 - 20h00", "Dimanche : 7h30 - 14h00"],
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-gold-500 font-medium tracking-[0.3em] uppercase text-xs sm:text-sm">
            Contact
          </span>
          <h2 className="font-poppins text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate-900 mt-3 mb-4 sm:mb-6">
            Restons en <span className="text-gold-500">Contact</span>
          </h2>
          <p className="text-chocolate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Commande spéciale, renseignement ou réservation ? N'hésitez pas à
            nous contacter.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4 sm:space-y-6">
              {info.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 rounded-xl flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-chocolate-900 mb-1 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      {item.lines.map((line) => (
                        <p
                          key={line}
                          className="text-chocolate-500 text-xs sm:text-sm"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}

              <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
                <a
                  href="https://web.facebook.com/boulangeriepatisseriedulu/?locale=fr_FR&_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Notre page Facebook"
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center text-chocolate-600 hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@bp_du_lu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Notre TikTok"
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center text-chocolate-600 hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.79a8.18 8.18 0 0 0 4.76 1.52V6.88a4.84 4.84 0 0 1-1-.19z" />
                  </svg>
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg h-40 sm:h-48 mt-4 sm:mt-6">
                <iframe
                  title="Localisation"
                  src="https://maps.google.com/maps?q=6.3562425,2.4277995&z=16&output=embed"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-4 xs:p-6 sm:p-8 md:p-10 shadow-sm"
            >
              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl text-center font-medium text-sm">
                  ✅ Message envoyé sur WhatsApp avec succès !
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-chocolate-800 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-cream-50 border border-gold-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300 text-chocolate-900 placeholder-chocolate-300 text-sm"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-chocolate-800 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-cream-50 border border-gold-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300 text-chocolate-900 placeholder-chocolate-300 text-sm"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-chocolate-800 mb-2">
                    Sujet
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-cream-50 border border-gold-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300 text-chocolate-900 text-sm"
                  >
                    <option value="">Choisir un sujet</option>
                    <option value="commande">Commande spéciale</option>
                    <option value="mariage">Gâteau de mariage</option>
                    <option value="evenement">Événement</option>
                    <option value="info">Renseignement</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 sm:mt-5">
                <label className="block text-xs sm:text-sm font-semibold text-chocolate-800 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-cream-50 border border-gold-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300 text-chocolate-900 placeholder-chocolate-300 resize-none text-sm"
                  placeholder="Décrivez votre demande..."
                />
              </div>

              <button
                type="submit"
                className="mt-5 sm:mt-6 w-full sm:w-auto flex items-center justify-center gap-2 bg-gold-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-gold-500/30 hover:scale-105"
              >
                Envoyer le message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
