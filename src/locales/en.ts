import uk from "./uk";

const en: typeof uk = {
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
    backToLogin: "Back to login",
  },
};

export default en;
