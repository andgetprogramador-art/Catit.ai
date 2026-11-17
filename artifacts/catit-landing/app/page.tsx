"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [formStep, setFormStep] = useState(1);
  const [selectedInputs, setSelectedInputs] = useState<string[]>([]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.classList.toggle("light", !isDark);
  }, [isDark]);

  const toggleInput = (option: string) => {
    setSelectedInputs((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );
  };

  return (
    <main className="flex min-h-screen flex-col bg-background text-text transition-colors duration-300">
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#inicio" className="flex items-center gap-3" aria-label="CAtiT.ai, inicio">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-text">
              <span className="text-xl font-bold text-background">C</span>
            </span>
            <span className="text-xl font-bold tracking-tight">CAtiT.ai</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            <a href="#agencia" className="transition-colors hover:text-primary">
              Hacemos tu App
            </a>
            <a href="#saas" className="transition-colors hover:text-primary">
              Productos
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setIsDark((current) => !current)}
              className="rounded-full border border-border bg-surface p-2 text-text transition-colors hover:text-primary"
              aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
              aria-pressed={!isDark}
              title="Cambiar tema"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
            <a
              href="#configurador"
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-[#10141a] transition-transform hover:scale-105 sm:px-5"
            >
              Cotizar Proyecto
            </a>
          </div>
        </div>
      </nav>

      <section id="inicio" className="relative px-6 pb-16 pt-24">
        <div id="agencia" className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="mascot-container" aria-label="Mascota CAtiT.ai">
            <div
              className="limb arm-left"
              style={{ "--rot": "25deg" } as CSSProperties}
              aria-hidden="true"
            />
            <div
              className="limb arm-right"
              style={{ "--rot": "-25deg" } as CSSProperties}
              aria-hidden="true"
            />
            <div
              className="limb leg-left"
              style={{ "--rot": "10deg" } as CSSProperties}
              aria-hidden="true"
            />
            <div
              className="limb leg-right"
              style={{ "--rot": "-10deg" } as CSSProperties}
              aria-hidden="true"
            />
            <div className="mascot-head" aria-hidden="true">
              <div className="mascot-eye" />
              <div className="mascot-eye right" />
            </div>
          </div>

          <div className="mb-4 inline-block rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary">
            Software a la medida
          </div>
          <h1 className="text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
            Construimos el software que{" "}
            <span className="text-primary">tu operación</span> necesita.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            No necesitas saber de programación ni diseño. Tú defines qué entra
            y qué sale; de toda la ingeniería, interfaces y servidores nos
            encargamos nosotros.
          </p>
        </div>
      </section>

      <section id="configurador" className="px-6 pt-12 pb-24">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-2xl md:p-12">
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary" />

          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">Configurador de Proyecto</h2>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
              Paso {formStep} de 4
            </span>
          </div>

          {formStep === 1 && (
            <div className="animate-fade-in space-y-6">
              <h3 className="text-xl font-semibold">1. Identificación y Entorno</h3>
              <input
                type="text"
                placeholder="Nombre de tu proyecto (y tu correo/WhatsApp)"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text focus:border-primary focus:outline-none"
              />
              <div>
                <p className="mb-3 text-sm text-muted">¿Dónde se usará esta App?</p>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  {["Celular", "Web", "Programa de Escritorio"].map((option) => (
                    <button
                      type="button"
                      key={option}
                      className="rounded-xl border border-border bg-background py-3 text-sm font-medium text-text transition-colors hover:border-primary"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {formStep === 2 && (
            <div className="animate-fade-in space-y-6">
              <h3 className="text-xl font-semibold">2. El Problema (El Objetivo)</h3>
              <p className="mb-3 text-sm text-muted">
                ¿Cuál de estas situaciones describe mejor lo que quieres lograr?
              </p>
              <div className="space-y-3">
                {[
                  "Acortar un cuello de botella en un procedimiento",
                  "Conectar información dispersa",
                  "Controlar finanzas, inventario o métricas",
                  "Copiar una App existente pero personalizada",
                  "Crear un asistente digital",
                  "Diseño de catálogo/inventario de ventas y/o compras",
                ].map((option) => (
                  <button
                    type="button"
                    key={option}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-left text-sm text-text transition-colors hover:border-primary"
                  >
                    {option}
                  </button>
                ))}
                <input
                  type="text"
                  placeholder="o escriba su problema a solucionar"
                  className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm text-text focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          )}

          {formStep === 3 && (
            <div className="animate-fade-in space-y-6">
              <h3 className="text-xl font-semibold">
                3. Inputs (Lo que ingresa el usuario)
              </h3>
              <p className="mb-3 text-sm text-muted">
                ¿Qué tipo de datos iniciales van a ingresar tus usuarios?
                (Selecciona todos los que apliquen)
              </p>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {[
                  "Textos y números",
                  "Archivos (PDF/Excel)",
                  "Cámara / Escanear QR",
                  "Ubicación / Tiempo (GPS)",
                  "Imágenes",
                ].map((option) => {
                  const selected = selectedInputs.includes(option);
                  return (
                    <button
                      type="button"
                      key={option}
                      onClick={() => toggleInput(option)}
                      aria-pressed={selected}
                      className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                        selected
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-background text-text hover:border-primary"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              <input
                type="text"
                placeholder="o escriba su modo de inputs"
                className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm text-text focus:border-primary focus:outline-none"
              />
            </div>
          )}

          {formStep === 4 && (
            <div className="animate-fade-in space-y-6">
              <h3 className="text-xl font-semibold">
                4. Outputs (Lo que la App entrega)
              </h3>
              <p className="mb-3 text-sm text-muted">
                ¿En qué formatos quieres recibir los resultados?
              </p>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {[
                  "Dashboard / Gráficas",
                  "Documentos PDF/Excel",
                  "Mapas en tiempo real",
                  "Alertas automáticas",
                  "Catálogo de ventas",
                ].map((option) => (
                  <button
                    type="button"
                    key={option}
                    className="rounded-xl border border-border bg-background px-4 py-3 text-left text-sm font-medium text-text transition-colors hover:border-primary"
                  >
                    {option}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="o escriba su modo de outputs"
                className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm text-text focus:border-primary focus:outline-none"
              />
            </div>
          )}

          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            <button
              type="button"
              onClick={() => setFormStep((current) => Math.max(1, current - 1))}
              disabled={formStep === 1}
              className="text-sm font-medium text-muted transition-colors hover:text-text disabled:opacity-30"
            >
              ← Anterior
            </button>
            {formStep < 4 ? (
              <button
                type="button"
                onClick={() => setFormStep((current) => Math.min(4, current + 1))}
                className="rounded-full bg-primary px-6 py-2 font-bold text-[#10141a] transition-transform hover:scale-105"
              >
                Siguiente paso →
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  alert("¡Lógica (Inputs + Outputs) registrada! Te contactaremos en menos de 24h.")
                }
                className="rounded-full bg-primary px-6 py-2 font-bold text-[#10141a] shadow-[0_0_15px_rgba(53,224,208,0.4)] transition-transform hover:scale-105"
              >
                Enviar y cotizar
              </button>
            )}
          </div>
        </div>
      </section>

      <section id="saas" className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-bold text-accent">
              <span className="animate-pulse" aria-hidden="true">
                🚧
              </span>
              En construcción (WIP)
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Nuestro Portafolio de Productos
            </h2>
            <p className="mx-auto max-w-2xl text-muted">
              No solo desarrollamos esta plataforma SaaS: en CAtiT.ai estamos
              trabajando en un portafolio de productos propios y soluciones de
              propiedad intelectual.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-background p-6">
              <div className="absolute top-0 right-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-bold text-[#10141a]">
                En Desarrollo
              </div>
              <div className="mb-4 text-3xl" aria-hidden="true">
                🚛
              </div>
              <h3 className="mb-2 text-lg font-bold">Proyecto CAtiT.ai (SaaS)</h3>
              <p className="text-sm text-muted">
                Plataforma de gestión operativa, flotas e industria. Captura y
                valida datos en 6 pasos.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 opacity-85">
              <div className="mb-4 text-3xl" aria-hidden="true">📅</div>
              <h3 className="mb-2 text-lg font-bold">Red Social de Eventos</h3>
              <p className="text-sm text-muted">
                Conectando personas a través de experiencias y planificación inteligente.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 opacity-85">
              <div className="mb-4 text-3xl" aria-hidden="true">💻</div>
              <h3 className="mb-2 text-lg font-bold">
                Asistente Virtual de Escritorio
              </h3>
              <p className="text-sm text-muted">
                Potenciando la productividad diaria directamente en tu PC o Mac.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 opacity-85">
              <div className="mb-4 text-3xl" aria-hidden="true">🤖</div>
              <h3 className="mb-2 text-lg font-bold">Asistente Virtual Personal</h3>
              <p className="text-sm text-muted">
                Tu secretario inteligente para la vida diaria.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 opacity-85">
              <div className="mb-4 text-3xl" aria-hidden="true">🧠</div>
              <h3 className="mb-2 text-lg font-bold">
                Extensión de Redes Neuronales
              </h3>
              <p className="text-sm text-muted">
                Herramientas avanzadas de IA para entornos específicos.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 opacity-85">
              <div className="mb-4 text-3xl" aria-hidden="true">🎮</div>
              <h3 className="mb-2 text-lg font-bold">Juego en 2D</h3>
              <p className="text-sm text-muted">
                Explorando nuevas formas de interacción digital y entretenimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-muted md:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-text">
              <span className="text-sm font-bold text-background">C</span>
            </span>
            <span>© 2026 CAtiT.ai. Todos los derechos reservados.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-text">
              Aviso de Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-text">
              Términos de Uso
            </a>
            <a href="#" className="transition-colors hover:text-text">
              Política de Cookies
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
