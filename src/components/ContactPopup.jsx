import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactPopup({
  onClose,
  email: propEmail,
  phone: propPhone,
  setEmail: setPropEmail,
  setPhone: setPropPhone,
  onSubmit,
}) {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [localEmail, setLocalEmail] = useState("");
  const [localPhone, setLocalPhone] = useState("");

  const email = propEmail !== undefined ? propEmail : localEmail;
  const phone = propPhone !== undefined ? propPhone : localPhone;
  const setEmail = setPropEmail !== undefined ? setPropEmail : setLocalEmail;
  const setPhone = setPropPhone !== undefined ? setPropPhone : setLocalPhone;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const success = await onSubmit?.({ email, phone });
    setLoading(false);
    if (success) setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">
          {submitted
            ? t("contactPopup.thankYou")
            : t("contactPopup.title")}
        </h2>

        {submitted ? (
          <div className="text-center space-y-4">
            <p className="text-gray-800">
              {t("contactPopup.successMessage")}
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#D69D70] text-white rounded-md hover:bg-[#bb865c]"
            >
              {t("contactPopup.close")}
            </button>
          </div>
        ) : loading ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-10 h-10 border-4 border-[#D69D70] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-700">{t("contactPopup.loading")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder={t("contactPopup.emailPlaceholder")}
              className="w-full px-4 py-2 border rounded-md text-gray-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder={t("contactPopup.phonePlaceholder")}
              className="w-full px-4 py-2 border rounded-md text-gray-900"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                {t("contactPopup.cancel")}
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#D69D70] text-white rounded-md hover:bg-[#bb865c]"
              >
                {t("contactPopup.submit")}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
