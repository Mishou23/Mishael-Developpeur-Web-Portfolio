import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";  // Import useTranslation
import "./index.css";

const ContactForm = () => {
  const { t } = useTranslation();  // Initialize useTranslation

  const [state, handleSubmit] = useForm("xoqbglbg");

  const handleFormSubmit = async (e) => {
    await handleSubmit(e);
    console.log("Form values submitted:", state.values);
    console.log("Message Envoyé");
    window.location.reload();
  };

  return (
    <section className="contactContainer">
      <div className="contactContent">
        <form onSubmit={handleFormSubmit} className="form">
          <div className="contactText">
            <p>{t("contactMessage")}</p>
          </div>
          <label htmlFor="nom">{t("yourName")}</label>
          <input id="nom" type="text" name="nom" className="field" required />

          <label htmlFor="email">{t("yourEmail")}</label>
          <input
            id="email"
            type="email"
            name="email"
            className="field"
            required
          />
          <ValidationError
            prefix={t("emailPrefix")}
            field="email"
            errors={state.errors}
          />

          <label htmlFor="object">{t("object")}</label>
          <input
            id="object"
            type="text"
            name="object"
            className="field"
            required
          />
          <ValidationError
            prefix={t("objectPrefix")}
            field="object"
            errors={state.errors}
          />

          <label htmlFor="message">{t("message")}</label>
          <textarea id="message" name="message" className="field" required />
          <ValidationError
            prefix={t("messagePrefix")}
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className="submitBtn"
            disabled={state.submitting}
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
