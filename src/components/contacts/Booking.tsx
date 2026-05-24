"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calendar, Check } from "lucide-react";
import { colors } from "@/hooks/color";
import { pageTransition } from "@/hooks/animation";

const BookingSystem = () => {
  const [step, setStep] = useState<Step>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    description: "",
  });

  // Mock Data Calendar
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i + 1);
    return d;
  });

  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setTimeout(() => setStep(2), 300); // Auto advance after short delay
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "237671809395"; // ⚠️ Mon numéro WhatsApp Business

    const message = `
            📅 Nouvelle réservation

            👤 Nom: ${formData.name}
            📧 Email: ${formData.email}
            📌 Projet: ${formData.projectType}
            📝 Description: ${formData.description}

            📆 Date: ${selectedDate?.toLocaleDateString()}
            ⏰ Heure: ${selectedTime}
        Je vous contact pour la realisation de mon project.
  `;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setStep(3);
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-[#047711]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Info & Progress */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Réservez votre <br />
              <span className="bg-gradient-to-r from-[#047711] to-green-400 bg-clip-text text-transparent">
                Stratégie Call
              </span>
            </h2>
            <p className={`${colors.muted} mb-8 text-lg`}>
              Discutons de votre projet. Pas de vente forcée, juste une
              expertise technique pour voir si nous sommes faits pour travailler
              ensemble.
            </p>

            <div className="space-y-4">
              {[1, 2, 3].map((s) => (
                <motion.div
                  key={s}
                  initial={false}
                  animate={{
                    borderColor:
                      step >= s
                        ? "rgba(124,58,237, 0.5)"
                        : "rgba(255,255,255,0.1)",
                    backgroundColor:
                      step >= s ? "rgba(124,58,237, 0.05)" : "transparent",
                  }}
                  className={`p-4 rounded-xl border transition-all duration-500`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        backgroundColor: step >= s ? "#047711" : "#047711",
                        scale: step === s ? 1.1 : 1,
                      }}
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors"
                    >
                      {step > s ? (
                        <Check size={14} className="text-white" />
                      ) : (
                        s
                      )}
                    </motion.div>
                    <span
                      className={`font-medium transition-colors ${step >= s ? "text-white" : "text-white"}`}
                    >
                      {s === 1
                        ? "Choisir un créneau"
                        : s === 2
                          ? "Détails du projet"
                          : "Confirmation"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Interactive Panel */}
          <div className="lg:col-span-7">
            <div
              className={`backdrop-blur-xl bg-[#121212]/100 p-6 md:p-8 rounded-3xl min-h-[500px] border ${colors.border} shadow-2xl shadow-black/50 relative overflow-hidden`}
            >
              <AnimatePresence mode="wait">
                {/* STEP 1: CALENDAR */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={pageTransition}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <h3 className="text-xl text-white font-bold mb-6 flex items-center gap-2">
                      <Calendar size={20} className="text-[#05681e]" />
                      Disponibilité
                    </h3>

                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-8">
                      {days.map((d, i) => {
                        const isSelected =
                          selectedDate?.getTime() === d.getTime();
                        return (
                          <motion.button
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleDateSelect(d)}
                            className={`
                              p-3 rounded-xl text-sm font-medium border transition-all duration-200
                              ${
                                isSelected
                                  ? "bg-[#056407] text-white border-[#046e0f] shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                                  : `${colors.border} hover:border-[#056407]/50 hover:bg-white/5 ${colors.muted}`
                              }
                            `}
                          >
                            {d.toLocaleDateString("fr-FR", {
                              weekday: "short",
                              day: "numeric",
                            })}
                          </motion.button>
                        );
                      })}
                    </div>

                    <AnimatePresence>
                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                        >
                          <h4
                            className={`text-sm font-semibold ${colors.muted} mb-3 uppercase tracking-wider`}
                          >
                            Heures disponibles
                          </h4>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                            {timeSlots.map((time) => {
                              const isSelected = selectedTime === time;
                              return (
                                <motion.button
                                  key={time}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleTimeSelect(time)}
                                  className={`
                                    py-2 px-3 rounded-lg text-sm font-mono border transition-all
                                    ${
                                      isSelected
                                        ? "bg-[#046205] text-white border-[#046e0f] shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                                        : `${colors.border} hover:border-[#056407]/50 hover:bg-[#056407]/10 text-gray-300`
                                    }
                                  `}
                                >
                                  {time}
                                </motion.button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}

                {/* STEP 2: FORM */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={pageTransition}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold">Détails du Projet</h3>
                      <motion.button
                        whileHover={{ x: -2 }}
                        onClick={() => setStep(1)}
                        className={`text-sm text-[#026106] hover:text-white transition-colors flex items-center gap-1`}
                      >
                        <ArrowRight size={14} className="rotate-180" /> Retour
                      </motion.button>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 flex-grow"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            className={`block text-xs font-medium ${colors.muted} mb-1`}
                          >
                            Nom Complet
                          </label>
                          <input
                            required
                            type="text"
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-[#047711] focus:ring-1 focus:ring-[#047711] outline-none transition-all"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <label
                            className={`block text-xs font-medium ${colors.muted} mb-1`}
                          >
                            Email Professionnel
                          </label>
                          <input
                            required
                            type="email"
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-[#047711] focus:ring-1 focus:ring-[#047711] outline-none transition-all"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          className={`block text-xs font-medium ${colors.muted} mb-1`}
                        >
                          Type de Projet
                        </label>
                        <select
                          className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-[#106103] focus:ring-1 focus:ring-[#035a04] outline-none transition-all appearance-none"
                          value={formData.projectType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              projectType: e.target.value,
                            })
                          }
                        >
                          <option>Développement SaaS</option>
                          <option>Site Web / Landing Page</option>
                          <option>Application Mobile</option>
                          <option>Refonte technique</option>
                        </select>
                      </div>

                      <div>
                        <label
                          className={`block text-xs font-medium ${colors.muted} mb-1`}
                        >
                          Description
                        </label>
                        <textarea
                          required
                          rows={4}
                          className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-[#106103] focus:ring-1 focus:ring-[#106103] outline-none transition-all resize-none"
                          placeholder="Décrivez votre idée, vos objectifs techniques..."
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              description: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>

                      <div className="pt-4 mt-auto">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="w-full py-4 bg-gradient-to-r from-[#106103] to-green-500 text-black font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          Confirmer le rendez-vous
                          <Check size={18} />
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* STEP 3: SUCCESS */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex flex-col items-center justify-center h-full text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 150,
                      }}
                      className="w-24 h-24 bg-gradient-to-tr from-green-400 to-emerald-600 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                    >
                      <Check size={48} className="text-white" />
                    </motion.div>

                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl font-bold text-white mb-3"
                    >
                      Tout est prêt !
                    </motion.h3>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className={`${colors.muted} mb-8`}
                    >
                      Nous avons bien reçu votre demande. <br />
                      Un email de confirmation a été envoyé pour le{" "}
                      <span className="text-[#209d0c] font-mono">
                        {selectedDate?.toLocaleDateString()}
                      </span>{" "}
                      à {selectedTime}.
                    </motion.p>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      onClick={() => {
                        setStep(1);
                        setSelectedDate(null);
                        setSelectedTime(null);
                      }}
                      className="text-sm text-gray-50 cursor-pointer hover:text-[#21af0b] transition-colors underline underline-offset-4"
                    >
                      Réserver un autre créneau
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;
