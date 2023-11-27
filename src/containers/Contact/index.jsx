import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import "./index.css";

const ContactForm = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xoqbglbg", {
    dangerouslyDisableSubmits: () =>
      state && (state.submitting || state.succeeded),
    onSubmit: (values) => {
      // Callback function after successful form submission
      console.log("Form values submitted:", values);
      // You can add additional logic or make API calls here
    },
  });

  return (
    <section className="contactContainer">
      <div className="contactContent">
        <form onSubmit={handleSubmit} className="form">
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
