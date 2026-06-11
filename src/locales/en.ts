import type { Locale } from "../types";

const en: Locale = {
  nav: {
    join: "Join",
    login: "Login",
  },
  login: {
    panel: {
      subtitle: "Employee login",
      title: "Log in to the school workspace",
      description:
        "For owners, administrators, and teachers. Log in to manage students, lessons, payments, and communication.",
      features: [
        "One system for subscriptions, payments, and scheduling",
        "Personal accounts for all employees",
        "Personal client accounts",
        "Client acquisition and retention",
        "Detailed statistics",
        "Reports and analytics",
        "Online lesson booking",
      ],
      chips: [
        { number: "SUPPORT/SETUP", label: "SUPPORT", numberFontSize: 12 },
        { number: "ERP/CRM", label: "management" },
        { number: "UA/ENG", label: "interface" },
      ],
    },
    form: {
      title: "Employee login",
      subtitle: "Log in as an owner, administrator, or teacher.",
      googleButton: "Sign in with Google",
      divider: "or",
      email: { label: "E-mail", placeholder: "example@gmail.com" },
      password: { label: "Password", placeholder: "********" },
      forgotPassword: "Forgot password?",
      submit: "Login",
      noAccess: "No access?",
      joinLink: "Join",
    },
  },
  register: {
    panel: {
      subtitle: "Welcome to Voopty",
      title: "Create a new account",
      description:
        "Create an account for your school or team and get access to all platform features.",
      features: [
        "One system for subscriptions, payments, and scheduling",
        "Personal accounts for all employees",
        "Personal client accounts",
        "Client acquisition and retention",
        "Detailed statistics",
        "Reports and analytics",
        "Online lesson booking",
      ],
      chips: [
        { number: "SUPPORT/SETUP", label: "SUPPORT", numberFontSize: 12 },
        { number: "ERP/CRM", label: "management" },
        { number: "UA/ENG", label: "interface" },
      ],
    },
    form: {
      title: "Join",
      subtitle: "Create an account for your school or team.",
      schoolName: {
        label: "School name or your name",
        placeholder: "Enter the school name or your name",
      },
      email: { label: "Email", placeholder: "name@voopty.com" },
      phone: { label: "Phone", placeholder: "+380 (__) ___-__-__" },
      password: { label: "Password", placeholder: "Create a password" },
      acceptTerms: "I accept",
      termsLink: "the terms",
      notRobot: "I am not a robot",
      sourceQuestion: "How did you hear about Voopty?",
      sourceOptions: [
        { value: "google", label: "Google" },
        { value: "facebook", label: "Facebook" },
        { value: "instagram", label: "Instagram" },
        { value: "recommendation", label: "Recommendation" },
        { value: "other", label: "Other" },
      ],
      sourceOther: {
        label: "Please specify",
        placeholder: "Tell us how you heard about us",
      },
      alert:
        "Register and use all features for free for 14 days. No card required and no payment at the start.",
      submit: "Add",
      hasAccount: "Already have an account?",
      loginLink: "Log in",
    },
  },
  forgotPassword: {
    title: "Forgot password?",
    description:
      "Enter the e-mail linked to your account. We will send a password reset link.",
    email: { label: "E-mail", placeholder: "name@voopty.com" },
    submit: "Reset password",
    successTitle: "Email sent",
    successMessage: "Password reset instructions have been sent to",
    backToLogin: "Back to login",
  },
  termsAndConditions: {
    eyebrow: "Terms of use",
    title:
      "Agreement for consulting services in informatization and data processing services",
    intro:
      "An individual or legal entity using the Voopty service, hereinafter referred to as the Customer, and the service provider, hereinafter referred to as the Contractor, together referred to as the Parties, have entered into this Agreement as follows.",
    sections: [
      {
        title: "1. Subject of the agreement",
        items: [
          "The Contractor undertakes to provide consulting services in informatization and/or data processing services, and the Customer undertakes to accept and pay for the services under the procedure and terms established by this Agreement.",
          "The services include consulting on software types and configuration, analysis of user information needs, preparation of data for collection, data recovery, optimized data collection, and data placement on the Internet.",
        ],
      },
      {
        title: "2. Payment procedure",
        items: [
          "The price of the Agreement consists of all payments made by the Customer to the Contractor during the term of this Agreement.",
          "The Customer pays for the Services within 10 calendar days after receiving the relevant invoice or acceptance certificate, unless otherwise agreed by the Parties.",
          "All settlements under this Agreement are made in the national currency of Ukraine - hryvnia.",
        ],
      },
      {
        title: "3. Service delivery details",
        items: [
          "The Contractor provides the Services personally. Third parties may be involved in the performance of the Services only with the Customer's prior approval.",
          "The Contractor ensures an appropriate level of confidentiality for data received during service delivery and uses it exclusively to perform this Agreement.",
        ],
      },
      {
        title: "4. Rights and obligations of the parties",
        items: [
          "The Customer undertakes to provide accurate information required for proper service delivery.",
          "The Contractor has the right to receive information and materials necessary for the performance of the Services and to notify the Customer about circumstances affecting timing or quality.",
        ],
      },
    ],
    backToRegister: "Back to registration",
  },
};

export default en;
